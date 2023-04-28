import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";

import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import SegmentedControl from "../src/components/SegmentedControl/SegmentedControl.svelte";

//どこかがcheckedになっている


//SegmentedControlのボタンにlabelが表示されている
test("SegmentedControlのボタンにlabelが表示されている", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [
      {label: 'ラベル',value: '<ANY>'}
    ]
  });
  expect(getAllByTestId("segmentedControlLabel")[0].textContent).toBe("ラベル");
});

//SegmentedControlのボタンにvalueが入っている
test("SegmentedControlのボタンにvalueが入っている", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [
      {label: '<ANY>',value: 'ラベル'}
    ]
  });
  expect((getAllByTestId("segmentedControlRadio")[0] as HTMLInputElement).value).toBe("ラベル");
});


//render2回呼ぶ→その呼んだ2つのnameが違うこと

test("hoghogehoge", () => {
  const { getAllByTestId } = render(SegmentedControl, {
    items: [
      {label: '<ANY>',value: '<ANY>'},
      {label: '<ANY>',value: '<ANY>'}
    ]
  });
  //itemsの数と表示されているボタンの数が一緒である  
  expect(getAllByTestId("segmentedControlItem").length).toBe(2);
});



//uncheckedのラジオボタンをクリックするとcheckedになる
// test("uncheckedのチェックボックスをクリックするとcheckedになる", async () => {
//   const { getByTestId } = render(SegmentedControl, {
//     isChecked: false,
//     label: "<ANY>",
//   });
//   const input = <HTMLInputElement>getByTestId("segmentedControlRadio");
//   await fireEvent.click(input);
//   expect(input.checked).toBe(true);
// });

//dispachが受け取れている??やれるといいな


