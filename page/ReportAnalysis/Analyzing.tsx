import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";

export default function Analyzing() {
	return (
		<div className="">
			<div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 mb-10 lg:mb-[51px]">
				<label className="flex items-center gap-2 cursor-pointer">
					<Checkbox />
					<span>즐겨찾기만 보기</span>
				</label>
				<select className="select text-sm font-medium h-12 md:h-[54px] bg-[#F3F4F6] pl-5 border border-border md:min-w-[144px]">
					<option value="전체">전체</option>
					<option value="즐겨찾기">즐겨찾기</option>
				</select>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,250px))] gap-3 md:gap-6">
				{Array.from({ length: 10 }).map((_, index) => (
					<div
						key={index}
						className="border border-border px-5 py-[10px] rounded-[10px]"
					>
						<div className="flex justify-between items-center mb-5">
							<span className="text-sm font-medium text-black/50">
								1단계 서류합격예측
							</span>
							<span className="text-xs font-medium text-black py-[5px] px-[15px] bg-[#8080F2]/25 rounded-full">
								적정
							</span>
						</div>
						<h5 className="text-lg font-semibold mb-4">
							DGIST(디지스트)
						</h5>
						<div className="text-sm mb-6">
							<div className="">학생부종합(일반정형)</div>
							<div className="">기초학부</div>
						</div>
						<div className="text-xs font-medium mb-6">
							2025-05-32 18:42:25
						</div>
						<div className="flex gap-[6px]">
							<div className="flex-grow mr-2">
								<Button
									text="리포트  확인"
									className="text-xs !rounded-[4px] h-[34px] w-full"
								/>
							</div>
							<button type="button">{tomatoIcons.star}</button>
							<button type="button">{tomatoIcons.trash}</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
