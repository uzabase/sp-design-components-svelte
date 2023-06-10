import { render } from "@testing-library/svelte";
import TextBody from "../src/components/Text/TextBody.svelte";
import TextCaption from "../src/components/Text/TextCaption.svelte";
import TextLink from "../src/components/Text/TextLink.svelte";

test("TextBodyにclassが表示される", () => {
  const { getByTestId } = render(TextBody, {
    $$slots: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("TextBodyにslotがない場合、なにも表示されない", () => {
  const { queryByTestId } = render(TextBody);
  expect(queryByTestId("base")).toBeNull();
});

test("TextTextCaptionにclassが表示される", () => {
  const { getByTestId } = render(TextCaption, {
    $$slots: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("TextCaptionにslotがない場合、なにも表示されない", () => {
  const { queryByTestId } = render(TextCaption);
  expect(queryByTestId("base")).toBeNull();
});

test("TextLinkにclassが表示される", () => {
  const { getByTestId } = render(TextLink, {
    $$slots: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("TextLinkにslotがない場合、なにも表示されない", () => {
  const { queryByTestId } = render(TextLink);
  expect(queryByTestId("base")).toBeNull();
});
