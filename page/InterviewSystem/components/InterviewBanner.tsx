import { Button } from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import { arrowRight } from "../icons";
export default function InterviewBanner() {
	return (
		<section className="py-16 lg:pt-[190px] lg:pb-[220px] relative overflow-hidden">
			<div className="container relative z-10">
				<div className=" max-w-[1350px] mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-6">
						<div className="relative max-w-[600px] flex flex-col justify-center max-lg:mx-auto">
							<div className="w-full max-lg:text-center">
								<div className="relative z-10 inline-flex mx-auto text-sm font-medium text-white py-[5px] px-4 rounded-full bg-[#8080F2] mb-[18px]">
									면접 코칭
								</div>
								<h1 className="text-[40px] md:text-[50px] lg:text-[58px] mb-2 font-semibold tracking-tighter">
									면접, 생기부만으로도 준비할 수 있어요!
								</h1>
								<p className="text-sm">
									당신의 생기부에 딱 맞는 예상 질문을 뽑아드립니다
								</p>
								<div className="flex items-center flex-wrap gap-2 mx-auto mt-9 max-lg:justify-center">
									<Link href="/student-record">
										<Button
											text="분석 시작하기"
											variant="outlineFilled"
											className="w-full py-[14px] text-[15px]"
											icon={arrowRight}
											iconPosition="right"
										/>
									</Link>
									<Link href="/student-record">
										<Button
											text="면접 코칭 구매하기"
											variant="outline"
											className="w-full py-[14px] text-[15px]"
											icon={arrowRight}
											iconPosition="right"
										/>
									</Link>
								</div>
							</div>
						</div>
						<div className="flex justify-center max-lg:max-w-[400px] mx-auto">
							<Image
								className="max-w-full"
								src={"/images/banner/interview-system.png"}
								width={512}
								height={592}
								alt="interview-system"
							/>
						</div>
					</div>
				</div>
			</div>
			<Image
				className="max-w-full absolute top-20 -left-20 pointer-events-none"
				src={"/images/banner/interview-vector.png"}
				width={2040}
				height={997}
				alt="interview-system"
			/>
		</section>
	);
}
