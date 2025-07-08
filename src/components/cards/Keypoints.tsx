import { keyPoints } from "@/data/content";

export const Keypoints = () => {
	return (
		<>
			{keyPoints.map((point) => (
				<div key={point.id} className="space-y-3">
					<div className="bg-[#1F1F1F] py-2 max-sm:text-sm sm:py-[10px] px-[20px] text-white w-fit rounded-[20px]">
						Key Point {point.id}
					</div>
					<h6 className="font-[700] text-xl sm:text-[26px] text-[#1F1F1F]">
						{point.title}
					</h6>
					<p className="text-[#545454] text-lg sm:text-[21px] font-[500]">
						{point.description}
					</p>
				</div>
			))}
		</>
	);
};
