"use client";
import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
	const [active, setActive] = useState(0);
	return (
		<section className="lg:pb-[220px]">
			<div className="container">
				<div className="py-24 lg:py-[180px]">
					<div className="flex justify-center">
						<div className="badge text-[#24252A] bg-[#8080F2]/40 mb-10">
							이용권 구매
						</div>
					</div>
					<h2 className="text-3xl md:text-[40px] lg:text-[58px] mb-2 font-semibold tracking-tighter leading-[1.46] text-center">
						가장 적합한 이용권 구매하기
					</h2>
				</div>
				<div className="border-b border-black/50 flex flex-wrap gap-x-4 mb-14">
					{tabs.map((tab, index) => (
						<button
							type="button"
							key={index}
							className={cn(
								"text-center py-4 cursor-pointer px-4 text-black/50 border-b-2 border-transparent max-sm:text-sm",
								{
									"text-black font-medium border-[#23C3FE]":
										index == active,
								}
							)}
							onClick={() => setActive(index)}
						>
							{tab.title}
						</button>
					))}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
					{pricing.map((item, index) => (
						<div
							key={index}
							className="pricing-card p-[26px] xl:pr-[55px]"
						>
							<span className="p-[11px] text-xs text-white bg-blue2 rounded-[5px]">
								{item.name}
							</span>
							<h3 className="!text-lg mb-6 mt-5 font-medium tracking-tighter leading-[1.46]">
								{item.title}
							</h3>
							<div className="flex items-center text-[10px] gap-2">
								<del className="text-black/40">{item.oldPrice}</del>
								<span className="text-white py-[2.5px] px-[7px] bg-[#FF6242] rounded-full flex items-center">
									<span>{item.discount}</span>{" "}
									<span>{icons.arrowBottom}</span>
								</span>
							</div>
							<div className="price mb-6">
								<div className="text-[37px] font-bold leading-[1.46] flex items-center gap-2">
									<span>{item.price} </span>
									<sub className="font-normal -mt-2 block">원</sub>
								</div>
							</div>
							<Link href="/purchase/payment">
								<Button
									className="w-full !rounded-[5px] !bg-[#111111] hover:!bg-[#333333]"
									variant="secondary"
									text="구매하기"
								/>
							</Link>
							<div className="text-end text-[10px] text-[#252525] pb-8 border-b border-[#111111] mb-6 mt-[5px]">
								자세히 보기
							</div>
							<div className="text-lg font-bold">
								이용 기간/횟수:{" "}
								<span className="font-normal">{item.period}</span>
							</div>
							<div className="text-lg font-bold mt-5 mb-3">
								{item.infotitle}
							</div>
							<ul className="flex flex-col gap-3">
								{item.info.map((info, index) => (
									<li key={index} className="flex gap-[6px]">
										{icons.check}
										<div className="w-0 flex-grow">{info}</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
const tabs = [
	{
		title: "패키지",
	},
	{
		title: "수시 진단 1회",
	},
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
const pricing = [
	{
		name: "전방위 수시 완벽 플랜",
		title: "[1년] 무제한 수시 올인원 패키지",
		oldPrice: "399,500원",
		discount: "60.2%",
		price: "159,000",
		period: "12개월/무제한",
		infotitle: "AI 분석 서비스",
		info: [
			"생기부 분석",
			"학종 매칭 진단",
			"학종 매칭 추천",
			"교과 분석 진단",
			"교과 분석 추천",
			"면접 코칭",
		],
	},
	{
		name: "전방위 수시 완벽 플랜",
		title: "[1년] 무제한 수시 올인원 패키지",
		oldPrice: "399,500원",
		discount: "60.2%",
		price: "159,000",
		period: "12개월/무제한",
		infotitle: "AI 분석 서비스",
		info: [
			"생기부 분석",
			"학종 매칭 진단",
			"학종 매칭 추천",
			"교과 분석 진단",
			"교과 분석 추천",
			"면접 코칭",
		],
	},
	{
		name: "전방위 수시 완벽 플랜",
		title: "[1년] 무제한 수시 올인원 패키지",
		oldPrice: "399,500원",
		discount: "60.2%",
		price: "159,000",
		period: "12개월/무제한",
		infotitle: "AI 분석 서비스",
		info: [
			"생기부 분석",
			"학종 매칭 진단",
			"학종 매칭 추천",
			"교과 분석 진단",
			"교과 분석 추천",
			"면접 코칭",
		],
	},
	{
		name: "전방위 수시 완벽 플랜",
		title: "[1년] 무제한 수시 올인원 패키지",
		oldPrice: "399,500원",
		discount: "60.2%",
		price: "159,000",
		period: "12개월/무제한",
		infotitle: "AI 분석 서비스",
		info: [
			"생기부 분석",
			"학종 매칭 진단",
			"학종 매칭 추천",
			"교과 분석 진단",
			"교과 분석 추천",
			"면접 코칭",
		],
	},
];
const icons = {
	arrowBottom: (
		<svg
			width="10"
			height="12"
			viewBox="0 0 10 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.00022 11.3555C4.82342 11.3554 4.65388 11.2852 4.52888 11.1601L0.528883 7.16014C0.407444 7.0344 0.340247 6.866 0.341766 6.6912C0.343286 6.5164 0.413399 6.3492 0.537004 6.22559C0.66061 6.10198 0.827818 6.03187 1.00262 6.03035C1.17741 6.02883 1.34582 6.09603 1.47155 6.21747L4.33355 9.07947L4.33355 1.35547C4.33355 1.17866 4.40379 1.00909 4.52881 0.884065C4.65384 0.759041 4.82341 0.688803 5.00022 0.688803C5.17703 0.688803 5.3466 0.759041 5.47162 0.884065C5.59665 1.00909 5.66688 1.17866 5.66688 1.35547L5.66688 9.07947L8.52888 6.21747C8.65462 6.09603 8.82302 6.02883 8.99782 6.03035C9.17262 6.03187 9.33982 6.10198 9.46343 6.22559C9.58703 6.3492 9.65715 6.5164 9.65867 6.6912C9.66019 6.866 9.59299 7.0344 9.47155 7.16014L5.47155 11.1601C5.34655 11.2852 5.17701 11.3554 5.00022 11.3555Z"
				fill="white"
			/>
		</svg>
	),
	check: (
		<svg
			width="14"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="7" cy="7.02246" r="7" fill="#111111" />
			<path
				d="M9.79727 4.92188L6.19475 8.52439C6.05807 8.66107 5.83646 8.66107 5.69978 8.52439L4.19727 7.02187"
				stroke="white"
				strokeWidth="0.7"
				strokeLinecap="round"
			/>
		</svg>
	),
};
