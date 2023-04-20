import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import CheckboxText from "../src/components/Checkbox/CheckboxText.svelte";

test("uncheckedのチェックボックスをクリックするとcheckedになる", async () => {
  const { getByTestId } = render(CheckboxText, {
    isChecked: false,
    label: "<ANY>",
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(true);
});

test("checkedのチェックボックスをクリックするとuncheckedになる", async () => {
  const { getByTestId } = render(CheckboxText, {
    isChecked: true,
    label: "<ANY>",
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(false);
});

test("チェックボックスにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxText, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
