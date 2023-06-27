<script lang="ts">
  import ElementTitle from "../ElementTitle/ElementTitle.svelte";

  export let title: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<dl class="base {clazz}" data-testid="base">
  <dt class="title" data-testid="title">
    <ElementTitle {title} />
  </dt>
  <dd class="contents">
    <slot />
  </dd>
</dl>

<style src="./dropdownDialogItem.css"></style>
