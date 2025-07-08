import React from "react";

interface StepperProps {
	steps: number;
	currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
	return (
		<div className="flex items-center w-full max-w-md mx-auto">
			{[...Array(steps)].map((_, index) => {
				const isActive = currentStep === index + 1;

				return (
					<React.Fragment key={index}>
						<div
							className={`w-12 h-12 flex items-center justify-center text-lg sm:text-[32px] sm:w-[59px] sm:h-[59px] font-bold rounded-md border transition-all duration-300
                ${
							isActive
								? "bg-[#003366] text-white border-[#003366]"
								: "bg-white text-gray-700 border-black"
						}`}
						>
							{index + 1}
						</div>

						{index < steps - 1 && (
							<div
								className={`h-[6px] flex-1 transition-all duration-300 ${
									index + 1 === currentStep
										? "bg-gradient-to-r from-[#003366] to-white"
										: index + 2 === currentStep
										? "bg-gradient-to-r from-white to-[#003366]"
										: "bg-gray-300"
								}`}
							></div>
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Stepper;
