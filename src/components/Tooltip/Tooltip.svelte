<script lang="ts">
  import { createPopperActions } from "svelte-popperjs";

  export let label: string;
  export let placement: "left" | "right" | "top" | "bottom"  = "top";

  //TODO arrowをOFFにするオプションなどあるか

  const [popperRef, popperContent] = createPopperActions({
    placement: placement,
    strategy: "fixed",
  });
  const extraOpts = {
    modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
  };

  let showTooltip = false;
</script>

<div data-testid="tooltipAffiliation"
  class="tooltip__affiliation"
  use:popperRef
  on:mouseenter={() => (showTooltip = true)}
  on:mouseleave={() => (showTooltip = false)}
>
  <slot />
</div>

{#if showTooltip}
  <div class="tooltip__main" use:popperContent={extraOpts}>
    <span data-testid="tooltipLabel" class="tooltip__label">{label}</span>
    <div class="tooltip__arrow" data-popper-arrow />
  </div>
{/if}
<style src="./tooltip.css"></style>
