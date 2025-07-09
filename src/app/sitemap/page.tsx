// src/app/sitemap/page.tsx

import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface PageEntry {
  name: string;
  path: string;
}

function getAllTSXFiles(dir: string, baseRoute = ''): PageEntry[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    const relativeRoute = baseRoute + '/' + entry.name;

    if (entry.isDirectory()) {
      return getAllTSXFiles(entryPath, relativeRoute);
    } else if (entry.name.endsWith('.tsx')) {
      const cleanedName = entry.name.replace('.tsx', '');
      return [{ name: cleanedName, path: relativeRoute.replace('.tsx', '') }];
    }
    return [];
  });
}

export default function Sitemap() {
  const baseDir = path.join(process.cwd(), 'src', 'components', 'page-components');
  const pages = getAllTSXFiles(baseDir);

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🗂️ UNIGO AI Sitemap</h1>
      <p className="text-center text-gray-600 mb-10">Explore all available routes and pages for development.</p>

      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.path} className="bg-white shadow p-4 rounded border hover:bg-gray-50">
            <Link href={page.path}>
              <span className="text-blue-600 hover:underline">{page.path}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
