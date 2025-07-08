"use client";
import { FAQ } from "@/components/accordion/FAQ";
import { BiographySteps } from "@/components/cards/BiographySteps";
import { Insights } from "@/components/cards/Insights";
import { Keypoints } from "@/components/cards/Keypoints";
import { StrategyReasons } from "@/components/cards/StrategyReasons";

import Image from "next/image";
import Link from "next/link";
import MatchingReport from "./components/MatchingReport";

export default function AiIntro() {
	return (
		<>
			<section className="flex flex-col items-center justify-between relative bg-[#F2EFE7] px-4  pt-[5rem] md:pt-[10rem] lg:pt-[199px] overflow-hidden">
				<div className="flex flex-col items-center justify-center h-full relative z-10">
					<div className="text-black text-center">
						<h1 className="text-5xl md:text-6xl lg:text-[60px] xl:text-[80px] font-semibold leading-tight">
							수험생을 잘 아는 입시 전략 <br /> 대치동 입시연구소가 AI로 설계합니다
						</h1>
						<p className="text-lg font-medium mt-4">
							생기부, 교과, 목표 대학까지 정밀 분석, 단 하나뿐인 나만의
							입시 전략.
						</p>
					</div>
				</div>
				<div className="mt-[4rem] relative z-10">
					<Image
						src="/images/macbook.png"
						alt="ai-intro-bg"
						width={1000}
						height={1000}
						className="w-full sm:w-[80%] md:w-[700px] lg:w-[1000px] mx-auto h-auto"
					/>
				</div>
				<div className="radial-gradient"></div>
			</section>
			{/* entrance exam strategy */}
			<section className="bg-white py-16 px-4 lg:mt-20 overflow-hidden">
				<div className=" mx-auto text-center">
					<h2 className="text-3xl sm:text-[32px] md:text-[48px]">
						혼자 찾기 어려운 입시 전략, 왜 그럴까요?
					</h2>
					<div className="mt-10">
						{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5   mx-auto"> */}
						<StrategyReasons />
					</div>
					{/* </div> */}
				</div>
			</section>
			<main className="overflow-hidden max-w-[1550px] mx-auto">
				{/* biographies  */}
				<section className=" py-16 px-4 lg:mt-20">
					<div className="text-center relative">
						<h3 className="md:!text-[80px] sm:!text-[48px] text-3xl">
							생기부를 제대로 읽어야 전략이 <br /> 보입니다
						</h3>
						<Image
							className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[450px] w-[300px] -z-1"
							src="/images/three-blue-lines.png"
							alt=""
							width={450}
							height={200}
						/>
					</div>
					<div
						style={{
							backgroundImage: "url('/icons/biography_steps/bg.png')",
						}}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 mt-[6rem]  mx-auto  bg-[#F8F8F8] py-[5rem] bg-cover bg-center"
					>
						<BiographySteps />
					</div>
				</section>

				{/* vitality level */}
				<section className="py-16 px-4 lg:mt-20">
					<div className="text-center">
						<h3 className="md:!text-[80px] sm:!text-[48px] text-3xl">
							생기부만 올려도 최적 전략이 착착!
						</h3>
					</div>
					<div className="flex flex-col items-center justify-center gap-10 relative">
						{/* Main Image */}
						<Image
							className="w-[90%] max-w-[579px] h-auto object-contain"
							src="/images/vitality1.png"
							alt="vitality-level"
							width={1000}
							height={1000}
						/>

						{/* Overlay 1 */}
						<Image
							className="absolute object-contain
               w-[60%] max-w-[433px] h-auto
               top-[30%] right-[5%]
               md:w-[433px] md:h-[197px] md:top-[30%] md:right-[15%]"
							src="/images/vitality2.png"
							alt="vitality-level"
							width={1000}
							height={1000}
						/>

						{/* Overlay 2 */}
						<Image
							className="absolute object-contain
               w-[70%] max-w-[488px] h-auto
               top-[65%] left-[5%]
               md:w-[488px] md:h-[367px] md:top-[55%] md:left-[10%]"
							src="/images/vitality3.png"
							alt="vitality-level"
							width={1000}
							height={1000}
						/>
					</div>
				</section>

				<section className="py-16 px-4 lg:mt-20">
					<div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[1160px] gap-10">
						<Keypoints />
					</div>
				</section>

				<section className="py-16 px-4 lg:mt-20 max-lg:pb-0">
					<div className="text-center">
						<h3 className="md:!text-[80px] sm:!text-[48px] text-3xl">
							분석은 끝났습니다. <br />
							이제 전략을 실행할 차례
						</h3>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-16  mx-auto max-w-[1000px] ">
						<Insights />
					</div>
				</section>

				<MatchingReport />

				<section className="py-16 px-4 lg:mt-20">
					<Link href="" className="block">
						<Image
							className="w-[1334px] h-[auto] mx-auto object-contain"
							src="/images/best.png"
							alt=""
							width={2000}
							height={2000}
						/>
					</Link>
				</section>

				<section className="px-4 pb-20 pt-10 lg:mt-[10rem]">
					<FAQ />
				</section>
			</main>
		</>
	);
}
