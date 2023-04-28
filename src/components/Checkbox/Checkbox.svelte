<script lang="ts">
  import Checkmark from "./Checkmark.svelte";

  export let checked: boolean = false;
  export let indeterminate: boolean = false;
  export let disabled: boolean = false;
  export let value: string = "on";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
</script>

<label class="base">
  <Checkmark
    {value}
    {name}
    {id}
    {checked}
    {indeterminate}
    {disabled}
    on:change
  />
</label>

<style src="./checkbox.css"></style>
