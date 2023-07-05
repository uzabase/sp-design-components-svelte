import { render } from "@testing-library/svelte";
import Form from "../src/components/Form/Form.svelte";
import FormField from "../src/components/Form/FormField.svelte";
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

test("TextFieldのhelpTextが空欄のとき、helpTextがpタグごと表示されない", () => {
  const { queryByTestId } = render(TextField);
  expect(queryByTestId("helpText")).toBeNull();
});

test("TextFieldのhelpTextがあるとき、helpTextが表示される", () => {
  const { getByTestId } = render(TextField, {
    helpText: "helpText",
  });
  expect(getByTestId("helpText").textContent).toBe("helpText");
});

test("TextFieldがerrorでerrorTextが空欄のとき、errorTextがpタグごと表示されない", () => {
  const { queryByTestId } = render(TextField, {
    error: true,
  });
  expect(queryByTestId("errorText")).toBeNull();
});

test("TextFieldがerrorでなくerrorTextが空欄でないとき、errorTextがpタグごと表示されない", () => {
  const { queryByTestId } = render(TextField, {
    error: false,
    errorText: "errorText",
  });
  expect(queryByTestId("errorText")).toBeNull();
});

test("TextFieldがerrorでerrorTextが空欄でないとき、errorTextが表示される", () => {
  const { getByTestId } = render(TextField, {
    error: true,
    errorText: "errorText",
  });
  expect(getByTestId("errorText").textContent).toBe("errorText");
});
