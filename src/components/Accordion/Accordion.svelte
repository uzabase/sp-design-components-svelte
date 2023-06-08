<script lang="ts">
  import { slide } from "svelte/transition";

  export let label: string;
  export let open: boolean = false;
</script>

<div class={open ? "open" : ""}>
  <button on:click={() => (open = !open)} class="label">
    <span class="labelIn" data-testid="label">{label}</span>
  </button>
  {#if open}
    <div
      in:slide={{ duration: 200 }}
      out:slide={{ duration: 200 }}
      data-testid="contents"
    >
      <slot />
    </div>
  {/if}
</div>

<style src="./accordion.css"></style>
