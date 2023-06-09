import { render } from "@testing-library/svelte";
import Checkbox from "../src/components/Checkbox/Checkbox.svelte";
import CheckboxList from "../src/components/Checkbox/CheckboxList.svelte";
import CheckboxText from "../src/components/Checkbox/CheckboxText.svelte";

test("Checkboxにclassが表示される", () => {
  const { getByTestId } = render(Checkbox, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("CheckboxTextにclassが表示される", () => {
  const { getByTestId } = render(CheckboxText, {
    label: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("CheckboxTextにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxText, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});

test("CheckboxListにclassが表示される", () => {
  const { getByTestId } = render(CheckboxList, {
    label: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("CheckboxListにラベルが表示される", () => {
  const { getByTestId } = render(CheckboxList, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
