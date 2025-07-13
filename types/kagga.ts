export interface Kagga {
  id: number;
  kannadaText: string;
  transliteration: string;
  englishTranslation: string;
  wordByWordMeaning?: string;
  meaning: string;
  themes: string[];
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  isAIGenerated?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  kaggaNumber: number;
  channel: string;
  publishedAt: string;
}

export interface SearchFilters {
  themes: string[];
  hasVideo: boolean;
  isAIGenerated: boolean;
}

export interface SearchResult {
  kagga: Kagga;
  relevance: number;
  matchedFields: string[];
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  color: string;
  count: number;
}

export interface DVGInfo {
  name: string;
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthplace: string;
  biography: string;
  notableWorks: string[];
  awards: string[];
  legacy: string;
  imageUrl: string;
}

export interface KaggaInfo {
  title: string;
  originalTitle: string;
  author: string;
  publishedYear: string;
  totalKaggas: number;
  description: string;
  significance: string;
  themes: string[];
  structure: string;
  influence: string;
} 