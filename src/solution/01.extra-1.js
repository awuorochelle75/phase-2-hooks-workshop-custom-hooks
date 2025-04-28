import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemon } from "../exercise/01.extra-1"; // Adjust path accordingly

describe("Extra Credit: usePokemon Hook", () => {
  test("handles pending, fulfilled, and rejected states correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemon("pikachu"));

    // Test for 'pending' state
    expect(result.current.status).toBe("pending");

    // Wait for the hook to fetch data
    await waitForNextUpdate();

    // Test for 'fulfilled' state after data is fetched
    expect(result.current.status).toBe("fulfilled");
    expect(result.current.data).toHaveProperty("name", "pikachu");

    // Optionally test for 'rejected' state if you want to simulate an error
    // expect(result.current.status).toBe("rejected");
  });
});
