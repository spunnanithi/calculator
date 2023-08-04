"use client";

import React, { useContext } from "react";
import { CalcContext } from "../_context/CalcContext";

export default function Screen() {
	const { calc } = useContext(CalcContext);

	return (
		<div
			data-testid="screen"
			className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
			<div className="w-full py-5 px-6 text-6xl text-white font-thin">
				{calc.num ? calc.num : calc.res}
			</div>
		</div>
	);
}
