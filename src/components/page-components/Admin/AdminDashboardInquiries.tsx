"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import PaginatedItems from "../Teacher/PaginatedItems";
import TeacherSearchComponent from "./AdminSearchComponent";

export default function AdminDashboardInquiries() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="mb-[14px] flex flex-wrap gap-3 justify-between items-center">
				<h6 className="font-bold text-base md:text-[22px]">문의 응답</h6>
				<div className="flex flex-wrap gap-3">
					<select className="select h-12 border border-border pl-5 rounded-[8px]">
						<option value="">최신 순</option>
						<option value="">오래된 순</option>
					</select>
					<select className="select h-12 border border-border pl-5 rounded-[8px]">
						<option value="">상태별</option>
						<option value="">검수 완료</option>
					</select>
				</div>
			</div>
			<div>
				<div className="table-responsive border-t border-black">
					<table className="table3">
						<thead>
							<tr>
								<th>상태</th>
								<th>제목</th>
								<th>작성일</th>
							</tr>
						</thead>
						<tbody>
							<PaginatedItems
								items={data}
								itemsPerPage={5}
								renderItem={(item) => <TableRow item={item} />}
								colSpan={3}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
interface TableRowProps {
	item: any;
}
const TableRow = ({ item }: TableRowProps) => {
	return (
		<tr className="text-sm relative">
			<td>
				<Link
					href={`/inquires/${item.id}`}
					className="absolute top-0 left-0 w-full h-full"
				/>
				<div className="flex justify-center">
					<span
						className={cn(
							"text-xs font-medium py-[5px] px-3 rounded-full bg-[#91D9F4]/50",
							{
								"bg-[#AE8BF4]/50": item.status === "답변 전",
							}
						)}
					>
						{item.status}
					</span>
				</div>
			</td>
			<td>
				<div className="text-center">{item.title}</div>
			</td>
			<td>
				<div className="text-center">{item.date}</div>
			</td>
		</tr>
	);
};
const data = [
	{
		status: "완료",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 1,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 2,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 3,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 4,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 5,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 6,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 7,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 8,
	},
	{
		status: "답변 전",
		title: "생기부 분석 질문",
		date: "2024-07-4",
		id: 9,
	},
];
