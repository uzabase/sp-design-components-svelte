<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let isChecked: boolean = false;
  export let isIndeterminate: boolean = false;
  export let isDisable: boolean = false;
  export let isHover: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", { event });
  }
</script>

<span class="base{isHover ? ' isHover' : ''}">
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
  <span class="checkmark">
    <span class="checkmarkIn" />
  </span>
</span>

<style src="./checkmark.css"></style>
