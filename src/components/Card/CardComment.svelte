<script lang="ts">
  export let title: string;
  export let image: string;
  export let href: string;
  export let time: string | undefined = undefined;
  export let source: string | undefined = undefined;
  export let isOutbound: boolean = false;
  export let name: string;
  export let job: string;
  export let profileImage: string;
  export let comment: string;

  let dataTime: string;
  $: dataTime = time && time.split("/").join("-");
</script>

<div>
  <a {href} class="base" target={isOutbound ? "_blank" : "_self"}>
    <div class="articleBg" style="background-image: url({image});">
      <div class="article">
        <p class="title"><cite class="titleIn">{title}</cite></p>
        {#if time || source}
          <p class="note">
            <!-- TODO: データベースに含まれるdatatime用の型とフロントに持ってくるべき型はなにか -->
            {#if time}<time datetime={dataTime}>{time}</time>{/if}
            {#if time && source}<span class="connect" />{/if}
            {#if source}<cite class="source">{source}</cite>{/if}
          </p>
        {/if}
      </div>
    </div>
    <div class="profile">
      <img src={profileImage} class="profileImage" alt="" />
      <div class="lines">
        <p class="name">{name}</p>
        <p class="job">{job}</p>
        <p class="comment">{comment}</p>
      </div>
    </div>
  </a>
</div>

<style src="./cardComment.css"></style>
