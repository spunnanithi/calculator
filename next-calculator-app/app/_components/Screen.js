"use client";

import React, { useContext } from "react";
import { CalcContext } from "../_context/CalcContext";

export default function Screen() {
	const { calc } = useContext(CalcContext);

	// function to format number
	const formatNumber = (numberString) => {
		const number = parseFloat(numberString);

		if (isNaN(number)) {
			return "";
		}

		if (numberString.length > 6) {
			return number.toExponential(2); // You can adjust the decimal places as needed
		}

		return numberString;
	};

	return (
		<div
			data-testid="screen"
			className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
			<div className="w-full py-5 px-6 text-6xl text-white font-thin">
				{calc.num
					? formatNumber(calc.num.toString())
					: formatNumber(calc.res.toString())}
			</div>
		</div>
	);
}
