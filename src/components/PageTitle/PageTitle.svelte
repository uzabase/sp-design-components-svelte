<script lang="ts">
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<div class="base {clazz ? clazz : ''}" data-testid="base">
  <div class="first">
    <slot name="first" class="first" />
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</div>

<style src="./pageTitle.css"></style>
