<script lang="ts">
  import { slide } from "svelte/transition";

  export let label: string; // TODO: 長さは？
  export let isOpen: boolean = false;

  function handleClick() {
    isOpen = !isOpen;
  }
</script>

<div class={isOpen ? "isOpen" : ""}>
  <button on:click={handleClick} class="label">{label}</button>
  {#if isOpen}
    <div in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
      <slot />
    </div>
  {/if}
</div>

<style src="./accordion.css"></style>
