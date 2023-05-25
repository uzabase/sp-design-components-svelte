import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import CheckboxText from "../src/components/Checkbox/CheckboxText.svelte";

test("チェックボックスにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxText, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
