interface ExtraCurricularTableProps {
	data: any[];
	thead: any[];
}

export default function ExtraCurricularTable({
	data,
	thead,
}: ExtraCurricularTableProps) {
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						{thead.map((item, index) => (
							<th key={index}>{item.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{item.title1}</td>
							<td>{item.title2}</td>
							<td>{item.title3}</td>
							<td>{item.title4}</td>
							<td>{item.title5}</td>
							<td>{item.regButton}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
