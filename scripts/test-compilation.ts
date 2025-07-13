import { compileCompleteDataset, generateProgressReport, exportToJSON } from './compile-kaggas.js';

// Test script to demonstrate Kagga compilation functionality

console.log("=== Kagga Dataset Compilation Test ===\n");

// Compile the complete dataset
const { kaggas, stats, missing } = compileCompleteDataset();

console.log("Compilation Results:");
console.log(`Total Kaggas: ${stats.totalKaggas}`);
console.log(`Completed: ${stats.completedKaggas}`);
console.log(`Placeholders: ${stats.placeholderKaggas}`);
console.log(`Completion: ${((stats.completedKaggas / stats.totalKaggas) * 100).toFixed(2)}%`);

console.log("\nThemes Found:");
console.log(stats.themes.join(', '));

console.log("\nSample Kaggas (First 5):");
kaggas.slice(0, 5).forEach(kagga => {
  console.log(`\nKagga ${kagga.id}:`);
  console.log(`Kannada: ${kagga.kannadaText.substring(0, 50)}...`);
  console.log(`English: ${kagga.englishTranslation.substring(0, 100)}...`);
  console.log(`Themes: ${kagga.themes.join(', ')}`);
});

console.log("\nValidation Errors:");
if (stats.validationErrors.length > 0) {
  stats.validationErrors.slice(0, 10).forEach(error => {
    console.log(`- ${error}`);
  });
  if (stats.validationErrors.length > 10) {
    console.log(`... and ${stats.validationErrors.length - 10} more errors`);
  }
} else {
  console.log("No validation errors found!");
}

console.log("\nProgress Report:");
console.log(generateProgressReport(kaggas));

// Export sample to JSON
const sampleJson = exportToJSON(kaggas.slice(0, 10));
console.log("\nSample JSON Export (First 10 kaggas):");
console.log(sampleJson.substring(0, 500) + "...");

console.log("\n=== Test Complete ===");
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