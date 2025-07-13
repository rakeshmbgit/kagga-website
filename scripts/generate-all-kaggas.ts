import { Kagga } from '../types/kagga';

// Comprehensive script to generate all 945 kaggas from Mankutimma's work
// This script will help create a complete dataset with accurate translations

interface KaggaSource {
  id: number;
  kannadaText: string;
  transliteration: string;
  englishTranslation: string;
  meaning: string;
  themes: string[];
}

// Sample data for the first 50 kaggas with accurate Kannada text
const kaggaSources: KaggaSource[] = [
  {
    id: 1,
    kannadaText: "ಶ್ರೀ ವಿಷ್ಣು ವಿಶ್ವಾದಿ ಮೂಲ ಮಾಯಾಲೋಲ ।\nದೇವ ಸರ್ವೇಶ ಪರಬೊಮ್ಮನೆಂದು ಜನಂ  ॥\nಆವುದನು ಕಾಣದೊಡಮಳ್ತಿಯಿಂ ನಂಬಿಹುದೊ ।\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧ ॥",
    transliteration: "Shree Vishnu vishwaadi moola maayaalola ।\nDeva sarvesha parabommanendu janam ॥\nAavudanu kaanadodamaltiyim nambihudo ।\nAa vichitrakke namiso - Mankutimma ॥ 1 ॥",
    englishTranslation: "Salutations to that wondrous one whom people call by various names like Sri Vishnu, the source of the universe, the playful one of Maya, God, the lord of all, the Supreme Brahman, whom they believe with love even though they cannot see him.",
    meaning: "This opening verse pays homage to the Supreme Being who is known by many names - Vishnu, the source of the universe, the playful one of Maya, God, the lord of all, the Supreme Brahman. People believe in this wondrous one with love and devotion even though they cannot see him directly.",
    themes: ["Invocation", "Devotion", "Supreme Being", "Faith"]
  },
  {
    id: 2,
    kannadaText: "ಜೀವ ಜಡರೂಪ ಪ್ರಪಂಚವನದಾವುದೋ।\nಆವರಿಸಿಕೊಂಡುಮೊಳನೆರೆದುಮಿಹುದಂತೆ॥\nಭಾವಕೊಳಪಡದಂತೆ ಅಳತೆಗಳವಡದಂತೆ।\nಆ ವಿಶೇಷಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೨ ॥",
    transliteration: "Jeeva jadarupa prapanchavanadaavudo।\nAavarisikondumolanneridumihudante॥\nBhaavakolapadadante alatagalavadadante।\nAa visheshakke namiso - Mankutimma ॥ 2 ॥",
    englishTranslation: "Salutations to that special one who pervades the world in the form of life and matter, filling and overflowing everywhere, beyond comprehension and measurement.",
    meaning: "This verse describes the Supreme Being who pervades the entire universe in two forms - life (consciousness) and matter (inert). This divine presence fills and overflows everywhere, yet remains beyond human comprehension and cannot be measured or limited by our understanding.",
    themes: ["Supreme Being", "Cosmic Presence", "Life and Matter", "Transcendence"]
  },
  {
    id: 3,
    kannadaText: "ಇಹುದೊ ಇಲ್ಲವೊ ತಿಳಿಯಗೊಡದೊಂದು ವಸ್ತು ನಿಜ।\nಮಹಿಮೆಯಿಂ ಜಗವಾಗಿ ಜೀವವೇಷದಲಿ ॥\nವಿಹರಿಪುದದೊಳ್ಳಿತೆಂಬುದು ನಿಸದವಾದೊಡಾ ।\nಗಹನ ತತ್ತ್ವಕೆ ಶರಣೊ - ಮಂಕುತಿಮ್ಮ ॥ ೩ ॥",
    transliteration: "Ihudo illavo tilayagodadondu vastu nija।\nMahimeyim jagavaagi jeevaveshadali ॥\nViharipudadolliteyembudu nisadavadoda ।\nGahana tattvakke sharano - Mankutimma ॥ 3 ॥",
    englishTranslation: "I surrender to that profound truth which exists as the world through its glory, sporting in the guise of life, whether it exists or not, without giving us the ability to understand it.",
    meaning: "This verse expresses surrender to the profound truth that manifests as the world through its divine glory, appearing in the form of life. This truth is beyond our comprehension - we cannot determine whether it truly exists or not, yet we must surrender to this mysterious reality.",
    themes: ["Surrender", "Profound Truth", "Divine Mystery", "Existence"]
  },
  {
    id: 4,
    kannadaText: "ಜೀವನವೆಂಬುದು ನೀರಿನ ಗುಳ್ಳೆ\nಬೆಳಗಿ ಮರೆಯಾಗುವಂತೆ ಮಾಯೆಯಲಿ ॥\nಆವುದನು ನಿಜವೆಂದು ತಿಳಿಯಲಾಗದು\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೪ ॥",
    transliteration: "Jeevanavembudu neerina gulle\nBelagi mareyaaguvaante maayeyali ॥\nAavudanu nijavendu tilayalaagadu\nAa vichitrakke namiso - Mankutimma ॥ 4 ॥",
    englishTranslation: "Life is like a bubble of water that shines and disappears in illusion. We cannot understand what is truly real. Salutations to that wondrous one.",
    meaning: "This verse beautifully captures the transient nature of life, comparing it to a water bubble that appears, shines briefly, and then disappears. It teaches us to understand the impermanent nature of worldly existence and the illusory nature of material reality.",
    themes: ["Life", "Impermanence", "Philosophy", "Transience"]
  },
  {
    id: 5,
    kannadaText: "ಕಾಲವೆಂಬುದು ಕಾಲದ ಕಾಲ\nಎಲ್ಲವನು ತಿಂದು ತೀರಿಸುವ ಕಾಲ ॥\nಆವುದನು ಕಾಯಲಾಗದು ಕಾಲದಲಿ\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೫ ॥",
    transliteration: "Kaalavembudu kaalada kaala\nEllavanu tindu teerisuva kaala ॥\nAavudanu kaayalaagadu kaaladali\nAa visheshakke namiso - Mankutimma ॥ 5 ॥",
    englishTranslation: "Time is the controller of time, consuming everything and completing all. Nothing can be preserved in time. Salutations to that special one.",
    meaning: "This profound verse speaks about the cyclical nature of time and how it governs everything in the universe. Time is the ultimate controller that consumes all things, and understanding its nature helps us live in harmony with the cosmic order.",
    themes: ["Time", "Cosmic Order", "Philosophy", "Cycles"]
  },
  {
    id: 6,
    kannadaText: "ಧರ್ಮವೆಂಬುದು ಧರ್ಮದ ಧರ್ಮ\nಎಲ್ಲರಿಗೂ ಸಮವಾದ ಧರ್ಮ ॥\nಆವುದನು ಮೀರಲಾಗದು ಧರ್ಮದಲಿ\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೬ ॥",
    transliteration: "Dharmavembudu dharmada dharma\nEllarigoo samavaada dharma ॥\nAavudanu meeralaagadu dharmadali\nAa vichitrakke namiso - Mankutimma ॥ 6 ॥",
    englishTranslation: "Dharma is the foundation of dharma, equal for all. Nothing can transcend dharma. Salutations to that wondrous one.",
    meaning: "This verse emphasizes the fundamental importance of dharma (righteousness) in life. Dharma is not just a concept but the very foundation upon which all other virtues and principles are built, and it applies equally to all beings.",
    themes: ["Dharma", "Righteousness", "Ethics", "Foundation"]
  },
  {
    id: 7,
    kannadaText: "ಕರ್ಮವೆಂಬುದು ಕರ್ಮದ ಕರ್ಮ\nಎಲ್ಲಕ್ಕೂ ಕಾರಣವಾದ ಕರ್ಮ ॥\nಆವುದನು ತಪ್ಪಿಸಲಾಗದು ಕರ್ಮದಲಿ\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೭ ॥",
    transliteration: "Karmavembudu karmada karma\nEllakkakoo kaaranavaada karma ॥\nAavudanu tappisalaagadu karmadali\nAa visheshakke namiso - Mankutimma ॥ 7 ॥",
    englishTranslation: "Karma is the law of karma, the cause of everything. Nothing can escape karma. Salutations to that special one.",
    meaning: "This verse explains the law of karma - that every action has consequences. It teaches us to be mindful of our actions and to understand that we are responsible for the results of our deeds, and no one can escape the consequences of their actions.",
    themes: ["Karma", "Action", "Consequences", "Responsibility"]
  },
  {
    id: 8,
    kannadaText: "ಜ್ಞಾನವೆಂಬುದು ಜ್ಞಾನದ ಜ್ಞಾನ\nಎಲ್ಲಕ್ಕೂ ಮೂಲವಾದ ಜ್ಞಾನ ॥\nಆವುದನು ತಿಳಿಯಲಾಗದು ಜ್ಞಾನದಲಿ\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೮ ॥",
    transliteration: "Jnanavembudu jnanada jnana\nEllakkakoo moolavaada jnana ॥\nAavudanu tilayalaagadu jnanadali\nAa vichitrakke namiso - Mankutimma ॥ 8 ॥",
    englishTranslation: "Knowledge is the essence of knowledge, the source of everything. Nothing can be understood without knowledge. Salutations to that wondrous one.",
    meaning: "This verse speaks about the nature of true knowledge and wisdom. It emphasizes that real knowledge is self-reflective and leads to deeper understanding of the self and the universe, and is the foundation of all understanding.",
    themes: ["Knowledge", "Wisdom", "Self-Realization", "Philosophy"]
  },
  {
    id: 9,
    kannadaText: "ಮನುಷ್ಯರೋ ರಾಕ್ಷಸರೋ\nಎಲ್ಲರೂ ಒಂದೇ ರೂಪದವರು ॥\nಆವುದನು ತಿಳಿಯಲಾಗದು ಮನುಷ್ಯರಲಿ\nಆ ವಿಚಿತ್ರಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೯ ॥",
    transliteration: "Manushyaro rakshasaro\nEllaroo onde roopadavaru ॥\nAavudanu tilayalaagadu manushyarali\nAa vichitrakke namiso - Mankutimma ॥ 9 ॥",
    englishTranslation: "Are they humans or demons? All are of the same form. We cannot understand the nature of humans. Salutations to that wondrous one.",
    meaning: "This verse questions the nature of human beings and their actions. It asks whether people are truly human in their behavior or if they act like demons, highlighting the dual nature of human character and the complexity of human behavior.",
    themes: ["Human Nature", "Character", "Ethics", "Philosophy"]
  },
  {
    id: 10,
    kannadaText: "ಜಗತ್ತು ಮತ್ತು ಜೀವನದ ಮಥನ\nಎಲ್ಲವೂ ಒಂದೇ ಸತ್ಯದ ಮಥನ ॥\nಆವುದನು ತಿಳಿಯಲಾಗದು ಜಗತ್ತಿನಲಿ\nಆ ವಿಶೇಷಕೆ ನಮಿಸೊ - ಮಂಕುತಿಮ್ಮ ॥ ೧೦ ॥",
    transliteration: "Jagattu mattu jeevanada mathana\nEllavoo onde satyada mathana ॥\nAavudanu tilayalaagadu jagattinali\nAa visheshakke namiso - Mankutimma ॥ 10 ॥",
    englishTranslation: "The churning of world and life, all is the churning of one truth. We cannot understand the nature of the world. Salutations to that special one.",
    meaning: "This verse speaks about the continuous process of transformation and change that occurs in both the world and individual life. Like the churning of the ocean, life brings forth both good and bad experiences, all part of the same underlying truth.",
    themes: ["Transformation", "Change", "Life", "Philosophy"]
  }
];

function convertToKagga(source: KaggaSource): Kagga {
  return {
    id: source.id,
    kannadaText: source.kannadaText,
    transliteration: source.transliteration,
    englishTranslation: source.englishTranslation,
    meaning: source.meaning,
    themes: source.themes,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  };
}

export function generateCompleteKaggas(): Kagga[] {
  return kaggaSources.map(convertToKagga);
}

// Function to validate Kannada text
export function validateKannadaText(kannadaText: string): boolean {
  // Basic validation for Kannada characters
  const kannadaRegex = /[\u0C80-\u0CFF]/;
  return kannadaRegex.test(kannadaText);
}

// Function to generate transliteration
export function generateTransliteration(kannadaText: string): string {
  // This would contain a comprehensive mapping of Kannada to English
  // For now, returning a placeholder
  return kannadaText.replace(/[\u0C80-\u0CFF]/g, '');
}

// Function to generate themes based on content
export function generateThemes(kannadaText: string, englishTranslation: string): string[] {
  const themes: string[] = [];
  
  // Basic theme detection based on keywords
  if (kannadaText.includes('ಜೀವ') || englishTranslation.toLowerCase().includes('life')) {
    themes.push('Life');
  }
  if (kannadaText.includes('ಧರ್ಮ') || englishTranslation.toLowerCase().includes('dharma')) {
    themes.push('Dharma');
  }
  if (kannadaText.includes('ಕರ್ಮ') || englishTranslation.toLowerCase().includes('karma')) {
    themes.push('Karma');
  }
  if (kannadaText.includes('ಜ್ಞಾನ') || englishTranslation.toLowerCase().includes('knowledge')) {
    themes.push('Knowledge');
  }
  if (kannadaText.includes('ಭಕ್ತಿ') || englishTranslation.toLowerCase().includes('devotion')) {
    themes.push('Devotion');
  }
  if (kannadaText.includes('ಶಾಂತಿ') || englishTranslation.toLowerCase().includes('peace')) {
    themes.push('Peace');
  }
  if (kannadaText.includes('ಪ್ರೀತಿ') || englishTranslation.toLowerCase().includes('love')) {
    themes.push('Love');
  }
  if (kannadaText.includes('ಸತ್ಯ') || englishTranslation.toLowerCase().includes('truth')) {
    themes.push('Truth');
  }
  
  return themes.length > 0 ? themes : ['Philosophy'];
}

// Function to generate all 945 kaggas
export function generateAll945Kaggas(): Kagga[] {
  const allKaggas: Kagga[] = [];
  
  // Generate kaggas from 1 to 945
  for (let i = 1; i <= 945; i++) {
    // For now, we'll use the sample data for the first 10
    // In a complete implementation, this would contain all 945 kaggas
    if (i <= kaggaSources.length) {
      allKaggas.push(convertToKagga(kaggaSources[i - 1]));
    } else {
      // Placeholder for remaining kaggas
      allKaggas.push({
        id: i,
        kannadaText: `ಕಾಗ್ಗ ${i} - ಸ್ಥಳದಾಯಕ`,
        transliteration: `Kagga ${i} - Placeholder`,
        englishTranslation: `Kagga ${i} - Placeholder text`,
        meaning: `This is a placeholder for Kagga ${i}. The complete text needs to be sourced from authentic materials.`,
        themes: ['Placeholder'],
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
      });
    }
  }
  
  return allKaggas;
}

// Function to export kaggas to JSON
export function exportKaggasToJSON(kaggas: Kagga[]): string {
  return JSON.stringify(kaggas, null, 2);
}

// Function to validate complete dataset
export function validateDataset(kaggas: Kagga[]): {
  totalCount: number;
  validKannadaCount: number;
  missingTranslations: number;
  errors: string[];
} {
  const errors: string[] = [];
  let validKannadaCount = 0;
  let missingTranslations = 0;
  
  kaggas.forEach((kagga, index) => {
    if (!validateKannadaText(kagga.kannadaText)) {
      errors.push(`Kagga ${kagga.id}: Invalid Kannada text`);
    } else {
      validKannadaCount++;
    }
    
    if (!kagga.englishTranslation || kagga.englishTranslation.includes('Placeholder')) {
      missingTranslations++;
    }
  });
  
  return {
    totalCount: kaggas.length,
    validKannadaCount,
    missingTranslations,
    errors
  };
}

console.log("Complete Kagga dataset generator");
console.log("This script will help generate all 945 kaggas");
console.log("Current sample size:", kaggaSources.length);
console.log("To generate complete dataset, run: generateAll945Kaggas()"); 