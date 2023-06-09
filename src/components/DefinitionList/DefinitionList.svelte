<script lang="ts">
  export let size: "width80" | "width160" | "width240" = "width160";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

{#if Object.keys($$slots).length}
  <dl class="base {size} {clazz ? clazz : ''}" data-testid="base">
    <slot />
  </dl>
{/if}

<style src="./definitionList.css"></style>
