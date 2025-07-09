// app/sitemap/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

function getAllTSXFiles(dir: string, baseUrl: string): { name: string; path: string }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(baseUrl, entry.name);

    if (entry.isDirectory()) {
      return getAllTSXFiles(fullPath, routePath);
    } else if (entry.name.endsWith('.tsx')) {
      const nameWithoutExt = entry.name.replace('.tsx', '');
      const cleanedPath = routePath.replace(/\\/g, '/').replace('.tsx', '');
      return [{ name: nameWithoutExt, path: cleanedPath }];
    }

    return [];
  });
}

export default function Sitemap() {
  const basePath = path.join(process.cwd(), 'src', 'components', 'page-components');
  const pages = getAllTSXFiles(basePath, '');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🗂️ Tomato AI Sitemap</h1>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li key={page.path}>
            <Link href={`/preview${page.path}`}>
              <span className="text-blue-600 hover:underline">📄 {page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
