"use client";

import { Button } from "@/components/button/Button";
import { useState } from "react";

export default function CustomerInquireCreateNew() {
	const [formData, setFormData] = useState<{
		service: string;
		title: string;
		comment: string;
		attachment: FileList | null;
	}>({
		service: "",
		title: "",
		comment: "",
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
					<h2 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-8 border-b-2 border-black pb-8 lg:pb-13">
						1:1 문의내역
					</h2>
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px]">
								구분 <span className="text-[#4E4EFF]">*</span>
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
							<span className="w-[100px] sm:w-[133px]">
								제목
								<span className="text-[#4E4EFF]">*</span>
							</span>
							<div className="flex-grow w-0">
								<input
									type="text"
									className="border border-border outline-none h-12 px-5 w-full"
									placeholder="제목 입력"
									value={formData.title}
									onChange={(e) =>
										handleInputChange("title", e.target.value)
									}
								/>
							</div>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px] self-start">
								내용
								<span className="text-[#4E4EFF]">*</span>
							</span>
							<div className="flex-grow w-0">
								<textarea
									className="border border-border outline-none h-[242px] px-5 w-full p-5"
									placeholder="내용 입력"
									value={formData.comment}
									onChange={(e) => {
										if (e.target.value.length <= 5000) {
											handleInputChange("comment", e.target.value);
										}
									}}
								/>
								<div className="w-full text-end">
									{formData.comment.length}/5000
								</div>
							</div>
						</div>
						<div className="flex flex-wrap items-center gap-2 text-sm max-w-[593px]">
							<span className="w-[100px] sm:w-[133px] font-medium">
								첨부파일
							</span>
							<label
								className="flex-grow max-w-[319px] w-[180px]"
								htmlFor="file"
							>
								<div className="border border-border outline-none h-12 px-5 w-full bg-[#F3F4F6] rounded-md leading-12">
									{formData.attachment?.[0].name}
								</div>
							</label>
							<label>
								<span className="rounded-md h-12 ml-auto bg-[#333333] hover:bg-[#4D4D4D] text-white px-5 block leading-12 cursor-pointer">
									다른 번호 인증
								</span>
								<input
									type="file"
									onChange={(e) =>
										handleInputChange("attachment", e.target.files)
									}
									className="hidden"
									accept="image/*"
									id="file"
								/>
							</label>
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
							text="저장"
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
