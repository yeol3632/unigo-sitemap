"use client";
import { Button } from "@/components/button/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState } from "react";
import StepsTabs from "../components/StepsTabs";
import CategorySelector from "./components/CategorySelector";
export default function RecomendedUniversity() {
	const [checked, setChecked] = useState<Array<string>>([]);
	const [radio, setRadio] = useState<Array<{ name: string; value: string }>>(
		radioData.map((item) => ({
			name: item.name,
			value: item.options[0].id,
		}))
	);

	const handleRadioChange = (name: string, value: string) => {
		setRadio((prev: Array<{ name: string; value: string }>) =>
			prev.map((item) => (item.name === name ? { ...item, value } : item))
		);
	};
	return (
		<>
			{/* Top Section */}
			<section className="pb-24 lg:pb-[146px]">
				<div className="container">
					<div className="pt-20 lb:pb-10 lg:pt-[138px] flex flex-wrap gap-x-5 gap-y-10 justify-between items-center">
						<h2 className="text-[40px] md:text-[48px] font-semibold tracking-tighter leading-[1.46] text-center">
							교과 분석
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
						<h2 className="text-xl md:text-[32px] text-center font-medium border-b-2 border-black pb-16 lg:pb-[164px]">
							추천받을 대학의 조건을 설정해 주세요.
						</h2>
						<div className="border-b border-black py-8">
							<div className="max-w-[1050px] grid grid-cols-[repeat(auto-fill,minmax(69px,100px))] gap-5">
								{checkdata.map((item) => (
									<label
										key={item.id}
										className="flex items-center gap-[10px] cursor-pointer"
									>
										<Checkbox
											checked={checked.includes(item.id)}
											onCheckedChange={() => {
												setChecked((prev) =>
													prev.includes(item.id)
														? prev.filter((id) => id !== item.id)
														: [...prev, item.id]
												);
											}}
											className="size-[18px]"
										/>
										<span className="text-[16px] font-medium text-black/50">
											{item.label}
										</span>
									</label>
								))}
							</div>
						</div>
						{/*  */}
						<div className="grid grid-cols-1 md:grid-cols-2 py-24 lg:py-[148px] gap-y-16 lg:gap-y-[94px] gap-x-10 lg:gap-x-14">
							{radioData.map((item) => {
								const selectedValue =
									radio.find((r) => r.name === item.name)?.value || "";

								return (
									<div key={item.name}>
										<h2 className="text-xl md:text-[32px] font-medium border-b-2 border-black pb-7">
											{item.title}
										</h2>
										<RadioGroup
											value={selectedValue}
											onValueChange={(val) =>
												handleRadioChange(item.name, val)
											}
											className="py-6 border-b border-black flex flex-wrap gap-x-9 gap-y-3"
										>
											{item.options.map((option) => (
												<label
													key={option.id}
													className="flex items-center gap-[10px] text-black/50 font-medium cursor-pointer"
												>
													<RadioGroupItem
														value={option.id}
														className="size-6"
													/>
													<span>{option.label}</span>
												</label>
											))}
										</RadioGroup>
									</div>
								);
							})}
						</div>
						{/*  */}
						<h2 className="text-xl md:text-[32px] font-medium border-b-2 border-black pb-4">
							전공계열
						</h2>

						<CategorySelector />
					</div>
					{/*  */}
					<div className="flex justify-center mt-20 lg:mt-[159px]">
						<Link
							href="/home/modifications"
							className="w-full max-w-[300px] block"
						>
							<Button
								text="옵션 적용 & 추천 대학 확인"
								variant="outlineFilled"
								className="py-[14px] text-lg md:min-h-[50px] w-full !bg-blue2 border-none"
							/>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

const checkdata = [
	{ label: "전체", id: "1" },
	{ label: "서울", id: "2" },
	{ label: "전체", id: "3" },
	{ label: "전체", id: "4" },
	{ label: "전체", id: "5" },
	{ label: "전체", id: "6" },
	{ label: "전체", id: "7" },
	{ label: "전체", id: "8" },
	{ label: "울산", id: "9" },
	{ label: "울산", id: "10" },
	{ label: "울산", id: "11" },
	{ label: "울산", id: "12" },
	{ label: "울산", id: "13" },
	{ label: "울산", id: "14" },
	{ label: "울산", id: "15" },
	{ label: "울산", id: "16" },
	{ label: "경남", id: "17" },
	{ label: "경남", id: "18" },
];
const radioData = [
	{
		title: "여자 대학",
		name: "gender",
		options: [
			{
				label: "포함",
				id: "1",
			},
			{
				label: "제외",
				id: "2",
			},
		],
	},
	{
		title: "최저 등급",
		name: "grade",
		options: [
			{
				label: "없음",
				id: "1",
			},
			{
				label: "상관없음",
				id: "2",
			},
		],
	},
	{
		title: "서류 평가",
		name: "paper",
		options: [
			{
				label: "없음",
				id: "1",
			},
			{
				label: "상관없음",
				id: "2",
			},
		],
	},
	{
		title: "면접평가 여부",
		name: "interview",
		options: [
			{
				label: "없음",
				id: "1",
			},
			{
				label: "상관없음",
				id: "2",
			},
		],
	},
];

const data = {
	categories: [
		{
			label: "공학계열",
			sub: [
				{
					label: "전체",
					sub: [
						"경영정보 기술경영",
						"경영정보 기술경영",
						"경영정보 기술경영",
						"경영정보 기술경영",
					],
				},
				{
					label: "경영/경제",
					sub: [],
				},
				{
					label: "법",
					sub: [],
				},
				{
					label: "사회과학",
					sub: [],
				},
			],
		},
	],
};
