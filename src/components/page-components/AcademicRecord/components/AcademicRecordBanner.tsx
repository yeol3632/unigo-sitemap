import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import { AdminSystemBannerBottom } from "../../AdminSystem/components/AdminSystemBanner";
import { arrowRight } from "../../InterviewSystem/icons";

export default function AcademicRecordBanner() {
	return (
		<section className="py-[94px] pb-[85px] relative overflow-hidden bg-[#8080F2]/20">
			<div className="container relative z-10">
				<div className="max-w-[1304px] mx-auto">
					<div className="relative w-fit flex flex-col justify-center mx-auto">
						<div className="w-full text-center">
							<div className="relative z-10 inline-flex mx-auto text-sm font-medium text-white py-[5px] px-4 rounded-full bg-[#8080F2] mb-[18px]">
								교과 분석
							</div>
							<div className="relative max-md:flex flex-col-reverse max-lg:mb-8">
								<Image
									src="/images/banner/admin-record-1.png"
									width={227}
									height={84}
									alt="admin-record-1"
									className="absolute bottom-10 right-full lg:right-[calc(100%+20px)] mx-auto max-sm:hidden"
								/>
								<Image
									src="/images/banner/admin-record-2.png"
									width={224}
									height={166}
									alt="admin-record-2"
									className="absolute top-24 left-[calc(100%+50px)] lg:right-[calc(100%+20px)] mx-auto max-sm:hidden"
								/>
								<h1 className="text-[40px] md:text-[50px] lg:text-[58px] mb-2 font-semibold tracking-tighter">
									나에게 맞는 전형, AI가 알려줘요
								</h1>
							</div>
							<p className="text-sm text-black/50 max-w-[350px] mx-auto font-medium leading-[1.5]">
								교과 vs 종합, 나에게 유리한 전형은? 생기부 데이터를
								분석해 어떤 전형에 강점이 있는지 알려드립니다.
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
										className="w-full py-[14px] text-[15px] min-w-[171px] !bg-white border-none"
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
