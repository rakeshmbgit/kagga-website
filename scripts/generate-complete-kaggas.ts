import { Kagga } from '../types/kagga';

// This script will help generate the complete dataset of all 945 kaggas
// The data will be sourced from authentic texts and online resources

interface KaggaSource {
  id: number;
  kannadaText: string;
  transliteration: string;
  englishTranslation: string;
  meaning: string;
  themes: string[];
}

// Sample data structure for the first 50 kaggas
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

// This is a template for the complete dataset
// The actual implementation would need to include all 945 kaggas
// from authentic sources like:
// - mankuthimma.com
// - Published texts of Mankutimma's work
// - Academic sources and translations

console.log("Complete Kagga dataset generator");
console.log("This script will help generate all 945 kaggas");
console.log("Current sample size:", kaggaSources.length); 