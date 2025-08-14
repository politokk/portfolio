// This script generates static MDX data that can be imported client-side
// Run this with: tsx lib/generate-mdx-data.ts

import fs from 'fs';
import path from 'path';

interface MDXData {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  content: string;
  path: string;
  category: string;
}

function parseFrontmatter(content: string): { frontmatter: any; body: string } {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    return {
      frontmatter: { title: 'Untitled' },
      body: content
    };
  }

  const [, frontmatterRaw, body] = frontmatterMatch;
  const frontmatter: any = {};

  frontmatterRaw.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      if (key === 'tags') {
        frontmatter[key] = value.replace(/[\[\]']/g, '').split(',').map(tag => tag.trim());
      } else {
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
      }
    }
  });

  return { frontmatter, body };
}

function readMDXFiles(baseDir: string, category: string): MDXData[] {
  const contentDir = path.join(process.cwd(), 'app/content', baseDir);
  const files: MDXData[] = [];

  function readDirectory(dir: string, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const newRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        readDirectory(fullPath, newRelativePath);
      } else if (entry.name.endsWith('.mdx')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        const id = newRelativePath.replace('.mdx', '').replace(/\//g, '-');
        
        files.push({
          id: `${category}-${id}`,
          title: frontmatter.title || entry.name.replace('.mdx', ''),
          description: frontmatter.description,
          tags: frontmatter.tags,
          content: body.substring(0, 500) + '...', // Truncate for client-side
          path: `${baseDir}/${newRelativePath}`,
          category
        });
      }
    }
  }

  readDirectory(contentDir);
  return files;
}

// Generate data
const docsData = readMDXFiles('docs', 'docs');
const cookbookData = readMDXFiles('cookbook', 'cookbook');
const providersData = readMDXFiles('providers', 'providers');

const allMDXData = {
  docs: docsData,
  cookbook: cookbookData,
  providers: providersData
};

// Write to a TypeScript file
const output = `// Auto-generated MDX data - DO NOT EDIT
// Generated on ${new Date().toISOString()}

export interface MDXData {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  content: string;
  path: string;
  category: string;
}

export const mdxData: Record<string, MDXData[]> = ${JSON.stringify(allMDXData, null, 2)};

export const getAllMDXData = () => mdxData;

export const getMDXDataByCategory = (category: string) => mdxData[category] || [];

export const getMDXDataById = (id: string) => {
  for (const category of Object.values(mdxData)) {
    const item = category.find(item => item.id === id);
    if (item) return item;
  }
  return null;
};
`;

fs.writeFileSync(path.join(process.cwd(), 'lib/mdx-data.ts'), output);

console.log('✅ Generated MDX data successfully!');
console.log(`📚 Found ${docsData.length} docs files`);
console.log(`🍳 Found ${cookbookData.length} cookbook files`);
console.log(`🔌 Found ${providersData.length} providers files`);
