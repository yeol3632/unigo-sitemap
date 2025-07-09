"use client";

import { Button } from "@/components/button/Button";
import CustomSearchInput from "@/components/CustomSearchInput";
import { tomatoIcons } from "@/components/icons";
import Link from "next/link";
import PaginatedItems from "../Teacher/PaginatedItems";

export default function Community() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-8">
						유니고 입시 커뮤니티
					</h2>
					<p className="md:text-lg">
						입시 정보를 공유합니다. 자유롭게 질문해주세요
					</p>
					<div className="flex flex-wrap justify-between gap-3 mt-12 lg:mt-20">
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
						<div className="flex flex-wrap gap-3">
							<CustomSearchInput
								placeholder="검색하실 키워드를 입력해주세요"
								className="bg-transparent rounded-[8px] lg:min-w-[314px] text-sm"
							/>
							<Link href="/community/create-review">
								<Button
									text="글 작성"
									variant="secondary"
									className="px-5 !rounded-[5px] h-12 md:min-w-[130px]"
								/>
							</Link>
						</div>
					</div>
					<div className="mt-6">
						<div className="table-responsive">
							<table className="table3">
								<thead>
									<tr>
										<th>번호</th>
										<th>제목</th>
										<th>이름</th>
										<th>검수작성일</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<PaginatedItems
										items={data}
										itemsPerPage={8}
										renderItem={(item) => <TableRow item={item} />}
										colSpan={5}
									/>
								</tbody>
							</table>
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
				<Link href={`/community/${item.id}`} className="text-left">
					<h5 className="line-clamp-1 mb-1">{item.title}</h5>
					<p className="text-xs text-[#1b1b1b]/50 line-clamp-1 m-0">
						{item.subtitle}
					</p>
				</Link>
			</td>
			<td>
				<div className="text-center">{item.name}</div>
			</td>
			<td>
				<div className="text-center">{item.date}</div>
			</td>
			<td>
				<div className="text-center flex items-center gap-2 justify-center">
					{item.favorite ? tomatoIcons.heartfill : tomatoIcons.heart}{" "}
					{item.reiews}
				</div>
			</td>
		</tr>
	);
};
const data = [
	{
		number: (
			<span className="text-xs leading-[1.32] px-[15px] py-[5px] rounded-full bg-[#8080F2]/25 font-semibold">
				BEST
			</span>
		),
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "1",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: true,
		id: "2",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "3",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "4",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "5",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "6",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "7",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "8",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "9",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "10",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "11",
	},
	{
		number: 12,
		title: "[학종ON - 진단] 일반고에서 학종으로 대학가기",
		subtitle:
			"일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기일반고에서 학종으로 대학가기[학종ON - 진단] 일반고에서 학종으로 대학가기...",
		name: "김*지",
		date: "2024-07-4",
		reiews: "2",
		favorite: false,
		id: "12",
	},
];
