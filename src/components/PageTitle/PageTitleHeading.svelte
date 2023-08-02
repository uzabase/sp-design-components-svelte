<script lang="ts">
  export let text: string = "";
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<span class="base {clazz ? clazz : ''}" data-testid="base">
  {text}
</span>

<style src="./pageTitleHeading.css"></style>
