import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Banner() {
	return (
		<section className="bg-[#131112] overflow-hidden">
			<div className="py-20 sm:pt-[161px] sm:pb-[460px] container relative">
				<div className="text-center">
					<div className="relative z-10 inline-flex mx-auto text-sm font-medium text-white py-[5px] px-4 rounded-full bg-[#8080F2] mb-[18px]">
						생기부 진단(고1.2)
					</div>
					<h1 className="relative z-10 text-[40px] md:text-[50px] lg:text-[80px] mb-2 text-center font-semibold text-white">
						내 생기부 괜찮을까?
					</h1>
				</div>
				<div className="max-sm:grid gap-5 max-sm:mt-10 max-sm:max-w-[320px] mx-auto">
					{data.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							subtitle={item.subtitle}
							className={item.className}
							index={index}
						/>
					))}
					<Image
						src="/images/banner/1.png"
						alt=""
						width={240}
						height={160}
						className="absolute top-[321px] right-[calc(50%+440px)]"
					/>
					<Image
						src="/images/banner/2.png"
						alt=""
						width={240}
						height={160}
						className="absolute top-[301px] left-[calc(50%+400px)]"
					/>
				</div>
			</div>
		</section>
	);
}
interface CardProps {
	title: string;
	subtitle: string;
	className?: string;
	index: number;
}
const Card = ({ title, subtitle, className, index }: CardProps) => {
	return (
		<div
			className={cn(
				"flex flex-col text-center gap-2 bg-[#1B1A1B] border-[#2E2E2E] border rounded-xl py-4 px-4 w-[292px] min-h-[224px] justify-center sm:absolute max-sm:left-[unset] max-sm:bottom-[unset] max-sm:top-[unset] max-sm:right-[unset] max-sm:translate-x-0 max-sm:translate-y-0 max-sm:w-full",
				className,
				{
					"top-[63px] right-[calc(50%+320px)] lg:right-[calc(50%+420px)]":
						index == 0,
					"bottom-[35px] right-[calc(50%+200px)] lg:right-[calc(50%+260px)]":
						index == 1,
					"bottom-[144px] right-1/2 translate-x-1/2": index == 2,
					"top-[44px] left-[calc(50%+300px)] lg:left-[calc(50%+400px)]":
						index == 3,
					"bottom-[53px] left-[calc(50%+260px)]": index == 4,
				}
			)}
		>
			<div className="text-white text-lg md:text-2xl font-medium">
				{title}
			</div>
			<div
				className="text-[#6A6A6A] text-[16px] md:text-lg font-medium px-2"
				dangerouslySetInnerHTML={{ __html: subtitle }}
			></div>
		</div>
	);
};
const data = [
	{
		title: "객관적인 나의 위치",
		subtitle:
			"전국 데이터와 비교해 <br/> 백분위 기반으로 내 생기부 수준을 확인할 수 있어요.",
		className: "",
	},
	{
		title: "합격 가능성 예측",
		subtitle:
			"희망하는 대학·전형·모집단위별 합격 가능성을 <br/> AI가 정밀하게 분석해드립니다.",
		className: "",
	},
	{
		title: "탐구 활동 & 독서 추천",
		subtitle:
			"생기부 흐름에 맞춰 추천할 탐구 주제와 독서 자료까지 함께 제공돼요.",
		className: "",
	},
	{
		title: "생기부 보완 가이드",
		subtitle:
			"부족한 역량은 무엇이고, <br/> 어떤 활동으로 채우면 좋을지 구체적으로 안내해드려요.",
		className: "w-[319px]",
	},
	{
		title: "전공 추천 & 진로 적합성 진단",
		subtitle:
			"나의 활동과 강점을 바탕으로 <br/> 어울리는 전공 계열과 진로 방향을 제시합니다.",
		className: "w-[319px]",
	},
];
