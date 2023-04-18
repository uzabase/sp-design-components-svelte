import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import ContextMenuItem from "../src/components/ContextMenu/ContextMenuItem.svelte";

test("ContextMenuItemにラベルが表示される", () => {
  const { container } = render(ContextMenuItem, {
    label: "ラベル",
  });
  expect(container.textContent).toBe("ラベル");
});
