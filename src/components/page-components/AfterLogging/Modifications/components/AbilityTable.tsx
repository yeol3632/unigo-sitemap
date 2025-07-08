export default function AbilityTable() {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th className="bordered-td py-7">과목</th>
							<th className="bordered-td py-7">세부능력 및 특기사항</th>
						</tr>
					</thead>

					{/* Body */}
					<tbody>
						<tr className="text-sm">
							<td className="p-5">
								<span className="bordered-item min-w-[80px]">국어</span>
							</td>
							<td className="text-center p-5 border">
								<div className="bordered-item py-3 px-2 !text-start">
									<div className="text-xs mr-auto">
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
		</div>
	);
}
