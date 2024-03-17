const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SRC_PATH = path.join(__dirname, '../src');

// Helper function to convert path to camel case and remove hyphens
function toCamelCase(str) {
  return (
    str
      // Split by slash to handle directory levels
      .split('/')
      // Map each part, removing hyphens and capitalizing the subsequent letter
      .map((part) =>
        part
          // Split by hyphen, then capitalize the first letter of each part after the first
          .split('-')
          .map((chunk, index) =>
            index > 0
              ? chunk.charAt(0).toUpperCase() + chunk.slice(1)
              : chunk,
          )
          // Join parts without hyphens
          .join(''),
      )
      // Capitalize the first letter of each section after the first
      .map((part, index) =>
        index > 0
          ? part.charAt(0).toUpperCase() + part.slice(1)
          : part.toLowerCase(),
      )
      // Join parts into a single string
      .join('')
  );
}

function findPageTsxFiles(dirPath, currentPath = '') {
  let result = {};

  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
      const newPath = `${currentPath}/${item.name}`;
      Object.assign(
        result,
        findPageTsxFiles(path.join(dirPath, item.name), newPath),
      );
    } else if (item.isFile() && item.name === 'page.tsx') {
      const pathWithoutLeadingSlash = currentPath.startsWith('/')
        ? currentPath.slice(1)
        : currentPath;
      const camelCaseKey = toCamelCase(pathWithoutLeadingSlash);
      result[camelCaseKey] = currentPath || '/';
    }
  });

  return result;
}

async function main() {
  const startingPath = path.resolve(SRC_PATH, 'app');
  const pathsObject = findPageTsxFiles(startingPath, '');

  const formattedCode = await prettier.format(
    `export const routes = ${JSON.stringify(pathsObject, null, 2)};`,
    {
      parser: 'typescript',
    },
  );

  fs.writeFileSync(
    path.resolve(SRC_PATH, 'routes.gen.ts'),
    formattedCode,
  );
}

// Process command line arguments
const args = process.argv.slice(2);
const watchMode = args.includes('--watch') || args.includes('-w');

if (watchMode) {
  fs.watch(
    path.resolve(SRC_PATH, 'app'),
    { recursive: true },
    (eventType, filename) => {
      console.log(`Detected ${eventType} in ${filename}`);
      main();
    },
  );
}

main();
