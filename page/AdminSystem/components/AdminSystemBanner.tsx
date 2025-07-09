import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { arrowRight } from "../../InterviewSystem/icons";

export default function AdminSystemBanner() {
	return (
		<section className="py-[94px] pb-[85px] relative overflow-hidden bg-[#F9F7FF]">
			<div className="container relative z-10">
				<div className="max-w-[1304px] mx-auto">
					<div className="relative w-fit flex flex-col justify-center mx-auto">
						<div className="w-full text-center">
							<div className="relative z-10 inline-flex mx-auto text-sm font-medium text-white py-[5px] px-4 rounded-full bg-[#8080F2] mb-[18px]">
								학종 매칭
							</div>
							<div className="relative max-md:flex flex-col-reverse max-lg:mb-8">
								<Image
									src="/images/banner/user-group.png"
									width={126}
									height={52}
									alt="user-group"
									className="md:absolute bottom-4 right-full lg:right-[calc(100%+20px)] mx-auto"
								/>
								<h1 className="text-[40px] md:text-[50px] lg:text-[58px] mb-2 font-semibold tracking-tighter">
									학종 전략, <br /> AI로 미리 진단하세요
								</h1>
							</div>
							<p className="text-sm text-black/50 mx-auto max-w-[468px]">
								희망 대학·전형·모집단위 5곳을 선택하면 AI가 합격
								가능성을 정밀 분석해드립니다. 불확실한 지원 전략, 이제는
								데이터로 판단하세요.
							</p>
							<div className="flex items-center flex-wrap gap-2 mx-auto mt-9 justify-center">
								<Link href="/student-record">
									<Button
										text="분석 시작하기"
										variant="outlineFilled"
										className="w-full py-[14px] text-[15px] min-w-[181px]"
										icon={arrowRight}
										iconPosition="right"
									/>
								</Link>
								<Link href="/student-record">
									<Button
										text="면접 코칭 구매하기"
										variant="outline"
										className="w-full py-[14px] text-[15px] min-w-[171px] !bg-white border-border"
										icon={arrowRight}
										iconPosition="right"
									/>
								</Link>
							</div>
						</div>
					</div>
					<AdminSystemBannerBottom />
				</div>
			</div>
			<Image
				className="max-w-full absolute top-0 left-0 pointer-events-none w-full h-full object-cover"
				src={"/images/banner/admin-system.png"}
				width={2040}
				height={997}
				alt="interview-system"
			/>
		</section>
	);
}
export const AdminSystemBannerBottom = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 lg:mt-[140px]">
			<AdminSystemCard
				badge="진단"
				title="합격 가능성 진단"
				subtitle="희망하는 대학·전형·모집단위 5곳에 대해 서류 합격 가능성을 AI가 정밀 분석합니다."
			>
				<div className="flex justify-between items-center">
					<span className="text-xl font-medium">목표 대학 합격률</span>
					<button
						type="button"
						className="w-10 h-10 cursor-pointer flex justify-center items-center"
					>
						<Ellipsis />
					</button>
				</div>
				<div className="mt-5">
					<table className="text-center w-full text-[#0D1C2E] font-medium text-xs sm:text-sm m-0">
						<thead className="text-[#667085]">
							<tr>
								<th className="text-left">학교 이름</th>
								<th>전공</th>
								<th>전형</th>
								<th>예측</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map((item, i) => (
								<tr key={i}>
									<td className="text-left border-b border-border py-5">
										{item.schoolName}
									</td>
									<td className="border-b border-border py-5">
										{item.major}
									</td>
									<td className="border-b border-border py-5">
										{item.typical}
									</td>
									<td className="border-b border-border py-5">
										<span
											className={cn(
												"py-[5px] px-4 rounded-full text-[#23272A] bg-[#FDCBF1] inline-block",
												{
													"bg-[#CBB9EF]":
														item.prediction === "적정",
													"bg-[#F6E898]":
														item.prediction === "소신",
												}
											)}
										>
											{item.prediction}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</AdminSystemCard>
			<AdminSystemCard
				badge="추천"
				title="지원 전략 추천"
				subtitle="내 생기부로 어디까지 지원 가능한지 알려드려요. 안정 · 적정 · 소신 · 도전 · 위험 5단계로 나누어 최대 25개 대학/전공을 추천받을 수 있어요."
			>
				<div className="grid grid-cols-2 gap-3 mx-auto max-w-[428px] py-6">
					{data.map((item, i) => (
						<div
							className="py-5 sm:py-7 px-3 admin-system-card-shadow rounded-xl bg-[#F8F8F8] text-center"
							key={i}
						>
							<div className="w-[60px] aspect-square flex justify-center items-center bg-[#FFC47D] text-white text-lg mb-6 rounded-full mx-auto">
								{item.iconText}
							</div>
							<h5 className="text-lg mb-3 font-medium">{item.title}</h5>
							<p className="text-[13px] text-sm text-black/60">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</AdminSystemCard>
		</div>
	);
};
interface AdminSystemCardProps {
	badge?: string;
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
}
const AdminSystemCard = ({
	badge,
	title,
	subtitle,
	children,
}: AdminSystemCardProps) => {
	return (
		<div className="admin-system-card flex flex-col pb-7">
			<div className="card-bg"></div>
			<div className="px-5 lg:px-10">
				<div className="px-8 lg:px-11 pt-10">
					<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#8080F2]/25 md:text-xl md:px-6 md:py-2 mb-10 md:mb-[67px]">
						{badge}
					</span>
					<div className="text-center">
						<h2 className="text-3xl xl:text-[44px] xl:leading-[1] mb-8 font-medium">
							{title}
						</h2>
						<p className="text-lg xl:text-2xl min-h-[105px] mb-10 text-black/50 leading-[1.46]">
							{subtitle}
						</p>
					</div>
				</div>
			</div>
			<div className="p-6 admin-system-bottom-card flex-grow">
				{children}
			</div>
		</div>
	);
};
const tableData = [
	{
		schoolName: "경희대학교",
		major: "무역학과",
		typical: "글로벌 전형",
		prediction: "안정",
	},
	{
		schoolName: "성균관대학교",
		major: "경제학과",
		typical: "글로벌 전형",
		prediction: "적정",
	},
	{
		schoolName: "한양대학교",
		major: "글로벌학과",
		typical: "글로벌 전형",
		prediction: "소신",
	},
	{
		schoolName: "숭실대학교",
		major: "미디어학부",
		typical: "글로벌 전형",
		prediction: "안정",
	},
	{
		schoolName: "고려대학교",
		major: "미디어학부",
		typical: "글로벌 전형",
		prediction: "소신",
	},
];
const data = [
	{
		iconText: "소신",
		title: "성균관대학교",
		text: "사회교육과 외 4개 대학/모집단위",
	},
	{
		iconText: "소신",
		title: "성균관대학교",
		text: "사회교육과 외 4개 대학/모집단위",
	},
	{
		iconText: "소신",
		title: "성균관대학교",
		text: "사회교육과 외 4개 대학/모집단위",
	},
	{
		iconText: "소신",
		title: "성균관대학교",
		text: "사회교육과 외 4개 대학/모집단위",
	},
];
