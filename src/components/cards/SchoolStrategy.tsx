import { schoolStrategy } from "@/data/content";
import { cn } from "@/lib/utils";
interface SchoolStrategyProps {
	activeIndex: number;
	setActiveIndex: (index: number) => void;
	setActive: (active: {
		title: string;
		description: string;
		buttonText: string;
	}) => void;
}
export const SchoolStrategy = ({
	activeIndex,
	setActiveIndex,
	setActive,
}: SchoolStrategyProps) => {
	return (
		<>
			{schoolStrategy.map((strategy, index) => (
				<div
					key={index}
					className={cn(
						"bg-white rounded-[20px] border p-[30px] border-[#DDD1C0] space-y-1 cursor-pointer",
						{
							"bg-[#AEE2FF] border-[#AEE2FF]": activeIndex === index,
						}
					)}
					onClick={() => {
						setActiveIndex(index);
						setActive(strategy.content);
					}}
				>
					<h6 className="text-xl lg:text-[28px] font-[600]">
						{strategy.title}
					</h6>
					<p className="text-lg lg:text-[20px] text-[#656565] font-[400]">
						{strategy.description}
					</p>
				</div>
			))}
		</>
	);
};
