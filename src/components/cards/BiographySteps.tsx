import { biographySteps } from "@/data/content";
import Image from "next/image";

export const BiographySteps = () => {
	return (
		<>
			{biographySteps.map((step, index) => (
				<div key={index} className="flex flex-col items-center gap-2 ">
					<div className="bg-[#1F1F1F] p-[12px] rounded-[12px] biography-step">
						<Image
							src={step.icon}
							alt={step.label}
							width={28}
							height={28}
						/>
					</div>
					<span className="text-2xl sm:text-[32px] font-[500]">
						{step.label}
					</span>
				</div>
			))}
		</>
	);
};
