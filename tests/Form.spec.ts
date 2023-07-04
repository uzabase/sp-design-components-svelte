import { render } from "@testing-library/svelte";
import Form from "../src/components/Form/Form.svelte";
import FormField from "../src/components/Form/FormField.svelte";

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
