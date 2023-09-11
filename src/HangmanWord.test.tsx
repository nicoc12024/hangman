import { render, screen } from "@testing-library/react";
import { HangmanWord } from "./HangmanWord";
import "@testing-library/jest-dom";

describe("HangmanWord", () => {
  test("initial render without crashing", () => {
    render(<HangmanWord guessedLetters={[]} wordToGuess="apple" />);
  });

  test("handles words with duplicate letters", () => {
    render(<HangmanWord guessedLetters={["o", "l"]} wordToGuess="balloon" />);
    const oLetters = screen.queryAllByText("o");
    const lLetters = screen.queryAllByText("l");
    expect(oLetters.length).toBe(2);
    expect(lLetters.length).toBe(2);
  });

  test("reveals letters when reveal is true", () => {
    render(<HangmanWord guessedLetters={["a", "e"]} wordToGuess="apple" reveal />);
    const aLetters = screen.getByText("a");
    const eLetters = screen.getByText("e");
    const pLetters = screen.queryAllByText("p");
    const lLetters = screen.queryByText("l");

    expect(aLetters).toBeInTheDocument();
    expect(eLetters).toBeInTheDocument();
    expect(pLetters.length).toBe(2);
    expect(lLetters).toBeInTheDocument();
  });
});
