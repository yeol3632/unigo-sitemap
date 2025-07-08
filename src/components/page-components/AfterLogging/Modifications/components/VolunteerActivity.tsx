export default function VolunteerActivity() {
	return (
		<div>
			<h4 className="text-xl md:text-2xl font-medium border-b border-black pb-5">
				봉사활동실적
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border-b border-black text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th className="bordered-td py-7">학년</th>
							<th className="bordered-td py-7">일자 또는 기간</th>
							<th className="bordered-td py-7">장소 또는 주관기관명</th>
							<th className="bordered-td py-7">활동내용</th>
							<th className="bordered-td py-7">시간</th>
						</tr>
					</thead>

					{/* Body */}
					<tbody>
						<tr className="text-sm">
							<td className="p-5 text-center py-10" colSpan={5}>
								해당 사항 없음
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-sm text-[#787879] mt-3">
				※ 개인봉사활동 실적은 대입에 반영되지 않으나, 학교교육계획에 따라
				교사가 지도한 실적(‘(학교)’로 등록)은 대입에 반영됩니다.
			</div>
		</div>
	);
}
