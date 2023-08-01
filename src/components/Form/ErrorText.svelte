<script lang="ts">
  export let id: string;
  export let text: string;
</script>

<p {id} class="error" data-testid="error" role="error">{text}</p>

<style src="./errorText.css"></style>
