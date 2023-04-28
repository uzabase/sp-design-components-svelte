<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let items: {label: string ; value: string ;}[] = [];
  export let value: string | undefined = undefined;
  const name: string = Math.random().toString(36).slice(-8);

  const dispatch = createEventDispatcher();
  function handleOnChange(value) {
    dispatch("change", { value });
  }

</script>
<!--
  UIチームに確認
  //幅は固定したいか
  //文字によって幅が違う、ってのは避けたいか 最小幅80px 
  //折り返し不可（line-heightが100％だった）みたいだが省略記号...を出すか 検討してもらう
  //ボーダーの重なりの話
  //デフォで選択されてない状態ってある？ない
-->
<ul class="segmentedControl__base">
	{#each items as item}
  <li class="segmentedControl__item" data-testid="segmentedControlItem">
    <label>
      <input data-testid="segmentedControlRadio" class="segmentedControl__radio" type="radio" value="{item.value}" name="{name}" checked="{item.value === value}" on:change={()=> handleOnChange(item.value)}>
      <span data-testid="segmentedControlLabel" class="segmentedControl__label"> {item.label}</span>
    </label>
  </li>
	{/each}
</ul>

<style src="./segmentedControl.css"></style>