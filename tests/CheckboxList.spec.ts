import { render } from "@testing-library/svelte";
import CheckboxList from "../src/components/Checkbox/CheckboxList.svelte";

test("チェックボックスにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxList, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
