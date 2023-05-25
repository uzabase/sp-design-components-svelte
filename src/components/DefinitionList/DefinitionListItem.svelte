<script lang="ts">
  export let label: string;
</script>

<dt class="label" data-testid="label">{label}</dt>
<dd class="text">
  <slot />
</dd>

<style src="./definitionListItem.css"></style>
