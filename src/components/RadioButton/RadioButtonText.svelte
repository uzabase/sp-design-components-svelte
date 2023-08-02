<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let checked: boolean = false;
  export let indeterminate: boolean = false;
  export let disabled: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let label: string = "";
  let clazz: string | undefined = undefined;
  export { clazz as class };

  const dispatch = createEventDispatcher();

  function handleOnChange(event) {
    dispatch("change", { event });
  }
</script>

<label class="base {clazz ? clazz : ''}" data-testid="base">
  <input
    type="radio"
    {value}
    {name}
    {id}
    {checked}
    {indeterminate}
    {disabled}
    class="input"
    on:change={handleOnChange}
    data-testid="input"
  />
  <span class="mark">
    <span class="markIn" />
  </span>
  <span data-testid="label" class="label">
    {label}
  </span>
</label>

<style src="./radioButtonText.css"></style>
