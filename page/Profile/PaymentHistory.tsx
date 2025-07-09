"use client";
import PaginatedItems from "../Teacher/PaginatedItems";

export default function PaymentHistory() {
	return (
		<div className="w-full">
			<div className="table-responsive">
				<table className="table2 text-base font-semibold text-[#797979]">
					<thead>
						<tr>
							<th className="py-3">날짜</th>
							<th className="py-3">내용</th>
							<th className="py-3">가격</th>
							<th className="py-3">수량</th>
						</tr>
					</thead>
					<tbody>
						<PaginatedItems
							items={data}
							itemsPerPage={8}
							renderItem={(item) => <TableRow item={item} />}
							colSpan={4}
						/>
					</tbody>
				</table>
			</div>
		</div>
	);
}

const TableRow = ({ item }: { item: any }) => {
	return (
		<tr className="max-md:text-sm">
			<td>
				<div className="text-center">2025-04-09 13:14</div>
			</td>
			<td>
				<div>[1년] 무제한 수시 올인원 패키지</div>
			</td>
			<td>
				<div className="text-center">159,000원</div>
			</td>
			<td>1</td>
		</tr>
	);
};
const data = [
	{
		id: "1",
	},
	{
		id: "2",
	},
	{
		id: "3",
	},
	{
		id: "4",
	},
	{
		id: "5",
	},
	{
		id: "6",
	},
	{
		id: "7",
	},
	{
		id: "8",
	},
	{
		id: "9",
	},
	{
		id: "10",
	},
	{
		id: "11",
	},
	{
		id: "12",
	},
	{
		id: "13",
	},
	{
		id: "14",
	},
	{
		id: "15",
	},
	{
		id: "16",
	},
	{
		id: "17",
	},
	{
		id: "18",
	},
	{
		id: "19",
	},
	{
		id: "20",
	},
];
