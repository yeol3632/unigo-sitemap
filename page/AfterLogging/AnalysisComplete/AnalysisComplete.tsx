"use client";

import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function AnalysisComplete() {
	return (
		<section className="py-24 lg:py-[230px]">
			<div className="container">
				<div className="max-w-[1105px] mx-auto text-center">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] mb-7 text-center mx-auto max-w-[780px] font-semibold">
						AI 분석 완료
					</h2>
					<div className="">리포트를 확인해 주세요.</div>
					<Image
						src="/images/analysis-success.svg"
						width={500}
						height={500}
						alt="success"
						className="w-full max-w-[483px] mx-auto"
					/>
					<div className="flex justify-center">
						<Link
							href="/report-analysis"
							className="block w-full max-w-[300px]"
						>
							<Button
								variant="primary"
								text="리포트 확인하기"
								className="bg-bluish text-white !rounded-full w-full"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
