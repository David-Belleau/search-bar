import { SearchBar } from "../components/searchBar/SearchBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CitiesApi, CitiesPopularApi } from "../utils/apiCalls";

// mocked functions
jest.mock("../utils/apiCalls.tsx", () => ({
  CitiesApi: jest.fn(),
  CitiesPopularApi: jest.fn(),
  CitiesPopularFromApi: jest.fn(),
}));

describe("check the call of the functions", () => {
  test("Call CitiesPopularApi function by selecting the search bar", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBar);
    expect(CitiesPopularApi).toHaveBeenCalled();
  });

  test("Call CitiesApi function by typing a text", () => {
    const searchValue = "nice";
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBar);
    userEvent.type(searchBar, searchValue);
    expect(CitiesApi).toHaveBeenCalled();
  });
});
