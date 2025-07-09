"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import PageTitle from "../AuthPage/PageTitle";
import EditInformation from "./EditInformation";
import PaymentHistory from "./PaymentHistory";
import ProfileReport from "./ProfileReport";

export default function Profile() {
	const [active, setActive] = useState<string>("내 리포트 목록");

	const switchUi = () => {
		switch (active) {
			case "결제 내역":
				return <PaymentHistory />;
			case "회원 정보 수정":
				return <EditInformation />;
			default:
				return <ProfileReport />;
		}
	};

	return (
		<section className="py-20 lg:py-[113px]">
			<div className="container">
				<PageTitle title="마이 페이지" />
				<div className="flex flex-wrap gap-x-4 md:gap-x-8 lg:gap-x-16 mt-14 lg:mt-[129px] mb-8 relative">
					<div className="absolute border-b border-black/50 w-full left-0 bottom-[3px] pointer-events-none"></div>
					{tabs.map((tab, index) => (
						<button
							type="button"
							key={index}
							className={cn(
								"text-center py-4 cursor-pointer text-black/50 border-b-[8px] border-transparent max-sm:text-sm",
								{
									"text-black font-medium border-[#003478]":
										active == tab.title,
								}
							)}
							onClick={() => setActive(tab.title)}
						>
							{tab.title}
						</button>
					))}
				</div>
				{switchUi()}
				<div className="pb-8 border-b border-[#7D7D7D]"></div>
				{active === "회원 정보 수정" && (
					<div className="flex justify-center">
						<button
							type="submit"
							className="login-btn max-w-[192px] mx-auto h-[57px] mt-12 lg:mt-[80px]"
						>
							다음
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

const tabs = [
	{
		title: "내 리포트 목록",
	},
	{
		title: "결제 내역",
	},
	{
		title: "회원 정보 수정",
	},
];
