<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let checked: boolean = false;
  export let indeterminate: boolean = false;
  export let disabled: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  let clazz: string | undefined = undefined;
  export { clazz as class };

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", event);
  }
</script>

<span class="base {clazz ? clazz : ''}">
  <input
    type="checkbox"
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
  <span class="checkmark">
    <span class="checkmarkIn" />
  </span>
</span>

<style src="./checkmark.css"></style>
