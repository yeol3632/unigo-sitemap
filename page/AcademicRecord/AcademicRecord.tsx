"use client";
import { FAQ } from "@/components/accordion/FAQ";
import Pricing from "../AdminSystem/components/Pricing";
import SatisfiedUser from "../StudentRecord/components/SatisfiedUser";
import Try from "../StudentRecord/components/Try";
import VividReview from "../StudentRecord/components/VividReview";
import AcademicRecordBanner from "./components/AcademicRecordBanner";

export default function AcademicRecord() {
	return (
		<>
			<AcademicRecordBanner />
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
		title: "가고 싶은 대학, 합격 가능성은?",
		description:
			"👉 [진단] 원하는 대학을 선택하면 <br /> 내 서류 기준 무제한 합격 예측이 가능합니다.",
		imageSrc: "/images/try/7.png",
	},
	{
		title: "대학 라인업, 어떻게 짜야 할까?",
		description:
			"👉 [추천] 조건을 설정하면 합격 <br /> 확률별 맞춤 대학 리스트를 추천해드려요.",
		imageSrc: "/images/try/8.png",
	},
];
