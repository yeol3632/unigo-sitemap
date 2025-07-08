import { insights } from "@/data/content";
import Image from "next/image";

export const Insights = () => {
	return (
		<>
			{insights.map((insight, index) => (
				<div
					key={index}
					className="bg-white py-[34px] px-[30px] rounded-[12px] insight-card space-y-3"
				>
					<Image
						src={insight.icon}
						alt={insight.title}
						width={40}
						height={40}
					/>
					<h6 className="text-2xl sm:text-[30px] font-[700]">
						{insight.title}
					</h6>
					<p className="text-[15px] text-[#7E7E7E] font-[500]">
						{insight.description}
					</p>
				</div>
			))}
		</>
	);
};
