"use client";

import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import AbilityTable from "./components/AbilityTable";
import Attendence from "./components/Attendence";
import BehavioralCharacteristics from "./components/BehavioralCharacteristics";
import CertificationsAquired from "./components/CertificationsAquired";
import CreativeExperienceTable from "./components/CreativeExperienceTable";
import GeneralElectiveSubjects from "./components/GeneralElectiveSubjects";
import PhysicalEducationSubjects from "./components/PhysicalEducationSubjects";
import VolunteerActivity from "./components/VolunteerActivity";

export default function Modifications() {
	return (
		<>
			{/* Top Section */}
			<section className="pb-24 lg:pb-[146px]">
				<div className="container">
					<div className="py-20 lg:pt-[138px] lg:pb-[136px] flex flex-wrap gap-x-5 gap-y-10 justify-between items-center">
						<h2 className="text-[40px] md:text-[48px] font-semibold tracking-tighter leading-[1.46] text-center">
							생활기록부
						</h2>
					</div>
				</div>
			</section>
			{/* */}
			<section className="pb-[120px] lg:pb-[222px]">
				<div className="container">
					<div className="flex flex-wrap gap-3 justify-between items-center mb-6">
						<h3 className="!text-2xl md:!text-[32px] font-semibold tracking-tighter leading-[1.46] m-0">
							권하윤, 위례고등학교, 2023년 입학
						</h3>
						<div className="flex flex-wrap gap-4">
							<Button
								className="!rounded-lg"
								variant="primary"
								text="업로드"
								icon={tomatoIcons.upload}
							/>
							<Button
								className="!rounded-lg"
								variant="outline"
								text="업로드"
								icon={tomatoIcons.edit}
							/>
						</div>
					</div>
					<Accordion
						type="multiple"
						className="w-full flex flex-col gap-5"
						defaultValue={["item-1", "item-2", "item-3", "item-4"]}
					>
						<AccordionItem value="item-1">
							<AccordionTrigger
								chevronClassName="absolute size-8 right-0 top-1/2 -translate-y-1/2"
								className="hover:no-underline py-0 border-0"
							>
								<div className="border-t-2 border-b border-black py-9 flex flex-wrap gap-2 items-center lg:gap-8 w-full pr-7">
									<span className="text-black bg-[#8080F2]/25 rounded-full text-base font-medium px-[15px] leading-[21px] py-[5px]">
										Step 1
									</span>
									<div className="w-0 flex-grow text-[15px] text-[#4E5968]">
										출결상황, 자격증 및 인증 취득상황
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="">
								<div className="py-9 lg:py-[54px]">
									<div className="max-w-[1134px]">
										<Attendence />
										<div className="mt-12 lg:mt-[75px]">
											<CertificationsAquired />
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger
								chevronClassName="absolute size-8 right-0 top-1/2 -translate-y-1/2"
								className="hover:no-underline"
							>
								<div className="border-t-2 border-b border-black py-9 flex flex-wrap gap-2 items-center lg:gap-8 w-full pr-7">
									<span className="text-black bg-[#8080F2]/25 rounded-full text-base font-medium px-[15px] leading-[21px] py-[5px]">
										Step 2
									</span>
									<div className="w-0 flex-grow text-[15px] text-[#4E5968]">
										창의적체험활동상황, 봉사활동 실적
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="">
								<div className="py-9 lg:py-[54px]">
									<div className="max-w-[1134px]">
										<CreativeExperienceTable />
										<div className="mt-12 lg:mt-[75px]">
											<VolunteerActivity />
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger
								chevronClassName="absolute size-8 right-0 top-1/2 -translate-y-1/2"
								className="hover:no-underline py-0 border-0"
							>
								<div className="border-t-2 border-b border-black py-9 flex flex-wrap gap-2 items-center lg:gap-8 w-full pr-7">
									<span className="text-black bg-[#8080F2]/25 rounded-full text-base font-medium px-[15px] leading-[21px] py-[5px]">
										Step 3
									</span>
									<div className="w-0 flex-grow text-[15px] text-[#4E5968]">
										창의적체험활동상황, 봉사활동 실적
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className="py-9 lg:py-[54px]">
									<div className="max-w-[1134px]">
										<GeneralElectiveSubjects title="1학년  일반선택과목" />
										<div className="mt-10 lg:mt-16">
											<table className="table">
												<tr>
													<th className="border w-[50px]">
														이수단위합계
													</th>
													<td className="border w-[200px] text-left px-8 lg:px-10">
														50
													</td>
												</tr>
											</table>
										</div>
										<div className="mt-10 lg:mt-16">
											<AbilityTable />
										</div>
										{/*  */}
										<div className="mt-10 lg:mt-16">
											<GeneralElectiveSubjects title="1학년 진로선택과목" />
										</div>
										<div className="mt-10 lg:mt-16">
											<table className="table">
												<tr>
													<th className="border w-[50px]">
														이수단위합계
													</th>
													<td className="border w-[200px] text-left px-8 lg:px-10">
														50
													</td>
												</tr>
											</table>
										</div>
										<div className="mt-10 lg:mt-16">
											<AbilityTable />
											<div className="text-sm text-[#787879] mt-3">
												※ 2021년 졸업생 이하는 일반선택, 진로선택
												과목 구분 없이 교과학습발달상황에
												기입됩니다.
											</div>
										</div>
										{/*  */}
										<div className="mt-10 lg:mt-16">
											<PhysicalEducationSubjects title="1학년 진로선택과목" />
										</div>
										<div className="mt-5 lg:mt-6">
											<table className="table">
												<tr>
													<th className="border w-[50px]">
														이수단위합계
													</th>
													<td className="border w-[200px] text-left px-8 lg:px-10">
														50
													</td>
												</tr>
											</table>
										</div>
										<div className="mt-10 lg:mt-16 pb-2 border-b border-black">
											<AbilityTable />
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger
								chevronClassName="absolute size-8 right-0 top-1/2 -translate-y-1/2"
								className="hover:no-underline"
							>
								<div className="border-t-2 border-b border-black py-9 flex flex-wrap gap-2 items-center lg:gap-8 w-full pr-7">
									<span className="text-black bg-[#8080F2]/25 rounded-full text-base font-medium px-[15px] leading-[21px] py-[5px]">
										Step 4
									</span>
									<div className="w-0 flex-grow text-[15px] text-[#4E5968]">
										행동특성 및 종합의견
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="">
								<div className="py-9 lg:py-[54px]">
									<div className="max-w-[1134px]">
										<BehavioralCharacteristics />
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>
		</>
	);
}
