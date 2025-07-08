import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import PaginatedItems from "../Teacher/PaginatedItems";

export default function ProfileReport() {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
			<PaginatedItems
				items={data}
				itemsPerPage={4}
				renderItem={(item) => <Card item={item} />}
				colSpan={5}
				trClassname="block col-span-full"
				className="block"
				render="div"
			/>
		</div>
	);
}

const Card = ({ item }: { item: string }) => {
	return (
		<div className="border border-border px-5 py-[10px] rounded-[10px] text-[#6D6D6D]">
			<div className="flex justify-between items-center mb-3">
				<span className="text-sm font-medium">1단계 서류합격예측</span>
				<span className="text-xs font-bold text-[#D68E00] py-[5px] px-[15px] bg-[#F6EB73]/25 rounded-[10px]">
					도전
				</span>
			</div>
			<h5 className="text-lg font-bold mb-4">KAIST(카이스트)</h5>
			<div className="text-sm mb-[22px]">
				<div className="mb-4">학생부종합(일반전형)</div>
				<div className="">무학과</div>
			</div>
			<div className="text-xs font-medium mb-8">2025-05-32 18:42:25</div>
			<div className="flex gap-[6px]">
				<button className="svg-full w-7" type="button">
					{tomatoIcons.trash}
				</button>
				<button className="svg-full w-7" type="button">
					{tomatoIcons.star}
				</button>
				<div className="flex-grow mr-2">
					<Button
						text="리포트 상세"
						className="text-xs !rounded-[4px] h-7 w-full !bg-[#003478] text-white"
					/>
				</div>
			</div>
		</div>
	);
};

const data = [
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
	"즐겨찾기",
];
