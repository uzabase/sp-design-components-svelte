<script lang="ts">
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

{#if Object.keys($$slots).length}
  <ul class="base {clazz ? clazz : ''}" data-testid="base">
    <slot />
  </ul>
{/if}

<style src="./contextMenu.css"></style>
