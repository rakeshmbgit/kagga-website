'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  kaggaId: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export default function LikeButton({ 
  kaggaId, 
  className = '', 
  size = 'md',
  showCount = true 
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load like count and user's liked status from server on component mount
  useEffect(() => {
    const loadLikeData = async () => {
      try {
        const response = await fetch('/api/likes');
        if (response.ok) {
          const data = await response.json();
          const count = data.likes[kaggaId] || 0;
          const userLikedKaggas = data.userLikedKaggas || [];
          const userHasLiked = userLikedKaggas.includes(String(kaggaId));
          
          setLikeCount(count);
          setIsLiked(userHasLiked);
        }
      } catch (error) {
        console.error('Error loading like data:', error);
        setError('Failed to load like data');
      }
    };

    loadLikeData();
  }, [kaggaId]);

  // Handle like button click
  const handleLikeClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kaggaId }),
      });

      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.likeCount);
        setIsLiked(data.isLiked);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update like');
        console.error('Like API error:', errorData);
      }
    } catch (error) {
      console.error('Error updating like:', error);
      setError('Failed to update like');
    } finally {
      setIsLoading(false);
    }
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  // Button classes
  const buttonClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={handleLikeClick}
        disabled={isLoading}
        className={`
          flex items-center space-x-2 rounded-full transition-all
          ${isLiked 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${buttonClasses[size]}
          ${className}
        `}
        title={isLiked ? 'Unlike this kagga' : 'Like this kagga'}
      >
        <Heart className={`${sizeClasses[size]} ${isLiked ? 'fill-current' : ''}`} />
        {showCount && (
          <span className={`font-medium ${likeCount > 0 ? 'text-current' : 'text-gray-400'}`}>
            {likeCount}
          </span>
        )}
      </button>
      
      {error && (
        <div className="text-red-500 text-xs ml-2">
          {error}
        </div>
      )}
    </div>
  );
} 