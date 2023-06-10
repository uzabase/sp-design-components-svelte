<script lang="ts">
  export let weight: "medium" | "bold" = "medium";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

{#if Object.keys($$slots).length}
  <span class="base {weight} {clazz ? clazz : ''}" data-testid="base">
    <slot />
  </span>
{/if}

<style src="./textBody.css"></style>
