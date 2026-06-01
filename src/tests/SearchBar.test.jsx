import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  test("updates search input", async () => {
    const user = userEvent.setup();

    const setSearchTerm = jest.fn();

    render(
      <SearchBar
        searchTerm=""
        setSearchTerm={setSearchTerm}
      />
    );

    const input = screen.getByPlaceholderText(
      /search by title/i
    );

    await user.type(input, "Task");

    expect(setSearchTerm).toHaveBeenCalled();
  });
});