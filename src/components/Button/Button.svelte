<script lang="ts">
  export let label: string;
  export let isLoading: boolean = false;
  export let isSelected: boolean = false;
  export let isDisable: boolean = false;

  export let type: "default" | "destructive" = "default";
  export let appearance: "outline" | "fill" | "text" = "outline";
  export let size: "medium" | "large" | "xLarge" | "width160" | "width80" =
    "medium";

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
    if (isDisable) styles.push("isDisable");
    if (isSelected) styles.push("isSelected");
    if (isLoading) styles.push("isLoading");
    return styles.join(" ");
  };
</script>

<button data-testid="button" class={allStyles()} disabled={isDisable}>
  <span class="base__label">{label}</span>
</button>

<style src="./button.css"></style>
