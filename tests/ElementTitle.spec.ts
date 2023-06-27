import { render } from "@testing-library/svelte";
import ElementTitle from "../src/components/ElementTitle/ElementTitle.svelte";

test("Accordionにclassが表示される", () => {
  const { getByTestId } = render(ElementTitle, {
    title: "<ANY>",
    class: "className",
  });
  expect(getByTestId("title").classList.contains("className")).toBeTruthy();
});

test("ボタンにラベルが表示される", () => {
  const { getByTestId } = render(ElementTitle, {
    title: "タイトル",
  });
  expect(getByTestId("title").textContent).toBe("タイトル");
});
