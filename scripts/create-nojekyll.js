import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ESM
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = join(__dirname, '..', '..');

// Create the out directory if it doesn't exist
const outDir = join(projectRoot, 'out');
if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
}

// Create the .nojekyll file
const nojekyllPath = join(outDir, '.nojekyll');
writeFileSync(nojekyllPath, '');

console.log('.nojekyll file created successfully');