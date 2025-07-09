import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
function VividReview({ image }: { image: string }) {
	const ref = useRef<SwiperRef>(null);
	const prev = () => {
		ref.current?.swiper?.slidePrev();
	};
	const next = () => {
		ref.current?.swiper?.slideNext();
	};
	return (
		<section className="py-16 lg:py-24">
			<div className="container overflow-hidden">
				<div className=" max-w-[1350px] mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="relative">
							<Image
								className="w-[90%] sm:w-[90%] mx-auto h-auto absolute top-0 left-0 max-lg:hidden"
								src={image}
								alt="vivid-review-bg"
								width={1000}
								height={1000}
							/>
						</div>
						<div>
							<h5 className="text-[#111827]  font-[500] text-[40px] md:text-[50px] mb-10 text-center mx-auto max-w-[455px]">
								유니고 AI 사용자들의 생생한 이용 후기
							</h5>
						</div>
					</div>
					<div className="flex max-xl:flex-wrap-reverse items-end relative z-10">
						<div className="flex gap-8 p-8 pl-0 bg-white max-xl:w-full max-xl:justify-center max-xl:p-0">
							<button
								type="button"
								onClick={prev}
								className="cursor-pointer max-xl:w-10 svg-full"
							>
								{icons.arrowLeft}
							</button>
							<button
								type="button"
								onClick={next}
								className="cursor-pointer max-xl:w-10 svg-full"
							>
								{icons.arrowRight}
							</button>
						</div>
						<div className="bg-white max-sm:px-0 p-8 w-0 flex-grow max-xl:w-full">
							<Swiper
								breakpoints={{
									0: {
										slidesPerView: 1,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
									1280: {
										slidesPerView: 2,
										spaceBetween: 50,
									},
								}}
								ref={ref}
							>
								{data.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="bg-primary text-background pt-9 p-12 max-sm:p-8">
											<span className="block text-[100px] sm:text-[133px] font-inter leading-[1] max-sm:-mb-7">
												“
											</span>
											<p className="mt-0 text-[21px] leading-[1.65] font-medium">
												{item.quote}
											</p>
											<div className="flex items-center mt-7 sm:mt-14 gap-5">
												<Image
													className="rounded-full object-cover"
													width={64}
													height={64}
													src={item.image}
													alt="user"
												/>
												<div className="w-0 flex-grow font-inter">
													<p className="text-[21px] leading-[1] mb-2 font-semibold">
														{item.name}
													</p>
													<p className="text-[16px] leading-[1] text-[#929292]">
														{item.designation}
													</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
const data = [
	{
		quote: "하... 감사합니다. 저는 정말 운이 좋았어요.. 꼭 합격하고 싶었던 서울대 경제학과를 합격했습니다! 생기부 분석이 정확해서 방향을 잡아준 자료대로 단계별로 공부하다 보니 퀄리티 있는 내용으로 3학년 때 학교 담임쌤께도 칭찬 많이 받았던 것 같네요 ㅎㅎ",
		name: "김0영",
		designation: "고3, 경기도",
		image: "/images/profile/profile3.png",
	},
	{
		quote: "세특에 있는 내용을 분석해 진단해주신 보고서를 통해 독서의 주제와 방향을 잡아 일관성 있게 내용을 정리할 수 있었어요 ㅜㅜㅜ 뽑아주신 면접문제도 도움이 많이 됐어요 덕분에 서울대 의대에 합격했습니당!!! 완전 럭키비키잔앙",
		name: "권0현",
		designation: "고3, 강원도",
		image: "/images/profile/profile2.png",
	},
	{
		quote: "운좋게 만난 토마토 유니고의 도움을 받아 제 성적대에 맞게 추천해준 치의예과에 지원했는데, 진짜로 합격했습니다... 아슬아슬했어서 쓸까말까 고민 엄청 했는데 추천해준 이유가 있더라고요 이게 되네...? ㅋㅋㅋ 믿을만한 DB와 노하우가 충분한 곳이라 추천드리고 싶습니다",
		name: "고은0",
		designation: "고3, 경기도",
		image: "/images/profile/profilego.png",
	},
	{
		quote: "제 아이는 고1때 혼자서 연대를 가기위한 처절한 노력을 했는데도 방향을 잘 잡지 못해서 걱정이 많았어요~ㅜㅜ 유니고 분석내용대로 내신 준비를 잘하여 도움이 많이 받았습니다. 아이가 가고 싶은 연대뿐만 아니라 고대까지 가이드를 잘해줘 진심으로 감사드립니다. ^o^",
		name: "정0서 학부모",
		designation: "고3, 경기도",
		image: "/images/profile/profilehak.png",
	},
	{
		quote: "대치동에서 오랫동안 입시컨설팅학원으로도 유명한 곳의 데이터를 학습 시킨 AI라 그런지 신뢰가 가더라구요! 생기부진단과 방향을 정확하게 잡아준 덕에 엄청 도움을 많이 받았어요 흐아....ㅜㅜ 감사합니다.",
		name: "배O채",
		designation: "고3, 경기도",
		image: "/images/profile/profile4.png",
	},
	{
		quote: "저는 극악의 6종합러라서 면접 질문 걱정이 진짜진짜 많았어요,,ㅜㅜ 생기부 기반 면접이라 따로 면접 학원을 다닐까도 생각했었지만 가격이 너무 부담이었어요... 하는 수 없이 유니고AI를 가벼운 마음으로 써봤는데 실제 면접관님과의 면접에서 총 7개 질문중에 유니고AI가 뽑아준 질문이 4개나 나와서 적중률 하나는 정말 인정할 수 밖에 없었습니다 ㅋㅋㅋㅋ 생기부 분석도 꼼꼼히 해줘서 AI가 요약해준 제 생기부의 내용을 알고 있었기에 면접관님 질문에도 막힘없이 답을 할 수 있었다고 생각합니다!!! 대학교 합격해서 너무 행복해요 ㅠ 감사해요",
		name: "이O채",
		designation: "고3, 경기도",
		image: "/images/profile/profile5.png",
	},
];
const icons = {
	arrowLeft: (
		<svg
			width="65"
			viewBox="0 0 65 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				y="0.549316"
				width="64.921"
				height="64.921"
				rx="3.55731"
				fill="#F1F1F1"
			/>
			<path
				d="M19.5113 32.5108C18.9904 33.0318 18.9904 33.8764 19.5113 34.3974L28.0008 42.8869C28.5217 43.4078 29.3664 43.4078 29.8873 42.8869C30.4083 42.3659 30.4083 41.5213 29.8873 41.0003L22.3411 33.4541L29.8873 25.9079C30.4083 25.3869 30.4083 24.5423 29.8873 24.0214C29.3664 23.5004 28.5217 23.5004 28.0008 24.0214L19.5113 32.5108ZM43.5771 34.7881C44.3139 34.7881 44.9111 34.1908 44.9111 33.4541C44.9111 32.7174 44.3139 32.1201 43.5771 32.1201V34.7881ZM20.4546 33.4541V34.7881H43.5771V33.4541V32.1201H20.4546V33.4541Z"
				fill="#464646"
			/>
		</svg>
	),
	arrowRight: (
		<svg
			width="66"
			viewBox="0 0 66 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.715332"
				y="0.549316"
				width="64.921"
				height="64.921"
				rx="3.55731"
				fill="#F1F1F1"
			/>
			<path
				d="M21.1699 32.1201C20.4332 32.1201 19.8359 32.7174 19.8359 33.4541C19.8359 34.1908 20.4332 34.7881 21.1699 34.7881V32.1201ZM45.2357 34.3974C45.7567 33.8764 45.7567 33.0318 45.2357 32.5108L36.7463 24.0214C36.2253 23.5004 35.3807 23.5004 34.8597 24.0214C34.3387 24.5423 34.3387 25.3869 34.8597 25.9079L42.4059 33.4541L34.8597 41.0003C34.3387 41.5213 34.3387 42.3659 34.8597 42.8869C35.3807 43.4078 36.2253 43.4078 36.7463 42.8869L45.2357 34.3974ZM21.1699 33.4541V34.7881H44.2925V33.4541V32.1201H21.1699V33.4541Z"
				fill="#464646"
			/>
		</svg>
	),
};
export default VividReview;
