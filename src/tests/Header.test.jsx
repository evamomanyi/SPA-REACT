import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders portfolio title", () => {
    render(<Header />);

    expect(
      screen.getByText(/my project portfolio/i)
    ).toBeInTheDocument();
  });

  test("renders subtitle", () => {
    render(<Header />);

    expect(
      screen.getByText(
        /showcasing my projects and achievements/i
      )
    ).toBeInTheDocument();
  });
});