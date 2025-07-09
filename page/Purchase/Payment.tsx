"use client";
import { Button } from "@/components/button/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { filterText } from "@/lib/filterText";
import { cn } from "@/lib/utils";

import { useState } from "react";

export default function Payment() {
	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState<string>("card");
	const [smsNumber, setSmsNumber] = useState<string>("030-3423-4947");
	const [email, setEmail] = useState<string>("320489@gmail.com");
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1152px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] mb-20 xl:mb-[140px] font-semibold">
						구매
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12 lg:gap-x-16">
						<div className="text-[15px]">
							<div className="pb-5 md:pb-6 border-b-2 border-black">
								<h4 className="h4">이용권 구매 정보</h4>
							</div>
							<div className="flex justify-between py-5 md:py-[30px] border-b border-border">
								<span className="text-[#4E5968]">
									[1년] 무제한 수시 올인원 패키지
								</span>
								<span className="font-medium text-black">
									159,000원
								</span>
							</div>
							<div className="py-6 flex flex-col gap-4 md:gap-6  border-b border-border">
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										[연간권] 생기부ON 1년 무제한 이용권
									</span>
									<span className="font-medium">1개</span>
								</div>
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										[연간권] 생기부ON 1년 무제한 이용권
									</span>
									<span className="font-medium">1개</span>
								</div>
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										[연간권] 생기부ON 1년 무제한 이용권
									</span>
									<span className="font-medium">1개</span>
								</div>
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										[연간권] 생기부ON 1년 무제한 이용권
									</span>
									<span className="font-medium">1개</span>
								</div>
							</div>
							<div className="text-sm text-[#FE564D] mt-3">
								※  해당 상품은 세트 상품으로 이용권 1개 이상 사용 시
								상품이 사용된 것으로 처리됩니다.
							</div>
							<div className="mt-10 md:mt-14">
								<div className="flex flex-wrap gap-3 justify-between items-center pb-5 md:pb-6 border-b-2 border-black">
									<h4 className="h4">쿠폰 사용</h4>
									<span className="text-black/50 h-[42px] bg-[#F3F4F6] rounded-md px-5 py-2 border border-border">
										사용 가능한 쿠폰이 없습니다
									</span>
								</div>
								<div className="flex justify-between py-5 md:py-[30px] border-b border-border">
									<span className="text-[#4E5968]">쿠폰 할인</span>
									<span className="font-medium text-black">0원</span>
								</div>
							</div>
							<div className="mt-10 md:mt-14">
								<div className="pb-5 md:pb-6">
									<h4 className="h4">결제 수단 선택</h4>
								</div>
								<div className="flex flex-wrap gap-3">
									<Button
										text={
											<>
												<h6>신용 카드</h6>
												<small className="text-[10px]">
													카카오페이, 페이코 포함
												</small>
											</>
										}
										className={cn(
											"text-black/50 h-[54px] bg-[#F3F4F6] font-medium text-sm rounded-none w-[120px] flex-grow border border-border",
											{
												"bg-[#AEE2FF] text-[#4A3F3F] border-black":
													selectedPaymentMethod === "card",
											}
										)}
										onClick={() => setSelectedPaymentMethod("card")}
									/>
									<Button
										text="계좌이체"
										className={cn(
											"text-black/50 h-[54px] bg-[#F3F4F6] font-medium text-sm rounded-none w-[120px] flex-grow border border-border",
											{
												"bg-[#AEE2FF] text-[#4A3F3F] border-black":
													selectedPaymentMethod === "account",
											}
										)}
										onClick={() =>
											setSelectedPaymentMethod("account")
										}
									/>
								</div>
							</div>
							<div className="pb-5 md:pb-6 mb-5 md:mb-6 border-b-2 border-black mt-10 md:mt-14">
								<h4 className="h4">결제 정보 알림</h4>
							</div>
							<div className="grid grid-cols-1 gap-3">
								<div className="flex gap-4 items-center">
									<span className="w-[100px] font-medium">SMS</span>
									<div className="w-0 flex-grow">
										<input
											type="text"
											className="w-full border border-border px-5 h-[54px] font-medium text-sm outline-none shadow-none bg-[#F3F4F6]"
											placeholder="030-3423-4947"
											value={smsNumber}
											onChange={(e) =>
												setSmsNumber(filterText(e.target.value))
											}
										/>
									</div>
								</div>
								<div className="flex gap-4 items-center">
									<span className="w-[100px] font-medium">
										이메일 주소
									</span>
									<div className="w-0 flex-grow">
										<input
											type="text"
											className="w-full border border-border px-5 h-[54px] font-medium text-sm outline-none shadow-none bg-[#F3F4F6]"
											placeholder="320489@gmail.com"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<hr className="my-3 border/black-50" />
							<div className="text-sm text-[#4E5968] mt-3">
								※  결제 완료 정보를 SMS와 이메일로 발송해 드립니다.
							</div>
						</div>
						{/*  */}
						<div className="text-[15px]">
							<div className="pb-5 md:pb-6 border-b-2 border-black">
								<h4 className="h4">총 결제 금액</h4>
							</div>
							<div className="border-b border-dashed border-border py-5 md:py-[30px] flex flex-col gap-5">
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										[1년] 무제한 수시 올인원 패키지
									</span>
									<span className="font-medium text-black">
										159,000원
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-[#4E5968]">
										쿠폰 할인 금액
									</span>
									<span className="font-medium text-black">0원</span>
								</div>
							</div>
							<div className="py-5 flex items-center justify-between md:pt-7">
								<span>총 결제 금액</span>
								<span className="text-xl md:text-2xl font-semibold text-black">
									159,000원
								</span>
							</div>
							<div className="p-5 bg-[#F3F4F6] border border-border border-t-black/50 text-sm">
								<span className="font-medium block">
									[서비스 대학-전형-모집단위]
								</span>
								저희 서비스는 정확한 진단을 위해 N개 이상의 실제 합격자
								데이터를 보유한 모집단위를 기준으로 제공되어 소수 전형,
								신설 모집단위, 일부 지방 하위권 대학, 전문대의 경우
								서비스 제공이 어려울 수 있습니다. 사용 후에는 환불이
								어려우니 자세한 내용은 공지사항 또는 FAQ를 확인하시길
								권장드립니다.
								<br />
								<br />
								<span className="font-medium block">
									2025학년도 대학-전형-모집단위 다운로드
								</span>
								<br />
								<span className="font-medium block">
									[상품 안내]
								</span>{" "}
								자녀 1명에게만 적용하여 사용할 수 있습니다. 다수의
								자녀에게 이용권을 적용하길 희망하신다면 자녀의 수 만큼
								상품을 구매해 주세요.
							</div>
							<div className="py-4">
								<label className="flex items-center gap-2 cursor-pointer">
									<Checkbox />
									<span>개인정보 수집 및 이용에 동의합니다.</span>
								</label>
							</div>
							<hr className="border-black/50 mt-6 mb-12" />
							<div className="flex justify-center">
								<Button
									variant="primary"
									text="구매 내역"
									className="bg-bluish text-white !rounded-full w-full max-w-[300px] h-[50px] font-medium text-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
