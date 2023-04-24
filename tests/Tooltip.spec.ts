import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Tooltip from "../src/components/Tooltip/Tooltip.svelte";

//test 最初はtooltipが非表示である
test("最初はtooltipが非表示である", () => {
  const { queryByTestId } = render(Tooltip, {
    label: "<ANY>",
  });
  expect(queryByTestId("tooltipMain")).toBeNull();
});

//test tooltipがmouseenterで表示される
test("tooltipがmouseenterで表示される", async () => {
  const { getByTestId, queryByTestId } = render(Tooltip, {
    label: "<ANY>",
  });
  const tooltipAffiliation = getByTestId("tooltipAffiliation");
  await userEvent.hover(tooltipAffiliation);

  expect(queryByTestId("tooltipMain")).toBeDefined();
});

test("中身のテキストが表示される", async () => {
  const { getByTestId } = render(Tooltip, {
    label: "ラベル",
  });
  const tooltipAffiliation = getByTestId("tooltipAffiliation");
  await userEvent.hover(tooltipAffiliation);

  expect(getByTestId("tooltipLabel").textContent).toBe("ラベル");
});

test("placementが正しく渡せている", async () => {
  const { getByTestId } = render(Tooltip, {
    placement: "bottom",
    label: "<ANY>",
  });
  const tooltipAffiliation = getByTestId("tooltipAffiliation");
  await userEvent.hover(tooltipAffiliation);

  expect(getByTestId("tooltipMain").getAttribute("data-popper-placement")).toBe(
    "bottom"
  );
});

//test tooltipがmouseleaveで非表示になる
test("tooltipがmouseleaveで非表示になる", async () => {
  const { getByTestId, queryByTestId } = render(Tooltip, {
    label: "<ANY>",
  });
  const tooltipAffiliation = getByTestId("tooltipAffiliation");
  await userEvent.hover(tooltipAffiliation);
  await userEvent.unhover(tooltipAffiliation);

  expect(queryByTestId("tooltipMain")).toBeNull();
});
