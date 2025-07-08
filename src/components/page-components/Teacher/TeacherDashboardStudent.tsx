"use client";
import { Button } from "@/components/button/Button";
import { tomatoIcons } from "@/components/icons";
import Image from "next/image";
import TeacherSearchComponent from "./TeacherSearchComponent";

export default function TeacherDashboardStudent() {
	return (
		<>
			<div className="max-w-[851px]">
				<TeacherSearchComponent />
			</div>
			<div className="dashboard-card p-6 max-w-[851px]">
				<div className="mb-[14px] flex justify-between items-center">
					<h6 className="font-bold text-base md:text-[22px]">
						내 학생 리스트
					</h6>
					<Button
						text="학생 추가"
						variant="secondary"
						icon={tomatoIcons.plus}
						className="pl-2 pr-4"
					/>
				</div>
				<div className="table-responsive">
					<table className="table2">
						<tbody>
							{Array.from({ length: 7 }).map((_, index) => (
								<tr key={index}>
									<td>
										<div className="flex gap-3 items-center">
											<Image
												src="/images/teacher/avatar2.png"
												width={37}
												height={37}
												alt=""
											/>
											<div className="">
												<h5 className="text-sm">김민지</h5>
												<div className="text-xs text-[#7B7B7B]">
													고3
												</div>
											</div>
										</div>
									</td>
									<td>
										<div className="text-sm text-center">
											위례고등학교
										</div>
									</td>
									<td>
										<div className="flex justify-center">
											<span className="text-xs font-medium py-[7px] px-6 bg-[#F5F5F5] rounded-[10px] text-[#7B7B7B]">
												정보 보기
											</span>
										</div>
									</td>
									<td>
										<div className="flex justify-end">
											<button type="button">
												{tomatoIcons.trash}
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
