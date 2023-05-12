<script lang="ts">
  import { createEventDispatcher } from "svelte";
  //memo:disabledのところ
  //memo:checkedの扱い
  export let items: { label: string; value: string; disabled: boolean }[] = [];
  export let value: string | undefined = undefined;
  const name: string = Math.random().toString(36).slice(-8);

  const dispatch = createEventDispatcher();
  function handleOnChange(value) {
    dispatch("change", { value });
  }
</script>

<ul class="segmentedControl__base">
  {#each items as item}
    <li class="segmentedControl__item" data-testid="segmentedControlItem">
      <label>
        <input
          data-testid="segmentedControlRadio"
          class="segmentedControl__radio"
          type="radio"
          value={item.value}
          {name}
          checked={item.value === value}
          disabled={item.disabled}
          on:change={() => handleOnChange(item.value)}
        />
        <span
          data-testid="segmentedControlLabel"
          class="segmentedControl__label"
        >
          {item.label}</span
        >
      </label>
    </li>
  {/each}
</ul>

<style src="./segmentedControl.css"></style>
