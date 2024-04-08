import { render, screen } from "@testing-library/react";
import Intro from "./index";

test("smart home intro text", async () => {
  render(<Intro step={0} />);
  const textElement_part1 = await screen.findByText(
    "Smart home can change the way"
  );
  const textElement_part2 = await screen.findByText("you live in the future.");
  expect(textElement_part1).toBeInTheDocument();
  expect(textElement_part2).toBeInTheDocument();
});
