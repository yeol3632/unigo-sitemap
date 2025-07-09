import { TestimonialCards } from "@/components/cards/TestimonialCard";
import { navTabs } from "@/data/content";
import Image from "next/image";

export default function Testimonial() {
	return (
		<section className="bg-[url('/images/section5bg.png')] bg-cover bg-center flex flex-col items-center justify-center px-6 sm:px-10 rounded-[24px] py-10 mt-5 lg:mt-[10rem] relative overflow-hidden">
			<Image
				width={80}
				height={80}
				src="/images/vector/thumb.png"
				alt=""
				className="absolute top-[170px] right-[calc(50%+480px)]"
			/>
			<Image
				width={80}
				height={80}
				src="/images/vector/book.png"
				alt=""
				className="absolute top-20 left-[calc(50%+440px)]"
			/>
			<div className="flex flex-col text-center items-center gap-5">
				<div className="flex flex-wrap justify-around gap-3 sm:gap-[4.5rem]">
					{navTabs.map((tab) => (
						<span
							className="text-[#344054] text-center max-sm:text-sm"
							key={tab.label}
						>
							{tab.label}
						</span>
					))}
				</div>
				<h3 className="font-semibold text-3xl sm:text-[48px] md:text-[60px]">
					AI 분석, 실제 사용자의 생생한 <br className="hidden md:block" />{" "}
					반응으로 증명됩니다
				</h3>
				<p className="text-[#6B7280]  ">
					학생부터 학부모, 교사까지. <br className="hidden md:block" />{" "}
					유니고 AI와 함께한 사람들이 전하는 변화의 순간을 확인해보세요.
				</p>
			</div>
			<div className="max-w-[500px] mx-auto md:max-w-[1208px]">
				<div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 mt-10">
					<TestimonialCards />
				</div>
			</div>
		</section>
	);
}
