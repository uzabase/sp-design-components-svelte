<script lang="ts">
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

{#if Object.keys($$slots).length}
  <span class="base {clazz ? clazz : ''}" data-testid="base">
    <slot />
  </span>
{/if}

<style src="./textCaption.css"></style>
