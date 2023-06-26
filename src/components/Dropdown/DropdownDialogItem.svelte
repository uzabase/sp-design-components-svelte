<script lang="ts">
  export let title: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<dl class="base {clazz}" data-testid="base">
  <dt class="title" data-testid="title">{title}</dt>
  <dd class="contents">
    <slot />
  </dd>
</dl>

<style src="./dropdownDialogItem.css"></style>
