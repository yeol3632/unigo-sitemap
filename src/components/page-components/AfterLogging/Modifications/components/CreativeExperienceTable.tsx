export default function CreativeExperienceTable() {
	return (
		<div>
			<h4 className="text-xl md:text-2xl font-medium border-b border-black pb-5">
				자격증 및 인증 취득사항
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th className="bordered-td py-7">학년</th>
							<th className="bordered-td py-7">영역</th>
							<th className="bordered-td py-7">시간</th>
							<th className="bordered-td py-7">특기 사항</th>
						</tr>
					</thead>

					{/* Body */}
					<tbody>
						<tr className="text-sm">
							<td className="p-5" rowSpan={3}>
								<select className="select bordered-item w-full min-w-[60px]">
									<option value="">1</option>
									<option value="">2</option>
									<option value="">3</option>
								</select>
							</td>
							<td className="text-center p-5 border">자율 활동</td>
							<td className="text-center p-5 border w-[200px]">
								<div className="bordered-item">190</div>
							</td>
							<td className="text-center p-5 border">
								<div className="bordered-item py-3 px-2 !text-start">
									<div className="max-w-[516px] text-xs mr-auto">
										소규모 학습공동체 멘토링 수학 시간에 멘토로서
										팀원들의 취약한 수학적 개념들을 설명할 때 개념
										학습과 문제를 분리시켜서 문제가 요구하는 개념을
										스스로 찾아내게 하는 자신만의 노하우를 전달함.
										기출문제를 제공하면서 다양한 풀이 방법으로 제시함.
										충분한 시간을 주어 팀원들이 먼저 문제에 접근하게
										함. 질의 응답하는 시간을 통해 학습에 대한 이해력을
										높여 팀원들이 수학에 대한 자신감을 가지고 도전할
										수 있도록 역할을 다함.
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center p-5 border">자율 활동</td>
							<td className="text-center p-5 border w-[200px]">
								<div className="bordered-item">190</div>
							</td>
							<td className="text-center p-5 border">
								<div className="bordered-item py-3 px-2 !text-start">
									<div className="max-w-[516px] text-xs mr-auto">
										소규모 학습공동체 멘토링 수학 시간에 멘토로서
										팀원들의 취약한 수학적 개념들을 설명할 때 개념
										학습과 문제를 분리시켜서 문제가 요구하는 개념을
										스스로 찾아내게 하는 자신만의 노하우를 전달함.
										기출문제를 제공하면서 다양한 풀이 방법으로 제시함.
										충분한 시간을 주어 팀원들이 먼저 문제에 접근하게
										함. 질의 응답하는 시간을 통해 학습에 대한 이해력을
										높여 팀원들이 수학에 대한 자신감을 가지고 도전할
										수 있도록 역할을 다함.
									</div>
								</div>
								<div className="bordered-item py-3 px-2 !text-start mt-3">
									<div className="max-w-[516px] text-xs mr-auto text-black/50">
										[재학생만 작성] 자율동아리, 스포츠 클럽 등 입력
										또는 공란
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td className="text-center p-5 border">자율 활동</td>
							<td className="text-center p-5 border w-[200px]">
								<div className="bordered-item">190</div>
							</td>
							<td className="text-center p-5 border">
								<div className="bordered-item py-3 px-2 !text-start">
									<div className="max-w-[516px] text-xs mr-auto text-black/50">
										[재학생만 작성] 희망 분야 입력
									</div>
								</div>
								<div className="bordered-item py-3 px-2 !text-start mt-3">
									<div className="max-w-[516px] text-xs mr-auto">
										소규모 학습공동체 멘토링 수학 시간에 멘토로서
										팀원들의 취약한 수학적 개념들을 설명할 때 개념
										학습과 문제를 분리시켜서 문제가 요구하는 개념을
										스스로 찾아내게 하는 자신만의 노하우를 전달함.
										기출문제를 제공하면서 다양한 풀이 방법으로 제시함.
										충분한 시간을 주어 팀원들이 먼저 문제에 접근하게
										함. 질의 응답하는 시간을 통해 학습에 대한 이해력을
										높여 팀원들이 수학에 대한 자신감을 가지고 도전할
										수 있도록 역할을 다함.
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-sm text-[#787879] mt-3">
				※ 2022학년도 대입부터 진로희망사항은 반영되지 않습니다.
			</div>
		</div>
	);
}
