"use client";
import CustomSearchInput from "@/components/CustomSearchInput";
import { useSidebarContext } from "@/components/SidebarProvider";
import { LucideLayoutDashboard } from "lucide-react";

export default function TeacherSearchComponent() {
	const { setIsSidebarOpen, isSidebarOpen } = useSidebarContext();
	return (
		<div className="mb-10 lg:mb-[60px] max-w-[851px] flex gap-4">
			<button
				className="lg:hidden"
				type="button"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<LucideLayoutDashboard />
			</button>
			<div className="w-0 flex-grow">
				<CustomSearchInput
					placeholder="학생 검색하기"
					type="text"
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
		</div>
	);
}
