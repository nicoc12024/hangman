import { render, screen } from "@testing-library/react";
import { HangmanDrawing } from "./HangmanDrawing";
import "@testing-library/jest-dom";

describe("HangmanDrawing", () => {
  test("initial render without crashing", () => {
    render(<HangmanDrawing numberOfGuesses={0} />);
  });

  test("renders head after one guess", () => {
    render(<HangmanDrawing numberOfGuesses={1} />);
    const head = screen.getByTestId("head");
    expect(head).toBeInTheDocument();
  });

  test("renders head and body after two guesses", () => {
    render(<HangmanDrawing numberOfGuesses={2} />);
    const head = screen.getByTestId("head");
    const body = screen.getByTestId("body");
    expect(head).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  test("renders all body parts after six guesses", () => {
    render(<HangmanDrawing numberOfGuesses={6} />);
    const head = screen.getByTestId("head");
    const body = screen.getByTestId("body");
    const leftArm = screen.getByTestId("left-arm");
    const rightArm = screen.getByTestId("right-arm");
    const leftLeg = screen.getByTestId("left-leg");
    const rightLeg = screen.getByTestId("right-leg");

    expect(head).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(leftArm).toBeInTheDocument();
    expect(rightArm).toBeInTheDocument();
    expect(leftLeg).toBeInTheDocument();
    expect(rightLeg).toBeInTheDocument();
  });
});
