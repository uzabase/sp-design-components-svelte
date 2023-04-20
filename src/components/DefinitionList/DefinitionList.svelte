<script lang="ts">
  export let size: "width80" | "width160" | "width240" = "width160";
</script>

<dl class="base {size}">
  <slot />
</dl>

<style src="./definitionList.css"></style>
