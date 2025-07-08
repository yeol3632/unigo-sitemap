import { AdminLayout } from "@/components/page-components/Admin/AdminLayout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <AdminLayout>{children}</AdminLayout>;
}
