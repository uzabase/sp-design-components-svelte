import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Checkbox from "../src/components/Checkbox/Checkbox.svelte";

test("uncheckedのチェックボックスをクリックするとcheckedになる", async () => {
  const { getByTestId } = render(Checkbox, {
    isChecked: false,
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(true);
});

test("checkedのチェックボックスをクリックするとuncheckedになる", async () => {
  const { getByTestId } = render(Checkbox, {
    isChecked: true,
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(false);
});
