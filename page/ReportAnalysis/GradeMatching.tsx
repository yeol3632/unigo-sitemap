import { Button } from "@/components/button/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { tomatoIcons } from "@/components/icons";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function GradeMatching() {
	const [selected, setSelected] = useState<string>("진단");

	return (
		<div className="">
			<div className="flex flex-wrap gap-3 mb-8 lg:mb-10">
				<Button
					text="진단"
					className={cn(
						"text-black/50 h-[54px] bg-[#F3F4F6] font-medium text-sm rounded-none w-[120px] flex-grow border border-border",
						{
							"bg-[#AEE2FF] text-[#4A3F3F]": selected === "진단",
						}
					)}
					onClick={() => setSelected("진단")}
				/>
				<Button
					text="추천"
					className={cn(
						"text-black/50 h-[54px] bg-[#F3F4F6] font-medium text-sm rounded-none w-[120px] flex-grow border border-border",
						{
							"bg-[#AEE2FF] text-[#4A3F3F]": selected === "추천",
						}
					)}
					onClick={() => setSelected("추천")}
				/>
			</div>
			<div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 mb-16 lg:mb-[91px]">
				<label className="flex items-center gap-2 cursor-pointer">
					<Checkbox />
					<span>즐겨찾기만 보기</span>
				</label>
				<select className="select text-sm font-medium h-12 md:h-[54px] bg-[#F3F4F6] pl-5 border border-border md:min-w-[144px]">
					<option value="전체">전체</option>
					<option value="즐겨찾기">즐겨찾기</option>
				</select>
			</div>
			<CardWrapper data={selected === "진단" ? mockData : []} />
		</div>
	);
}

interface CardData {
	date: string;
	avgScore: string;
	record: string;
	year: string;
	table: Array<any>;
}
interface CardWrapperProps {
	data: CardData[];
}
const CardWrapper = ({ data }: CardWrapperProps) => {
	return (
		<div className="w-[1308px] mx-auto">
			{data?.length === 0 ? (
				<div className="text-center">
					<h2 className="text-3xl font-semibold md:text-[48px] md:leading-[1.46]">
						분석 내역이 없습니다
					</h2>
					<div className="flex justify-center mt-20 lg:mt-[100px]">
						<Button
							variant="primary"
							text="학종 매칭 분석하기"
							className="bg-bluish text-white !rounded-full w-full max-w-[300px] h-[50px] font-medium text-lg"
						/>
					</div>
				</div>
			) : (
				<Accordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="flex flex-col gap-4 grade-matching"
				>
					{data.map((item, index) => (
						<AccordionItem
							value={`item-${index}`}
							key={index}
							className="grade-matching-card"
						>
							<AccordionTrigger
								className={cn(
									"p-6 flex items-center justify-between bg-white hover:no-underline"
								)}
							>
								<div className="text-left space-y-1">
									<p className="text-xs mb-5">{item.date}</p>
									<div className="flex flex-wrap items-center gap-4 text-xs text-black/50">
										<span className="border-r pr-4 border-black/50">
											내신 기록:{" "}
											<strong className="text-black">
												{item.avgScore}
											</strong>
										</span>
										<span className="border-r pr-4 border-black/50">
											생기부 기록:{" "}
											<strong className="text-black">
												{item.record}
											</strong>
										</span>
										<span>
											대학/전형/모집단위:{" "}
											<strong className="text-black">
												{item.year}
											</strong>
										</span>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="p-6">
								<div className="flex items-center md:gap-5">
									<div className="w-0 flex-grow">
										<div className="overflow-x-auto">
											<table className="table3 text-sm">
												<thead>
													<tr>
														<th className="py-3 px-4 border">
															대학
														</th>
														<th className="py-3 px-4 border">
															전형
														</th>
														<th className="py-3 px-4 border">
															모집단위
														</th>
														<th className="py-3 px-4 border">
															1단계
															<br />
															서류합격예측
														</th>
														<th className="py-3 px-4 border">
															합격자 평균 내신
														</th>
														<th className="py-3 px-4 border">
															내신 경쟁력
														</th>
														<th className="py-3 px-4 border">
															생기부 경쟁력
														</th>
														<th className="py-3 px-4 border">
															리포트
														</th>
													</tr>
												</thead>
												<tbody>
													{item.table.map((table, index) => (
														<tr key={index}>
															<td className="py-3 px-2 sm:px-4">
																<div className="flex flex-wrap items-center justify-between">
																	{tomatoIcons.star2}
																	<span>
																		{table.university}
																	</span>
																</div>
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.type}
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.unit}
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.step1}
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.avg}
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.competition}
															</td>
															<td className="py-3 px-2 sm:px-4">
																{table.recordCompetition}
															</td>
															<td className="py-3 px-2 sm:px-4">
																<button className="px-3 py-1 border text-sm bg-gray-100 hover:bg-gray-200">
																	확인
																</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
									<button type="button" className="px-4">
										{tomatoIcons.trash2}
									</button>
								</div>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			)}
		</div>
	);
};

const mockData = [
	{
		date: "2025-05-23 10:19:08",
		avgScore: "1.42 (3학년)",
		record: "3학년",
		year: "2025학년도",
		table: [
			{
				university: "강릉원주대학교",
				type: "강릉원주대학교",
				unit: "강릉원주대학교",
				step1: "강릉원주대학교",
				avg: "강릉원주대학교",
				competition: "강릉원주대학교",
				recordCompetition: "강릉원주대학교",
			},
		],
	},
	{
		date: "2025-05-23 10:19:08",
		avgScore: "1.42 (3학년)",
		record: "3학년",
		year: "2025학년도",
		table: [
			{
				university: "강릉원주대학교",
				type: "강릉원주대학교",
				unit: "강릉원주대학교",
				step1: "강릉원주대학교",
				avg: "강릉원주대학교",
				competition: "강릉원주대학교",
				recordCompetition: "강릉원주대학교",
			},
		],
	},
	{
		date: "2025-05-23 10:19:08",
		avgScore: "1.42 (3학년)",
		record: "3학년",
		year: "2025학년도",
		table: [
			{
				university: "강릉원주대학교",
				type: "강릉원주대학교",
				unit: "강릉원주대학교",
				step1: "강릉원주대학교",
				avg: "강릉원주대학교",
				competition: "강릉원주대학교",
				recordCompetition: "강릉원주대학교",
			},
		],
	},
	{
		date: "2025-05-23 10:19:08",
		avgScore: "1.42 (3학년)",
		record: "3학년",
		year: "2025학년도",
		table: [
			{
				university: "강릉원주대학교",
				type: "강릉원주대학교",
				unit: "강릉원주대학교",
				step1: "강릉원주대학교",
				avg: "강릉원주대학교",
				competition: "강릉원주대학교",
				recordCompetition: "강릉원주대학교",
			},
		],
	},
	{
		date: "2025-05-23 10:19:08",
		avgScore: "1.42 (3학년)",
		record: "3학년",
		year: "2025학년도",
		table: [
			{
				university: "강릉원주대학교",
				type: "강릉원주대학교",
				unit: "강릉원주대학교",
				step1: "강릉원주대학교",
				avg: "강릉원주대학교",
				competition: "강릉원주대학교",
				recordCompetition: "강릉원주대학교",
			},
		],
	},
];
