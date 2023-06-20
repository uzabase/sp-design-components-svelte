<script lang="ts">
  export let weight: "normal" | "bold" = "normal";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

{#if Object.keys($$slots).length}
  <span class="base {weight} {clazz ? clazz : ''}" data-testid="base">
    <slot />
  </span>
{/if}

<style src="./textLink.css"></style>
