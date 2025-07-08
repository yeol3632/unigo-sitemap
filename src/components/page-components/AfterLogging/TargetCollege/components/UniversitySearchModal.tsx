"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

export default function UniversitySearchModal({
	isOpen,
	onClose,
	onSelect,
}: {
	isOpen: boolean;
	onClose: () => void;
	onSelect: (university: string) => void;
}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeName, setActiveName] = useState("");
	const universities = [
		"DGIST(디지스트)",
		"KAIST(고려대학교)",
		"KISTS(고려대학교)",
		"KISTF(고려대학교)",
		"KISTD(고려대학교)",
		"KISTR(고려대학교)",
		"KISET(고려대학교)",
		"KISQT(고려대학교)",
	];

	const filtered = universities.filter((item) =>
		item.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 bg-black/30 flex items-center justify-center duration-300 transition-all",
				isOpen ? "visible opacity-100" : "invisible opacity-0"
			)}
		>
			<div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-[619px] p-6 md:p-[72px] relative">
				{/* Header */}
				<h4 className="text-lg md:text-[32px] font-semibold text-gray-900 mb-1">
					대학교 검색
				</h4>
				<p className="text-sm text-gray-500 mb-8">
					아래 목록에 없어 검색되지 않는 대학은 해당 전공 계열에 속하는
					학과가 없거나, 합격자 데이터가 적어서 서비스 준비 중인
					대학입니다.
				</p>

				{/* Search Box */}
				<div className="relative mb-3">
					<input
						type="text"
						placeholder="대학 검색"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full border border-gray-300 rounded px-4 py-2"
					/>
					<span className="absolute right-3 top-2.5 text-gray-400">
						{searchIcon}
					</span>
				</div>

				{/* List */}
				<div className="border border-gray-300 rounded max-h-[200px] overflow-y-auto mb-6">
					{filtered.length ? (
						filtered.map((name, idx) => (
							<div
								key={idx}
								className={cn(
									"px-4 py-2 hover:bg-black/10 cursor-pointer text-sm",
									{
										"bg-black/10": name === activeName,
									}
								)}
								onClick={() => {
									setActiveName(name);
								}}
							>
								{name}
							</div>
						))
					) : (
						<div className="px-4 py-2 text-gray-400 text-sm">
							검색 결과가 없습니다
						</div>
					)}
				</div>

				{/* Select Button */}
				<button
					onClick={() => {
						onClose();
						onSelect(activeName);
						setSearchTerm("");
						setActiveName("");
					}}
					className="w-full bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-full font-medium"
				>
					선택
				</button>

				{/* Close Icon */}
				<button
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
					onClick={onClose}
				>
					<X size={18} />
				</button>
			</div>
		</div>
	);
}
const searchIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
			fill="black"
			fill-opacity="0.5"
		/>
	</svg>
);
