"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PageTitle from "../PageTitle";
import Stepper from "./Stepper";

export default function SignUp() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [step, setStep] = useState<string>(searchParams.get("step") || "1");
	interface FormInfo {
		authType: string;
		role: string;
		name: string;
		phone: string;
		id: string;
		password: string;
		passwordConfirm: string;
		email: string;
		joinPath: string;
		registrationPath: string[];
		terms: string[];
	}

	const [formInfo, setFormInfo] = useState<FormInfo>({
		authType: "",
		role: "",
		name: "",
		phone: "",
		id: "",
		password: "",
		passwordConfirm: "",
		email: "",
		joinPath: "",
		registrationPath: [],
		terms: [],
	});

	useEffect(() => {
		setStep(searchParams.get("step") || "1");
	}, [searchParams]);

	const signUpContent = () => {
		switch (step) {
			case "1":
				return (
					<div>
						<h2 className="text-2xl md:text-[32px] my-9 font-bold tracking-tighter leading-[1.46] text-center">
							본인인증
						</h2>
						<p className="text-center md:text-2xl tracking-tighter">
							본인 명의의 휴대폰 또는 계정으로 인증을 진행해 주세요.
						</p>
						<div className="grid grid-cols-2 gap-6 mt-8 mx-auto max-w-[526px]">
							<AuthImgCard
								image="/images/sign-up/phone.svg"
								title="휴대폰 인증"
								onClick={() => {
									setFormInfo({ ...formInfo, authType: "phone" });
									setStep("2");
									router.push("/sign-up?step=2");
								}}
							/>
							<AuthImgCard
								image="/images/sign-up/account.svg"
								title="아이핀 인증"
								onClick={() => {
									setFormInfo({ ...formInfo, authType: "account" });
									setStep("2");
									router.push("/sign-up?step=2");
								}}
							/>
						</div>
					</div>
				);
			case "2":
				return (
					<div>
						<h2 className="text-2xl md:text-[32px] my-9 font-bold tracking-tighter leading-[1.46] text-center">
							회원 유형 선택
						</h2>
						<p className="text-center md:text-2xl tracking-tighter">
							본인이 해당하는 유형을 선택하세요
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 mx-auto max-w-[799px]">
							<AuthImgCard
								image="/images/sign-up/student.svg"
								title="학생"
								onClick={() => {
									setFormInfo({ ...formInfo, role: "student" });
								}}
								selected={formInfo.role === "student"}
							/>
							<AuthImgCard
								image="/images/sign-up/family.svg"
								title="학부모"
								onClick={() => {
									setFormInfo({ ...formInfo, role: "parent" });
								}}
								selected={formInfo.role === "parent"}
							/>
							<AuthImgCard
								image="/images/sign-up/teacher.svg"
								title="선생님"
								onClick={() => {
									setFormInfo({ ...formInfo, role: "teacher" });
								}}
								selected={formInfo.role === "teacher"}
							/>
						</div>
						<div className="flex flex-col gap-6">
							<button
								type="button"
								className="login-btn mt-12 max-w-[192px] mx-auto h-[57px]"
								onClick={() => {
									if (formInfo.role) {
										setStep("3");
										router.push("/sign-up?step=3");
									} else {
										toast.error("회원 유형을 선택해주세요");
									}
								}}
							>
								다음
							</button>
						</div>
					</div>
				);
			case "3":
				return (
					<div>
						<h2 className="text-2xl md:text-[32px] my-9 font-bold tracking-tighter leading-[1.46] text-center">
							정보입력
						</h2>
						<p className="text-center md:text-2xl tracking-tighter">
							회원 정보를 입력해 주세요.
						</p>
						<div className="mt-12 lg:mt-[104px] text-[#4F4F4F] max-w-[414px] mx-auto">
							<div className="flex flex-col gap-6 text-[16px]">
								<div className="flex items-center mb-[10px]">
									<span className="w-[105px]">이름</span>
									<span className="w-0 flex-grow">김상수</span>
								</div>
								<div className="flex items-center">
									<span className="w-[105px]">휴대전화번호</span>
									<span className="w-0 flex-grow">010-222-3223</span>
								</div>
								<div className="flex items-center">
									<span className="w-[105px]">아이디</span>
									<input
										type="text"
										className="custom-input w-0 flex-grow h-[38px] font-normal"
										value={formInfo.id}
										onChange={(e) =>
											setFormInfo({
												...formInfo,
												id: e.target.value,
											})
										}
									/>
								</div>
								<div className="flex items-center">
									<span className="w-[105px]">비밀번호</span>
									<input
										type="text"
										className="custom-input w-0 flex-grow h-[38px] font-normal"
										value={formInfo.password}
										onChange={(e) =>
											setFormInfo({
												...formInfo,
												password: e.target.value,
											})
										}
									/>
								</div>
								<div className="flex items-center">
									<span className="w-[105px]">비밀번호 확인</span>
									<input
										type="text"
										className="custom-input w-0 flex-grow h-[38px] font-normal"
										value={formInfo.passwordConfirm}
										onChange={(e) =>
											setFormInfo({
												...formInfo,
												passwordConfirm: e.target.value,
											})
										}
									/>
								</div>
								<div className="flex items-center">
									<span className="w-[105px]">이메일</span>
									<input
										type="text"
										className="custom-input w-0 flex-grow h-[38px] font-normal"
										value={formInfo.email}
										onChange={(e) =>
											setFormInfo({
												...formInfo,
												email: e.target.value,
											})
										}
									/>
								</div>
								<div>
									<div className="border-b border-[#B8B8B8] pt-2 mb-10 lg:mb-[60px]"></div>
									<div className="border-b border-[#B8B8B8] pb-[10px] mb-6">
										회원가입 경로
									</div>
									<div className="text-[#003478]">최대 3개 선택</div>
									<div className="flex flex-wrap gap-6 text-[16px] mt-6">
										{registrationPathList.map((item) => (
											<label
												key={item.id}
												className="flex gap-2 cursor-pointer w-[230px] even:w-[100px] last:!w-full flex-grow"
											>
												<Checkbox
													className="size-[19px] !rounded-none translate-y-[2px]"
													checked={formInfo.registrationPath.includes(
														item.id
													)}
													onCheckedChange={(e) => {
														setFormInfo({
															...formInfo,
															registrationPath: e
																? [
																		...formInfo.registrationPath,
																		String(item.id),
																  ]
																: formInfo.registrationPath.filter(
																		(id) => id !== item.id
																  ),
														});
													}}
												/>
												<div className="w-0 flex-grow text-[#4F4F4F]">
													{item.title}
												</div>
											</label>
										))}
									</div>
								</div>
								<div className="border-b border-[#B8B8B8] pb-5 mb-10 lg:mb-[60px]">
									<input
										type="text"
										className="custom-input w-full h-[38px] font-normal"
										value={formInfo.joinPath}
										onChange={(e) =>
											setFormInfo({
												...formInfo,
												joinPath: e.target.value,
											})
										}
										placeholder="토마토 AI를 알게 된 경로를 입력해 주세요."
									/>
								</div>
								<div className="border-b border-[#B8B8B8] pb-[10px] mb-6">
									약관동의
								</div>
								<div className="flex flex-col gap-6 text-[15px]">
									{termsList.map((item) => (
										<label
											key={item.id}
											className="flex gap-2 cursor-pointer"
										>
											<Checkbox
												className="size-[19px] !rounded-none translate-y-[2px]"
												checked={formInfo.terms.includes(item.id)}
												onCheckedChange={(e) => {
													setFormInfo({
														...formInfo,
														terms: e
															? [...formInfo.terms, item.id]
															: formInfo.terms.filter(
																	(id) => id !== item.id
															  ),
													});
												}}
											/>
											<div className="w-0 flex-grow text-[#4F4F4F]">
												{item.title}
											</div>
											{item?.view && (
												<a
													href={item?.view}
													target="_blank"
													onClick={(e) => e.stopPropagation()}
												>
													<div className="text-[#003478]">
														보기
													</div>
												</a>
											)}
										</label>
									))}
								</div>
								<button
									type="submit"
									className="login-btn max-w-[192px] mx-auto h-[57px] mt-12 lg:mt-[80px]"
								>
									다음
								</button>
							</div>
						</div>
					</div>
				);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push("/profile");
	};

	return (
		<section className="py-20 lg:py-[113px]">
			<div className="container">
				<PageTitle title="회원가입" />
				<form className="mt-20" onSubmit={handleSubmit}>
					<div className="mx-auto max-w-[380px]">
						<Stepper steps={3} currentStep={Number(step)} />
					</div>
					{signUpContent()}
				</form>
			</div>
		</section>
	);
}
const AuthImgCard = ({
	title,
	image,
	onClick,
	selected,
}: {
	title: string;
	image: string;
	onClick: () => void;
	selected?: boolean;
}) => {
	return (
		<div
			className={cn(
				"border border-border rounded-xl p-6 sm:py-10 text-center cursor-pointer",
				{
					"border-[#003366]": selected,
				}
			)}
			onClick={onClick}
		>
			<div className="h-[131px] flex items-center justify-center">
				<Image
					src={image}
					width={200}
					height={200}
					className="w-auto h-auto max-w-full max-h-full object-contain"
					alt=""
				/>
			</div>
			<div className="text-lg md:text-xl mt-5">{title}</div>
		</div>
	);
};
interface RegistrationPathItem {
	id: string;
	title: string;
}

const registrationPathList: RegistrationPathItem[] = [
	{
		id: "1",
		title: "포털사이트(구글,네이버)검색",
	},
	{
		id: "2",
		title: "뉴스기사",
	},
	{
		id: "3",
		title: "카페/블로그",
	},
	{
		id: "4",
		title: "인스타그램",
	},
	{
		id: "5",
		title: "유튜브",
	},
	{
		id: "6",
		title: "페이스북",
	},
	{
		id: "7",
		title: "학교",
	},
	{
		id: "8",
		title: "카카오톡",
	},
	{
		id: "9",
		title: "선생님",
	},
	{
		id: "10",
		title: "친구/선후배",
	},
	{
		id: "11",
		title: "부모님",
	},
	{
		id: "12",
		title: "기타",
	},
];
const termsList = [
	{
		id: "1",
		title: "전체 약관동의",
	},
	{
		id: "2",
		title: "[필수] 서비스 이용약관",
		view: "/",
	},
	{
		id: "3",
		title: "[필수] 개인정보 수집 및 이용동의",
		view: "/",
	},
	{
		id: "4",
		title: "[선택] 고객 혜택 제공을 위한 개인정보 수집 및 이용 동의",
		view: "/",
	},
];
