import React from "react";

type ButtonProps = {
	text: string | React.ReactNode;
	variant?: "primary" | "secondary" | "outline" | "outlineFilled";
	onClick?: () => void;
	className?: string;
	iconSrc?: string;
	iconAlt?: string;
	iconPosition?: "left" | "right";
	icon?: React.ReactNode;
	type?: "button" | "submit" | "reset";
};

const baseStyles =
	"px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer inline-flex items-center gap-2 flex items-center justify-center";

const variantStyles = {
	primary: "bg-[#AEE2FF] hover:bg-[#7CC1FF] text-[#4A3F3F]",
	secondary: "bg-[#333333] hover:bg-[#4D4D4D] text-white",
	outline:
		"bg-transparent border border-black text-black hover:bg-gray-100 !rounded-full",
	outlineFilled:
		"bg-black text-white border border-black hover:bg-[#1a1a1a] !rounded-full",
};

export const Button: React.FC<ButtonProps> = ({
	text,
	variant = "primary",
	onClick,
	className = "",
	iconSrc,
	iconAlt = "icon",
	iconPosition = "left",
	icon = null,
	type = "button",
}) => {
	const combinedClassName =
		`${variantStyles[variant]} ${baseStyles} ${className}`.trim();

	const iconElement = iconSrc ? (
		<img src={iconSrc} alt={iconAlt} className="w-5 h-5" />
	) : null;

	return (
		<button onClick={onClick} className={combinedClassName} type={type}>
			{iconPosition === "left" && icon}
			{iconPosition === "left" && iconElement}
			<span>{text}</span>
			{iconPosition === "right" && iconElement}
			{iconPosition === "right" && icon}
		</button>
	);
};
