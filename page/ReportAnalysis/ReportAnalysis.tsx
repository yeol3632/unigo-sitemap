"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Analyzing from "./Analyzing";
import GradeMatching from "./GradeMatching";

export default function ReportAnalysis() {
	const [active, setActive] = useState<string>("생기부 분석");
	const switchUi = () => {
		switch (active) {
			case "생기부 분석":
				return <Analyzing />;
			case "학종 매칭":
				return <GradeMatching />;
			case "교과 분석":
				return <div></div>;
			case "면접 코칭":
				return <div></div>;
			default:
				return <div>생기부 분석</div>;
		}
	};
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1376px] mx-auto">
					<div className="max-w-[1308px]">
						<h2 className="text-3xl md:text-[40px] lg:text-[48px] mb-20 xl:mb-[140px] font-semibold">
							리포트
						</h2>
						<div className="mb-10 md:mb-[58px]">
							<select className="select md:text-lg lg:text-xl h-12 md:h-14 lg:h-[68px] w-full border border-border pl-5">
								<option value="권하윤, 위례고등학교, 2023년 입학">
									권하윤, 위례고등학교, 2023년 입학
								</option>
								<option value="권하윤, 위례고등학교, 2023년 입학">
									위례고등학교, 2023년 입학
								</option>
								<option value="권하윤, 위례고등학교, 2023년 입학">
									위례고등학교
								</option>
							</select>
						</div>
						<div className="">
							<div className="border-b border-black/50 flex flex-wrap gap-x-4 mb-8">
								{tabs.map((tab, index) => (
									<button
										type="button"
										key={index}
										className={cn(
											"text-center py-4 cursor-pointer px-4 text-black/50 border-b-2 border-transparent max-sm:text-sm",
											{
												"text-black font-medium border-[#23C3FE]":
													tab.title === active,
											}
										)}
										onClick={() => setActive(tab.title)}
									>
										{tab.title}
									</button>
								))}
							</div>
							{switchUi()}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const tabs = [
	{
		title: "생기부 분석",
	},
	{
		title: "학종 매칭",
	},
	{
		title: "교과 분석",
	},
	{
		title: "면접 코칭",
	},
];
