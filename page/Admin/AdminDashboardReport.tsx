"use client";
import PaginatedItems from "../Teacher/PaginatedItems";
import TeacherSearchComponent from "./AdminSearchComponent";

export default function AdminDashboardReport() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="mb-[14px] flex flex-wrap gap-3 justify-between items-center">
				<h6 className="font-bold text-base md:text-[22px]">리포트 관리</h6>
				<div className="flex flex-wrap gap-3">
					<select className="select h-12 border border-border pl-5 rounded-[8px]">
						<option value="">최신 순</option>
						<option value="">오래된 순</option>
					</select>
					<select className="select h-12 border border-border pl-5 rounded-[8px]">
						<option value="">전체</option>
						<option value="">검수 완료</option>
					</select>
				</div>
			</div>
			<div>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th>회원 이름</th>
								<th>업로드일</th>
								<th>파일</th>
								<th>검수</th>
								<th>코멘트</th>
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
	item: any;
}
const TableRow = ({ item }: TableRowProps) => {
	return (
		<tr className="text-sm">
			<td>
				<div className="text-center">김민지</div>
			</td>
			<td>
				<div className="text-center">2025.04.02</div>
			</td>
			<td>
				<div className="flex justify-center">
					<span className="text-xs font-medium py-[7px] px-4 border border-black/50 rounded-[10px]">
						리포트 보기
					</span>
				</div>
			</td>
			<td>
				<div className="text-center">승인</div>
			</td>
			<td>
				<div className="text-center">승인</div>
			</td>
		</tr>
	);
};
const data = [
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
	{
		name: "김민지",
		email: "minji@naver.com",
		date: "2025.04.02",
		status: "활성",
	},
];
