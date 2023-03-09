import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Checkbox from "../src/components/Checkbox/Checkbox.svelte";

test("チェックボックスにラベルが表示される", () => {
  const { getByTestId } = render(Checkbox, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});

test("uncheckedのチェックボックスをクリックするとcheckedになる", async () => {
  const { getByTestId } = render(Checkbox, {
    isChecked: false,
  });
  const wrapper = getByTestId("wrapper");
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(wrapper);
  expect(input.checked).toBe(true);
});

test("checkedのチェックボックスをクリックするとuncheckedになる", async () => {
  const { getByTestId } = render(Checkbox, {
    isChecked: true,
  });
  const wrapper = getByTestId("wrapper");
  const input = <HTMLInputElement>getByTestId("input");
  await fireEvent.click(wrapper);
  expect(input.checked).toBe(false);
});
