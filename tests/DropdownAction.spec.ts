import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import DropdownAction from "../src/components/Dropdown/DropdownAction.svelte";

test("DropdownActionにclassが表示される", () => {
  const { getByTestId } = render(DropdownAction, {
    label: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("DropdownActionにラベルが表示される", () => {
  const { getByTestId } = render(DropdownAction, {
    label: "ラベル",
  });
  expect(getByTestId("button").textContent).toBe("ラベル");
});

test("DropdownActionの初期表示は、Dropdownが非表示である", () => {
  const { getByTestId } = render(DropdownAction, {
    label: "<ANY>",
  });
  const contents = getByTestId("contents");
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "none"
  );
});

test("DropdownActionの、Dropdownが非表示のとき、ボタンをクリックするとDropdownが表示される", async () => {
  const { getByTestId } = render(DropdownAction, {
    label: "<ANY>",
  });
  const button = getByTestId("button");
  const contents = getByTestId("contents");
  await userEvent.click(button);
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "block"
  );
});

test("DropdownActionの、Dropdownを表示した後、ボタンをクリックするとDropdownが非表示になる", async () => {
  const { getByTestId } = render(DropdownAction, {
    label: "<ANY>",
  });
  const button = getByTestId("button");
  const contents = getByTestId("contents");
  await userEvent.click(button);
  await userEvent.click(button);
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "none"
  );
});

test("DropdownActionの、Dropdownを表示した後、コンポーネント以外をクリックするとDropdownが非表示になる", async () => {
  const { getByTestId } = render(DropdownAction, {
    label: "<ANY>",
  });
  const button = getByTestId("button");
  const contents = getByTestId("contents");
  await userEvent.click(button);
  await userEvent.click(document.getElementsByTagName("div")[0]);
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "none"
  );
});
