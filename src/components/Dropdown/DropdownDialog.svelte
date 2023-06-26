<script lang="ts">
  import Button from "../Button/Button.svelte";
  import { clickOutside } from "../../lib/click_outside.ts";

  export let label: string;
  export let show: boolean = false;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<div
  class="base {show ? 'show' : ''} {clazz}"
  data-testid="base"
  use:clickOutside
  on:outclick={() => (show = false)}
>
  <div data-testid="action">
    <Button {label} selected={show} on:click={() => (show = !show)} />
  </div>
  <div class="contents" data-testid="contents">
    <slot />
  </div>
</div>

<style src="./dropdownDialog.css"></style>
