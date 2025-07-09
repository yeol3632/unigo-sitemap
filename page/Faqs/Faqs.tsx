"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Faqs() {
	const [active, setActive] = useState<number>(0);
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-8 lg:mb-11">
						자주 묻는 질문
					</h2>
					<div className="border-b border-black/50 flex flex-wrap gap-x-4 mb-14">
						{tabs.map((tab, index) => (
							<button
								type="button"
								key={index}
								className={cn(
									"text-center py-4 cursor-pointer px-4 text-black/50 border-b-2 border-transparent max-sm:text-sm",
									{
										"text-black font-medium border-[#23C3FE]":
											index == active,
									}
								)}
								onClick={() => setActive(index)}
							>
								{tab.title}
							</button>
						))}
					</div>
					<div className="p-4 md:p-6">
						<Accordion
							type="single"
							collapsible
							className="w-full mx-auto border border-[#E5E7EB] p-8 rounded-[20px] flex flex-col gap-3 faq-wrapper"
							defaultValue="item-1"
						>
							{accordionItems.map((item, index) => (
								<AccordionItem
									className=""
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger className="md:text-[24px] text-[#111827] font-[500] px-4 sm:px-6 text-[20px] py-5">
										{item.title}
									</AccordionTrigger>
									<AccordionContent className="">
										<div className="text-[#6B7280] px-4 sm:px-6 md:text-lg text-sm flex flex-col gap-3">
											{item.content.map((content, i) => (
												<p key={i}>{content.text}</p>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}

const tabs = [
	{
		title: "사용 문의",
	},
	{
		title: "분석",
	},
	{
		title: "생기부/성적",
	},
	{
		title: "쿠폰/이용권",
	},
	{
		title: "이벤트",
	},
];

export const accordionItems = [
	{
		title: "생기부 분석을 위해 어떤 파일이 필요한가요?",
		content: [
			{
				text: "창의적 체험활동이나 세부능력 및 특기사항 등의 문장 내용이 어디까지 기재되었는지에 따라 분석 학년이 판단됩니다.",
			},
			{
				text: "정책상 당해년도 학교생활기록부는 정부24와 나이스에서 공개되지 않기 때문에",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "만약, 3학년 학생이고 당해년도 문장 내용을 모두 등록하였음에도 분석 학년이 2학년으로 표시된다면,",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "학교생활기록부 문장 내용 중 ‘해당내용은 「공공기관의 정보공개에 관한 법률」제9조 제1항 제5호에 따라 내부 검토 중인 사항으로 당해학년도에는 제공하지 않습니다.’ 라는 문구가 남아있는지 확인해 주세요.",
			},
			{
				text: "위 내용은 AI가 아직 문장 기록이 완료되지 않았다고 판단하지 않기때문에 해당 내용을 ‘수정하기’ 버튼을 통해 삭제하고 저장 후, 분석해 주시기를 바랍니다.",
			},
			{
				text: "자세한 내용은 홈페이지 우측 하단의 채팅 아이콘(채널톡)으로 문의해 주시길 바랍니다.",
			},
		],
	},
	{
		title: "생기부 분석을 위해 어떤 파일이 필요한가요?",
		content: [
			{
				text: "창의적 체험활동이나 세부능력 및 특기사항 등의 문장 내용이 어디까지 기재되었는지에 따라 분석 학년이 판단됩니다.",
			},
			{
				text: "정책상 당해년도 학교생활기록부는 정부24와 나이스에서 공개되지 않기 때문에",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "만약, 3학년 학생이고 당해년도 문장 내용을 모두 등록하였음에도 분석 학년이 2학년으로 표시된다면,",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "학교생활기록부 문장 내용 중 ‘해당내용은 「공공기관의 정보공개에 관한 법률」제9조 제1항 제5호에 따라 내부 검토 중인 사항으로 당해학년도에는 제공하지 않습니다.’ 라는 문구가 남아있는지 확인해 주세요.",
			},
			{
				text: "위 내용은 AI가 아직 문장 기록이 완료되지 않았다고 판단하지 않기때문에 해당 내용을 ‘수정하기’ 버튼을 통해 삭제하고 저장 후, 분석해 주시기를 바랍니다.",
			},
			{
				text: "자세한 내용은 홈페이지 우측 하단의 채팅 아이콘(채널톡)으로 문의해 주시길 바랍니다.",
			},
		],
	},
	{
		title: "분석 결과는 어떻게 제공되나요?",
		content: [
			{
				text: "창의적 체험활동이나 세부능력 및 특기사항 등의 문장 내용이 어디까지 기재되었는지에 따라 분석 학년이 판단됩니다.",
			},
			{
				text: "정책상 당해년도 학교생활기록부는 정부24와 나이스에서 공개되지 않기 때문에",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "만약, 3학년 학생이고 당해년도 문장 내용을 모두 등록하였음에도 분석 학년이 2학년으로 표시된다면,",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "학교생활기록부 문장 내용 중 ‘해당내용은 「공공기관의 정보공개에 관한 법률」제9조 제1항 제5호에 따라 내부 검토 중인 사항으로 당해학년도에는 제공하지 않습니다.’ 라는 문구가 남아있는지 확인해 주세요.",
			},
			{
				text: "위 내용은 AI가 아직 문장 기록이 완료되지 않았다고 판단하지 않기때문에 해당 내용을 ‘수정하기’ 버튼을 통해 삭제하고 저장 후, 분석해 주시기를 바랍니다.",
			},
			{
				text: "자세한 내용은 홈페이지 우측 하단의 채팅 아이콘(채널톡)으로 문의해 주시길 바랍니다.",
			},
		],
	},
	{
		title: "보고서에 포함되는 내용은 어떤 것인가요?",
		content: [
			{
				text: "창의적 체험활동이나 세부능력 및 특기사항 등의 문장 내용이 어디까지 기재되었는지에 따라 분석 학년이 판단됩니다.",
			},
			{
				text: "정책상 당해년도 학교생활기록부는 정부24와 나이스에서 공개되지 않기 때문에",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "만약, 3학년 학생이고 당해년도 문장 내용을 모두 등록하였음에도 분석 학년이 2학년으로 표시된다면,",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "학교생활기록부 문장 내용 중 ‘해당내용은 「공공기관의 정보공개에 관한 법률」제9조 제1항 제5호에 따라 내부 검토 중인 사항으로 당해학년도에는 제공하지 않습니다.’ 라는 문구가 남아있는지 확인해 주세요.",
			},
			{
				text: "위 내용은 AI가 아직 문장 기록이 완료되지 않았다고 판단하지 않기때문에 해당 내용을 ‘수정하기’ 버튼을 통해 삭제하고 저장 후, 분석해 주시기를 바랍니다.",
			},
			{
				text: "자세한 내용은 홈페이지 우측 하단의 채팅 아이콘(채널톡)으로 문의해 주시길 바랍니다.",
			},
		],
	},
	{
		title: "개인정보와 생기부 내용은 안전하게 보호되나요?",
		content: [
			{
				text: "창의적 체험활동이나 세부능력 및 특기사항 등의 문장 내용이 어디까지 기재되었는지에 따라 분석 학년이 판단됩니다.",
			},
			{
				text: "정책상 당해년도 학교생활기록부는 정부24와 나이스에서 공개되지 않기 때문에",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "만약, 3학년 학생이고 당해년도 문장 내용을 모두 등록하였음에도 분석 학년이 2학년으로 표시된다면,",
			},
			{
				text: "내신성적은 기재된 당해 학기까지 기재될 수 있으나, 학교생활기록부 분석의 전체 범위는 문장 내용의 기록까지입니다.",
			},
			{
				text: "학교생활기록부 문장 내용 중 ‘해당내용은 「공공기관의 정보공개에 관한 법률」제9조 제1항 제5호에 따라 내부 검토 중인 사항으로 당해학년도에는 제공하지 않습니다.’ 라는 문구가 남아있는지 확인해 주세요.",
			},
			{
				text: "위 내용은 AI가 아직 문장 기록이 완료되지 않았다고 판단하지 않기때문에 해당 내용을 ‘수정하기’ 버튼을 통해 삭제하고 저장 후, 분석해 주시기를 바랍니다.",
			},
			{
				text: "자세한 내용은 홈페이지 우측 하단의 채팅 아이콘(채널톡)으로 문의해 주시길 바랍니다.",
			},
		],
	},
];
