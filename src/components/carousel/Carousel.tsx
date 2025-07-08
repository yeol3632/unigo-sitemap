"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../button/Button";

export type CardData = {
	id: number;
	variant: "primary" | "standard";
	title: string;
	hoverTitle?: string;
	description?: string;
	buttonLabel: string;
	image: string;
};

interface CarouselProps {
	cardData: CardData[];
	activeMenuIndex: number;
	handleMenuChange: (index: number) => void;
}

function Carousel({
	cardData,
	activeMenuIndex,
	handleMenuChange,
}: CarouselProps) {
	return (
		<div className="w-full mx-auto">
			<Swiper
				slidesPerView="auto"
				className="!overflow-visible"
				spaceBetween={24}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 3.5,
					},
				}}
			>
				{cardData.map((card, index) => (
					<SwiperSlide key={card.id}>
						<div
							className="group"
							onClick={() => handleMenuChange(index)}
						>
							<div className="bg-white rounded-xl p-4 shadow-lg w-full md:min-h-[500px] flex flex-col justify-between items-center pb-9">
								<div className="">
									<h6 className="text-[24px] font-semibold">
										{card.title}
									</h6>
									<p className="text-[#808080] text-[16px] mt-2">
										{card.description}
									</p>
								</div>
								<Image
									src={card.image}
									alt={card.title}
									className="w-[180px] md:w-[240px] md:h-[232px] mx-auto rounded-full mb-4 object-cover"
									width={500}
									height={500}
								/>
								<Button
									text={card.buttonLabel}
									variant="secondary"
									className="!rounded !bg-[#1F1F1F] md:h-[65px] md:min-w-[205px] group-hover:!bg-[#AEE2FF] group-hover:text-black"
								/>
							</div>

							<div
								className={cn(
									"rounded-xl p-6 pb-9 flex flex-col justify-between items-center bg-cover bg-center shadow-lg opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full duration-300 transition-all",
									{
										"opacity-100": activeMenuIndex === index,
									}
								)}
								style={{ backgroundImage: `url(${card.image})` }}
							>
								<h2 className="text-[28px] md:text-[40px] font-bold mb-4 text-white ">
									{card.hoverTitle}
								</h2>
								<Button
									text={card.buttonLabel}
									variant="primary"
									className="!rounded md:h-[65px] md:min-w-[205px] !bg-[#AEE2FF] group-hover:text-black"
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Carousel;
