<script lang="ts">
  import Checkmark from "./Checkmark.svelte";
  import { createEventDispatcher } from "svelte";

  export let isChecked: boolean = false;
  export let isIndeterminate: boolean = false;
  export let isDisable: boolean = false;
  export let value: string = "on";
  export let clazz: string = "";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let label: string;

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", event.detail);
  }
</script>

<label
  class="base{isDisable ? ' isDisable' : ''}"
  on:mouseenter={() => (clazz = "isHover")}
  on:mouseleave={() => (clazz = "")}
>
  <Checkmark
    {value}
    {name}
    {id}
    {isChecked}
    {isIndeterminate}
    {isDisable}
    {clazz}
    on:change={handleOnChange}
  />
  <span class="label" data-testid="label">
    {label}
  </span>
</label>

<style src="./checkboxText.css"></style>
