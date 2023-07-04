<script lang="ts">
  export let direction: "row" | "column" = "row";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<dl class="base {direction} {clazz ? clazz : ''}" data-testid="base">
  <slot />
</dl>

<style src="./form.css"></style>
