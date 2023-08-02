import { render } from "@testing-library/svelte";
import SectionTitle from "../src/components/SectionTitle/SectionTitle.svelte";
import SectionTitleHeading from "../src/components/SectionTitle/SectionTitleHeading.svelte";

test("SectionTitleにclassが表示される", () => {
  const { getByTestId } = render(SectionTitle, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("SectionTitleHeadingにclassが表示される", () => {
  const { getByTestId } = render(SectionTitleHeading, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("SectionTitleHeadingにtextが表示される", () => {
  const { getByTestId } = render(SectionTitleHeading, {
    text: "セクションタイトル",
  });
  expect(getByTestId("base").textContent).toBe("セクションタイトル");
});
