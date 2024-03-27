"use client";

import React, { useContext } from "react";
import Button from "./Button";
import { CalcContext } from "../_context/CalcContext";

export default function Keypad() {
	const { calc, setCalc } = useContext(CalcContext);

	// used to populate keypad
	const first_row = ["C", "+/-", "%", "÷"];
	const second_row = ["7", "8", "9", "⨉"];
	const third_row = ["4", "5", "6", "-"];
	const fourth_row = ["1", "2", "3", "+"];
	const fifth_row = ["0", "."];

	// handle click handler for "=" sign
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
						: math(Number(calc.res), Number(calc.num), calc.sign),
				sign: "",
			});
		}
	};

	return (
		<div data-testid="keypad">
			<div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
				<div className="flex w-full">
					{first_row.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{second_row.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{third_row.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{fourth_row.map((value) => {
						return <Button key={value} value={value} />;
					})}
				</div>
				<div className="flex w-full">
					{fifth_row.map((value) => {
						return <Button key={value} value={value} />;
					})}

					{/* equals button */}
					<div className="w-2/4 border-r border-indigo-400">
						<button
							onClick={handleEqualsClick}
							className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
							=
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
