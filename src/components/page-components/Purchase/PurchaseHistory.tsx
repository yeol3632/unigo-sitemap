import { Button } from "@/components/button/Button";

export default function PurchaseHistory() {
	return (
		<section className="py-24 lg:py-[200px]">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] mb-8 lg:mb-11 font-semibold tracking-tighter leading-[1.46]">
						구매내역
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-3 text-center py-[26px] bg-[#FFCEBF]/40">
						<div className="p-6 flex flex-col justify-center sm:border-r border-dashed border-black/50">
							<h4 className="font-medium text-2xl mb-3">구매</h4>
							<div className="text-[#6A6A6A] text-xl">1건</div>
						</div>
						<div className="p-6 flex flex-col justify-center sm:border-r border-dashed border-black/50">
							<h4 className="font-medium text-2xl mb-3">쿠폰</h4>
							<div className="text-[#6A6A6A] text-xl">0개</div>
						</div>
						<div className="p-6 flex items-center justify-center gap-1">
							<Button
								text="이용건함"
								variant="secondary"
								className="lg:h-12"
							/>
							<Button
								text="쿠폰함"
								variant="secondary"
								className="lg:h-12"
							/>
						</div>
					</div>
					<div className="mt-16 lg:mt-[110px] border-t border-black">
						<div className="flex flex-wrap justify-between p-5 border-b border-border">
							<div className="text-sm">
								<span>2025-04-09 13:14</span>
								<h6 className="text-lg font-medium mt-3">
									[1년] 무제한 수시 올인원 패키지
								</h6>
								<span>159,000원 | 수량 1</span>
							</div>
							<div className="flex gap-3">
								<Button
									text="상세보기"
									variant="secondary"
									className="bg-transparent border !text-[#A2A9B0] border-[#A2A9B0] h-10 text-sm !px-4 hover:text-white hover:bg-[#333333] hover:border-[#333333]"
								/>
								<Button
									text="환불 요청"
									variant="secondary"
									className="bg-transparent border !text-[#A2A9B0] border-[#A2A9B0] h-10 text-sm !px-4 hover:text-white hover:bg-[#333333] hover:border-[#333333]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
