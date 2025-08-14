import fs from 'fs';
import path from 'path';
import { Value } from 'platejs';

interface MDXFrontmatter {
  title: string;
  description?: string;
  tags?: string[];
  icon?: string;
}

interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
  filename: string;
}

// Function to parse frontmatter from MDX content
function parseFrontmatter(content: string): { frontmatter: MDXFrontmatter; body: string } {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    return {
      frontmatter: { title: 'Untitled' },
      body: content
    };
  }

  const [, frontmatterRaw, body] = frontmatterMatch;
  const frontmatter: any = {};

  // Simple YAML parser for common fields
  frontmatterRaw.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      if (key === 'tags') {
        // Parse tags array
        frontmatter[key] = value.replace(/[\[\]']/g, '').split(',').map(tag => tag.trim());
      } else {
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
      }
    }
  });

  return { frontmatter, body };
}

// Read all MDX files from a directory
export function readMDXFiles(dirPath: string): MDXContent[] {
  const contentDir = path.join(process.cwd(), 'app/content', dirPath);
  const files: MDXContent[] = [];

  function readDirectory(dir: string) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        readDirectory(fullPath);
      } else if (entry.name.endsWith('.mdx')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        
        files.push({
          frontmatter,
          content: body,
          filename: entry.name.replace('.mdx', '')
        });
      }
    }
  }

  readDirectory(contentDir);
  return files;
}

// Convert MDX content to a simple plate value
export function mdxToPlateValue(content: string): Value {
  // This is a simplified conversion - you may want to enhance this
  const lines = content.split('\n');
  const value: Value = [];
  
  lines.forEach(line => {
    if (line.startsWith('# ')) {
      value.push({
        id: Math.random().toString(36).substr(2, 9),
        type: 'h1',
        children: [{ text: line.substring(2) }],
      });
    } else if (line.startsWith('## ')) {
      value.push({
        id: Math.random().toString(36).substr(2, 9),
        type: 'h2',
        children: [{ text: line.substring(3) }],
      });
    } else if (line.startsWith('### ')) {
      value.push({
        id: Math.random().toString(36).substr(2, 9),
        type: 'h3',
        children: [{ text: line.substring(4) }],
      });
    } else if (line.trim()) {
      value.push({
        id: Math.random().toString(36).substr(2, 9),
        type: 'p',
        children: [{ text: line }],
      });
    }
  });
  
  return value;
}

// Get MDX content by category
export const getMDXContentByCategory = () => {
  const docsContent = readMDXFiles('docs');
  const cookbookContent = readMDXFiles('cookbook');
  const providersContent = readMDXFiles('providers');
  
  return {
    docs: docsContent,
    cookbook: cookbookContent,
    providers: providersContent
  };
};
