<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let required: boolean = false;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<div class="base {clazz ? clazz : ''}" data-testid="base">
  <dt class="label">
    <slot name="label" />
    {#if required}
      <abbr title="（必須項目）" class="required" data-testid="required">
        *
      </abbr>
    {/if}
  </dt>
  <dd>
    <slot name="item" />
  </dd>
</div>

<style src="./formField.css"></style>
