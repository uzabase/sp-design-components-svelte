import { render } from "@testing-library/svelte";
import Card from "../src/components/Card/Card.svelte";

test("Cardにタイトルが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "タイトル",
    image: "<ANY>",
    href: "<ANY>",
  });
  expect(getByTestId("title").textContent).toBe("タイトル");
});

test("Cardにhref属性が追加される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    href: "https://www.uzabase.com/",
  });
  expect(getByTestId("href").getAttribute("href")).toBe(
    "https://www.uzabase.com/"
  );
});

test("リンクを別タブで開くことができる", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    href: "<ANY>",
    outbound: true,
  });
  expect(getByTestId("href").getAttribute("target")).toBe("_blank");
});

test("Cardにtimeが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    href: "<ANY>",
    time: "0000/00/00",
  });
  expect(getByTestId("time").textContent).toBe("0000/00/00");
});

test("Cardにソースが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    href: "<ANY>",
    source: "ソース",
  });
  expect(getByTestId("source").textContent).toBe("ソース");
});
