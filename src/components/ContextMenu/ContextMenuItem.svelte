<script lang="ts">
  export let label: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<li class="base {clazz ? clazz : ''}" data-testid="base">
  <button class="label">
    <span class="labelIn">{label}</span>
  </button>
</li>

<style src="./contextMenuItem.css"></style>
