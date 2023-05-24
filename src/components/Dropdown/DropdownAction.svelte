<script lang="ts">
  export let label: string;
  export let isShow: boolean = false;
  export let isDisable: boolean = false;

  function handleOnClick() {
    isShow = !isShow;
  }
</script>

<div class="base{isShow ? ' isShow' : ''}{isDisable ? ' isDisable' : ''}">
  <button class="action" on:click={handleOnClick} disabled={isDisable}>
    {label}
  </button>
  <div class="dropdown">
    <slot />
  </div>
</div>

<style src="./dropdownAction.css"></style>
