import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ContextMenu from "../src/components/ContextMenu/ContextMenu.svelte";
import ContextMenuItem from "../src/components/ContextMenu/ContextMenuItem.svelte";

test("ContextMenuにclassが表示される", () => {
  const { getByTestId } = render(ContextMenu, {
    class: "className",
    $$slots: "<ANY>",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("ContextMenuにslotがない場合、なにも表示されない", () => {
  const { queryByTestId } = render(ContextMenu);
  expect(queryByTestId("base")).toBeNull();
});

test("ContextMenuItemにclassが表示される", () => {
  const { getByTestId } = render(ContextMenuItem, {
    label: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("ContextMenuItemにラベルが表示される", () => {
  const { container } = render(ContextMenuItem, {
    label: "ラベル",
  });
  expect(container.textContent).toBe("ラベル");
});
