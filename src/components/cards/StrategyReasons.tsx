import { strategyReasons } from "@/data/content";
import Marquee from "react-fast-marquee";

export const StrategyReasons = () => {
	return (
		<Marquee speed={40} className="py-10 !bg-transparent">
			{strategyReasons.map((reason, index) => (
				<div className="bg-white p-6 rounded-[16px] h-[170px] text-[20px] leading-tight text-[#1A1A1A] strategy-reason-card py-[24px] px-[32px] flex items-center justify-center mx-[10px] text-center max-w-[350px]">
					{reason}
				</div>
			))}
		</Marquee>
	);
};
