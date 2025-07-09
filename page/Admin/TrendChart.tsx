"use client";

import { useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceDot,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ day: 18, value: 50000 },
	{ day: 19, value: 14000 },
	{ day: 20, value: 19000 },
	{ day: 21, value: 30000 },
	{ day: 22, value: 16000 },
	{ day: 23, value: 40000 },
	{ day: 24, value: 18000 },
	{ day: 25, value: 44000 },
	{ day: 26, value: 48000 },
];

export default function TrendChart() {
	const [selectedDay] = useState<number>(21);

	return (
		<div>
			<div className="flex justify-between items-center mb-5">
				<h2 className="text-lg font-semibold">분석 요청 추이</h2>
				<select className="px-3 py-1 text-xs border border-border select rounded-[10px] text-[#7B7B7B]">
					<option value="">일별</option>
					<option value="">월별</option>
					<option value="">년별</option>
				</select>
			</div>
			<ResponsiveContainer width="100%" height={260}>
				<AreaChart data={data}>
					<defs>
						<linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#FF6666" stopOpacity={0.4} />
							<stop offset="100%" stopColor="#FF6666" stopOpacity={0} />
						</linearGradient>
					</defs>

					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
						stroke="#E5E5E5"
					/>
					<XAxis
						dataKey="day"
						tick={{ fill: "#888", fontSize: 15 }}
						axisLine={false}
						tickLine={false}
						padding={{ left: 10, right: 10 }}
					/>
					<YAxis
						tick={{ fill: "#000", fontSize: 15 }}
						tickFormatter={(val) => `${val / 1000}k`}
						axisLine={false}
						tickLine={false}
					/>
					<Tooltip cursor={false} contentStyle={{ display: "none" }} />
					<Area
						type="monotone"
						dataKey="value"
						stroke="#FF6666"
						fill="url(#colorFill)"
						strokeWidth={2}
						activeDot={false}
					/>
					<ReferenceLine
						x={selectedDay}
						stroke="black"
						strokeDasharray="5 5"
					/>
					<ReferenceDot
						x={selectedDay}
						y={data.find((d) => d.day === selectedDay)?.value}
						r={8}
						fill="white"
						stroke="#FF6666"
						strokeWidth={5}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
