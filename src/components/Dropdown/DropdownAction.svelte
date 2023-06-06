<script lang="ts">
  import { clickOutside } from "../../lib/click_outside.ts";
  export let label: string;
  export let disabled: boolean = false;

  let show: boolean = false;
</script>

<div
  class="base{show ? ' show' : ''}{disabled ? ' disabled' : ''}"
  use:clickOutside
  on:outclick={() => (show = false)}
>
  <button class="action" on:click={() => (show = !show)} {disabled}>
    {label}
  </button>
  <div class="dropdown">
    <slot />
  </div>
</div>

<style src="./dropdownAction.css"></style>
