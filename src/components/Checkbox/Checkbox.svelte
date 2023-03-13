<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let isChecked: boolean = false;
  export let isIndeterminate: boolean = false;
  export let isDisable: boolean = false;
  export let label: string;
  export let value: string = "on";
  export let name: string;
  export let id: string;

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", { event });
  }
</script>

<label class="base {isDisable ? 'isDisable' : ''}" data-testid="wrapper">
  <input
    type="checkbox"
    {value}
    {name}
    {id}
    checked={isChecked}
    indeterminate={isIndeterminate}
    disabled={isDisable}
    class="input"
    on:change={handleOnChange}
    data-testid="input"
  />
  <span class="checkmark" />
  {#if label}
    <span class="label" data-testid="label">
      {label}
    </span>
  {/if}
</label>

<style src="./checkbox.css"></style>
