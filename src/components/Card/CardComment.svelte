<script lang="ts">
  export let title: string;
  export let image: string;
  export let time: string | undefined = undefined;
  export let source: string | undefined = undefined;
  export let name: string;
  export let job: string;
  export let profileImage: string;
  export let comment: string;
  let clazz: string | undefined = undefined;
  export { clazz as class };

  let dataTime: string;
  $: dataTime = time && time.split("/").join("-");
</script>

<div class="base {clazz ? clazz : ''}" data-testid="base">
  <div class="articleBg" style="background-image: url({image});">
    <div class="article">
      <p class="title" data-testid="title">
        <cite class="titleIn">{title}</cite>
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
  <div class="profile">
    <img
      src={profileImage}
      class="profileImage"
      alt=""
      width="40"
      height="40"
    />
    <div class="lines">
      <p class="name" data-testid="name">{name}</p>
      <p class="job" data-testid="job">{job}</p>
      <p class="comment" data-testid="comment">{comment}</p>
    </div>
  </div>
</div>

<style src="./cardComment.css"></style>
