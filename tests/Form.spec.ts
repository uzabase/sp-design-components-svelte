import { render } from "@testing-library/svelte";
import ErrorText from "../src/components/Form/ErrorText.svelte";
import Form from "../src/components/Form/Form.svelte";
import FormField from "../src/components/Form/FormField.svelte";
import HelpText from "../src/components/Form/HelpText.svelte";
import Select from "../src/components/Form/Select.svelte";
import TextArea from "../src/components/Form/TextArea.svelte";
import TextField from "../src/components/Form/TextField.svelte";

test("Formにclassが表示される", () => {
  const { getByTestId } = render(Form, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("FormFieldにclassが表示される", () => {
  const { getByTestId } = render(FormField, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("FormFieldの項目が必須の時、アスタリスクが表示される", () => {
  const { getByTestId } = render(FormField, {
    required: true,
  });
  expect(getByTestId("required").textContent).toBe("*");
});

test("FormFieldの項目が必須でない時、アスタリスクが表示されない", () => {
  const { queryByTestId } = render(FormField, {
    required: false,
  });
  expect(queryByTestId("required")).toBeNull();
});

test("ErrorTextにtextが表示される", () => {
  const { getByTestId } = render(ErrorText, {
    id: "<ANY>",
    text: "テキスト",
  });
  expect(getByTestId("error").textContent).toBe("テキスト");
});

test("ErrorTextにidが表示される", () => {
  const { getByTestId } = render(ErrorText, {
    id: "id",
    text: "<ANY>",
  });
  expect(getByTestId("error").getAttribute("id")).toBe("id");
});

test("HelpTextにtextが表示される", () => {
  const { getByTestId } = render(HelpText, {
    id: "<ANY>",
    text: "テキスト",
  });
  expect(getByTestId("help").textContent).toBe("テキスト");
});

test("HelpTextにidが表示される", () => {
  const { getByTestId } = render(HelpText, {
    id: "id",
    text: "<ANY>",
  });
  expect(getByTestId("help").getAttribute("id")).toBe("id");
});

test("TextFieldにclassが表示される", () => {
  const { getByTestId } = render(TextField, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("TextFieldにplaceholderが表示される", () => {
  const { getByTestId } = render(TextField, {
    placeholder: "placeholder",
  });
  expect(getByTestId("input").getAttribute("placeholder")).toBe("placeholder");
});

test("TextAreaにclassが表示される", () => {
  const { getByTestId } = render(TextArea, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});

test("TextAreaにplaceholderが表示される", () => {
  const { getByTestId } = render(TextArea, {
    placeholder: "placeholder",
  });
  expect(getByTestId("textarea").getAttribute("placeholder")).toBe(
    "placeholder"
  );
});

test("Selectにclassが表示される", () => {
  const { getByTestId } = render(Select, {
    class: "className",
  });
  expect(getByTestId("base").classList.contains("className")).toBeTruthy();
});
