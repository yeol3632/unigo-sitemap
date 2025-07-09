"use client";

import { Check, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
	detailItems as initialDetailItems,
	majorCategories,
	subCategories,
} from "./categories";

export interface DetailItem {
	id: string;
	name: string;
	subId: string;
	selected: boolean;
}

export default function CategorySelector() {
	const [selectedMajor, setSelectedMajor] = useState("engineering");
	const [selectedSub, setSelectedSub] = useState("eng-business");
	const [detailItems, setDetailItems] = useState<DetailItem[]>([]);
	const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

	// Get current subcategories based on selected major
	const currentSubCategories = subCategories.filter(
		(sub) => sub.majorId === selectedMajor
	);

	// Get current detail items based on selected subcategory
	const currentDetailItems = detailItems.filter(
		(item) => item.subId === selectedSub
	);

	// Initialize detail items and filters
	useEffect(() => {
		const engineeringBusinessItems = initialDetailItems.filter(
			(item) => item.subId === "eng-business"
		);
		setDetailItems(initialDetailItems);

		// Set initial applied filters based on selected items
		const selectedItemNames = engineeringBusinessItems
			.filter((item) => item.selected && item.id.includes("all") === false)
			.map((item) => item.name);
		setAppliedFilters(selectedItemNames);
	}, []);

	const handleMajorClick = (majorId: string) => {
		setSelectedMajor(majorId);

		// Set first subcategory of the selected major as default
		const firstSub = subCategories.find((sub) => sub.majorId === majorId);
		if (firstSub) {
			setSelectedSub(firstSub.id);
			updateAppliedFilters(firstSub.id);
		}
	};

	const handleSubCategoryClick = (subId: string) => {
		setSelectedSub(subId);
		updateAppliedFilters(subId);
	};

	const updateAppliedFilters = (subId: string) => {
		const subDetailItems = detailItems.filter((item) => item.subId === subId);
		const selectedItemNames = subDetailItems
			.filter((item) => item.selected && !item.id.includes("all"))
			.map((item) => item.name);
		setAppliedFilters(selectedItemNames);
	};

	const handleDetailItemToggle = (itemId: string) => {
		setDetailItems((prev) => {
			const newItems = prev.map((item) => {
				if (item.id === itemId) {
					return { ...item, selected: !item.selected };
				}
				// Handle "전체" selection
				if (itemId.includes("all")) {
					const isSelectingAll = !prev.find((i) => i.id === itemId)
						?.selected;
					if (item.subId === selectedSub && !item.id.includes("all")) {
						return { ...item, selected: isSelectingAll };
					}
				}
				return item;
			});

			// Update applied filters
			const subDetailItems = newItems.filter(
				(item) => item.subId === selectedSub
			);
			const selectedItemNames = subDetailItems
				.filter((item) => item.selected && !item.id.includes("all"))
				.map((item) => item.name);
			setAppliedFilters(selectedItemNames);

			return newItems;
		});
	};

	const removeFilter = (index: number) => {
		const filterToRemove = appliedFilters[index];

		setDetailItems((prev) =>
			prev.map((item) => {
				if (item.name === filterToRemove && item.subId === selectedSub) {
					return { ...item, selected: false };
				}
				return item;
			})
		);

		setAppliedFilters((prev) => prev.filter((_, i) => i !== index));
	};

	// Get the count for the current subcategories
	const subCategoryCount = currentSubCategories.length;

	// Get the count for current detail items
	const detailItemCount = currentDetailItems.length;

	return (
		<>
			<div className="w-full bg-white border">
				{/* Header */}
				<div className="grid grid-cols-3">
					<div className="px-4 py-7 bg-[#F3F4F6] border-r border-b text-center text-sm font-medium border-border">
						대계열({majorCategories.length})
					</div>
					<div className="px-4 py-7 bg-[#F3F4F6] border-r border-b text-center text-sm font-medium border-border">
						중계열({subCategoryCount})
					</div>
					<div className="px-4 py-7 bg-[#F3F4F6] border-b text-center text-sm font-medium border-border">
						소계열({detailItemCount})
					</div>
				</div>

				{/* Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 min-h-[320px]">
					{/* Major Categories */}
					<div className="max-md:border-b md:border-r p-4">
						{majorCategories.map((major) => (
							<div
								key={major.id}
								className={`px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between text-sm ${
									selectedMajor === major.id ? "text-bluish" : ""
								}`}
								onClick={() => handleMajorClick(major.id)}
							>
								<span>{major.name}</span>
								{selectedMajor === major.id && (
									<ChevronRight className="w-4 h-4 text-gray-400" />
								)}
							</div>
						))}
					</div>

					{/* Sub Categories */}
					<div className="max-md:border-b border-r p-4">
						{currentSubCategories.map((sub) => (
							<div
								key={sub.id}
								className={`px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between text-sm ${
									selectedSub === sub.id ? "text-bluish" : ""
								}`}
								onClick={() => handleSubCategoryClick(sub.id)}
							>
								<span>{sub.name}</span>
								{selectedSub === sub.id && (
									<ChevronRight className="w-4 h-4 text-gray-400" />
								)}
							</div>
						))}
					</div>

					{/* Detail Categories */}
					<div className="p-4">
						{currentDetailItems.map((item, index) => (
							<div key={item.id} className="px-4 py-2">
								<div className="flex items-center gap-x-3">
									<div
										className={`w-4 h-4 border rounded cursor-pointer flex items-center justify-center ${
											item.selected
												? "bg-bluish border-bluish"
												: "border-black/50 hover:border-border"
										}`}
										onClick={() => handleDetailItemToggle(item.id)}
									>
										{item.selected && (
											<Check className="w-3 h-3 text-white" />
										)}
									</div>
									<label
										className="text-sm text-gray-700 cursor-pointer flex-1"
										onClick={() => handleDetailItemToggle(item.id)}
									>
										{item.name}
									</label>
									{item.name === "전체" && (
										<ChevronRight className="w-4 h-4 text-gray-400" />
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				{/* Applied Filters */}
				{appliedFilters.length > 0 && (
					<div className="py-3">
						<div className="flex flex-wrap gap-2">
							{appliedFilters.map((filter, index) => (
								<div
									key={index}
									className="inline-flex items-center gap-1 px-5 py-2 bg-[#F2F4F6] rounded-full text-[10px]"
								>
									<button
										className="mr-1 rounded"
										onClick={() => removeFilter(index)}
									>
										<X className="h-3 w-3" />
									</button>
									<span>{filter}</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
