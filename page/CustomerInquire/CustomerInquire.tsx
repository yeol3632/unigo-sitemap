"use client";

import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import Link from "next/link";
import PaginatedItems from "../Teacher/PaginatedItems";

export default function CustomerInquire() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-8 lg:mb-11">
						1:1 문의내역
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-3 text-center py-[26px] bg-[#C5DEF7]/50">
						<div className="p-6 flex flex-col justify-center sm:border-r border-dashed border-black/50">
							<h4 className="font-medium text-2xl mb-3">전체</h4>
							<div className="text-[#6A6A6A] text-xl">2건</div>
						</div>
						<div className="p-6 flex flex-col justify-center sm:border-r border-dashed border-black/50">
							<h4 className="font-medium text-2xl mb-3">대기중</h4>
							<div className="text-[#6A6A6A] text-xl">1건</div>
						</div>
						<div className="p-6 flex flex-col justify-center">
							<h4 className="font-medium text-2xl mb-3">답변 완료</h4>
							<div className="text-[#6A6A6A] text-xl">1건</div>
						</div>
					</div>

					<div className="mt-16 lg:mt-24 relative">
						<div className="table-responsive">
							<table className="table3">
								<thead>
									<tr>
										<th className="border-t-black">상태</th>
										<th className="border-t-black">제목</th>
										<th className="border-t-black">작성일</th>
									</tr>
								</thead>
								<tbody>
									<PaginatedItems
										items={data}
										itemsPerPage={8}
										renderItem={(item) => <TableRow item={item} />}
										colSpan={3}
										className="pt-20"
									/>
								</tbody>
							</table>
						</div>
						<div className="absolute bottom-16 right-0">
							<Link
								className="block"
								href="/customer-inquire/create-new"
							>
								<Button
									text="문의 작성"
									variant="secondary"
									className="px-5 !rounded-[5px] h-12 md:min-w-[130px]"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

interface TableRowProps {
	item: any;
}
const TableRow = ({ item }: TableRowProps) => {
	return (
		<tr className="text-sm">
			<td>
				<div className="text-center">{item.number}</div>
			</td>
			<td>
				<Link href={`/customer-inquire/${item.id}`} className="text-left">
					<h5 className="line-clamp-1 font-medium">{item.title}</h5>
				</Link>
			</td>
			<td>
				<div className="text-center flex items-center gap-2 justify-center">
					{tomatoIcons.link}
				</div>
			</td>
		</tr>
	);
};
const data = [
	{
		number: (
			<span className="text-xs leading-[1.32] px-[15px] py-[5px] rounded-full bg-[#91D9F4]/25 font-semibold">
				완료
			</span>
		),
		title: "생기부 분석 질문",
		id: "1",
	},
	{
		number: (
			<span className="text-xs leading-[1.32] px-[15px] py-[5px] rounded-full bg-[#8080F2]/25 font-semibold">
				답변 전
			</span>
		),
		title: "질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문 질문질문 질문 질문 질문 질문 질문질문 질문",
		id: "1",
	},
];
