import { render } from "@testing-library/svelte";
import Card from "../src/components/Card/Card.svelte";
import CardComment from "../src/components/Card/CardComment.svelte";

test("Cardにclassが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});
test("Cardにタイトルが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "タイトル",
    image: "<ANY>",
  });
  expect(getByTestId("title").textContent).toBe("タイトル");
});

test("Cardに画像が表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "test.png",
  });
  expect(getByTestId("image").getAttribute("src")).toBe("test.png");
});

test("Cardにtimeが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    time: "0000/00/00",
  });
  expect(getByTestId("time").textContent).toBe("0000/00/00");
});

test("Cardにdatatimeが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    time: "0000/00/00",
  });
  expect(getByTestId("time").getAttribute("datetime")).toBe("0000-00-00");
});

test("Cardにソースが表示される", () => {
  const { getByTestId } = render(Card, {
    title: "<ANY>",
    image: "<ANY>",
    source: "ソース",
  });
  expect(getByTestId("source").textContent).toBe("ソース");
});

test("CardCommentにclassが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("CardCommentにタイトルが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "タイトル",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
  });
  expect(getByTestId("title").textContent).toBe("タイトル");
});

test("CardCommentに名前が表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "名前",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
  });
  expect(getByTestId("name").textContent).toBe("名前");
});

test("CardCommentに肩書きが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "肩書き",
    profileImage: "<ANY>",
    comment: "<ANY>",
  });
  expect(getByTestId("job").textContent).toBe("肩書き");
});

test("CardCommentにコメントが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "コメント",
  });
  expect(getByTestId("comment").textContent).toBe("コメント");
});

test("CardCommentにtimeが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
    time: "0000/00/00",
  });
  expect(getByTestId("time").textContent).toBe("0000/00/00");
});

test("CardCommentにdatatimeが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
    time: "0000/00/00",
  });
  expect(getByTestId("time").getAttribute("datetime")).toBe("0000-00-00");
});

test("CardCommentにソースが表示される", () => {
  const { getByTestId } = render(CardComment, {
    title: "<ANY>",
    image: "<ANY>",
    name: "<ANY>",
    job: "<ANY>",
    profileImage: "<ANY>",
    comment: "<ANY>",
    source: "ソース",
  });
  expect(getByTestId("source").textContent).toBe("ソース");
});
