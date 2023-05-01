import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Button from "../src/components/Button/Button.svelte";

test("ボタンにラベルが表示される", () => {
  const { getByTestId } = render(Button, {
    label: "ラベル",
  });
  expect(getByTestId("button").textContent).toBe("ラベル");
});
