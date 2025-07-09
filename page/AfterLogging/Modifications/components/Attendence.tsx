export default function Attendence() {
	return (
		<div>
			<h4 className="text-xl md:text-2xl font-medium border-b border-black pb-5">
				출결상황
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border-b border-black text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th className="bordered-td" rowSpan={2}>
								학년
							</th>
							<th className="bordered-td" rowSpan={2}>
								수업일수
							</th>
							<th className="bordered-td" colSpan={3}>
								결석일수
							</th>
							<th className="bordered-td" colSpan={3}>
								지각
							</th>
							<th className="bordered-td" colSpan={3}>
								조퇴
							</th>
							<th className="bordered-td" colSpan={3}>
								결과
							</th>
							<th className="bordered-td" rowSpan={2}>
								특기사항
							</th>
						</tr>
						<tr>
							<th className="bordered-td">질병</th>
							<th className="bordered-td">미인정</th>
							<th className="bordered-td">기타</th>
							<th className="bordered-td">질병</th>
							<th className="bordered-td">미인정</th>
							<th className="bordered-td">기타</th>
							<th className="bordered-td">질병</th>
							<th className="bordered-td">미인정</th>
							<th className="bordered-td">기타</th>
							<th className="bordered-td">질병</th>
							<th className="bordered-td">미인정</th>
							<th className="bordered-td">기타</th>
						</tr>
					</thead>

					{/* Body */}
					<tbody>
						{Array.from({ length: 3 }).map((_, index) => (
							<tr key={index} className="text-sm">
								<td className="p-1">
									<select className="select bordered-item w-full">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
								</td>
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<div className="bordered-item">0</div>
								</td>
								<td className="p-1">
									<span className="bordered-item">
										원격수업일수 4일, 개근
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
