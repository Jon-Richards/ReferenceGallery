const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const angularJsonPath = path.resolve(__dirname, '../angular.json');
const { projects } = JSON.parse(fs.readFileSync(angularJsonPath, 'utf-8'));

// Forward any extra CLI arguments (e.g., --configuration=development)
const extraArgs = process.argv.slice(2).join(' ');

const entries = Object.entries(projects);
const libraries = entries
  .filter(([, config]) => config.projectType === 'library')
  .map(([name]) => name);

const applications = entries
  .filter(([, config]) => config.projectType === 'application')
  .map(([name]) => name);

const buildOrder = [...libraries, ...applications];

for (const projectName of buildOrder) {
  const command = `npx ng build ${projectName} ${extraArgs}`.trim();
  console.log(`\n=== Building ${projectName} ===`);
  execSync(command, { stdio: 'inherit' });
}

console.log('\nAll projects built successfully.');
