import React from "react";

export default function Keypad() {
	return (
		<>
			<div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
				<div className="flex w-full">
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
							C
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
							+/-
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
							%
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">
							÷
						</button>
					</div>
				</div>
				<div className="flex w-full">
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							7
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							8
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							9
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
							⨉
						</button>
					</div>
				</div>
				<div className="flex w-full">
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							4
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							5
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							6
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
							-
						</button>
					</div>
				</div>
				<div className="flex w-full">
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							1
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							2
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							3
						</button>
					</div>
					<div className="w-1/4 border-r border-b border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
							+
						</button>
					</div>
				</div>
				<div className="flex w-full">
					<div className="w-1/4 border-r border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							0
						</button>
					</div>
					<div className="w-1/4 border-r border-indigo-400">
						<button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
							.
						</button>
					</div>
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
