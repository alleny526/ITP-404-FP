import { render, fireEvent, screen } from "@testing-library/react";
import BookmarkButton from "./BookmarkButton";
import DeleteButton from "./DeleteButton";
import PersonalRating from "./PersonalRating";
import { saveBookmark } from "./api";

test("renders Bookmark component", () => {
  render(<BookmarkButton />);
});

test("renders Delete component", () => {
  render(<DeleteButton />);
});

test("renders Personal Rating component", () => {
  render(<PersonalRating />);
});

test("saveBookmark functions well", () => {
  saveBookmark;
});

test("renders Delete correct text", () => {
  const { getByText } = render(<DeleteButton />);
  expect(getByText("Delete")).toBeInTheDocument();
});

test("renders Bookmark correct text", () => {
  const { getByText } = render(<BookmarkButton />);
  expect(getByText("Bookmark")).toBeInTheDocument();
});

test("renders Personal Rating correct text", () => {
  const { getByText } = render(<PersonalRating />);
  expect(getByText("Update Rating:")).toBeInTheDocument();
});

test("renders Personal Rating correct text2", () => {
  const { getByText } = render(<PersonalRating />);
  expect(getByText("Update")).toBeInTheDocument();
});

test("handles Bookmark form submission", () => {
  const mockFunction = jest.fn();
  const { getByTestId } = render(<BookmarkButton onSubmit={mockFunction} />);
  fireEvent.submit(getByTestId("form"));
  expect(mockFunction).toHaveBeenCalled();
});

test("handles Delete form submission", () => {
  const mockFunction = jest.fn();
  const { getByTestId } = render(<DeleteButton onSubmit={mockFunction} />);
  fireEvent.submit(getByTestId("form"));
  expect(mockFunction).toHaveBeenCalled();
});
