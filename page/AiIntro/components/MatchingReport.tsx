import { Button } from "@/components/button/Button";
import { SchoolStrategy } from "@/components/cards/SchoolStrategy";
import { useState } from "react";

export default function MatchingReport() {
	const [active, setActive] = useState<{
		title: string;
		description: string;
		buttonText: string;
	}>({
		title: "학종 전략의 방향이 보이는 매칭 리포트",
		description:
			"대학/학과/전형 조건과 매칭하여 최적의 학종 지원 전략을 추천합니다.",
		buttonText: "목표 대학 합격률 확인하기",
	});
	const [activeIndex, setActiveIndex] = useState<number>(0);
	return (
		<section className="py-16 px-4 mt-20 flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center gap-10 md:gap-5 lg:gap-20 bg-[#F8F8F8] rounded-[24px] xl:pt-[149px] xl:pb-[125px]">
			<div className="space-y-5 text-center lg:text-left lg:w-1/2 max-w-[614px]">
				<h3 className="!text-3xl md:!text-[48px] lg:!text-[80px] leading-tight">
					{active.title}
				</h3>
				<p className="text-black mb-8 lg:mb-10">{active.description}</p>
				<Button
					text={active.buttonText}
					variant="outlineFilled"
					className="!rounded-sm h-[55px] lg:h-[65px]"
				/>
			</div>
			<div className="flex flex-col gap-5 lg:w-1/2 max-w-[609px]">
				<SchoolStrategy
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setActive={setActive}
				/>
			</div>
		</section>
	);
}
