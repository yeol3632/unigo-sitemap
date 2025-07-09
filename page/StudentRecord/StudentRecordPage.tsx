"use client";
import { FAQ } from "@/components/accordion/FAQ";
import { recommendIcons } from "../InterviewSystem/icons";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import Recommend from "./components/Recommend";
import SatisfiedUser from "./components/SatisfiedUser";
import Try from "./components/Try";
import VividReview from "./components/VividReview";

export default function StudentRecordPage() {
	return (
		<>
			<Banner />
			<Cta />
			<Recommend data={recommendData} />
			<Try data={tryData} />
			<SatisfiedUser />
			<VividReview image={"/images/review/vivid-review-bg.png"} />
			<section className="container px-4 py-10 xl:pb-24">
				<FAQ />
			</section>
		</>
	);
}
const recommendData = [
	{
		title: "내 생기부, 합격선이 어느 정도인지 알고 싶어요.",
		description:
			"단순한 성적이 아니라 내용과 연결성으로 기준으로 객관적으로 진단해드립니다.",
		icon: recommendIcons.check,
	},
	{
		title: "무엇을 더 해야 생기부가 좋아질까요?",
		description: "부족한 부분을 알려주고, 딱 맞는 활동 추천까지 도와드려요.",
		icon: recommendIcons.check,
	},
	{
		title: "전문가 컨설팅은 받고 싶어요 하지만 가격이 너무 부담돼요.",
		description: "유니고 AI는 입시 전문가가 디자인한 진단 모델이라 전문가의 컨설팅과 거의 동일한 합리적인 대안이에요.",
		icon: recommendIcons.check,
	},
];

const tryData = [
	{
		title: "내 생기부, 어디쯤일까?",
		description:
			"전국 백분위 기준으로 장단점과 내신 위치를 한눈에 파악할 수 있어요. (평균 35페이지의 상세 리포트 제공)",
		imageSrc: "/images/try/1.png",
	},
	{
		title: "생기부, 어떻게 보완하지?",
		description:
			"학업·진로·공동체 역량별로 부족한 부분을 체크하고 구체적인 보완 전략까지 받아보세요. 만점에 가까운 생기부, AI와 함께 만들어봐요",
		imageSrc: "/images/try/2.png",
	},
];
