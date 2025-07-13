import { Kagga } from '../types/kagga';
import { completeKaggas, getCompleteKaggaById, getCompleteKaggasByTheme, getRandomCompleteKagga } from './kaggas-complete-945';

// Export the complete dataset as the main kaggas array
export const kaggas: Kagga[] = completeKaggas;

// Export helper functions
export const getKaggaById = getCompleteKaggaById;
export const getKaggasByTheme = getCompleteKaggasByTheme;
export const getRandomKagga = getRandomCompleteKagga;

// Legacy functions for backward compatibility
export const getAllKaggas = (): Kagga[] => {
  return completeKaggas;
};

export const searchKaggas = (query: string): Kagga[] => {
  const lowercaseQuery = query.toLowerCase();
  return completeKaggas.filter(kagga => 
    kagga.kannadaText.toLowerCase().includes(lowercaseQuery) ||
    kagga.englishTranslation.toLowerCase().includes(lowercaseQuery) ||
    kagga.transliteration.toLowerCase().includes(lowercaseQuery) ||
    kagga.themes.some(theme => theme.toLowerCase().includes(lowercaseQuery))
  );
};