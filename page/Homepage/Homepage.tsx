"use client";
import { FAQ } from "@/components/accordion/FAQ";
import SectionBlock from "@/components/block/SectionBlock";
import MenuCarouselSection from "@/components/carousel/MenuCarouselSection";
import { steps } from "@/data/content";
import Image from "next/image";
import ChildProperty from "./components/ChildProperty";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

export default function Homepage() {
	return (
		<main className="overflow-hidden px-4 max-w-[1472px] mx-auto">
			{/* Hero Section */}
			<Hero />
			<ChildProperty />

			{/* FIRST SOLUTION */}
			<section className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 gap-[5rem] lg:gap-8 py-[6rem] lg:py-[8rem]">
				<SectionBlock
					label="Solution 1. 생기부 분석"
					heading={
						<>
							생기부만 업로드하면,<br />전략은 유니고AI가 설계합니다
						</>
					}
					description="생기부 전체를 유니고AI가 분석하여, 핵심 키워드와 역량을 자동 추출합니다."
					buttonText="지원 가능 대학 확인하기"
					titleClassName="lg:!text-[70px]"
					className="flex-grow"
				/>

				<ul className="flex flex-col gap-6 sm:gap-8 lg:gap-[4rem] lg:w-1/2 lg:max-w-[597px]">
					{steps.map((step) => (
						<li key={step.title} className="flex gap-4 lg:gap-5 group">
							<div className="relative">
								<div className="bg-[#1f1f1f] aspect-square flex items-center size-12 sm:size-14 lg:size-[63px]  justify-center rounded-full">
									<Image
										src={step.icon}
										alt={step.title}
										width={20}
										height={20}
										className="lg:w-6 lg:h-6"
									/>
								</div>
								<div className="absolute left-6 lg:left-8 top-14 lg:top-[70px] w-[1px] h-[calc(100%-14px)] bg-[#1f1f1f] opacity-50 group-last:hidden"></div>
							</div>
							<div className="space-y-1 lg:space-y-2 flex-1">
								<h4 className="text-lg sm:text-xl lg:text-[26px] font-[700]">
									{step.title}
								</h4>
								<p className="text-sm sm:text-base lg:text-[21px] font-[500] text-[#545454] leading-relaxed">
									{step.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>

			{/* SECOND SOLUTION */}
			<section className="bg-[url('/images/section4bg.png')] bg-cover bg-center  flex items-center px-6 sm:px-10 rounded-[24px] py-[4rem] lg:py-[8rem]">
				<div className="flex flex-col lg:flex-row items-center lg:items-end justify-evenly w-full gap-6 lg:gap-8 max-w-[1300px] mx-auto">
					<div className="w-full flex justify-center lg:w-auto">
						<Image
							src="/images/section4data.png"
							alt="data"
							width={1000}
							height={1000}
							className="w-full max-w-[545px] h-auto lg:h-[528px] object-contain"
						/>
					</div>
					<SectionBlock
						label="Solution 2. 학종 매칭"
						heading={
							<>
								학종 전략의 방향이
								<br /> 보이는 매칭 리포트
							</>
						}
						description="생기부 전체를 AI가 분석하여, 핵심 키워드와 역량을 자동 추출합니다."
						buttonText="목표 대학 합격률 확인하기"
						className=""
					/>
				</div>
			</section>

			{/* THIRD SOLUTION */}
			<section className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-6 sm:px-10 py-[4rem] lg:py-[8rem]">
				<SectionBlock
					label="Solution 3.  교과 성적 분석"
					heading={
						<>
							교과 성적 변동 추이,
							<br /> 과목별 강약점 분석
						</>
					}
					description={
						<>
							단순 평균이 아닌, 성적 추이와 과목별 성향을 종합
							분석합니다. 교과전형 <br /> 가능성부터 내신 개선 전략까지
							한 번에 확인하세요.
						</>
					}
					buttonText="지원 가능 대학 확인하기"
				/>
				<div className="w-full max-w-[507px] h-auto lg:h-[489px]">
					<Image
						className="w-full h-full object-contain"
						src="/images/solution3.png"
						alt="solution 3"
						width={1000}
						height={1000}
					/>
				</div>
			</section>

			{/* FOURTH SOLUTION */}
			<section className="flex flex-col lg:flex-row items-center justify-center  gap-6 lg:gap-8 px-6 sm:px-10 bg-[url('/images/section4bg.png')] bg-cover bg-center py-[4rem] lg:py-[8rem] rounded-[24px]">
				<div className="w-full max-w-[507px] h-auto lg:h-[489px]">
					<Image
						className="w-full h-full object-contain"
						src="/images/solution4.png"
						alt="solution 4"
						width={1000}
						height={1000}
					/>
				</div>
				<SectionBlock
					label="Solution 4. 면접 코칭"
					heading={
						<>
							생기부 기반 맞춤형
							<br /> 면접 코칭
						</>
					}
					description={
						<>
							질문 의도 파악부터 답변 구조화까지, 실전형 코칭을
							제공합니다.
						</>
					}
					buttonText="목표 대학 면접 분석하기"
				/>
			</section>

			{/* AI entrance exam consulting */}
			<MenuCarouselSection />

			{/* TESTIMONIAL */}
			<Testimonial />

			{/* FAQ */}
			<section className="sm:px-10 py-10 lg:mt-[10rem]">
				<FAQ />
			</section>
		</main>
	);
}
