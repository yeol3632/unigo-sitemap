export default function CertificationsAquired() {
	return (
		<div>
			<h4 className="text-xl md:text-2xl font-medium border-b border-black pb-5">
				자격증 및 인증 취득사항
			</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border-b border-black text-sm">
					{/* Header */}
					<thead>
						<tr>
							<th className="bordered-td py-7">구분</th>
							<th className="bordered-td py-7">명칭 또는 종류</th>
							<th className="bordered-td py-7">번호 또는 내용</th>
							<th className="bordered-td py-7">취득 날짜</th>
							<th className="bordered-td py-7">발급 기관</th>
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
				※ 2022학년도 대입부터 진로희망사항은 반영되지 않습니다.
			</div>
		</div>
	);
}
