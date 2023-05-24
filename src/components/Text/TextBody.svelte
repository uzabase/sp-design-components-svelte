<script lang="ts">
  export let weight: "medium" | "bold" = "medium";
</script>

<span class="base {weight}">
  <slot />
</span>

<style src="./textBody.css"></style>
