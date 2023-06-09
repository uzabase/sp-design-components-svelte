<script lang="ts">
  export let title: string;
  export let image: string;
  export let time: string | undefined = undefined;
  export let source: string | undefined = undefined;
  export let size: "small" | "medium" | "large" = "medium";
  let clazz: string | undefined = undefined;
  export { clazz as class };

  let dataTime: string;
  $: dataTime = time && time.split("/").join("-");
</script>

<div class="base {size} {clazz ? clazz : ''}" data-testid="base">
  <img
    src={image}
    class="image"
    width="216"
    height="122"
    alt=""
    data-testid="image"
  />
  <div class="lines">
    <p class="title">
      <cite class="titleIn" data-testid="title">{title}</cite>
    </p>
    {#if time || source}
      <p class="note">
        {#if time}
          <time datetime={dataTime} data-testid="time">
            {time}
          </time>
        {/if}
        {#if time && source}
          <span class="connect" />
        {/if}
        {#if source}
          <cite class="source" data-testid="source">
            {source}
          </cite>
        {/if}
      </p>
    {/if}
  </div>
</div>

<style src="./card.css"></style>
