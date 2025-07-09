"use client";
import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import PaginatedItems from "../Teacher/PaginatedItems";
import TeacherSearchComponent from "./AdminSearchComponent";

export default function AdminDashboardUser() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="mb-[14px] flex flex-wrap justify-between items-center gap-3">
				<h6 className="font-bold text-base md:text-[22px]">
					내 학생 리스트
				</h6>
				<Button
					text="수정하기"
					variant="secondary"
					className="px-5 !rounded-[5px] h-12 md:min-w-[130px]"
				/>
			</div>
			<div>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th>이름</th>
								<th>이메일</th>
								<th>가입일</th>
								<th>상태</th>
								<th>회원 삭제</th>
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
				<div className="text-center">위례고등학교</div>
			</td>
			<td>
				<div className="text-center">2025.04.02</div>
			</td>
			<td>
				<div className="flex justify-center">
					<span className="text-xs font-medium py-[7px] px-5 border border-black/50 rounded-[10px]">
						활성
					</span>
				</div>
			</td>
			<td>
				<div className="flex justify-center">
					<button type="button">{tomatoIcons.trash}</button>
				</div>
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
