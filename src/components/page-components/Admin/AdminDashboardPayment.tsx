"use client";
import { cn } from "@/lib/utils";
import PaginatedItems from "../Teacher/PaginatedItems";
import TeacherSearchComponent from "./AdminSearchComponent";

export default function AdminDashboardPayment() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="mb-[14px] flex flex-wrap gap-3 justify-between items-center">
				<h6 className="font-bold text-base md:text-[22px]">
					결제/쿠폰 관리
				</h6>
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
								<th>상품</th>
								<th>결제일</th>
								<th>금액</th>
								<th>결제 수단</th>
								<th>환불 여부</th>
								<th>쿠폰</th>
							</tr>
						</thead>
						<tbody>
							<PaginatedItems
								items={data}
								itemsPerPage={7}
								renderItem={(item) => <TableRow item={item} />}
								colSpan={7}
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
				<div className="text-center">학종 분석</div>
			</td>
			<td>
				<div className="text-center">1/1/25</div>
			</td>
			<td>
				<div className="text-center">29,000원</div>
			</td>
			<td>
				<div className="text-center">카드</div>
			</td>
			<td>
				<div className="flex justify-center">
					<span
						className={cn(
							"text-xs font-medium py-[7px] px-4 rounded-[10px] bg-[#91D9F4]/50",
							{
								"bg-[#FFC47D]/50": item.refund === "환불",
							}
						)}
					>
						{item.refund}
					</span>
				</div>
			</td>
			<td>
				<div className="flex justify-center">
					<span className="text-xs font-medium py-[7px] px-4 border border-black/50 rounded-[10px]">
						쿠폰 발급
					</span>
				</div>
			</td>
		</tr>
	);
};
const data = [
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
	{
		name: "김민지",
		product: "학종 분석",
		date: "1/1/25",
		price: "29,000원",
		paymentMethod: "카드",
		refund: "미환불",
		coupon: "리포트 보기",
	},
];
