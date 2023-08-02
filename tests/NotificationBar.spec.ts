import { render } from "@testing-library/svelte";
import NotificationBar from "../src/components/NotificationBar/NotificationBar.svelte";

test("NotificationBarにclassが表示される", () => {
  const { getByTestId } = render(NotificationBar, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("NotificationBarのtypeがinformationのとき、roleがstatusになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "information",
  });
  expect(getByTestId("base").getAttribute("role")).toBe("status");
});

test("NotificationBarのtypeがinformationのとき、aria-liveがpoliteになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "information",
  });
  expect(getByTestId("base").getAttribute("aria-live")).toBe("polite");
});

test("NotificationBarのtypeがsuccessのとき、roleがstatusになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "success",
  });
  expect(getByTestId("base").getAttribute("role")).toBe("status");
});

test("NotificationBarのtypeがsuccessのとき、aria-liveがpoliteになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "success",
  });
  expect(getByTestId("base").getAttribute("aria-live")).toBe("polite");
});

test("NotificationBarのtypeがwarningのとき、roleがstatusになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "warning",
  });
  expect(getByTestId("base").getAttribute("role")).toBe("status");
});

test("NotificationBarのtypeがwarningのとき、aria-liveがpoliteになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "warning",
  });
  expect(getByTestId("base").getAttribute("aria-live")).toBe("polite");
});

test("NotificationBarのtypeがerrorのとき、roleがalertになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "error",
  });
  expect(getByTestId("base").getAttribute("role")).toBe("alert");
});

test("NotificationBarのtypeがerrorのとき、aria-liveがassertiveになる", () => {
  const { getByTestId } = render(NotificationBar, {
    type: "error",
  });
  expect(getByTestId("base").getAttribute("aria-live")).toBe("assertive");
});
