import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Button from "../src/components/Button/Button.svelte";

test("ボタンにラベルが表示される", () => {
  const { getByTestId } = render(Button, {
    label: "ラベル",
  });
  expect(getByTestId("button").textContent).toBe("ラベル");
});

//相談する
//ラベルが空欄だった場合、エラーを返す
