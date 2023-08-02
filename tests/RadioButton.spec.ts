import { render } from "@testing-library/svelte";
import RadioButtonText from "../src/components/RadioButton/RadioButtonText.svelte";

test("RadioButtonTextにclassが表示される", () => {
  const { getByTestId } = render(RadioButtonText, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("RadioButtonTextにlabelが表示される", () => {
  const { getByTestId } = render(RadioButtonText, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
