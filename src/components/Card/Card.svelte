<script lang="ts">
  export let title: string;
  export let image: string;
  export let href: string;
  export let time: Date | undefined = undefined;
  export let source: string | undefined = undefined;
  export let size: "small" | "medium" | "large" = "medium";
  export let isOutbound: boolean = false;
</script>

<div>
  <!-- TODO: aタグを裸で出すべきか悩む呼び出し元を信じるか否か -->
  <a {href} class="base {size}" target={isOutbound ? "_blank" : "_self"}>
    <img src={image} class="image" alt="" />
    <div class="lines">
      <p class="title">{title}</p>
      {#if time || source}
        <p class="note">
          <!-- TODO: データベースに含まれるdatatime用の型とフロントに持ってくるべき型はなにか -->
          {#if time}<time>{time}</time>{/if}
          {#if time && source}<span class="connect" />{/if}
          {#if source}<cite class="source">{source}</cite>{/if}
        </p>
      {/if}
    </div>
  </a>
</div>

<style src="./card.css"></style>
