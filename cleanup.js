const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'Hello File',
  'TestBranchFile',
  'error.html',
  'file1',
  'nature.txt',
  'newfile',
  'test.txt',
  'pexels-nextvoyage-1518500.jpg',
  '100'
];

filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted: ${file}`);
    }
  } catch (error) {
    console.log(`✗ Failed to delete: ${file}`);
  }
});

console.log('\nRemaining files:');
const files = fs.readdirSync(__dirname).filter(f => !f.startsWith('.'));
files.forEach(f => console.log(`  ${f}`));
