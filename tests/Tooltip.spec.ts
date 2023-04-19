import { fireEvent } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";

import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Tooltip from "../src/components/Tooltip/Tooltip.svelte";
//test 最初にtooltipが隠れている
//test tooltipの中身が表示される

test("tooltipの中身が表示される", () => {
  const { getByTestId } = render(Tooltip, {
    label: "ラベル",
  }); 

  // マウスオーバーを模擬
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  // ポップアップが表示されていれば成功
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  expect(getByTestId("tooltipLabel").textContent).toBe("ラベル");
});


test('最初にtooltipが隠れている', async () => {
  const { getByTestId } = render(Tooltip, {
    label: "ラベル",
  });
  const nullPopover = screen.queryByText(
  );

  expect(nullPopover).not.toBeInTheDocument();

  // ポップアップが初期状態で隠れていれば成功
  // const nullPopover = screen.queryByText(
  //   /no ice cream will actually be delivered/i
  // );
  expect(getByTestId("tooltipAffiliation")).not.toBeInTheDocument();

  // マウスオーバーを模擬
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  // ポップアップが表示されていれば成功
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // マウスオーバーの解除を模擬
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});















//あとでやる
//jestプラグイン入れる
//testがつなきさんのように動かせないか

