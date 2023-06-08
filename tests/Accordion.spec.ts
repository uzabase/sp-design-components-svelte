import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Accordion from "../src/components/Accordion/Accordion.svelte";

test("アコーディオンにラベルが表示される", () => {
  const { getByTestId } = render(Accordion, {
    label: "ラベル",
    open: false,
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});

test("アコーディオンが空いているとき、slotが表示されている", () => {
  const { getByTestId } = render(Accordion, {
    label: "<ANY>",
    open: true,
  });
  expect(getByTestId("contents")).toBeTruthy();
});

test("アコーディオンが閉じられているとき、slotが表示されていない", () => {
  const screen = render(Accordion, {
    label: "<ANY>",
    open: false,
  });
  expect(screen.queryByTestId("contents")).toBeNull();
});
