"use client";
import { Button } from "@/components/button/Button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StepsTabs from "../components/StepsTabs";
export default function BirthCertification() {
	const [active, setActive] = useState(0);
	return (
		<>
			{/* Top Section */}
			<section className="pb-24 lg:pb-[146px]">
				<div className="container">
					<div className="py-20 lg:pt-[161px] lg:pb-[136px]">
						<h2 className="text-[40px] md:text-[50px] lg:text-[64px] mb-2 font-semibold tracking-tighter leading-[1.46] text-center">
							생기부 분석
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 text-center py-[26px] bg-[#C5DEF7]/50">
						<div className="sm:border-r-2 border-dashed border-black/50 p-6 flex flex-col justify-center max-sm:border-b-2">
							<h4 className="font-medium text-2xl mb-3">
								김민지 학부모
							</h4>
							<Link href="/student-record">
								<Button
									text="사용자 설정"
									variant="outlineFilled"
									className="py-[14px] md:min-w-[274px] md:min-h-[66px] text-lg"
								/>
							</Link>
						</div>
						<div className="p-6 flex flex-col justify-center">
							<h4 className="font-medium text-2xl mb-3">이용권</h4>
							<div className="text-[#6A6A6A] text-xl">
								기관권 사용 중 (D-326)
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* */}
			<section className="pb-[120px] lg:pb-[222px]">
				<div className="container">
					<div className="mb-20 lg:mb-[180px]">
						<StepsTabs
							data={[
								{ title: "분석 정보 선택" },
								{ title: "목표 대학/추천 조건 선택" },
								{ title: "분석 완료" },
							]}
							active={active}
						/>
					</div>
					<div className="flex flex-wrap gap-3 justify-between items-center mb-7">
						<div className="disc-title">분석 조건</div>
					</div>
					<div className="bg-[#F8F8F8] px-6 pb-[22px]">
						<div className="flex justify-center">
							<Image
								src="/images/after-login/cap.png"
								width={130}
								height={130}
								alt="cap"
							/>
						</div>
						<h5 className="text-2xl md:text-[32px] md:leading-[1.46] pb-9 mt-3 text-center font-semibold">
							<span className="font-bold">2025학년도</span>를 기준으로
							분석이 진행됩니다.
						</h5>
						<div className="py-10 px-5 bg-[#F1F1F1]">
							<ul className="list-disc pl-5 lg:text-lg lg:leading-[1.59]">
								<li>
									대학 입학처에서 발표한 당해년도 수시모집요강 및
									학생부종합 가이드북에 근거하여 학업/진로/공동체
									역량을 평가합니다.
								</li>
								<li>
									대학-전형-모집단위 리스트는 매년 6~7월 사이에
									업데이트되며, 내부 사정에 따라 일정이 변동될 수
									있습니다..
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-wrap gap-3 justify-between items-center mt-20 lg:mt-[294px] pb-5 border-b-2 border-black">
						<div className="disc-title">자녀 선택</div>
						<button
							className="text-lg md:text-2xl underline cursor-pointer"
							type="button"
						>
							자녀 추가하기
						</button>
					</div>
					<div className="py-8 border-b border-black">
						<RadioGroup defaultValue="김민지, 위례고등학교, 고2">
							<label className="flex gap-2 items-center">
								<RadioGroupItem
									value="김민지, 위례고등학교, 고2"
									className="w-6 h-6"
								/>
								<span>김민지, 위례고등학교, 고2</span>
							</label>
						</RadioGroup>
					</div>
					<div className="flex flex-wrap gap-3 justify-between items-center mt-20 lg:mt-[294px]">
						<div className="disc-title">생기부 조건</div>
						<button
							className="text-lg md:text-2xl underline cursor-pointer"
							type="button"
						>
							생기부 수정하기
						</button>
					</div>
					<div className="bg-[#F8F8F8] px-6 pb-[22px] mt-5 pt-11">
						<div className="flex justify-center">
							<Image
								src="/images/after-login/child.png"
								width={264}
								height={130}
								alt="child"
							/>
						</div>
						<h5 className="text-2xl md:text-[32px] md:leading-[1.46] pb-9 mt-3 text-center font-medium">
							김민지 님의 생기부 성적은
							<span className="font-bold mx-2">3학년</span>, <br />{" "}
							나머지 서류(출결, 창체, 세특, 행종 등)는
							<span className="font-bold mx-2">3학년</span>을 기준으로
							분석됩니다.
						</h5>
						<div className="py-10 px-5 bg-[#F1F1F1]">
							<ul className="list-disc pl-5 lg:text-lg lg:leading-[1.59]">
								<li>
									유니고 AI는 생기부에 모든 내용이 기록되어 있다는
									가정하에 다른 생기부와 비교해 경쟁력을 계산합니다.
								</li>
								<li>
									충분한 기록이 없는 생기부로 분석할 경우 낮게 평가될
									수 있으므로, 모든 기록이 입력된 학년을 기준으로
									분석합니다.
								</li>
							</ul>
							<div className="flex gap-2 mt-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM13 17H11V15H13V17ZM13 13H11L10.5 7H13.5L13 13Z"
										fill="black"
									/>
								</svg>
								<div className="w-0 flex-grow self-center">
									특정 학년으로 분석하려면 아래 내용을 확인해 주세요.
								</div>
							</div>
							<ul className="list-disc pl-14 lg:text-lg lg:leading-[1.59]">
								<li>원하는 학년의 출결, 창체, 성적, 세특 입력</li>
								<li>
									원하는 학년의 창체, 세특에 포함된 특정 문장 삭제
									<ul>
										<li>
											→ 문장: 해당내용은 [공공기관의 정보공개에 관한
											법률]제9조 제1항 제5호에 따라 내부 검토 중인
											사항으로 당해 학년도에는 제공하지 않습니다.
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex justify-center mt-20 lg:mt-[159px]">
						<Link
							href="/home/target-college"
							className="w-full max-w-[515px] block"
						>
							<Button
								text="목표 대학 선택"
								variant="outlineFilled"
								className="py-[14px] text-xl md:text-[28px] md:min-h-[94px] w-full"
							/>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
