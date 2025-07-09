// app/preview/[...slug]/page.tsx
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// ✅ 테스트용: 동적으로 컴포넌트를 import해 매핑하는 객체
// 실제 경로는 src/components/page-components/... 기준
const pageMap: Record<string, any> = {
  'Homepage/Homepage': dynamic(() => import('@/components/page-components/Homepage/Homepage')),
  'Homepage/components/Hero': dynamic(() => import('@/components/page-components/Homepage/components/Hero')),
  'Homepage/components/ChildProperty': dynamic(() => import('@/components/page-components/Homepage/components/ChildProperty')),
  'Homepage/components/Testimonial': dynamic(() => import('@/components/page-components/Homepage/components/Testimonial')),

  'AcademicRecord/AcademicRecord': dynamic(() => import('@/components/page-components/AcademicRecord/AcademicRecord')),
  'Admin/Admin': dynamic(() => import('@/components/page-components/Admin/Admin')),
  'AdminSystem/AdminSystem': dynamic(() => import('@/components/page-components/AdminSystem/AdminSystem')),
  'AfterLogging/AfterLogging': dynamic(() => import('@/components/page-components/AfterLogging/AfterLogging')),
  'AIIntro/AIIntro': dynamic(() => import('@/components/page-components/AIIntro/AIIntro')),
  'Announcement/Announcement': dynamic(() => import('@/components/page-components/Announcement/Announcement')),
  'AuthPage/AuthPage': dynamic(() => import('@/components/page-components/AuthPage/AuthPage')),
  'Community/Community': dynamic(() => import('@/components/page-components/Community/Community')),
  'CustomerInquire/CustomerInquire': dynamic(() => import('@/components/page-components/CustomerInquire/CustomerInquire')),
  'Faqs/Faqs': dynamic(() => import('@/components/page-components/Faqs/Faqs')),
  'InterviewSystem/InterviewSystem': dynamic(() => import('@/components/page-components/InterviewSystem/InterviewSystem')),
  'Profile/Profile': dynamic(() => import('@/components/page-components/Profile/Profile')),
  'Purchase/Purchase': dynamic(() => import('@/components/page-components/Purchase/Purchase')),
  'ReportAnalysis/ReportAnalysis': dynamic(() => import('@/components/page-components/ReportAnalysis/ReportAnalysis')),
  'StudentRecord/StudentRecord': dynamic(() => import('@/components/page-components/StudentRecord/StudentRecord')),
  'Teacher/Teacher': dynamic(() => import('@/components/page-components/Teacher/Teacher')),
};

export default function PreviewPage({ params }: { params: { slug: string[] } }) {
  const key = params.slug.join('/');
  const Component = pageMap[key];

  if (!Component) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📄 Preview: {key}</h1>
      <div className="border p-4 rounded shadow">
        <Component />
      </div>
    </div>
  );
}
