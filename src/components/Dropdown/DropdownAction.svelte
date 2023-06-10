<script lang="ts">
  import { clickOutside } from "../../lib/click_outside.ts";
  export let label: string;
  export let disabled: boolean = false;
  let clazz: string | undefined = undefined;
  export { clazz as class };

  let show: boolean = false;
</script>

<div
  class="base {show ? 'show' : ''} {disabled ? 'disabled' : ''} {clazz
    ? clazz
    : ''}"
  use:clickOutside
  on:outclick={() => (show = false)}
  data-testid="base"
>
  <button
    class="action"
    on:click={() => (show = !show)}
    {disabled}
    data-testid="button"
  >
    {label}
  </button>
  <div class="contents" data-testid="contents">
    <slot />
  </div>
</div>

<style src="./dropdownAction.css"></style>
