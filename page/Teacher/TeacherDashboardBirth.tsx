"use client";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import TeacherSearchComponent from "./TeacherSearchComponent";

export default function TeacherDashboardBirth() {
	const [files, setFiles] = useState<File[]>([]);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (acceptedFiles) => {
			setFiles(acceptedFiles);
		},
		accept: {
			"application/pdf": [".pdf"],
		},
	});
	return (
		<>
			<TeacherSearchComponent />
			<div className="max-w-[851px] mb-8 lg:mb-12">
				<div className="max-w-[356px] mx-auto">
					<div className="overflow-hidden">
						<div
							{...getRootProps()}
							className="h-[226px] border-[8px] border-dashed border-[#898989] flex flex-col items-center justify-center cursor-pointer m-[-7px]"
						>
							<input {...getInputProps()} />
							<Upload
								className="w-8 h-8 mb-6 text-black"
								strokeWidth={1.5}
							/>

							<p className="text-lg font-medium text-black">
								파일 일괄 업로드하기
							</p>
						</div>
					</div>

					{/* File Name Preview */}
				</div>
				<div className="text-sm text-[#4E4EFF] mt-[17px] text-center">
					※ 다수의 파일을 한번에 드래그하여 손쉽게 업로드하세요.
				</div>
			</div>
			{/*  */}
			<div className="max-w-[851px]">
				<div className="table-responsive max-w-[663px] mx-auto">
					{/* {files.length > 0 && (
						<div className="text-sm">
							{files.map((file, index: number) => (
								<div key={index} className="pb-1">
									📄 {file.name}
								</div>
							))}
						</div>
					)} */}
					<table className="table">
						<thead>
							<tr>
								<th>파일 이름</th>
								<th>학생 이름</th>
								<th>생기부</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: 7 }).map((_, index) => (
								<tr key={index}>
									<td>
										<div className="text-sm">김민지. pdf</div>
									</td>
									<td>
										<div className="text-center text-sm">
											위례고등학교
										</div>
									</td>
									<td>
										<div className="flex justify-center">
											<Link
												href="#"
												className="text-xs font-medium py-[7px] px-6 border border-black/50 rounded-[10px] "
											>
												김민지
											</Link>
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
