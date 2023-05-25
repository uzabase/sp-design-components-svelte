import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/svelte";
import Checkmark from "../src/components/Checkbox/Checkmark.svelte";

test("uncheckedのチェックボックスをクリックするとcheckedになる", async () => {
  const { getByTestId } = render(Checkmark, {
    checked: false,
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(true);
});

test("checkedのチェックボックスをクリックするとuncheckedになる", async () => {
  const { getByTestId } = render(Checkmark, {
    checked: true,
  });
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(input);
  expect(input.checked).toBe(false);
});
