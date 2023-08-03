"use client";

import React, { useContext } from "react";
import Button from "./Button";
import { CalcContext } from "../_context/CalcContext";

export default function Keypad() {
	const { calc, setCalc } = useContext(CalcContext);

	const first = ["C", "+/-", "%", "÷"];
	const second = ["7", "8", "9", "⨉"];
	const third = ["4", "5", "6", "-"];
	const fourth = ["1", "2", "3", "+"];
	const fifth = ["0", "."];

	const toLocaleString = (num) =>
		String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

	const removeSpaces = (num) => num.toString().replace(/\s/g, "");

	const handleEqualsClick = () => {
		if (calc.res && calc.num) {
			const math = (a, b, sign) => {
				const result = {
					"+": (a, b) => a + b,
					"-": (a, b) => a - b,
					"⨉": (a, b) => a * b,
					"÷": (a, b) => a / b,
				};
				return result[sign](a, b);
			};
			setCalc({
				...calc,
				num: 0,
				res:
					calc.num === "0" && calc.sign === "/"
						? "Can't divide by 0"
						: toLocaleString(
								math(
									Number(removeSpaces(calc.res)),
									Number(removeSpaces(calc.num)),
									calc.sign
								)
						  ),
				sign: "",
			});
		}
	};

	return (
		<>
			<div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
				<div className="flex w-full">
					{first.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{second.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{third.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{fourth.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{fifth.map((value) => {
						return <Button key={value} value={value} />;
					})}
					<div className="w-2/4 border-r border-indigo-400">
						<button
							onClick={handleEqualsClick}
							className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
