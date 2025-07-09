import { cn } from "@/lib/utils";

interface StepsTabsProps {
	data: any;
	active: number;
	onClick?: (index: number) => void;
}

export default function StepsTabs({ data, active, onClick }: StepsTabsProps) {
	return (
		<ul className="flex justify-end flex-wrap gap-5">
			{data.map((item: any, index: number) => (
				<li
					key={index}
					className={cn(
						"flex items-center justify-center cursor-pointer text-black/50 gap-[10px]",
						{
							"text-black": index == active,
						}
					)}
					onClick={() => onClick?.(index)}
				>
					<span className="bg-current w-[26px] aspect-square rounded-full flex items-center justify-center text-[11px]">
						<span className="text-white">{index + 1}</span>
					</span>
					<div className="w-fit">{item.title}</div>
				</li>
			))}
		</ul>
	);
}
