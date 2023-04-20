<script lang="ts">
  import Checkmark from "./Checkmark.svelte";
  import { createEventDispatcher } from "svelte";

  export let isChecked: boolean = false;
  export let isIndeterminate: boolean = false;
  export let isDisable: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let label: string;

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", event.detail);
  }

  let isHover: boolean = false;
</script>

<label
  class="base{isDisable ? ' isDisable' : ''}"
  on:mouseenter={() => (isHover = true)}
  on:mouseleave={() => (isHover = false)}
>
  <Checkmark
    {value}
    {name}
    {id}
    {isChecked}
    {isIndeterminate}
    {isDisable}
    {isHover}
    on:change={handleOnChange}
  />
  <span class="label" data-testid="label">
    {label}
  </span>
</label>

<style src="./checkboxText.css"></style>
