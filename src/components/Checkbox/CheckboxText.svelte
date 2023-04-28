<script lang="ts">
  import Checkmark from "./Checkmark.svelte";

  export let checked: boolean = false;
  export let indeterminate: boolean = false;
  export let disabled: boolean = false;
  export let value: string = "on";
  export let clazz: string = "";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let label: string;
</script>

<label
  class="base{disabled ? ' disabled' : ''}"
  on:mouseenter={() => (clazz = "hover")}
  on:mouseleave={() => (clazz = "")}
>
  <Checkmark
    {value}
    {name}
    {id}
    {checked}
    {indeterminate}
    {disabled}
    {clazz}
    on:change
  />
  <span class="label" data-testid="label">
    {label}
  </span>
</label>

<style src="./checkboxText.css"></style>
