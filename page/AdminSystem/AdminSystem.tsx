"use client";
import { FAQ } from "@/components/accordion/FAQ";
import SatisfiedUser from "../StudentRecord/components/SatisfiedUser";
import Try from "../StudentRecord/components/Try";
import VividReview from "../StudentRecord/components/VividReview";
import AdminSystemBanner from "./components/AdminSystemBanner";
import Pricing from "./components/Pricing";

export default function AdminSystem() {
	return (
		<>
			<AdminSystemBanner />
			<Try data={tryData} />
			<SatisfiedUser />
			<VividReview image={"/images/review/vivid-review-bg-2.png"} />
			<Pricing />
			<section className="container px-4 py-10 xl:pb-24">
				<FAQ />
			</section>
		</>
	);
}

const tryData = [
	{
		title: "내 서류로 합격할 수 있을까?",
		description:
			"궁금한 대학을 골라만 주세요. 학종진단으로 원하는 대학·전형에 대한 서류 합격 가능성을 무제한 진단해드립니다.",
		imageSrc: "/images/try/5.png",
	},
	{
		title: "어디까지 지원할 수 있을까?",
		description:
			"대학 라인 고민, 이제 AI가 해결해요. 학종추천으로 내 생기부에 맞는 최적의 대학·전형 조합을 무제한 추천받아보세요.",
		imageSrc: "/images/try/6.png",
	},
];
