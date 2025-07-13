import { Kagga } from '../types/kagga.js';

// Simple test script to demonstrate Kagga dataset compilation

// Sample kaggas for testing
const sampleKaggas: Kagga[] = [
  {
    id: 1,
    kannadaText: "ಶ್ರೀ ವಿಷ್ಣು ವಿಶ್ವಾದಿ ಮೂಲ ಮಾಯಾಲೋಲ ।\nದೇವ ಸರ್ವೇಶ ಪರಬೊಮ್ಮನೆಂದು ಜನಂ  ॥\nಆವುದನು ಕಾಣದೊಡಮಳ್ತಿಯಿಂ ನಂಬಿಹುದೊ ।\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧ ॥",
    transliteration: "Shree Vishnu vishwaadi moola maayaalola ।\nDeva sarvesha parabommanendu janam ॥\nAavudanu kaanadodamaltiyim nambihudo ।\nAa vichitrakke namiso - Mankutimma ॥ 1 ॥",
    englishTranslation: "Salutations to that wondrous one whom people call by various names like Sri Vishnu, the source of the universe, the playful one of Maya, God, the lord of all, the Supreme Brahman, whom they believe with love even though they cannot see him.",
    meaning: "This opening verse pays homage to the Supreme Being who is known by many names - Vishnu, the source of the universe, the playful one of Maya, God, the lord of all, the Supreme Brahman. People believe in this wondrous one with love and devotion even though they cannot see him directly.",
    themes: ["Invocation", "Devotion", "Supreme Being", "Faith"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    kannadaText: "ಜೀವ ಜಡರೂಪ ಪ್ರಪಂಚವನದಾವುದೋ।\nಆವರಿಸಿಕೊಂಡುಮೊಳನೆರೆದುಮಿಹುದಂತೆ॥\nಭಾವಕೊಳಪಡದಂತೆ ಅಳತೆಗಳವಡದಂತೆ।\nಆ ವಿಶೇಷಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨ ॥",
    transliteration: "Jeeva jadarupa prapanchavanadaavudo।\nAavarisikondumolanneridumihudante॥\nBhaavakolapadadante alatagalavadadante।\nAa visheshakke namiso - Mankutimma ॥ 2 ॥",
    englishTranslation: "Salutations to that special one who pervades the world in the form of life and matter, filling and overflowing everywhere, beyond comprehension and measurement.",
    meaning: "This verse describes the Supreme Being who pervades the entire universe in two forms - life (consciousness) and matter (inert). This divine presence fills and overflows everywhere, yet remains beyond human comprehension and cannot be measured or limited by our understanding.",
    themes: ["Supreme Being", "Cosmic Presence", "Life and Matter", "Transcendence"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

// Generate placeholder kaggas for the complete dataset
function generatePlaceholderKaggas(startId: number, count: number): Kagga[] {
  const kaggas: Kagga[] = [];
  
  for (let i = startId; i < startId + count; i++) {
    kaggas.push({
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
  
  return kaggas;
}

// Generate complete dataset
function generateCompleteDataset(): Kagga[] {
  const allKaggas: Kagga[] = [];
  
  // Add sample kaggas
  allKaggas.push(...sampleKaggas);
  
  // Add placeholder kaggas for the remaining
  const remainingKaggas = generatePlaceholderKaggas(3, 942); // 945 total - 3 sample
  allKaggas.push(...remainingKaggas);
  
  return allKaggas;
}

// Calculate statistics
function calculateStats(kaggas: Kagga[]) {
  const total = kaggas.length;
  const completed = kaggas.filter(k => !k.englishTranslation.includes('Placeholder')).length;
  const placeholders = total - completed;
  const completionPercentage = ((completed / total) * 100).toFixed(2);
  
  const themes = new Set<string>();
  kaggas.forEach(kagga => {
    kagga.themes.forEach(theme => themes.add(theme));
  });
  
  return {
    total,
    completed,
    placeholders,
    completionPercentage,
    themes: Array.from(themes)
  };
}

// Main test function
function runTest() {
  console.log("=== Kagga Dataset Compilation Test ===\n");
  
  const allKaggas = generateCompleteDataset();
  const stats = calculateStats(allKaggas);
  
  console.log("Compilation Results:");
  console.log(`Total Kaggas: ${stats.total}`);
  console.log(`Completed: ${stats.completed}`);
  console.log(`Placeholders: ${stats.placeholders}`);
  console.log(`Completion: ${stats.completionPercentage}%`);
  
  console.log("\nThemes Found:");
  console.log(stats.themes.join(', '));
  
  console.log("\nSample Kaggas (First 2):");
  allKaggas.slice(0, 2).forEach(kagga => {
    console.log(`\nKagga ${kagga.id}:`);
    console.log(`Kannada: ${kagga.kannadaText.substring(0, 50)}...`);
    console.log(`English: ${kagga.englishTranslation.substring(0, 100)}...`);
    console.log(`Themes: ${kagga.themes.join(', ')}`);
  });
  
  console.log("\nProgress Report:");
  console.log("Kagga Dataset Compilation Report");
  console.log("================================"  );
  console.log(`Total Kaggas: ${stats.total}`);
  console.log(`Completed: ${stats.completed}`);
  console.log(`Placeholders: ${stats.placeholders}`);
  console.log(`Completion: ${stats.completionPercentage}%`);
  console.log(`Themes Found: ${stats.themes.join(', ')}`);
  
  console.log("\nNext Steps:");
  console.log("1. Source authentic Kannada text for all 945 kaggas");
  console.log("2. Provide accurate English translations");
  console.log("3. Add detailed meanings and explanations");
  console.log("4. Categorize themes appropriately");
  console.log("5. Validate all content for accuracy");
  console.log("\nResources:");
  console.log("- mankuthimma.com for authentic texts");
  console.log("- D.V. Gundappa's original works");
  console.log("- Scholarly translations and commentaries");
  
  console.log("\n=== Test Complete ===");
}

// Run the test
runTest(); 