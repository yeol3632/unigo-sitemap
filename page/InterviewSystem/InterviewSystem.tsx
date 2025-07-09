"use client";
import { FAQ } from "@/components/accordion/FAQ";
import Recommend from "../StudentRecord/components/Recommend";
import SatisfiedUser from "../StudentRecord/components/SatisfiedUser";
import Try from "../StudentRecord/components/Try";
import VividReview from "../StudentRecord/components/VividReview";
import InterviewBanner from "./components/InterviewBanner";
import { recommendIcons } from "./icons";

export default function InterviewSystem() {
	return (
		<>
			<InterviewBanner />
			<Recommend data={recommendData} />
			<Try data={tryData} />
			<SatisfiedUser
				containerClassName="xl:py-[138px]"
				className="border-none !p-0 !mt-5"
			/>
			<VividReview image={"/images/review/vivid-review-bg-2.png"} />
			<section className="container px-4 py-10 xl:pb-24">
				<FAQ />
			</section>
		</>
	);
}

const recommendData = [
	{
		title: "면접이 처음이라 떨려요... 교수님들은 뭘 물어보시나요?",
		description: "대학∙전형별 자주 나오는 질문을 모아서 알려드립니다.",
		icon: recommendIcons.what,
	},
	{
		title: "생기부를 보고 질문을 예측하는 게 너무 어려워요",
		description: "내 생기부 기반으로 핵심 질문을 자동 생성해드려요.",
		icon: recommendIcons.comment,
	},
	{
		title: "내가 지원한 대학에서 어떤 질문이 나올지 궁금해요",
		description: "대학별 면접 분석으로 미리 알고 철저히 준비하세요!",
		icon: recommendIcons.build,
	},
];
const tryData = [
	{
		title: "내 생기부 기반 예상 질문 24가지",
		description:
			"내 생기부로 뽑은 핵심 질문으로 대학별 면접에 미리 대비하세요. 공통 질문과 꼭 나올만한 중요 체크포인트들이 제공돼요.",
		imageSrc: "/images/try/3.png",
	},
	{
		title: "실전처럼 연습하는 면접 시뮬레이션",
		description:
			"전문가가 직접 설계한 면접 연습지로 실전 감각을 키워보세요. 처음이라도 당황하지 않도록, 리얼한 대비가 가능합니다.",
		imageSrc: "/images/try/4.png",
	},
];
