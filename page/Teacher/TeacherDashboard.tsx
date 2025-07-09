"use client";
import { tomatoIcons } from "@/components/icons";
import { useSidebarContext } from "@/components/SidebarProvider";
import Image from "next/image";
import Link from "next/link";
import TeacherSearchComponent from "./TeacherSearchComponent";

export default function TeacherDashboard() {
	const { setIsSidebarOpen, isSidebarOpen } = useSidebarContext();
	return (
		<>
			<TeacherSearchComponent />
			<div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(195px,200px))] gap-3 md:gap-[25px] mb-8 lg:mb-[46px]">
				{data.map((item, index) => (
					<div
						key={index}
						className="p-6 sm:p-[30px] rounded-[30px] md:rounded-[50px] teacher-dashboard-card"
					>
						<div className="flex justify-between items-center mb-4">
							<Image
								width={35}
								height={35}
								className="object-contain"
								src={item.img}
								alt=""
							/>
							<button type="button">{tomatoIcons.ellipsis}</button>
						</div>
						<p className="text-[20px] md:text-[30px] font-semibold mb-[6px]">
							{item.count}
						</p>
						<p className="text-xs">{item.text}</p>
					</div>
				))}
			</div>
			{/*  */}
			<div className="grid md:grid-cols-3 gap-[25px] max-w-[1100px]">
				<div className="md:col-span-1 dashboard-card p-6">
					<h6 className="font-bold text-base mb-[14px]">
						리포트 분석 상태
					</h6>
					<div className="flex flex-wrap gap-x-5 gap-y-1 mb-5">
						<select className="text-[#7B7B7B] outline-none shadow-none">
							<option>상태별</option>
							<option>상태별</option>
							<option>상태별</option>
							<option>상태별</option>
						</select>
						<select className="text-[#7B7B7B] outline-none shadow-none">
							<option>학생별</option>
							<option>학생별</option>
							<option>학생별</option>
							<option>학생별</option>
						</select>
						<select className="text-[#7B7B7B] outline-none shadow-none">
							<option>진행도별</option>
							<option>진행도별</option>
							<option>진행도별</option>
							<option>진행도별</option>
						</select>
					</div>

					<div className="flex flex-col gap-4">
						{Array.from({ length: 4 }).map((_, index) => (
							<Link
								href="#"
								className="flex gap-[10px] items-center"
								key={index}
							>
								<Image
									src="/images/teacher/avatar.png"
									width={45}
									height={45}
									alt=""
								/>
								<div className="w-0 flex-grow flex items-center">
									<div className="w-0 flex-grow">
										<h6 className="text-sm font-semibold">리포트</h6>
										<div className="text-xs text-[#7B7B7B]">
											김민지, 고3
										</div>
									</div>
									<div className="text-sm font-semibold">완료</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="md:col-span-2 dashboard-card p-6">
					<div className="mb-[14px] flex justify-between items-center">
						<h6 className="font-bold text-base">스케줄</h6>
						<button type="button">{tomatoIcons.ellipsis2}</button>
					</div>
					<div className="flex items-center gap-2 mb-[13px]">
						<span className="text-blue2 font-bold">5월 10일</span>
						<span className="w-0 flex-grow h-[1px] bg-[#D6D6D6]"></span>
					</div>
					<div className="flex flex-col gap-[19px]">
						{data2.map((item, i) => (
							<div
								className="flex text-xs font-medium text-[#7B7B7B] gap-[13px]"
								key={i}
							>
								<div className="w-[60px] self-center">{item.time1}</div>
								<span className="w-[3px] bg-black rounded-full"></span>
								<div className="self-center flex-grow w-0 py-2">
									<h6 className="font-semibold text-sm text-black">
										{item.title}
									</h6>
									<p>{item.text}</p>
								</div>
								<div className="self-center">{item.time2}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
const data = [
	{
		img: "/images/teacher/user.png",
		count: "123",
		text: "총 학생 수",
	},
	{
		img: "/images/teacher/book.png",
		count: "123",
		text: "총완료된 리포트 수",
	},
	{
		img: "/images/teacher/clock.png",
		count: "21",
		text: "진행 중 분석 수",
	},
];
const data2 = [
	{
		time1: "9.00 am",
		time2: "9.00-10.00 am",
		title: "코멘트",
		text: "리포트 코멘트달기",
	},
	{
		time1: "11.00 am",
		time2: "9.00-10.00 am",
		title: "코멘트",
		text: "리포트 코멘트달기",
	},
	{
		time1: "1.00 am",
		time2: "9.00-10.00 am",
		title: "코멘트",
		text: "리포트 코멘트달기",
	},
];
