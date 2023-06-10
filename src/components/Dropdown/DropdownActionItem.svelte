<script lang="ts">
  export let text: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<p class="base {clazz ? clazz : ''}" data-testid="base">
  <button class="action">{text}</button>
</p>

<style src="./dropdownActionItem.css"></style>
