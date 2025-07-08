import { analysis } from "@/data/content";
import Image from "next/image";

export const Analysis = () => {
	return (
		<>
			{analysis.map((item, index) => (
				<div
					key={index}
					className="border w-full sm:w-[465px] h-auto sm:h-[480px] flex flex-col items-center justify-center py-6 sm:py-[34px] px-4 sm:px-[30px] analysis-card mx-auto"
				>
					<Image
						className="w-[70px] h-[70px] sm:size-[80px]"
						src={item.icon}
						alt={item.title}
						width={100}
						height={100}
					/>
					<h6 className="text-2xl sm:text-[28px] md:text-[40px] font-bold text-center mt-4">
						{item.title}
					</h6>
					<p className="text-[#7E7E7E] text-lg sm:text-[28px] text-center mt-2">
						{item.description}
					</p>
				</div>
			))}
		</>
	);
};
