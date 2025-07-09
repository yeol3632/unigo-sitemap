import { useState } from "react";

export default function EditInformation() {
	const [formInfo, setFormInfo] = useState({
		id: "",
		password: "",
		passwordConfirm: "",
		email: "",
	});
	return (
		<div className="max-w-[400px] pt-16 pb-12">
			<div className="flex flex-col gap-6 text-[16px]">
				<div className="flex items-center mb-[10px]">
					<span className="w-[105px]">이름</span>
					<span className="w-0 flex-grow">김상수</span>
				</div>
				<div className="flex items-center">
					<span className="w-[105px]">휴대전화번호</span>
					<span className="w-0 flex-grow">abed</span>
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
			</div>
		</div>
	);
}
