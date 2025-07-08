import { TeacherLayout } from "@/components/page-components/Teacher/TeacherLayout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <TeacherLayout>{children}</TeacherLayout>;
}
