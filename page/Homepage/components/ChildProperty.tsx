import Marquee from "react-fast-marquee";

export default function ChildProperty() {
	return (
		<section className="child-property pt-20 xl:pt-[208px]">
			<div className="container">
				<h2 className="text-3xl md:text-[45px] lg:text-[60px] md:leading-[1.46] font-semibold z-50 text-center mb-7">
					“우리 아이, 제대로 준비하고 있을까요?”
				</h2>
				<div className="relative">
					<div className="white-gradient z-[10]"></div>
					<div className="flex flex-col items-center justify-center gap-4 md:gap-7">
						<div className="text-[28px] md:text-[32px] font-semibold lg:text-[45px]">
							<Marquee speed={30} autoFill={true}>
								전문가 상담은 비싸고, 계속 받기도 부담돼요. 내 생기부로
								어떤 대학을 준비할 수 있는지도 막막해요.
							</Marquee>
						</div>
						<div className="text-[24px] md:text-[28px] font-semibold lg:text-[36px] mx-3 sm:mx-5">
							<Marquee direction="right" speed={30} autoFill={true}>
								일일이 생기부 분석하고 전략 짜는 게 비효율적이에요.
								데이터 기반으로 설명해줄 도구가 필요해요.
							</Marquee>
						</div>
						<div className="text-[20px] md:text-[24px] font-semibold lg:text-[32px] mx-7 sm:mx-10 max-w-[1260px]">
							<Marquee speed={30} autoFill={true}>
								다들 한다는 스펙, 뭘 해야 하는지 감이 안 와요. 입시
								준비, 열심히는 하는데 방향이 맞는 걸까요?
							</Marquee>
						</div>
						<div className="text-[18px] md:text-[22px] font-semibold lg:text-[28px] mx-10 sm:mx-16 max-w-[1207px]">
							<Marquee direction="right" speed={30} autoFill={true}>
								아이의 현재 상황을 정확히 진단해주는 곳이 없어요.
								학생마다 수준이 다른데, 개별 관리가 너무 힘들어요.
							</Marquee>
						</div>
						<div className="text-[18px] md:text-[22px] font-semibold lg:text-[28px] mx-14 sm:mx-20 max-w-[1080px]">
							<Marquee speed={30} autoFill={true}>
								정보는 많은데, 정작 나에게 맞는 전략은 없어요. 기준 없이
								준비하는 건 이제 그만하고 싶어요.
							</Marquee>
						</div>
						<div className="text-[16px] md:text-[20px] font-semibold lg:text-[24px] mx-16 sm:mx-24 max-w-[400px]">
							<Marquee direction="right" speed={30} autoFill={true}>
								계획만 세우다 또 한 달이 지났어요.
							</Marquee>
						</div>
					</div>
					<div className="flex justify-center">{dots}</div>
				</div>
				<div className="bg-[#F8F8F8] flex items-center justify-center rounded-[24px] py-12 md:py-16 px-3 mt-8">
					<div className="relative text-center">
						<p className="relative text-[#08080C] text-xl md:text-[45px] font-semibold leading-[60px] md:leading-[90px] z-50">
							이러한 고민을 하고 계시다면,
							<br />
							지금 필요한 건 나만의 전략입니다.
							<br />
							유니고 AI는 여러분의 현재를 분석해
							<br />
							목표에 가장 가까운 길을 제시합니다.
						</p>
						<div className="absolute -bottom-1 left-0  bg-[#92FF51] w-full h-[20px]  md:h-[51px] "></div>
					</div>
				</div>
			</div>
		</section>
	);
}

const dots = (
	<svg
		width="16"
		height="234"
		viewBox="0 0 16 234"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.99388 62.4C6.57166 62.4 5.37166 61.9333 4.39388 61C3.4161 60.0222 2.92721 58.8 2.92721 57.3333C2.92721 55.8667 3.4161 54.6667 4.39388 53.7333C5.37166 52.8 6.57166 52.3333 7.99388 52.3333C9.4161 52.3333 10.6161 52.8 11.5939 53.7333C12.5717 54.6667 13.0605 55.8667 13.0605 57.3333C13.0605 58.8 12.5717 60.0222 11.5939 61C10.6161 61.9333 9.4161 62.4 7.99388 62.4Z"
			fill="black"
		/>
		<path
			d="M7.99388 140.4C6.57166 140.4 5.37166 139.933 4.39388 139C3.4161 138.022 2.92721 136.8 2.92721 135.333C2.92721 133.867 3.4161 132.667 4.39388 131.733C5.37166 130.8 6.57166 130.333 7.99388 130.333C9.4161 130.333 10.6161 130.8 11.5939 131.733C12.5717 132.667 13.0605 133.867 13.0605 135.333C13.0605 136.8 12.5717 138.022 11.5939 139C10.6161 139.933 9.4161 140.4 7.99388 140.4Z"
			fill="black"
		/>
		<path
			d="M7.99388 218.4C6.57166 218.4 5.37166 217.933 4.39388 217C3.4161 216.022 2.92721 214.8 2.92721 213.333C2.92721 211.867 3.4161 210.667 4.39388 209.733C5.37166 208.8 6.57166 208.333 7.99388 208.333C9.4161 208.333 10.6161 208.8 11.5939 209.733C12.5717 210.667 13.0605 211.867 13.0605 213.333C13.0605 214.8 12.5717 216.022 11.5939 217C10.6161 217.933 9.4161 218.4 7.99388 218.4Z"
			fill="black"
		/>
	</svg>
);
