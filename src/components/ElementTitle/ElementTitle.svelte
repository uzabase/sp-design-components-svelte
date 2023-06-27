<script lang="ts">
  export let title: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };
</script>

<span class="base {clazz}" data-testid="title">
  {title}
</span>

<style src="./elementTitle.css"></style>
