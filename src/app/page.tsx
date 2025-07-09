// src/app/page.tsx

import Link from 'next/link';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Tomato AI Sitemap',
  description: 'Complete Sitemap & Navigation Directory for all components',
};

function getPageComponentsStructure(basePath: string, routePrefix = ''): { name: string; path: string }[] {
  const entries = fs.readdirSync(basePath, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const entryPath = path.join(basePath, entry.name);
    const relativePath = routePrefix + '/' + entry.name;

    if (entry.isDirectory()) {
      const nested = getPageComponentsStructure(entryPath, relativePath);
      return nested.length ? nested : [{ name: entry.name, path: relativePath }];
    } else if (entry.name.endsWith('.tsx')) {
      const pageName = entry.name.replace('.tsx', '');
      return [{ name: pageName, path: routePrefix + '/' + pageName }];
    }
    return [];
  });
}

const Sitemap = () => {
  const componentsPath = path.join(process.cwd(), 'src', 'components', 'page-components');
  const pages = getPageComponentsStructure(componentsPath);

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">UNIGO AI Sitemap
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore all available routes and pages for testing or development.
      </p>

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
};

export default Sitemap;
