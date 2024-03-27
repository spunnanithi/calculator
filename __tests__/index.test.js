import Home from "../app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Calculator", () => {
	it("renders a calculator", () => {
		render(<Home />);
		expect(screen.getByTestId("screen")).toBeInTheDocument();
		expect(screen.getByTestId("keypad")).toBeInTheDocument();
	});
});
