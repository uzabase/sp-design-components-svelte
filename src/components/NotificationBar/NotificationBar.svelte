<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: "information" | "success" | "warning" | "error" =
    "information";
  let clazz: string | undefined = undefined;
  export { clazz as class };

  $: title = () => {
    switch (type) {
      case "information":
        return "インフォメーション";
      case "success":
        return "成功";
      case "warning":
        return "警告";
      case "error":
        return "エラー";
    }
  };

  const dispatch = createEventDispatcher();
  function handleOnCloseClick(event) {
    dispatch("closeClick", event);
  }
</script>

<div
  class="base {type} {clazz ? clazz : ''}"
  data-testid="base"
  role={type === "error" ? "alert" : "status"}
  aria-live={type === "error" ? "assertive" : "polite"}
>
  <dl class="contents">
    <dt class="icon">
      {#if type === "information"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <title>{title()}</title>
          <path
            fill="#3978BF"
            fill-rule="evenodd"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.8-13.28V9.5h1.6V7.72h-1.6Zm-.7 8.48v.52h3v-.52l-.7-.2v-5h-2.3v.8l.7.2v4l-.7.2Z"
            clip-rule="evenodd"
          />
        </svg>
      {:else if type === "success"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <title>{title()}</title>
          <path
            fill="#1A7037"
            fill-rule="evenodd"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.53-10.47-1.06-1.06L11 12.94l-1.47-1.47-1.06 1.06 2 2 .53.53.53-.53 4-4Z"
            clip-rule="evenodd"
          />
        </svg>
      {:else if type === "warning"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <title>{title()}</title>
          <path
            fill="#EAB100"
            fill-rule="evenodd"
            d="M2.58 18.857 11.342 4h1.304l8.761 14.858L20.755 20H3.232l-.652-1.142ZM11.2 9.5v5h1.6v-5h-1.6Zm0 6.5v1.5h1.6V16h-1.6Z"
            clip-rule="evenodd"
          />
        </svg>
      {:else if type === "error"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <title>{title()}</title>
          <path
            fill="#CA3232"
            fill-rule="evenodd"
            d="M2.58 18.857 11.342 4h1.304l8.761 14.858L20.755 20H3.232l-.652-1.142ZM11.2 9.5v5h1.6v-5h-1.6Zm0 6.5v1.5h1.6V16h-1.6Z"
            clip-rule="evenodd"
          />
        </svg>
      {/if}
    </dt>
    <dd class="text">
      <slot />
    </dd>
  </dl>
  <button class="close" on:click={handleOnCloseClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <title>この{title()}を閉じる</title>
      <path
        fill="#191919"
        d="m13.3 12.2 5.1 5.1-1.1 1.1-5.1-5.1-5.1 5.1L6 17.3l5.1-5.1L6 7.1 7.1 6l5.1 5.1L17.3 6l1.1 1.1-5.1 5.1Z"
      />
    </svg>
  </button>
</div>

<style src="./notificationBar.css"></style>
