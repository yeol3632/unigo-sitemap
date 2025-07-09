import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";

export default function Pricing() {
	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<h5 className="text-[40px] md:text-[50px] lg:text-[70px] mb-10 xl:mb-20 text-center mx-auto max-w-[780px] font-semibold">
					이용 가격
				</h5>
				<div className="max-w-[1070px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[42px]">
					{data.map((item, index) => (
						<PricingCard
							key={index}
							subtitle={item.subtitle}
							price={item.price}
							list={item.list}
							badgeText={item.badgeText}
							infotext={item.infotext}
							theme={item.theme}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
interface PricingCardProps {
	subtitle: string;
	price: string;
	list: { text: string; checked: boolean }[];
	badgeText?: string;
	infotext?: string;
	theme?: string;
}

const PricingCard = ({
	subtitle,
	price,
	list,
	badgeText,
	infotext,
	theme,
}: PricingCardProps) => {
	console.log("theme", theme);
	return (
		<div
			className={cn(
				"rounded-[32px] p-8 pt-7 pb-10 relative overflow-hidden",
				{
					"border-[2px] border-[#CED3DB]": theme !== "primary",
					"bg-[#46009D] text-white": theme === "primary",
				}
			)}
		>
			<div className="absolute top-0 right-0 pointer-events-none">
				{theme === "primary" ? vector : vector2}
			</div>
			{badgeText ? (
				<div>
					<span
						className={cn(
							"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#FAE7CB] md:text-[27px] md:px-6 md:py-[13.5px] mb-[18px]",
							{
								"text-[#24252A]": theme === "primary",
							}
						)}
					>
						{badgeText}
					</span>
				</div>
			) : (
				<div className="mb-[18px] md:h-[63px] h-[24px]"></div>
			)}
			<div className="text-[22px] md:text-[30px] font-semibold mb-[26px]">
				{subtitle}
			</div>
			<p className="text-5xl md:text-6xl lg:text-[70px] lg:leading-[1] font-bold mb-2 ">
				{price}
			</p>

			<ul className="mt-12 text-xl md:text-2xl flex flex-col gap-3">
				{list.map((item, index) => (
					<li className="flex gap-2 items-center" key={index}>
						{item.checked ? check : uncheck}
						<span className="w-0 flex-grow">{item.text}</span>
					</li>
				))}
			</ul>

			{infotext && (
				<p
					className={cn(
						"mt-6 text-[16px] md:text-md font-medium text-[#acacac] flex items-center gap-2",
						{ "text-[#C2BEBE]": theme === "primary" }
					)}
				>
					{infoIcon}
					{infotext}
				</p>
			)}
			<Button
				text="구매하기"
				variant="primary"
				className="py-3 !font-bold !bg-[#23C3FE] lg:text-[36px] lg:h-[94px] text-white w-full mt-[93px] lg:rounded-[18px]"
				onClick={() => {}}
			/>
		</div>
	);
};

const data = [
	{
		subtitle: "교과 분석 프리미엄",
		price: "79,000원",
		list: [
			{ text: "목표 대학 진단", checked: true },
			{ text: "지원 대학 추천", checked: true },
		],
		badgeText: "추천",
		infotext: "3개월간 무제한으로 이용",
		theme: "primary",
	},
	{
		subtitle: "교과 분석 스탠다드",
		price: "9,000원",
		list: [
			{ text: "목표 대학 진단(1회)", checked: true },
			{ text: "지원 대학 추천", checked: false },
		],
		infotext: "대학 최대 5회",
	},
];
const vector = (
	<svg
		width="312"
		height="237"
		viewBox="0 0 312 237"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M377.907 -84.9291L327.777 -101.076L216.645 15.0602L268.871 45.151L328.36 -17.0169L347.087 115.956L43.1386 -59.5807L0.00395099 -30.531L35.3726 220.608L85.5045 236.771L195.899 121.401L143.673 91.3106L84.9215 152.712L66.3547 20.8764L370.199 196.494L413.438 167.364L377.907 -84.9291Z"
			fill="white"
			fillOpacity="0.2"
		/>
	</svg>
);
const vector2 = (
	<svg
		width="315"
		height="232"
		viewBox="0 0 315 232"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M378.506 -89.7792L328.377 -105.926L217.244 10.2101L269.47 40.3009L328.96 -21.867L347.687 111.106L43.7382 -64.4308L0.60356 -35.3811L35.9722 215.758L86.1041 231.921L196.499 116.551L144.273 86.4605L85.5211 147.862L66.9544 16.0263L370.798 191.644L414.037 162.513L378.506 -89.7792Z"
			fill="url(#paint0_linear_133_1263)"
			fillOpacity="0.2"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_133_1263"
				x1="197.751"
				y1="3.8082"
				x2="228.212"
				y2="211.907"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#CBCBCB" />
				<stop offset="1" stopColor="#F5F5F5" />
			</linearGradient>
		</defs>
	</svg>
);

const infoIcon = (
	<svg
		width="20"
		height="21"
		viewBox="0 0 20 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10 0.0336914C8.02219 0.0336914 6.08879 0.620181 4.4443 1.719C2.79981 2.81781 1.51809 4.3796 0.761209 6.20686C0.00433284 8.03412 -0.193701 10.0448 0.192152 11.9846C0.578004 13.9244 1.53041 15.7062 2.92894 17.1048C4.32746 18.5033 6.10929 19.4557 8.0491 19.8415C9.98891 20.2274 11.9996 20.0294 13.8268 19.2725C15.6541 18.5156 17.2159 17.2339 18.3147 15.5894C19.4135 13.9449 20 12.0115 20 10.0337C20 7.38153 18.9464 4.83799 17.0711 2.96262C15.1957 1.08726 12.6522 0.0336914 10 0.0336914ZM11 16.0337H9V14.0337H11V16.0337ZM11 12.0337H9V4.03369H11V12.0337Z"
			fill="currentColor"
		/>
	</svg>
);
export const check = (
	<svg
		width="39"
		height="39"
		viewBox="0 0 39 39"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19.5073 38.2632C29.8659 38.2632 38.2632 29.8659 38.2632 19.5073C38.2632 9.14875 29.8659 0.751465 19.5073 0.751465C9.14875 0.751465 0.751465 9.14875 0.751465 19.5073C0.751465 29.8659 9.14875 38.2632 19.5073 38.2632Z"
			fill="#1FCC79"
		/>
		<path
			d="M11.0669 20.7294L15.8145 25.1329L27.9472 13.8794"
			stroke="black"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const uncheck = (
	<svg
		width="39"
		height="39"
		viewBox="0 0 39 39"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M19.5068 38.2764C29.8657 38.2764 38.2627 29.8794 38.2627 19.5205C38.2627 9.16164 29.8657 0.764648 19.5068 0.764648C9.14797 0.764648 0.750977 9.16164 0.750977 19.5205C0.750977 29.8794 9.14797 38.2764 19.5068 38.2764ZM27.133 11.8944C27.3964 12.1581 27.5443 12.5157 27.5443 12.8884C27.5443 13.2612 27.3964 13.6187 27.133 13.8825L21.4949 19.5205L27.1311 25.1566C27.3796 25.4233 27.5148 25.776 27.5084 26.1404C27.502 26.5049 27.3543 26.8526 27.0966 27.1103C26.8389 27.368 26.4912 27.5156 26.1267 27.5221C25.7623 27.5285 25.4096 27.3932 25.143 27.1448L19.5068 21.5124L13.8707 27.1485C13.7419 27.2867 13.5866 27.3976 13.4141 27.4744C13.2415 27.5513 13.0552 27.5927 12.8664 27.596C12.6775 27.5993 12.4899 27.5646 12.3147 27.4938C12.1396 27.4231 11.9804 27.3178 11.8469 27.1842C11.7133 27.0506 11.608 26.8915 11.5372 26.7164C11.4665 26.5412 11.4317 26.3536 11.4351 26.1647C11.4384 25.9758 11.4797 25.7896 11.5566 25.617C11.6335 25.4445 11.7444 25.2892 11.8826 25.1604L17.515 19.5205L11.8807 13.8844C11.7425 13.7556 11.6316 13.6003 11.5548 13.4277C11.4779 13.2552 11.4365 13.0689 11.4332 12.88C11.4299 12.6912 11.4646 12.5035 11.5354 12.3284C11.6061 12.1532 11.7114 11.9941 11.845 11.8605C11.9786 11.727 12.1377 11.6217 12.3128 11.5509C12.488 11.4802 12.6756 11.4454 12.8645 11.4487C13.0534 11.4521 13.2396 11.4934 13.4122 11.5703C13.5847 11.6472 13.74 11.758 13.8688 11.8962L19.5068 17.5286L25.143 11.8925C25.4067 11.6291 25.7642 11.4811 26.137 11.4811C26.5098 11.4811 26.8673 11.6291 27.1311 11.8925"
			fill="#FF4949"
		/>
	</svg>
);
