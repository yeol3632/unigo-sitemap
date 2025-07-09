"use client";

import { Button } from "@/components/button/Button";
import CustomSearchInput from "@/components/CustomSearchInput";
import { tomatoIcons } from "@/components/icons";
import Link from "next/link";
import PaginatedItems from "../Teacher/PaginatedItems";

export default function Accouncement() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-8">
						공지사항
					</h2>
					<div className="flex flex-wrap justify-between gap-3 mt-12 lg:mt-20">
						<CustomSearchInput
							placeholder="검색하실 키워드를 입력해주세요"
							className="bg-transparent rounded-[8px] lg:min-w-[314px] text-sm"
						/>
						<Link href="/announcement/create-notice">
							<Button
								text="공지 작성"
								variant="secondary"
								className="px-5 !rounded-[5px] h-12 md:min-w-[130px]"
							/>
						</Link>
					</div>
					<div className="mt-6">
						<div className="table-responsive">
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
					<h5 className="line-clamp-1 font-medium">{item.title}</h5>
				</Link>
			</td>
			<td>
				<div className="text-center">{item.views}</div>
			</td>
			<td>
				<div className="text-center">{item.date}</div>
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
			<span className="text-xs leading-[1.32] px-[15px] py-[5px] rounded-full bg-[#8080F2]/25 font-semibold">
				공지
			</span>
		),
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "1",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
	{
		number: 12,
		title: "[공지] 2025학년도 서비스 대학-전형-모집단위 (📢2025.03.12 업데이트)",
		views: "10600",
		date: "2024-07-4",
		id: "2",
	},
];
