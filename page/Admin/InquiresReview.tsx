"use client";

import { tomatoIcons } from "@/components/icons";

export default function InquiresReview() {
	return (
		<section className="py-24 lg:py-[120px]">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-[40px] lg:text-[48px] md:leading-[1.46] pb-8 lg:pb-12 border-b border-black mb-10 lg:mb-14">
					이용후기
				</h2>
				<div className="">
					<h6 className="text-2xl pb-12 border-b border-border text-center font-medium">
						생기부 분석 질문
					</h6>
					<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5">
						<span className="w-[81px]">등록일</span>
						<span className="text-black/40">2025-05-25 11:58:41</span>
					</div>
					<div className="mt-5">
						안녕하세요, 생기부 분석 질문이 있습니다.
					</div>
					<hr className="mt-20 lg:mt-[200px]" />
					<div className="mt-5 flex flex-wrap gap-3">
						<button
							type="button"
							className="h-12 px-5 mr-auto text-sm border border-border"
						>
							삭제
						</button>
						<button
							type="button"
							className="h-12 px-5 flex items-center gap-2 text-sm border border-border"
						>
							{tomatoIcons.heart} 2
						</button>
						<button
							type="button"
							className="h-12 px-5 flex items-center gap-2 text-sm text-[#1b1b1b]/80 border border-border"
						>
							링크 복사 {tomatoIcons.link}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
