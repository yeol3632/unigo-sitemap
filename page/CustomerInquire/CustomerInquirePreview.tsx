"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { downloadIcon } from "../Admin/InquiresView";

export default function CustomerInquirePreview() {
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
		<section className="py-24">
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
					<hr className="mt-20 lg:mt-[200px] mb-5" />
					<div className="mt-5 flex flex-wrap gap-3 mb-16 lg:mb-[100px]">
						<button
							type="button"
							className="h-12 px-5 text-sm border border-border"
							onClick={() => {
								router.push(`/community/create-review?id=${params.id}`);
							}}
						>
							수정
						</button>

						<button
							type="button"
							className="h-12 px-5 mr-auto text-sm border border-border"
							onClick={() => {
								router.push("/community");
							}}
						>
							삭제
						</button>
					</div>

					<div>
						<div className="mb-8 font-medium text-2xl">
							<span
								className="cursor-pointer"
								onClick={() => setReplyView(false)}
							>
								{"<"} 생기부 분석 질문{">"} 답변
							</span>
						</div>
						<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5">
							<span className="w-[81px]">등록일</span>
							<span className="text-black/40">2025-05-25 11:58:41</span>
						</div>
						<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5 bg-[#F3F4F6]">
							<span className="w-[81px]">파일</span>
						</div>
						<div className="mt-3">
							고객님, 안녕하세요. <br /> <br />
							첨부하신 파일은 바이브온 서비스와 무관한 이미지로
							확인됩니다. 기타 문의사항이 있다면 채널톡으로 말씀
							부탁드립니다. <br /> <br />
							감사합니다. <br /> <br />
							바이브온 드림
						</div>
						<hr className="mb-10 lg:my-20 mt-8" />
					</div>

					<div className="flex justify-center">
						<Link
							href={`/customer-inquire`}
							className="block max-w-[314px] w-full"
						>
							<button
								className="h-12 border border-[#1b1b1b] text-[#1b1b1b]/80 w-full"
								type="button"
							>
								문의 목록
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
