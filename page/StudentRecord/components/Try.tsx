import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface StepCardProps {
	stepNumber: number;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt?: string;
	flipped?: boolean;
}
interface TryProps {
	data: {
		title: string;
		description: string;
		imageSrc: string;
	}[];
}
export default function Try({ data }: TryProps) {
	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<h5 className="text-[40px] md:text-[50px] lg:text-[70px] mb-10 xl:mb-20 text-center mx-auto max-w-[780px] font-semibold">
					이렇게 활용해 보세요!
				</h5>
				<div className="bg-[#F8F8F8]">
					{data.map((item, index) => (
						<StepCard
							key={index}
							stepNumber={index + 1}
							title={item.title}
							description={item.description}
							imageSrc={item.imageSrc}
							flipped={index % 2 === 1}
						/>
					))}
					<div className="flex justify-center pb-12 lg:pb-[76px]">
						<Button
							text="리포트 샘플 확인하기"
							variant="primary"
							className="py-3 !font-medium !text-black w-full max-w-[599px] rounded-none lg:text-4xl lg:min-h-[102px]"
							onClick={() => {}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
const StepCard = ({
	stepNumber,
	title,
	description,
	imageSrc,
	imageAlt = "Step illustration",
	flipped = false,
}: StepCardProps) => {
	return (
		<div
			className={`flex flex-col lg:flex-row ${
				flipped ? "lg:flex-row-reverse" : ""
			} items-center gap-6 md:gap-10 xl:gap-[86px] rounded-xl justify-evenly px-4 py-10 md:px-[5rem] md:py-[8rem] bg-[#F8F8F8]`}
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				width={544}
				height={600}
				className="w-full max-w-[300px] md:max-w-[544px] h-auto rounded-2xl"
			/>
			<div className="text-center md:text-left mt-6 md:mt-0 text-[#08080C]">
				<p className="text-[16px] md:text-md font-medium mb-2">
					활용법 {stepNumber}.
				</p>
				<h3 className="!text-[24px] md:!text-[50px] xl:!text-[64px] font-semibold mb-2 text-light">
					{title}
				</h3>
				<p
					className={cn(
						"text-[#545454] text-[16px] md:text-2xl max-w-[571px] leading-snug md:leading-[1.4] mt-8"
					)}
					dangerouslySetInnerHTML={{
						__html: description,
					}}
				></p>
			</div>
		</div>
	);
};
