"use client";
import CustomSearchInput from "@/components/CustomSearchInput";
import { tomatoIcons } from "@/components/icons";
import { useSidebarContext } from "@/components/SidebarProvider";
import { LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import PaginatedItems from "./PaginatedItems";

export default function TeacherDashboardAnnouncement() {
	const { setIsSidebarOpen, isSidebarOpen } = useSidebarContext();
	return (
		<>
			{/*  */}
			<div className="max-w-[952px] mx-auto mb-5">
				<div className="flex justify-between gap-5">
					<button
						className="lg:hidden"
						type="button"
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<LucideLayoutDashboard />
					</button>
					<div className="flex-grow sm:max-w-[314px] ml-auto">
						<CustomSearchInput
							placeholder="검색하실 키워드를 입력해주세요"
							type="text"
							onChange={(e) => console.log(e.target.value)}
							className="rounded-none bg-transparent max-sm:text-sm"
						/>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="max-w-[952px] mx-auto">
				<div className="table-responsive border-t border-black">
					<table className="table3">
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>조회수</th>
								<th>작성일</th>
								<th>파일</th>
							</tr>
						</thead>
						<tbody>
							<PaginatedItems
								items={data}
								itemsPerPage={6}
								renderItem={(item) => <TableRow item={item} />}
								colSpan={5}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
interface TableRowProps {
	item: (typeof data)[0];
}
const TableRow = ({ item }: TableRowProps) => {
	return (
		<tr>
			<td>
				<div className="text-sm">{item.number}</div>
			</td>
			<td className="min-w-[200px]">
				<div>{item.title}</div>
			</td>
			<td>
				<div className="text-center text-sm">{item.view}</div>
			</td>
			<td>
				<div className="text-center text-sm flex justify-center text-nowrap">
					{item.date}
				</div>
			</td>
			<td>
				<div className="flex justify-center">
					<Link href={item.file} download>
						{tomatoIcons.link}
					</Link>
				</div>
			</td>
		</tr>
	);
};
const data = [
	{
		number: (
			<>
				<span
					className={
						"text-xs font-medium py-[7px] px-4 bg-purple2/25 rounded-full inline-block text-nowrap"
					}
				>
					공지
				</span>
			</>
		),
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: (
			<>
				<span
					className={
						"text-xs font-medium py-[7px] px-4 bg-purple2/25 rounded-full"
					}
				>
					공지
				</span>
			</>
		),
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
	{
		number: "12",
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		view: "10600",
		date: "2024-07-4",
		file: "/",
	},
];
