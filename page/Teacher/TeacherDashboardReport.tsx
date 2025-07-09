"use client";
import { tomatoIcons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TeacherSearchComponent from "./TeacherSearchComponent";

export default function TeacherDashboardReport() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="max-w-[851px]">
				<div className="table-responsive max-w-[700px]">
					<table className="table">
						<thead>
							<tr>
								<th>학생 이름</th>
								<th>리포트</th>
								<th>분석일</th>
								<th>코멘트</th>
								<th>분석 상태</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, index) => (
								<tr key={index}>
									<td>
										<div className="text-sm">{item.name}</div>
									</td>
									<td>
										<div className="flex justify-center">
											<Link
												href="#"
												className="text-xs font-medium py-[7px] px-4 border border-black/50 rounded-[10px] "
											>
												{item.report}
											</Link>
										</div>
									</td>
									<td>
										<div className="text-center text-sm">
											{item.date}
										</div>
									</td>
									<td>
										<div className="text-center text-sm flex justify-center">
											{item.comment || (
												<button type="button">
													{tomatoIcons.pen}
												</button>
											)}
										</div>
									</td>
									<td>
										<div className="flex justify-center">
											<span
												className={cn(
													"text-xs font-medium py-[7px] px-4 bg-[#AE8BF4]/50 rounded-[10px]",
													{
														"bg-[#91D9F4]/50":
															item.status === "완료",
														"bg-[#FFC47D]/50":
															item.status === "오류",
													}
												)}
											>
												{item.status}
											</span>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
const data = [
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "진행중",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "완료",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "완료",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "오류",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "진행중",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "분석 완료시 상담",
		status: "진행중",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "",
		status: "진행중",
	},
	{
		name: "김민지",
		report: "상세보기",
		date: "1/1/25",
		comment: "",
		status: "진행중",
	},
];
