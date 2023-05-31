<script lang="ts">
  export let size: "width80" | "width160" | "width240" = "width160";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<dl class="base {size} {clazz ? clazz : ''}">
  <slot />
</dl>

<style src="./definitionList.css"></style>
