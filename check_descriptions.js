const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/wheelTemplates.ts');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /\{\s*id: '([^']+)',\s*name: '([^']+)',\s*description: '([^']+)',/g;
let match;
let found = false;

while ((match = regex.exec(content)) !== null) {
  const [_, id, name, description] = match;
  if (description.length > 100) {
    found = true;
    console.log(`Name: ${name}\nDescription (${description.length} chars): ${description}\n`);
  }
}

if (!found) {
  console.log('All template descriptions are under 100 characters.');
} 