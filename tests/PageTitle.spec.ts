import { render } from "@testing-library/svelte";
import PageTitle from "../src/components/PageTitle/PageTitle.svelte";
import PageTitleHeading from "../src/components/PageTitle/PageTitleHeading.svelte";

test("PageTitleにclassが表示される", () => {
  const { getByTestId } = render(PageTitle, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("PageTitleHeadingにclassが表示される", () => {
  const { getByTestId } = render(PageTitleHeading, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("PageTitleHeadingにtextが表示される", () => {
  const { getByTestId } = render(PageTitleHeading, {
    text: "ページタイトル",
  });
  expect(getByTestId("base").textContent).toBe("ページタイトル");
});
