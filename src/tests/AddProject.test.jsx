import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProject from "../components/AddProject";

describe("AddProject Component", () => {
  test("submits form correctly", async () => {
    const user = userEvent.setup();

    const mockAddProject = jest.fn();

    render(
      <AddProject
        onAddProject={mockAddProject}
      />
    );

    await user.type(
      screen.getByPlaceholderText(
        /project title/i
      ),
      "Student Portal"
    );

    await user.type(
      screen.getByPlaceholderText(
        /project description/i
      ),
      "Portal for managing students"
    );

    await user.click(
      screen.getByRole("button", {
        name: /add project/i
      })
    );

    expect(mockAddProject).toHaveBeenCalledTimes(1);

    expect(mockAddProject).toHaveBeenCalledWith(
      "Student Portal",
      "Portal for managing students"
    );
  });
});