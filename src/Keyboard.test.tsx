import { render, screen } from "@testing-library/react";
import { Keyboard } from "./Keyboard";
import "@testing-library/jest-dom";

describe("Keyboard", () => {
  test("initial render without crashing", () => {
    render(
      <Keyboard
        disabled={false}
        activeLetters={[]}
        inactiveLetters={[]}
        addGuessedLetter={() => {}}
      />
    );
  });

  test("marks active and inactive letters as disabled after typed some good and wrong letters of the word hello", () => {
    render(
      <Keyboard
        disabled={false}
        activeLetters={["h", "e"]}
        inactiveLetters={["j", "w"]}
        addGuessedLetter={() => {}}
      />
    );
    expect(screen.getByText("h")).toBeDisabled();
    expect(screen.getByText("e")).toBeDisabled();
    expect(screen.getByText("j")).toBeDisabled();
    expect(screen.getByText("w")).toBeDisabled();
  });

  test("marks all letters as disabled after winning when word to guess was hello", () => {
    const activeLetters = ["h", "e", "l", "o"];
    const inactiveLetters = [
      "a",
      "b",
      "c",
      "d",
      "f",
      "g",
      "i",
      "j",
      "k",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    render(
      <Keyboard
        disabled={false}
        activeLetters={activeLetters}
        inactiveLetters={inactiveLetters}
        addGuessedLetter={() => {}}
      />
    );

    // Check if active letters are disabled
    activeLetters.forEach((letter) => {
      expect(screen.getByText(letter)).toBeDisabled();
    });

    // Check if inactive letters are disabled
    inactiveLetters.forEach((letter) => {
      expect(screen.getByText(letter)).toBeDisabled();
    });
  });
});
