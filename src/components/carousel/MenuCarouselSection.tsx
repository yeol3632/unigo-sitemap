"use client";

import MenuItems from "@/components/MenuItem";
import Carousel, { CardData } from "@/components/carousel/Carousel";
import { useState } from "react";

export default function MenuCarouselSection() {
	const [activeMenuIndex, setActiveMenuIndex] = useState(0);

	const handleMenuChange = (index: number) => {
		setActiveMenuIndex(index);
	};

	return (
		<section className="flex flex-col items-center justify-center  gap-6 lg:gap-8 px-6 sm:px-10 py-10 mt-10 lg:mt-[10rem] overflow-hidden">
			<div className="text-center">
				<p className="tracking-widest text-[#6B7280]">#AI입시컨설팅</p>
				<h3 className="text-3xl sm:text-[48px] md:text-[80px] mt-3">
					나에게 딱 맞는 입시 분석,
					<br className="hidden md:block" /> 지금 확인해보세요
				</h3>
			</div>
			{/*  */}
			<div className="flex flex-wrap justify-center gap-x-5 gap-y-2 xl:gap-[4rem]">
				<MenuItems
					activeMenuIndex={activeMenuIndex}
					onMenuChange={handleMenuChange}
				/>
			</div>
			<div className="mt-10 w-full">
				<Carousel
					activeMenuIndex={activeMenuIndex}
					handleMenuChange={handleMenuChange}
					cardData={cardData}
				/>
			</div>
		</section>
	);
}

export const cardData: CardData[] = [
	{
		id: 1,
		variant: "standard",
		title: "생기부진단(고1.2)",
		hoverTitle: "내 생기부 단점 찾아 — 핵심 보완으로 처방",
		description: "생기부 심층 분석으로 핵심 내용과 장,단점 추출",
		buttonLabel: "생기부진단 받기",
		image: "/images/carousel/card1.png",
	 },
	 {
		id: 2,
		variant: "standard",
		title: "학종 매칭",
		hoverTitle: "내 생기부 맞춤 대학(학과)는 따로 있다 — 학종 전략 매칭",
		description: "원하는 대학별 맞춤 합격 컨설팅 — 학종 전형 매칭",
		buttonLabel: "학종 매칭 받기",
		image: "/images/carousel/card2.png",
	 },
	 {
  
				  id: 3,
		variant: "standard",
		title: "교과 지원",
		hoverTitle: "대학별 맞춤 내 교과성적 산출 — 합격대학 분석 리포트",
		description: "과목등급, 진로선택 적용, 대학 반영식까지 분석",
		buttonLabel: "교과 지원 받기",
		image: "/images/carousel/card3.png",
	 },
	 {
		id: 4,
		variant: "primary",
		title: "면접 코칭",
		hoverTitle: "생기부기반 지원 대학 맞춤 AI 면접 시뮬레이션",
		description: "학과 전공(진로)+인재상 등 적중예상문제&답안 생성.",
		buttonLabel: "면접 코칭 받기",
		image: "/images/carousel/card4.png",
	 },   
];
