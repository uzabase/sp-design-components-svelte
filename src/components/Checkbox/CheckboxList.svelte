<script lang="ts">
  import Checkmark from "./Checkmark.svelte";

  export let checked: boolean = false;
  export let indeterminate: boolean = false;
  export let disabled: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let label: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<label
  class="base{disabled ? ' disabled' : ''}{checked ? ' checked' : ''} {clazz
    ? clazz
    : ''}"
>
  <Checkmark
    {value}
    {name}
    {id}
    {checked}
    {indeterminate}
    {disabled}
    on:change
  />
  <span class="label" data-testid="label">
    {label}
  </span>
</label>

<style src="./checkboxList.css"></style>
