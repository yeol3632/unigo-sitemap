import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../button/Button";

interface SectionBlockProps {
	label: string;
	heading: React.ReactNode; // allows JSX like line breaks
	description: React.ReactNode;
	buttonText: string;
	onButtonClick?: () => void; // optional click handler
	titleClassName?: string;
	className?: string;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
	label,
	heading,
	description,
	buttonText,
	onButtonClick,
	titleClassName,
	className,
}) => {
	return (
		<div className={cn("text-black flex flex-col items-start", className)}>
			<p className="text-sm lg:text-base mb-6">{label}</p>
			<h3
				className={cn(
					"text-3xl sm:text-4xl md:text-5xl lg:!text-[80px] font-semibold leading-tight mb-6 lg:mb-8",
					titleClassName
				)}
			>
				{heading}
			</h3>
			<p className="text-base lg:text-lg mb-8 lg:mb-10">{description}</p>
			<Button
				text={buttonText}
				variant="primary"
				className="py-3 !font-medium !text-black w-full sm:w-auto !rounded"
				onClick={onButtonClick}
			/>
		</div>
	);
};

export default SectionBlock;
