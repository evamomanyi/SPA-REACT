import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Integration Test", () => {
  test("adds new project and displays it", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByPlaceholderText(
        /project title/i
      ),
      "E-Commerce System"
    );

    await user.type(
      screen.getByPlaceholderText(
        /project description/i
      ),
      "Online shopping platform"
    );

    await user.click(
      screen.getByRole("button", {
        name: /add project/i
      })
    );

    expect(
      screen.getByText("E-Commerce System")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Online shopping platform"
      )
    ).toBeInTheDocument();
  });
});