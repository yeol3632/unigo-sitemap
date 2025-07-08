import { testimonials } from "@/data/content";
import Image from "next/image";
export const TestimonialCards = () => {
	return (
		<>
			{testimonials.map((item, index) => (
				<div
					key={index}
					className="bg-[#F0E6E0] p-6 rounded-[12px] [&:nth-child(5)]:md:translate-y-8"
				>
					<div className="flex items-center gap-4">
						<Image
							src={item.profile}
							alt={item.name}
							width={64}
							height={64}
						/>
						<div>
							<h6 className="text-[20px] text-black font-[500]">
								{item.name}
							</h6>
							<p className="text-[#656565] text-[16px]">{item.role}</p>
						</div>
					</div>
					<blockquote className="text-black text-[16px] mt-5">
						“{item.quote}”
					</blockquote>
				</div>
			))}
		</>
	);
};
