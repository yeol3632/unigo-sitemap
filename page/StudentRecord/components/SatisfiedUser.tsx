import { cn } from "@/lib/utils";
import Image from "next/image";
export default function SatisfiedUser({
	className,
	containerClassName,
}: {
	className?: string;
	containerClassName?: string;
}) {
	return (
		<section className={cn("py-16 lg:py-24")}>
			<div className="container">
				<h5 className="text-[40px] md:text-[50px] lg:text-[70px] mb-10 xl:mb-20 text-center mx-auto max-w-[780px] font-semibold">
					입시컨설턴트가 인정한 <br /> 유니고 AI
				</h5>
				<div
					className={cn(
						"border rounded-xl md:rounded-[50px] py-8 px-5 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 xl:pt-[112px] xl:pb-[70px]",
						containerClassName
					)}
				>
					<div>
						<div
							className={cn(
								"border-t border-dashed border-b border-border pt-12 pb-8 mb-7 md:mt-12",
								className
							)}
						>
							<h4 className="text-2xl sm:text-[32px] xl:text-[44px] leading-[1] mb-2 font-medium">
								유니고 AI의 서비스 만족도
							</h4>
							<div className="text-bluish text-[50px] xl:text-[94px] font-semibold leading-[1] mt-7">
								85%
							</div>
						</div>
						<div className="font-inter">
							<p className="text-[21px] leading-[1] mb-2 font-semibold">
								전체 응답자 1,973명 중
							</p>
							<ul className="list-disc pl-6">
								<li>매우 만족: 993명</li>
								<li>만족: 683 명</li>
							</ul>
						</div>
					</div>
					<div>
						<Image
							className="max-w-full"
							width={638}
							height={348}
							src="/images/satisfied/chart.png"
							alt="user"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
