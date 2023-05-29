import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import SegmentedControl from "../src/components/SegmentedControl/SegmentedControl.svelte";

//type=radioである
test("inputTypeがradioである", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [{ label: "<ANY>", value: "<ANY>" }],
  });
  expect(
    (
      getAllByTestId("segmentedControlRadio")[0] as HTMLInputElement
    ).getAttribute("type")
  ).toBe("radio");
});

test("各inputが同じグループである", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [
      { label: "<ANY>", value: "<ANY>" },
      { label: "<ANY>", value: "<ANY>" },
    ],
  });
  const element1 = getAllByTestId("segmentedControlRadio")[0];
  const element2 = getAllByTestId("segmentedControlRadio")[1];
  expect((element1 as HTMLInputElement).getAttribute("name")).toBe(
    (element2 as HTMLInputElement).getAttribute("name")
  );
});

//SegmentedControlのボタンにlabelが表示されている
test("SegmentedControlのボタンにlabelが表示されている", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [{ label: "ラベル", value: "<ANY>" }],
  });
  expect(getAllByTestId("segmentedControlLabel")[0].textContent).toBe("ラベル");
});

//SegmentedControlのボタンにvalueが入っている
test("SegmentedControlのボタンにvalueが入っている", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [{ label: "<ANY>", value: "ラベル" }],
  });
  expect(
    (getAllByTestId("segmentedControlRadio")[0] as HTMLInputElement).value
  ).toBe("ラベル");
});

//itemsの数と表示されているボタンの数が一緒である
test("itemsの数と表示されているボタンの数が一緒である", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [
      { label: "<ANY>", value: "<ANY>" },
      { label: "<ANY>", value: "<ANY>" },
    ],
  });
  expect(getAllByTestId("segmentedControlItem").length).toBe(2);
});
