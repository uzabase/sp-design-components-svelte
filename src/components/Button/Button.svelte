<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let label: string;
  export let loading: boolean = false;
  export let selected: boolean = false;
  export let disabled: boolean = false;
  let clazz: string | undefined = undefined;
  export { clazz as class };
  export let type: "default" | "destructive" = "default";
  export let appearance: "outline" | "fill" | "text" = "outline";
  export let size: "medium" | "large" | "xLarge" | "width160" | "width80" =
    "medium";
  const dispatch = createEventDispatcher();

  const allStyles = () => {
    const styles = ["base"];
    switch (type) {
      case "default":
        styles.push("type__default");
        break;
      case "destructive":
        styles.push("type__destructive");
        break;
    }
    switch (appearance) {
      case "outline":
        styles.push("appearance__outline");
        break;
      case "fill":
        styles.push("appearance__fill");
        break;
      case "text":
        styles.push("appearance__text");
        break;
    }
    switch (size) {
      case "medium":
        styles.push("size__medium");
        break;
      case "large":
        styles.push("size__large");
        break;
      case "xLarge":
        styles.push("size__xLarge");
        break;
      case "width160":
        styles.push("size__width160");
        break;
      case "width80":
        styles.push("size__width80");
        break;
    }
    if (disabled) styles.push("isDisable");
    if (selected) styles.push("isSelected");
    if (loading) styles.push("isLoading");
    if (clazz) styles.push(clazz);

    return styles.join(" ");
  };
  function handleOnClick(event) {
    dispatch("click", event);
  }
</script>

<button
  data-testid="button"
  class={allStyles()}
  {disabled}
  on:click={handleOnClick}
>
  <span class="base__label">{label}</span>
</button>

<style src="./button.css"></style>
