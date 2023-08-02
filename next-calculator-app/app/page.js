import Keypad from "./_components/Keypad";
import Screen from "./_components/Screen";

export default function Home() {
	return (
		<main className="bg-gradient-to-t from-indigo-400 to-cyan-400">
			<div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
				<div
					className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
					style={{ maxWidth: "300px" }}>
					{/* Screen component */}
					<Screen />
					<Keypad />
				</div>
			</div>
		</main>
	);
}
