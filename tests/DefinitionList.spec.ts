import { render } from "@testing-library/svelte";
import DefinitionListItem from "../src/components/DefinitionList/DefinitionListItem.svelte";

test("リストにラベルが表示される", () => {
  const { getByTestId } = render(DefinitionListItem, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
