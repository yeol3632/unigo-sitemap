import { cn } from "@/lib/utils";
import React from "react";
import { tomatoIcons } from "./icons";

interface CustomSearchInputProps {
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	type?: string;
}

export default function CustomSearchInput({
	placeholder,
	value,
	onChange,
	className,
	type,
}: CustomSearchInputProps) {
	return (
		<div className="relative">
			<span className="absolute left-3 top-1/2 -translate-y-1/2 lg:left-5">
				{tomatoIcons.search}
			</span>
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={cn(
					"bg-[#F2F4F5] w-full pl-10 lg:pl-12 pr-3 py-2 border border-[#E5E7EB] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue2 h-12 ",
					className
				)}
			/>
		</div>
	);
}
