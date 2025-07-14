import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the likes data file
const LIKES_FILE_PATH = path.join(process.cwd(), 'data', 'kagga-likes.json');

// Ensure the data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(LIKES_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Load likes data from file
const loadLikes = (): Record<string, number> => {
  try {
    ensureDataDir();
    if (fs.existsSync(LIKES_FILE_PATH)) {
      const data = fs.readFileSync(LIKES_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading likes:', error);
  }
  return {};
};

// Save likes data to file
const saveLikes = (likes: Record<string, number>) => {
  try {
    ensureDataDir();
    fs.writeFileSync(LIKES_FILE_PATH, JSON.stringify(likes, null, 2));
  } catch (error) {
    console.error('Error saving likes:', error);
  }
};

// Get user's liked kaggas from cookies
const getUserLikedKaggas = (request: NextRequest): Set<string> => {
  const likedKaggasCookie = request.cookies.get('liked-kaggas');
  
  if (likedKaggasCookie) {
    try {
      const likedKaggas = JSON.parse(likedKaggasCookie.value);
      return new Set(likedKaggas);
    } catch (error) {
      console.error('Error parsing liked kaggas cookie:', error);
    }
  }
  
  return new Set();
};

// GET handler to retrieve like counts and user's liked status
export async function GET(request: NextRequest) {
  try {
    const likes = loadLikes();
    const userLikedKaggas = getUserLikedKaggas(request);
    
    return NextResponse.json({ 
      likes,
      userLikedKaggas: Array.from(userLikedKaggas)
    });
  } catch (error) {
    console.error('Error in GET /api/likes:', error);
    return NextResponse.json(
      { error: 'Failed to load likes' },
      { status: 500 }
    );
  }
}

// POST handler to toggle like for a specific kagga
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { kaggaId } = body;
    
    if (!kaggaId) {
      return NextResponse.json(
        { error: 'kaggaId is required' },
        { status: 400 }
      );
    }

    // Convert to string to ensure consistency
    const kaggaIdString = String(kaggaId);
    
    const likes = loadLikes();
    const userLikedKaggas = getUserLikedKaggas(request);
    
    let isLiked = userLikedKaggas.has(kaggaIdString);
    let newLikeCount = likes[kaggaIdString] || 0;
    
    if (isLiked) {
      // Unlike: decrease count and remove from user's liked set
      newLikeCount = Math.max(0, newLikeCount - 1);
      userLikedKaggas.delete(kaggaIdString);
    } else {
      // Like: increase count and add to user's liked set
      newLikeCount += 1;
      userLikedKaggas.add(kaggaIdString);
    }
    
    likes[kaggaIdString] = newLikeCount;
    saveLikes(likes);
    
    // Create response with updated cookie
    const response = NextResponse.json({ 
      success: true, 
      likeCount: newLikeCount,
      isLiked: !isLiked, // Return the new state
      totalLikes: likes,
      userLikedKaggas: Array.from(userLikedKaggas)
    });
    
    // Set the cookie with updated liked kaggas
    response.cookies.set('liked-kaggas', JSON.stringify(Array.from(userLikedKaggas)), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/'
    });
    
    return response;
  } catch (error) {
    console.error('Error in POST /api/likes:', error);
    return NextResponse.json(
      { error: 'Failed to update like' },
      { status: 500 }
    );
  }
} 