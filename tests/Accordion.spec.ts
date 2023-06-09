import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Accordion from "../src/components/Accordion/Accordion.svelte";

test("Accordionにclassが表示される", () => {
  const { getByTestId } = render(Accordion, {
    label: "<ANY>",
    class: "className",
    open: false,
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("Accordionにラベルが表示される", () => {
  const { getByTestId } = render(Accordion, {
    label: "ラベル",
    open: false,
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});

test("Accordionが開いているとき、slotが表示されている", () => {
  const { getByTestId } = render(Accordion, {
    label: "<ANY>",
    open: true,
  });
  expect(getByTestId("contents")).toBeTruthy();
});

test("Accordionが閉じているとき、slotが表示されていない", () => {
  const screen = render(Accordion, {
    label: "<ANY>",
    open: false,
  });
  expect(screen.queryByTestId("contents")).toBeNull();
});
