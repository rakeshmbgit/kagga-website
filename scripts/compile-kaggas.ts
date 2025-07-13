import { Kagga } from '../types/kagga';
import { completeKaggas } from '../data/kaggas-complete-945';

// Comprehensive Kagga compilation script
// This script helps compile, validate, and manage the complete dataset of 945 kaggas

interface KaggaSource {
  id: number;
  kannadaText: string;
  transliteration: string;
  englishTranslation: string;
  meaning: string;
  themes: string[];
}

interface CompilationStats {
  totalKaggas: number;
  completedKaggas: number;
  placeholderKaggas: number;
  validationErrors: string[];
  themes: string[];
  averageLength: number;
}

// Validation functions
export function validateKagga(kagga: Kagga): string[] {
  const errors: string[] = [];
  
  if (!kagga.kannadaText || kagga.kannadaText.trim() === '') {
    errors.push(`Kagga ${kagga.id}: Missing Kannada text`);
  }
  
  if (!kagga.englishTranslation || kagga.englishTranslation.trim() === '') {
    errors.push(`Kagga ${kagga.id}: Missing English translation`);
  }
  
  if (!kagga.transliteration || kagga.transliteration.trim() === '') {
    errors.push(`Kagga ${kagga.id}: Missing transliteration`);
  }
  
  if (!kagga.meaning || kagga.meaning.trim() === '') {
    errors.push(`Kagga ${kagga.id}: Missing meaning`);
  }
  
  if (!kagga.themes || kagga.themes.length === 0) {
    errors.push(`Kagga ${kagga.id}: Missing themes`);
  }
  
  // Validate Kannada text contains Kannada characters
  const kannadaRegex = /[\u0C80-\u0CFF]/;
  if (!kannadaRegex.test(kagga.kannadaText)) {
    errors.push(`Kagga ${kagga.id}: Invalid Kannada text`);
  }
  
  return errors;
}

// Function to get compilation statistics
export function getCompilationStats(kaggas: Kagga[]): CompilationStats {
  const errors: string[] = [];
  let completedCount = 0;
  let placeholderCount = 0;
  const themes = new Set<string>();
  let totalLength = 0;
  
  kaggas.forEach(kagga => {
    const kaggaErrors = validateKagga(kagga);
    errors.push(...kaggaErrors);
    
    if (kagga.englishTranslation.includes('Placeholder')) {
      placeholderCount++;
    } else {
      completedCount++;
    }
    
    kagga.themes.forEach(theme => themes.add(theme));
    totalLength += kagga.kannadaText.length;
  });
  
  return {
    totalKaggas: kaggas.length,
    completedKaggas: completedCount,
    placeholderKaggas: placeholderCount,
    validationErrors: errors,
    themes: Array.from(themes),
    averageLength: totalLength / kaggas.length
  };
}

// Function to export kaggas to different formats
export function exportToJSON(kaggas: Kagga[]): string {
  return JSON.stringify(kaggas, null, 2);
}

export function exportToCSV(kaggas: Kagga[]): string {
  const headers = ['ID', 'Kannada Text', 'Transliteration', 'English Translation', 'Meaning', 'Themes', 'Created At', 'Updated At'];
  const rows = kaggas.map(kagga => [
    kagga.id,
    `"${kagga.kannadaText.replace(/"/g, '""')}"`,
    `"${kagga.transliteration.replace(/"/g, '""')}"`,
    `"${kagga.englishTranslation.replace(/"/g, '""')}"`,
    `"${kagga.meaning.replace(/"/g, '""')}"`,
    `"${kagga.themes.join(', ')}"`,
    kagga.createdAt,
    kagga.updatedAt
  ]);
  
  return [headers, ...rows].map(row => row.join(',')).join('\n');
}

// Function to search kaggas by content
export function searchKaggas(kaggas: Kagga[], query: string): Kagga[] {
  const lowerQuery = query.toLowerCase();
  return kaggas.filter(kagga => 
    kagga.kannadaText.toLowerCase().includes(lowerQuery) ||
    kagga.englishTranslation.toLowerCase().includes(lowerQuery) ||
    kagga.meaning.toLowerCase().includes(lowerQuery) ||
    kagga.themes.some(theme => theme.toLowerCase().includes(lowerQuery))
  );
}

// Function to filter kaggas by theme
export function filterByTheme(kaggas: Kagga[], theme: string): Kagga[] {
  return kaggas.filter(kagga => 
    kagga.themes.some(t => t.toLowerCase() === theme.toLowerCase())
  );
}

// Function to get kaggas by ID range
export function getKaggasByRange(kaggas: Kagga[], startId: number, endId: number): Kagga[] {
  return kaggas.filter(kagga => kagga.id >= startId && kagga.id <= endId);
}

// Function to generate missing kaggas
export function generateMissingKaggas(existingKaggas: Kagga[], targetCount: number = 945): Kagga[] {
  const existingIds = new Set(existingKaggas.map(k => k.id));
  const missingKaggas: Kagga[] = [];
  
  for (let i = 1; i <= targetCount; i++) {
    if (!existingIds.has(i)) {
      missingKaggas.push({
        id: i,
        kannadaText: `ಕಾಗ್ಗ ${i} - ಸ್ಥಳದಾಯಕ (ಮೂಲ ಪಠ್ಯ ಅಗತ್ಯ)`,
        transliteration: `Kagga ${i} - Placeholder (Original text needed)`,
        englishTranslation: `Kagga ${i} - This is a placeholder. The complete text needs to be sourced from authentic materials like mankuthimma.com or authoritative texts.`,
        meaning: `This is a placeholder for Kagga ${i}. The complete text, transliteration, and translation need to be sourced from authentic materials.`,
        themes: ['Placeholder'],
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
      });
    }
  }
  
  return missingKaggas;
}

// Function to merge kaggas from different sources
export function mergeKaggaSources(sources: Kagga[][]): Kagga[] {
  const merged: Kagga[] = [];
  const seenIds = new Set<number>();
  
  sources.forEach(source => {
    source.forEach(kagga => {
      if (!seenIds.has(kagga.id)) {
        merged.push(kagga);
        seenIds.add(kagga.id);
      }
    });
  });
  
  return merged.sort((a, b) => a.id - b.id);
}

// Function to validate and fix common issues
export function validateAndFixKaggas(kaggas: Kagga[]): { fixed: Kagga[], errors: string[] } {
  const fixed: Kagga[] = [];
  const errors: string[] = [];
  
  kaggas.forEach(kagga => {
    const fixedKagga = { ...kagga };
    let hasErrors = false;
    
    // Fix common issues
    if (!fixedKagga.createdAt) {
      fixedKagga.createdAt = "2024-01-01T00:00:00Z";
    }
    
    if (!fixedKagga.updatedAt) {
      fixedKagga.updatedAt = "2024-01-01T00:00:00Z";
    }
    
    if (!fixedKagga.themes || fixedKagga.themes.length === 0) {
      fixedKagga.themes = ['Philosophy'];
    }
    
    // Validate
    const validationErrors = validateKagga(fixedKagga);
    if (validationErrors.length > 0) {
      errors.push(...validationErrors);
      hasErrors = true;
    }
    
    if (!hasErrors) {
      fixed.push(fixedKagga);
    }
  });
  
  return { fixed, errors };
}

// Main compilation function
export function compileCompleteDataset(): {
  kaggas: Kagga[];
  stats: CompilationStats;
  missing: Kagga[];
} {
  // Start with existing kaggas
  const existingKaggas = completeKaggas;
  
  // Generate missing kaggas
  const missingKaggas = generateMissingKaggas(existingKaggas);
  
  // Merge all kaggas
  const allKaggas = mergeKaggaSources([existingKaggas, missingKaggas]);
  
  // Validate and fix
  const { fixed: validatedKaggas, errors } = validateAndFixKaggas(allKaggas);
  
  // Get statistics
  const stats = getCompilationStats(validatedKaggas);
  stats.validationErrors = errors;
  
  return {
    kaggas: validatedKaggas,
    stats,
    missing: missingKaggas
  };
}

// Function to generate progress report
export function generateProgressReport(kaggas: Kagga[]): string {
  const stats = getCompilationStats(kaggas);
  const completionPercentage = ((stats.completedKaggas / stats.totalKaggas) * 100).toFixed(2);
  
  return `
Kagga Dataset Compilation Report
================================

Total Kaggas: ${stats.totalKaggas}
Completed: ${stats.completedKaggas}
Placeholders: ${stats.placeholderKaggas}
Completion: ${completionPercentage}%

Themes Found: ${stats.themes.join(', ')}

Validation Errors: ${stats.validationErrors.length}
${stats.validationErrors.length > 0 ? stats.validationErrors.slice(0, 5).join('\n') : 'None'}

Average Length: ${stats.averageLength.toFixed(0)} characters

Next Steps:
1. Source authentic Kannada text for placeholder kaggas
2. Provide accurate English translations
3. Add detailed meanings and explanations
4. Categorize themes appropriately
5. Validate all content for accuracy
`;
}

// Export utility functions
export const KaggaUtils = {
  validateKagga,
  getCompilationStats,
  exportToJSON,
  exportToCSV,
  searchKaggas,
  filterByTheme,
  getKaggasByRange,
  generateMissingKaggas,
  mergeKaggaSources,
  validateAndFixKaggas,
  compileCompleteDataset,
  generateProgressReport
};

console.log("Kagga compilation utilities loaded");
console.log("Use compileCompleteDataset() to generate the full dataset");
console.log("Use generateProgressReport() to see compilation status"); 