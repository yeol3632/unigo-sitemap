"use client";

import { Button } from "@/components/button/Button";
import { useState } from "react";

export default function Refund() {
	const [formData, setFormData] = useState<{
		service: string;
		reason: string;
		date: string;
		attachment: FileList | null;
	}>({
		service: "",
		reason: "",
		date: "",
		attachment: null,
	});
	const handleInputChange = (
		field: string,
		value: string | FileList | null
	) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};
	return (
		<section className="py-24">
			<div className="container">
				<div className="max-w-[1380px] mx-auto">
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-10 lg:mb-[60px] border-b-2 border-black pb-8 lg:pb-13">
						환불 요청
					</h2>
					<h5 className="font-medium text-center md:text-2xl text-xl mb-10 lg:mb-[60px]">
						[1년] 무제한 수시 올인원 패키지
					</h5>
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px]">결제일</span>
							<div className="flex-grow max-w-[319px] w-0">
								<input
									type="date"
									className="border border-border outline-none h-12 px-5 w-full select"
									value={formData.date}
									onChange={(e) =>
										handleInputChange("date", e.target.value)
									}
								/>
							</div>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px]">
								환불 사유
								<span className="text-[#4E4EFF]">*</span>
							</span>
							<div className="flex-grow max-w-[319px] w-0">
								<select
									value={formData.service}
									onChange={(e) =>
										handleInputChange("service", e.target.value)
									}
									className="select border border-border outline-none h-12 px-5 w-full"
								>
									<option value="">선택</option>
									<option value="">선택</option>
									<option value="">선택</option>
									<option value="">선택</option>
								</select>
							</div>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px] self-start">
								상세 사유
							</span>
							<div className="flex-grow w-0">
								<textarea
									className="border border-border outline-none h-[242px] px-5 w-full p-5"
									placeholder="내용 입력"
									value={formData.reason}
									onChange={(e) => {
										if (e.target.value.length <= 5000) {
											handleInputChange("reason", e.target.value);
										}
									}}
								/>
								<div className="w-full text-end">
									{formData.reason.length}/5000
								</div>
							</div>
						</div>
					</div>
					<hr className="mt-8 mb-10 lg:mb-12" />

					<div className="flex flex-wrap justify-center gap-4">
						<Button
							text="취소"
							variant="secondary"
							className="w-[160px] flex-grow max-w-[232px] bg-transparent !text-primary border !border-primary hover:!text-white h-12"
							type="button"
							onClick={() => {
								console.log(formData);
							}}
						/>
						<Button
							text="환불 요청 제출하기"
							variant="primary"
							className="w-[160px] flex-grow max-w-[232px] h-12"
							type="submit"
							onClick={() => {
								console.log(formData);
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
