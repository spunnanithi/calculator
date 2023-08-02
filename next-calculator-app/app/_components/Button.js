"use client";

import React, { useContext } from "react";
import { CalcContext } from "../_context/CalcContext";

export default function Button({ value }) {
	const { calc, setCalc } = useContext(CalcContext);

	const decimalClick = () => {
		setCalc({
			...calc,
			num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
		});
	};

	const clearClick = () => {
		setCalc({
			num: 0,
			res: 0,
			sign: "",
		});
	};

	const reverseSignClick = () => {
		setCalc({ num: -calc.num });
	};

	const deleteClick = () => {
		setCalc({ ...calc, num: calc.num.slice(0, -1) });
	};

	const operatorClick = () => {
		setCalc({
			sign: value,
			res: !calc.res && calc.num ? calc.num : calc.res,
			num: 0,
		});
		console.log(calc.sign, calc.res, calc.num);
	};

	const equalsClick = () => {
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
				res: math(calc.res, calc.num, calc.sign),
				sign: "",
				num: 0,
			});
		}
	};

	const numbersClick = () => {
		if (calc.num !== 0) {
			setCalc({
				...calc,
				num: calc.num + value,
			});
		}
		setCalc({
			...calc,
			num: value,
		});
	};

	const handleBtnClick = (e) => {
		const val = e.target.value;

		if (val === ".") {
			decimalClick();
		} else if (val === "C") {
			clearClick();
		} else if (val === "+/-") {
			reverseSignClick();
		} else if (val === "DEL") {
			deleteClick();
		} else if (val === "÷" || val === "⨉" || val === "-" || val === "+") {
			operatorClick();
		} else if (val === "=") {
			equalsClick();
		} else {
			numbersClick();
		}
	};

	return (
		<div className="w-1/4 border-r border-b border-indigo-400">
			<button
				onClick={handleBtnClick}
				value={value}
				className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
				{value}
			</button>
		</div>
	);
}
