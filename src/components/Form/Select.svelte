<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ErrorText from "./ErrorText.svelte";
  import HelpText from "./HelpText.svelte";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let disabled: boolean = false;
  export let error: boolean = false;
  export let errorText: string = "";
  export let helpText: string = "";
  export let required: boolean = false;
  let clazz: string | undefined = undefined;
  export { clazz as class };

  const errorId: string = "error-" + Math.random().toString(36).slice(-8);
  const helpId: string = "help-" + Math.random().toString(36).slice(-8);

  const dispatch = createEventDispatcher();
  function handleOnChange(event) {
    dispatch("change", event);
  }
</script>

<div class="base {clazz ? clazz : ''}" data-testid="base">
  <select
    {name}
    {id}
    {disabled}
    aria-required={required}
    aria-invalid={error}
    aria-describedby="
      {0 < helpText.length ? helpId : ''}
       {error && 0 < errorText.length ? errorId : ''}"
    data-testid="select"
    class="select"
    on:change={handleOnChange}
  >
    <slot />
  </select>
  {#if error && 0 < errorText.length}
    <ErrorText id={errorId} text={errorText} />
  {/if}
  {#if 0 < helpText.length}
    <HelpText id={helpId} text={helpText} />
  {/if}
</div>

<style src="./select.css"></style>
