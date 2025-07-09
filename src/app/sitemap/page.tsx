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
  const pages = getAllTSXFiles(basePath, '/page-components');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">유니고 AI Sitemap</h1>
      <p className="text-gray-600 mb-4">* 경로는 내부 컴포넌트 디렉토리 기준입니다. 실제 링크는 라우팅 파일이 필요합니다.</p>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li key={page.path}>
            <span className="text-gray-800">📄 {page.path}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
