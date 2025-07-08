"use client";

import { Button } from "@/components/button/Button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function InquiresView() {
	const [replyView, setReplyView] = useState<boolean>(false);
	const [formData, setFormData] = useState<{
		comment: string;
		attachment: FileList | null;
	}>({
		comment: "",
		attachment: null,
	});

	const params = useParams();
	const router = useRouter();

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
		<section className="py-24 lg:py-[120px]">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-[40px] lg:text-[48px] md:leading-[1.46] pb-8 lg:pb-12 border-b border-black mb-10 lg:mb-14">
					1:1 문의내역
				</h2>
				<div className="">
					<h6 className="text-2xl pb-8 border-b border-border font-medium">
						생기부 분석 질문
					</h6>
					<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5">
						<span className="w-[81px]">등록일</span>
						<span className="text-black/40">2025-05-25 11:58:41</span>
					</div>
					<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5 bg-[#F3F4F6]">
						<span className="w-[81px]">파일</span>
						<Link
							href="#"
							className="text-black/40 flex items-center gap-2"
						>
							{downloadIcon} Activity.png
						</Link>
					</div>
					<div className="mt-3">
						안녕하세요, 생기부 분석 질문이 있습니다.
					</div>
					<hr className="mt-20 lg:mt-[200px] mb-20 lg:mb-24" />
					{replyView ? (
						<div>
							<div className="mb-8 font-medium text-2xl">
								<span
									className="cursor-pointer"
									onClick={() => setReplyView(false)}
								>
									{"<"} 생기부 분석 질문{">"} 답변
								</span>
							</div>
							<div className="flex flex-wrap items-center gap-2 text-sm mb-8">
								<span className="w-[100px] sm:w-[133px] self-start font-medium">
									내용 <span className="text-[#4E4EFF]">*</span>
								</span>
								<div className="flex-grow w-[180px]">
									<textarea
										className="border border-border outline-none p-5 h-[242px] w-full"
										placeholder="내용 입력"
										rows={4}
										value={formData.comment}
										onChange={(e) => {
											if (e.target.value.length <= 5000) {
												handleInputChange(
													"comment",
													e.target.value
												);
											}
										}}
									></textarea>
								</div>
								<div className="w-full text-end">
									{formData.comment.length}/5000
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
							<hr className="mb-10 lg:mb-14 mt-8" />
							<div className="flex flex-wrap justify-center gap-4">
								<Button
									text="취소"
									variant="secondary"
									className="w-[160px] flex-grow max-w-[232px] bg-transparent !text-primary border !border-primary hover:!text-white h-12"
									type="button"
								/>
								<Button
									text="답변 등록"
									variant="primary"
									className="w-[160px] flex-grow max-w-[232px] h-12"
									type="submit"
									onClick={() =>
										router.push(`/inquires/${params.id}/review`)
									}
								/>
							</div>
						</div>
					) : (
						<div className="flex justify-center">
							<button
								className="h-12 border border-[#1b1b1b] text-[#1b1b1b]/80 w-full max-w-[314px]"
								type="button"
								onClick={() => setReplyView(true)}
							>
								답변 달기
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
export const downloadIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11 14.1281C10.8833 14.1281 10.774 14.11 10.6719 14.0739C10.5698 14.0377 10.475 13.9756 10.3875 13.8875L7.2375 10.7375C7.0625 10.5625 6.9785 10.3583 6.9855 10.125C6.9925 9.89167 7.0765 9.6875 7.2375 9.5125C7.4125 9.3375 7.62046 9.2465 7.86137 9.2395C8.10229 9.2325 8.30995 9.31621 8.48437 9.49063L10.125 11.1313V4.875C10.125 4.62709 10.209 4.41942 10.377 4.252C10.545 4.08459 10.7527 4.00059 11 4C11.2473 3.99942 11.4553 4.08342 11.6239 4.252C11.7925 4.42059 11.8762 4.62825 11.875 4.875V11.1313L13.5156 9.49063C13.6906 9.31563 13.8986 9.23163 14.1395 9.23863C14.3804 9.24563 14.5881 9.33692 14.7625 9.5125C14.9229 9.6875 15.0069 9.89167 15.0145 10.125C15.0221 10.3583 14.9381 10.5625 14.7625 10.7375L11.6125 13.8875C11.525 13.975 11.4302 14.0371 11.3281 14.0739C11.226 14.1106 11.1167 14.1287 11 14.1281ZM5.75 18C5.26875 18 4.85692 17.8288 4.5145 17.4864C4.17208 17.144 4.00058 16.7318 4 16.25V14.5C4 14.2521 4.084 14.0444 4.252 13.877C4.42 13.7096 4.62767 13.6256 4.875 13.625C5.12233 13.6244 5.33029 13.7084 5.49887 13.877C5.66746 14.0456 5.75117 14.2533 5.75 14.5V16.25H16.25V14.5C16.25 14.2521 16.334 14.0444 16.502 13.877C16.67 13.7096 16.8777 13.6256 17.125 13.625C17.3723 13.6244 17.5803 13.7084 17.7489 13.877C17.9174 14.0456 18.0012 14.2533 18 14.5V16.25C18 16.7312 17.8288 17.1434 17.4864 17.4864C17.1439 17.8294 16.7318 18.0006 16.25 18H5.75Z"
			fill="black"
			fill-opacity="0.4"
		/>
	</svg>
);
