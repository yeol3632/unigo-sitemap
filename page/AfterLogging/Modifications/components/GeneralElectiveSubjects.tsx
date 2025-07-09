export default function GeneralElectiveSubjects({ title }: { title: string }) {
	return (
		<div>
			<h4 className="text-xl md:text-2xl font-medium border-b-2 border-black pb-5">
				{title}
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th rowSpan={2} className="bordered-td">
								학기*
							</th>
							<th rowSpan={2} className="bordered-td">
								교과*
							</th>
							<th rowSpan={2} className="bordered-td">
								과목*
							</th>
							<th rowSpan={2} className="bordered-td">
								단위수*
							</th>
							<th rowSpan={2} className="bordered-td">
								원점수
							</th>
							<th rowSpan={2} className="bordered-td">
								과목평균
							</th>
							<th rowSpan={2} className="bordered-td">
								성취도*
							</th>
							<th rowSpan={2} className="bordered-td">
								수강자수
							</th>
							<th colSpan={3} className="bordered-td">
								성취도별 분포비율
							</th>
						</tr>
						<tr>
							<th className="bordered-td">A</th>
							<th className="bordered-td">B</th>
							<th className="bordered-td">C</th>
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
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
								</td>
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
								</td>
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
								</td>
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
								</td>
								<td className="p-1 font-medium">
									<div className="bordered-item">190</div>
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
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
