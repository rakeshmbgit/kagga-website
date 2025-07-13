const http = require('http');

const baseUrl = 'http://localhost:3000';

// Test scenarios
const testScenarios = [
  // Root redirects
  { path: '/', expectedRedirect: '/en', description: 'Root should redirect to English' },
  
  // Home pages
  { path: '/en', expectedStatus: 200, description: 'English home page' },
  { path: '/kn', expectedStatus: 200, description: 'Kannada home page' },
  
  // Sub-pages
  { path: '/en/kaggas', expectedStatus: 200, description: 'English kaggas page' },
  { path: '/kn/kaggas', expectedStatus: 200, description: 'Kannada kaggas page' },
  { path: '/en/search', expectedStatus: 200, description: 'English search page' },
  { path: '/kn/search', expectedStatus: 200, description: 'Kannada search page' },
  { path: '/en/videos', expectedStatus: 200, description: 'English videos page' },
  { path: '/kn/videos', expectedStatus: 200, description: 'Kannada videos page' },
  { path: '/en/about-kagga', expectedStatus: 200, description: 'English about-kagga page' },
  { path: '/kn/about-kagga', expectedStatus: 200, description: 'Kannada about-kagga page' },
  { path: '/en/about-dvg', expectedStatus: 200, description: 'English about-dvg page' },
  { path: '/kn/about-dvg', expectedStatus: 200, description: 'Kannada about-dvg page' },
  
  // Kagga detail pages
  { path: '/en/kaggas/1', expectedStatus: 200, description: 'English Kagga #1' },
  { path: '/kn/kaggas/1', expectedStatus: 200, description: 'Kannada Kagga #1' },
  { path: '/en/kaggas/945', expectedStatus: 200, description: 'English Kagga #945' },
  { path: '/kn/kaggas/945', expectedStatus: 200, description: 'Kannada Kagga #945' },
  
  // Error cases (should return 404)
  { path: '/en/kaggas/9999', expectedStatus: 404, description: 'Invalid Kagga ID' },
  { path: '/kn/kaggas/9999', expectedStatus: 404, description: 'Invalid Kagga ID' },
  { path: '/en/invalid-path', expectedStatus: 404, description: 'Invalid path' },
  { path: '/kn/invalid-path', expectedStatus: 404, description: 'Invalid path' },
  
  // Double locale (should return 404)
  { path: '/en/kn', expectedStatus: 404, description: 'Double locale en/kn' },
  { path: '/kn/en', expectedStatus: 404, description: 'Double locale kn/en' },
  { path: '/en/en', expectedStatus: 404, description: 'Double locale en/en' },
  { path: '/kn/kn', expectedStatus: 404, description: 'Double locale kn/kn' },
];

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'HEAD'
    };

    const req = http.request(options, (res) => {
      resolve({
        status: res.statusCode,
        location: res.headers.location,
        path: path
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

async function runTests() {
  console.log('🧪 Testing Language Switching and URL Structure...\n');
  
  let passed = 0;
  let failed = 0;
  
  for (const test of testScenarios) {
    try {
      const result = await makeRequest(test.path);
      
      if (test.expectedRedirect) {
        // Test redirect
        if (result.status === 307 && result.location === test.expectedRedirect) {
          console.log(`✅ ${test.description}: ${test.path} → ${result.location}`);
          passed++;
        } else {
          console.log(`❌ ${test.description}: ${test.path} (Expected: 307 → ${test.expectedRedirect}, Got: ${result.status}${result.location ? ` → ${result.location}` : ''})`);
          failed++;
        }
      } else {
        // Test status code
        if (result.status === test.expectedStatus) {
          console.log(`✅ ${test.description}: ${test.path} (${result.status})`);
          passed++;
        } else {
          console.log(`❌ ${test.description}: ${test.path} (Expected: ${test.expectedStatus}, Got: ${result.status})`);
          failed++;
        }
      }
    } catch (error) {
      console.log(`❌ ${test.description}: ${test.path} (Error: ${error.message})`);
      failed++;
    }
  }
  
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed! Language switching should work correctly.');
  } else {
    console.log('⚠️  Some tests failed. Please check the issues above.');
  }
}

// Wait for server to start, then run tests
setTimeout(runTests, 3000); 