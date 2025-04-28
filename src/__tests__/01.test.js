import { renderHook, act } from "@testing-library/react-hooks";
import { useDocumentTitle } from "../exercise/01"; // or "../solution/01"

describe("Exercise 01", () => {
  test("is exported as a named export", () => {
    try {
      expect(typeof useDocumentTitle).toBe("function");
    } catch (e) {
      throw new Error("Make sure to export your hook!");
    }
  });

  test("sets the document title", () => {
    renderHook(() => useDocumentTitle()); // no need to pass a title here
    act(() => {
      expect(document.title).toBe("Welcome to the home page!");
    });
  });
});
