"use client";

import React, { useContext } from "react";
import { CalcContext } from "../_context/CalcContext";

export default function Button({ value }) {
	const { calc, setCalc } = useContext(CalcContext);

	const toLocaleString = (num) =>
		String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

	const removeSpaces = (num) => num.toString().replace(/\s/g, "");

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
		setCalc({
			...calc,
			num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
			res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
			sign: "",
		});
	};

	const percentClick = () => {
		let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
		let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

		setCalc({
			...calc,
			num: (num /= Math.pow(100, 1)),
			res: (res /= Math.pow(100, 1)),
			sign: "",
		});
	};

	const operatorClick = () => {
		setCalc({
			sign: value,
			res: !calc.res && calc.num ? calc.num : calc.res,
			num: 0,
		});
	};

	const numbersClick = (val) => {
		if (calc.num.toString().length < 7) {
			setCalc({
				...calc,
				num:
					calc.num === 0 && val === "0"
						? "0"
						: removeSpaces(calc.num) % 1 === 0
						? toLocaleString(Number(calc.num + val))
						: toLocaleString(calc.num + val),
				res: !calc.sign ? 0 : calc.res,
			});
		}
	};

	const handleBtnClick = (e) => {
		const val = e.target.value;

		if (val === ".") {
			decimalClick();
		} else if (val === "C") {
			clearClick();
		} else if (val === "+/-") {
			reverseSignClick();
		} else if (val === "%") {
			percentClick();
		} else if (val === "÷" || val === "⨉" || val === "-" || val === "+") {
			operatorClick();
		} else {
			numbersClick(val);
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
