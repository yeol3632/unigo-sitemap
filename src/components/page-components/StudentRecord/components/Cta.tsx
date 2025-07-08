import { Button } from "@/components/button/Button";
import Link from "next/link";

export default function Cta() {
	return (
		<section className="py-16 lg:py-24 mb-10 lg:mb-20">
			<div className="container">
				<div className="text-center">
					<h5 className="text-[40px] md:text-[50px] lg:text-[80px] mb-2 text-center font-semibold">
						AI가 말해주는 내 생기부의 장단점
					</h5>
					<div className="text-lg mb-10">
						생기부 분석부터 대학 맞춤 전략까지. 이제 데이터에 기반한 맞춤
						분석으로 가장 빠르고 효율적인 합격 전략을 세워보세요.
					</div>
					<div className="flex flex-wrap justify-center items-center gap-2 mx-auto">
						<Link href="/student-record">
							<Button
								text="무료 분석 시작하기"
								variant="outlineFilled"
								className="w-full py-4 px-8 sm:min-w-[274px] sm:text-2xl"
							/>
						</Link>
						<Link href="/student-record">
							<Button
								text="생기부 분석 이용권 구매하기"
								variant="outline"
								className="w-full py-4 px-8 sm:min-w-[305px] sm:text-[20px]"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
