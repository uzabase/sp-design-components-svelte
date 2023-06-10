import { render } from "@testing-library/svelte";
import DefinitionList from "../src/components/DefinitionList/DefinitionList.svelte";
import DefinitionListItem from "../src/components/DefinitionList/DefinitionListItem.svelte";

test("DefinitionListにclassが表示される", () => {
  const { getByTestId } = render(DefinitionList, {
    label: "<ANY>",
    $$slots: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("DefinitionListにslotがない場合、なにも表示されない", () => {
  const { queryByTestId } = render(DefinitionList, {
    label: "<ANY>",
  });
  expect(queryByTestId("base")).toBeNull();
});

test("DefinitionListItemにラベルが表示される", () => {
  const { getByTestId } = render(DefinitionListItem, {
    label: "ラベル",
  });
  expect(getByTestId("label").textContent).toBe("ラベル");
});
