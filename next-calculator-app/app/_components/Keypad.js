import React from "react";
import Button from "./Button";

export default function Keypad() {
	const first = ["C", "+/-", "DEL", "÷"];
	const second = ["7", "8", "9", "⨉"];
	const third = ["4", "5", "6", "-"];
	const fourth = ["1", "2", "3", "+"];
	const fifth = ["0", "."];

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
						<button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
