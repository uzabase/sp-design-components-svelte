import { render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import DropdownDialog from "../src/components/Dropdown/DropdownDialog.svelte";
import DropdownDialogItem from "../src/components/Dropdown/DropdownDialogItem.svelte";

test("DropdownDialogにclassが表示される", () => {
  const { getByTestId } = render(DropdownDialog, {
    label: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("DropdownDialogの初期表示は、Dropdownが非表示である", () => {
  const { getByTestId } = render(DropdownDialog, {
    label: "<ANY>",
  });
  const contents = getByTestId("contents");
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "none"
  );
});

test("DropdownDialogの、Dropdownが非表示のとき、ボタンをクリックするとDropdownが表示される", async () => {
  const { getByTestId } = render(DropdownDialog, {
    label: "<ANY>",
  });
  const button = getByTestId("button");
  const contents = getByTestId("contents");
  await userEvent.click(button);
  expect(window.getComputedStyle(contents).getPropertyValue("display")).toBe(
    "block"
  );
});

test("DropdownDialogの、Dropdownを表示した後、ボタンをクリックするとDropdownが非表示になる", async () => {
  const { getByTestId } = render(DropdownDialog, {
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

test("DropdownDialogの、Dropdownを表示した後、コンポーネント以外をクリックするとDropdownが非表示になる", async () => {
  const { getByTestId } = render(DropdownDialog, {
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

test("DropdownDialogItemにclassが表示される", () => {
  const { getByTestId } = render(DropdownDialogItem, {
    title: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("DropdownDialogItemにtitleが表示される", () => {
  const { getByTestId } = render(DropdownDialogItem, {
    title: "タイトル",
  });
  expect(getByTestId("title").textContent).toBe("タイトル");
});
