"use client";
import { useSidebarContext } from "@/components/SidebarProvider";
import { cn } from "@/lib/utils";
import { LucideX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
	const pathname = usePathname();
	return (
		<main className="flex mx-auto max-w-[1440px]">
			{isSidebarOpen && (
				<div
					className="fixed w-full h-full top-0 left-0 lg:hidden bg-black opacity-50 z-[98]"
					onClick={() => setIsSidebarOpen(false)}
				></div>
			)}
			<aside
				className={cn(
					"bg-[#F8F9FA] py-[65px] xl:py-[95px] px-12 lg:px-8 xl:px-12 w-full max-w-[270px] xl:max-w-[313px] sticky top-0 max-h-screen max-lg:fixed left-0 z-[99] duration-300 transition-all max-lg:h-screen max-lg:overflow-y-auto",
					{
						"max-lg:-translate-x-full max-lg:invisible max-lg:opacity-0":
							!isSidebarOpen,
					}
				)}
			>
				<div className="">
					<button
						type="button"
						className="absolute top-5 right-5 lg:hidden w-8 h-8 flex justify-center items-center"
						onClick={() => setIsSidebarOpen(false)}
					>
						<LucideX />
					</button>
					<ul className="flex flex-col gap-11">
						{menu.map((item, index) => (
							<li key={index}>
								<Link
									href={item.path}
									className={cn(
										"flex items-center gap-4 text-[#A2A9B0]",
										{
											"text-black": pathname === item.path,
										}
									)}
								>
									{item.icon}
									<span className="w-0 flex-grow">{item.title}</span>
									{pathname === item.path && (
										<span className="w-[3px] h-[25px] rounded-full bg-[#3A86FF]"></span>
									)}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</aside>
			<article className="px-5 md:px-10 py-8 md:py-12 flex-grow w-0 relative">
				{children}
			</article>
		</main>
	);
};

const icons = {
	home: (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21 21.5H14V13.5H10V21.5H3V9L12.012 2.25L21 9V21.5ZM16 19.5H19V10L12.01 4.75L5 10V19.5H8V11.5H16V19.5Z"
				fill="currentColor"
			/>
			<mask
				id="mask0_2059_120"
				maskUnits="userSpaceOnUse"
				x="3"
				y="2"
				width="18"
				height="20"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21 21.5H14V13.5H10V21.5H3V9L12.012 2.25L21 9V21.5ZM16 19.5H19V10L12.01 4.75L5 10V19.5H8V11.5H16V19.5Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_2059_120)"></g>
		</svg>
	),
	user: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
				fill="currentColor"
			/>
		</svg>
	),
	report: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 4V2H15V4H9V2H7V4H3V21H21V4H17ZM7 6V8H9V6H15V8H17V6H19V10H5V6H7ZM5 19V12H19V19H5Z"
				fill="currentColor"
			/>
		</svg>
	),
	announcement: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 17H8.41406L3 22.4141V3H21V17ZM5 17.5859L7.58594 15H19V5H5V17.5859ZM14 13H8V11H14V13ZM16 9H8V7H16V9Z"
				fill="currentColor"
			/>
		</svg>
	),
	card: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.25 15H14.25M2.25 9.75H21.75M17.25 15H18.75M3.75 5.25C3 5.25 2.25 6 2.25 6.75V17.25C2.25 18 3 18.75 3.75 18.75H20.25C21 18.75 21.75 18 21.75 17.25V6.75C21.75 6 21 5.25 20.25 5.25H3.75Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
};

const menu = [
	{
		title: "대시보드",
		icon: icons.home,
		path: "/admin",
	},
	{
		title: "사용자 관리",
		icon: icons.user,
		path: "/admin/user",
	},
	{
		title: "리포트 관리",
		icon: icons.report,
		path: "/admin/report",
	},
	{
		title: "결제·쿠폰 관리",
		icon: icons.card,
		path: "/admin/payment",
	},
	{
		title: "문의 응답",
		icon: icons.announcement,
		path: "/admin/inquiries",
	},
];
