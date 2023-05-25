import { render } from "@testing-library/svelte";
import CheckboxList from "../src/components/Checkbox/CheckboxList.svelte";
import CheckboxText from "../src/components/Checkbox/CheckboxText.svelte";

test("CheckboxTextにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxText, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
test("CheckboxListにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxList, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
