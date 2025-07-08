"use client";

import { Button } from "@/components/button/Button";
import { useState } from "react";

export default function TeacherDashboardAnnouncement() {
	const [isPasswordChangeOpen, setIsPasswordChangeOpen] =
		useState<boolean>(false);

	const [formData, setFormData] = useState<{
		name: string;
		id: string;
		password: string;
		phone: string;
		email: string;
	}>({
		name: "",
		id: "Abcweprep",
		password: "",
		phone: "",
		email: "",
	});

	const [password, setPassword] = useState<{
		currentPassword: string;
		newPassword: string;
	}>({
		currentPassword: "",
		newPassword: "",
	});

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handlePasswordChange = () => {};

	const handlePhoneVerification = () => {};

	if (isPasswordChangeOpen) {
		return (
			<>
				{/*  */}
				<div className="max-w-[952px] mx-auto lg:pb-20">
					<div className="max-w-[593px] flex flex-col gap-7 lg:py-20 py-12 font-medium">
						<div className="flex flex-wrap items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px]">
								현재 비밀번호
							</span>
							<div className="flex-grow max-w-[319px] w-[180px]">
								<input
									type="password"
									className="border border-border outline-none h-12 px-5 w-full"
									placeholder=""
									value={password.currentPassword}
									onChange={(e) =>
										setPassword({
											...password,
											currentPassword: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="flex flex-wrap items-center gap-2 text-sm">
							<span className="w-[100px] sm:w-[133px]">
								새로운 비밀번호
							</span>
							<div className="flex-grow max-w-[319px] w-[180px]">
								<input
									type="password"
									className="border border-border outline-none h-12 px-5 w-full"
									placeholder=""
									value={password.newPassword}
									onChange={(e) =>
										setPassword({
											...password,
											newPassword: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							text="비밀번호 변경하기"
							variant="primary"
							className="w-[160px] flex-grow max-w-[232px] h-12"
							type="submit"
						/>
					</div>
				</div>
			</>
		);
	}
	return (
		<>
			{/*  */}
			<div className="max-w-[952px] mx-auto lg:pb-20">
				<div className="max-w-[593px] flex flex-col gap-7 lg:py-20 py-12 font-medium">
					<div className="flex items-center gap-2 text-sm">
						<span className="w-[100px] sm:w-[133px]">이름</span>
						<span className="font-light">김민서</span>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="w-[100px] sm:w-[133px]">아이디</span>
						<div className="flex-grow max-w-[319px] w-0">
							<input
								type="text"
								className="border border-border outline-none h-12 px-5 w-full"
								placeholder="Abcweprep"
								value={formData.id}
								onChange={(e) =>
									handleInputChange("id", e.target.value)
								}
							/>
						</div>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="w-[100px] sm:w-[133px]">비밀번호</span>
						<div className=" flex-grow max-w-[319px] w-0">
							<input
								type="password"
								className="border border-border outline-none h-12 px-5 w-full"
								placeholder=""
								value={formData.password}
								onChange={(e) =>
									handleInputChange("password", e.target.value)
								}
							/>
							<div className="flex justify-end">
								<button
									type="button"
									className="text-end font-normal text-[#4E4EFF] mt-2"
									onClick={() => setIsPasswordChangeOpen(true)}
								>
									비밀번호 변경하기
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2 text-sm">
						<span className="w-[100px] sm:w-[133px]">
							이메일 <span className="text-[#4E4EFF]">*</span>
						</span>
						<div className="flex-grow max-w-[319px] w-[180px]">
							<input
								type="text"
								className="border border-border outline-none h-12 px-5 w-full bg-[#F3F4F6]"
								placeholder=""
								value={formData.email}
								onChange={(e) =>
									handleInputChange("email", e.target.value)
								}
							/>
						</div>
						<Button
							text="다른 번호 인증"
							variant="secondary"
							className="rounded-md h-12 ml-auto"
						/>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="w-[100px] sm:w-[133px]">
							이메일 <span className="text-[#4E4EFF]">*</span>
						</span>
						<div className="flex-grow max-w-[319px] w-0">
							<input
								type="text"
								className="border border-border outline-none h-12 px-5 w-full"
								placeholder="Mina@Gmail.Com"
								value={formData.email}
								onChange={(e) =>
									handleInputChange("email", e.target.value)
								}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-4">
					<Button
						text="로그아웃하기"
						variant="secondary"
						className="w-[160px] flex-grow max-w-[232px] bg-transparent !text-primary border !border-primary hover:!text-white h-12"
						type="button"
					/>
					<Button
						text="저장"
						variant="primary"
						className="w-[160px] flex-grow max-w-[232px] h-12"
						type="submit"
					/>
				</div>
			</div>
		</>
	);
}
