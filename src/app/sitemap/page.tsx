import Link from 'next/link';

const pages = [
  {
    category: 'AcademicRecord',
    pages: [
      { name: 'AcademicRecord.tsx', path: '/page-components/AcademicRecord/AcademicRecord.tsx' },
    ],
  },
  {
    category: 'Admin',
    pages: [
      { name: 'Admin.tsx', path: '/page-components/Admin/Admin.tsx' },
    ],
  },
  {
    category: 'AdminSystem',
    pages: [
      { name: 'AdminSystem.tsx', path: '/page-components/AdminSystem/AdminSystem.tsx' },
    ],
  },
  {
    category: 'AfterLogging',
    pages: [
      { name: 'AfterLogging.tsx', path: '/page-components/AfterLogging/AfterLogging.tsx' },
    ],
  },
  {
    category: 'AIIntro',
    pages: [
      { name: 'AIIntro.tsx', path: '/page-components/AIIntro/AIIntro.tsx' },
    ],
  },
  {
    category: 'Announcement',
    pages: [
      { name: 'Announcement.tsx', path: '/page-components/Announcement/Announcement.tsx' },
    ],
  },
  {
    category: 'AuthPage',
    pages: [
      { name: 'AuthPage.tsx', path: '/page-components/AuthPage/AuthPage.tsx' },
    ],
  },
  {
    category: 'Community',
    pages: [
      { name: 'Community.tsx', path: '/page-components/Community/Community.tsx' },
    ],
  },
  {
    category: 'CustomerInquire',
    pages: [
      { name: 'CustomerInquire.tsx', path: '/page-components/CustomerInquire/CustomerInquire.tsx' },
    ],
  },
  {
    category: 'Faqs',
    pages: [
      { name: 'Faqs.tsx', path: '/page-components/Faqs/Faqs.tsx' },
    ],
  },
  {
    category: 'Homepage',
    pages: [
      { name: 'Homepage.tsx', path: '/page-components/Homepage/Homepage.tsx' },
      { name: 'Hero.tsx', path: '/page-components/Homepage/components/Hero.tsx' },
      { name: 'Testimonial.tsx', path: '/page-components/Homepage/components/Testimonial.tsx' },
      { name: 'ChildProperty.tsx', path: '/page-components/Homepage/components/ChildProperty.tsx' },
    ],
  },
  {
    category: 'InterviewSystem',
    pages: [
      { name: 'InterviewSystem.tsx', path: '/page-components/InterviewSystem/InterviewSystem.tsx' },
    ],
  },
  {
    category: 'Profile',
    pages: [
      { name: 'Profile.tsx', path: '/page-components/Profile/Profile.tsx' },
    ],
  },
  {
    category: 'Purchase',
    pages: [
      { name: 'Purchase.tsx', path: '/page-components/Purchase/Purchase.tsx' },
    ],
  },
  {
    category: 'ReportAnalysis',
    pages: [
      { name: 'ReportAnalysis.tsx', path: '/page-components/ReportAnalysis/ReportAnalysis.tsx' },
    ],
  },
  {
    category: 'StudentRecord',
    pages: [
      { name: 'StudentRecord.tsx', path: '/page-components/StudentRecord/StudentRecord.tsx' },
    ],
  },
  {
    category: 'Teacher',
    pages: [
      { name: 'Teacher.tsx', path: '/page-components/Teacher/Teacher.tsx' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">UNIGO AI Sitemap
      </h1>
      {pages.map((group) => (
        <div key={group.category} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📂 {group.category}
          </h2>
          <ul className="space-y-1 ml-4">
            {group.pages.map((page) => (
              <li key={page.path}>
                <Link href={page.path}>
                  <span className="text-blue-600 hover:underline">📄 {page.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
