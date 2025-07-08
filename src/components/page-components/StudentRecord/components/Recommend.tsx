interface RecommendProps {
	data: {
		title: string;
		description: string;
		icon: React.ReactNode;
	}[];
}
export default function Recommend({ data }: RecommendProps) {
	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<h5 className="text-[40px] md:text-[50px] lg:text-[70px] mb-10 xl:mb-20 text-center mx-auto max-w-[780px] font-semibold">
					이런 분들에게 추천해요!
				</h5>
				<div className="max-w-[1105px] mx-auto flex flex-col gap-7 xl:gap-11">
					{data.map((item, index) => (
						<div
							key={index}
							className="flex items-start gap-4 lg:gap-9 bg-[#F4F4F4] border border-border rounded-xl lg:rounded-[26px] p-5 sm:p-7 md:px-11 md:py-[60px]"
						>
							<div className="w-[60px] md:w-[91px] svg-full">
								{item.icon}
							</div>
							<div className="w-0 flex-grow tracking-tighter">
								<div className="leading-[1.2] tracking-tight text-xl md:text-[40px] mb-5">
									{item.title}
								</div>
								<p className="text-lg md:text-[32px] leading-[1.2]">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
