"use client";
import { useSidebarContext } from "@/components/SidebarProvider";
import { cn } from "@/lib/utils";
import { LucideX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
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
	student: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 20H4V16H8V20ZM14 20H10V16H14V20ZM20 20H16V16H20V20ZM8 14H4V10H8V14ZM14 14H10V10H14V14ZM20 14H16V10H20V14ZM8 8H4V4H8V8ZM14 8H10V4H14V8ZM20 8H16V4H20V8Z"
				fill="currentColor"
			/>
			<mask
				id="mask0_214_708"
				maskUnits="userSpaceOnUse"
				x="4"
				y="4"
				width="16"
				height="16"
			>
				<path
					d="M8 20H4V16H8V20ZM14 20H10V16H14V20ZM20 20H16V16H20V20ZM8 14H4V10H8V14ZM14 14H10V10H14V14ZM20 14H16V10H20V14ZM8 8H4V4H8V8ZM14 8H10V4H14V8ZM20 8H16V4H20V8Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_214_708)"></g>
		</svg>
	),
	birth: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 21H3V3H21V21ZM5 19H19V5H5V19ZM13 11H17V13H13V17H11V13H7V11H11V7H13V11Z"
				fill="currentColor"
			/>
			<mask
				id="mask0_2059_137"
				maskUnits="userSpaceOnUse"
				x="3"
				y="3"
				width="18"
				height="18"
			>
				<path
					d="M21 21H3V3H21V21ZM5 19H19V5H5V19ZM13 11H17V13H13V17H11V13H7V11H11V7H13V11Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_2059_137)"></g>
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
	account: (
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
				d="M21.414 8.99994L15 2.58594L3 14.5859V20.9999H9H9.414H21V18.9999H11.414L21.414 8.99994ZM8.586 18.9999H5V15.4139L15 5.41394L18.586 8.99994L8.586 18.9999Z"
				fill="currentColor"
			/>
			<mask
				id="mask0_2059_112"
				maskUnits="userSpaceOnUse"
				x="3"
				y="2"
				width="19"
				height="19"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.414 8.99994L15 2.58594L3 14.5859V20.9999H9H9.414H21V18.9999H11.414L21.414 8.99994ZM8.586 18.9999H5V15.4139L15 5.41394L18.586 8.99994L8.586 18.9999Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_2059_112)"></g>
		</svg>
	),
};

const menu = [
	{
		title: "대시보드",
		icon: icons.home,
		path: "/teacher",
	},
	{
		title: "학생 관리",
		icon: icons.student,
		path: "/teacher/students",
	},
	{
		title: "생기부",
		icon: icons.birth,
		path: "/teacher/birth",
	},
	{
		title: "리포트",
		icon: icons.report,
		path: "/teacher/report",
	},
	{
		title: "공지사항",
		icon: icons.announcement,
		path: "/teacher/announcement",
	},
	{
		title: "계정 설정",
		icon: icons.account,
		path: "/teacher/account",
	},
];
