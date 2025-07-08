"use client";
import { Button } from "@/components/button/Button";
import Link from "next/link";
import { useState } from "react";
import StepsTabs from "../components/StepsTabs";
import UniversitySearchModal from "./components/UniversitySearchModal";
export default function TargetCollege() {
	const [universities, setUniversities] = useState([{}]);
	const [open, setOpen] = useState(false);

	const addUniversity = () => {
		if (universities.length < 5) {
			setUniversities([...universities, {}]);
		}
	};
	return (
		<>
			{/* Top Section */}
			<section className="pb-24 lg:pb-[146px]">
				<div className="container">
					<div className="py-20 lg:pt-[138px] lg:pb-[136px] flex flex-wrap gap-x-5 gap-y-10 justify-between items-center">
						<h2 className="text-[40px] md:text-[48px] font-semibold tracking-tighter leading-[1.46] text-center">
							학종 분석
						</h2>
						<StepsTabs
							data={[
								{ title: "분석 정보 선택" },
								{ title: "목표 대학/추천 조건 선택" },
								{ title: "분석 완료" },
							]}
							active={1}
						/>
					</div>
				</div>
			</section>
			{/* */}
			<section className="pb-[120px] lg:pb-[222px]">
				<div className="container">
					{/*  */}
					<div className="">
						<h2 className="text-xl md:text-[32px] font-medium border-b-2 border-black pb-3">
							목표 대학 선택
						</h2>

						{universities.map((_, index) => (
							<div key={index} className="mb-6">
								<div className="py-7">
									<span className="bg-purple2/25 text-black md:text-[22px] font-medium text-sm px-4 py-1 rounded-full">
										대학 {index + 1}
									</span>
								</div>

								<div className="border-t border-b border-black py-10">
									<div className="max-w-[690px]">
										<div className="grid grid-cols-4 gap-2 mb-4 items-center">
											<label className="font-medium col-span-4 md:col-span-1">
												대학
											</label>
											<input
												type="text"
												className="col-span-2 border border-gray-300 px-4 py-2 bg-[#F3F4F6] md:h-[68px]"
												placeholder="대학 입력"
											/>
											<button
												className="bg-[#37393B] text-white px-4 py-2 rounded md:text-xl md:h-[68px] cursor-pointer"
												type="button"
											>
												검색
											</button>
										</div>

										<div className="grid grid-cols-4 gap-2 mb-4 items-center">
											<label className="font-medium col-span-4 md:col-span-1">
												전형
											</label>
											<select className="col-span-3 border border-gray-300 px-4 py-2 md:h-[68px]">
												<option>선택</option>
												<option>공통</option>
												<option>고등학교</option>
											</select>
										</div>

										<div className="grid grid-cols-4 gap-2 mb-4 items-center">
											<label className="font-medium col-span-4 md:col-span-1">
												모집 단위
											</label>
											<input
												type="text"
												className="col-span-2 border border-gray-300 px-4 py-2 bg-[#F3F4F6] md:h-[68px]"
												placeholder="모집 단위 입력"
											/>
											<button
												className="bg-[#37393B] text-white px-4 py-2 rounded md:text-xl md:h-[68px] cursor-pointer"
												type="button"
											>
												검색
											</button>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
											<label className="font-medium col-span-1">
												소개열
											</label>
											<input
												type="text"
												className="col-span-3 border border-gray-300 px-4 py-2 bg-[#F3F4F6] md:h-[68px]"
												placeholder=""
											/>
										</div>
									</div>
								</div>
							</div>
						))}

						<p className="text-sm text-[#4E4EFF]">
							※ 고등학교 유형에 따라 전형 지원 자격이 달라질 수 있습니다.
							수시모집요강에서 자격 요건을 반드시 확인해 주세요.
						</p>

						<button
							className="mt-6 w-full border border-gray-300 py-4 text-center font-medium hover:bg-gray-50 md:h-[68px] md:text-xl"
							onClick={() => setOpen(true)}
						>
							+ 대학 추가하기(최대 5개)
						</button>
					</div>
					{/*  */}
					<div className="flex justify-center mt-20 lg:mt-[159px]">
						<Link
							href="/home/recomended-university"
							className="block w-full max-w-[300px]"
						>
							<Button
								text="목표 대학 선택"
								variant="outlineFilled"
								className="py-[14px] text-lg md:min-h-[50px] w-full !bg-blue2 border-none"
							/>
						</Link>
					</div>
				</div>
				<UniversitySearchModal
					isOpen={open}
					onClose={() => {
						setOpen(false);
					}}
					onSelect={addUniversity}
				/>
			</section>
		</>
	);
}
