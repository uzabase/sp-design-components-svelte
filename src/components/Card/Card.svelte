<script lang="ts">
  export let title: string;
  export let image: string;
  export let href: string;
  export let time: string | undefined = undefined;
  export let source: string | undefined = undefined;
  export let size: "small" | "medium" | "large" = "medium";
  export let outbound: boolean = false;

  let dataTime: string;
  $: dataTime = time && time.split("/").join("-");
</script>

<div>
  <a
    {href}
    class="base {size}"
    target={outbound ? "_blank" : "_top"}
    data-testid="href"
  >
    <img src={image} class="image" alt="" />
    <div class="lines">
      <p class="title">
        <cite class="titleIn" data-testid="title">{title}</cite>
      </p>
      {#if time || source}
        <p class="note">
          {#if time}<time datetime={dataTime} data-testid="time">{time}</time
            >{/if}
          {#if time && source}<span class="connect" />{/if}
          {#if source}<cite class="source" data-testid="source">{source}</cite
            >{/if}
        </p>
      {/if}
    </div>
  </a>
</div>

<style src="./card.css"></style>
