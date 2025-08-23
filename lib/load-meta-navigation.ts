import fs from 'fs'
import path from 'path'

export interface MetaJson {
  title: string
  icon?: string
  pages?: string[]
  root?: boolean
}

export interface NavItemData {
  id: string
  name: string
  label?: string
  icon: string
  url: string
  children?: NavItemData[]
}

export async function loadMetaNavigation(): Promise<NavItemData[]> {
  const docsPath = path.join(process.cwd(), 'app', 'docs')
  
  try {
    // Read root meta.json
    const rootMetaPath = path.join(docsPath, 'meta.json')
    const rootMeta: MetaJson = JSON.parse(fs.readFileSync(rootMetaPath, 'utf-8'))
    
    const navItems: NavItemData[] = []
    
    // Add home item
    navItems.push({
      id: 'home',
      name: 'Home',
      icon: 'home',
      url: '/'
    })
    
    // Process each page in root meta
    if (rootMeta.pages) {
      for (const page of rootMeta.pages) {
        const pageMetaPath = path.join(docsPath, page, 'meta.json')
        
        try {
          const pageMeta: MetaJson = JSON.parse(fs.readFileSync(pageMetaPath, 'utf-8'))
          
          // Count the number of pages for the label
          const pageCount = pageMeta.pages?.length || 0
          
          navItems.push({
            id: page,
            name: pageMeta.title,
            label: pageCount > 0 ? pageCount.toString() : undefined,
            icon: pageMeta.icon || 'FileText',
            url: `/${page}`,
          })
        } catch (error) {
          console.error(`Failed to load meta.json for ${page}:`, error)
        }
      }
    }
    
    return navItems
  } catch (error) {
    console.error('Failed to load navigation from meta.json:', error)
    // Return fallback navigation
    return [
      {
        id: 'home',
        name: 'Home',
        icon: 'home',
        url: '/'
      }
    ]
  }
}
