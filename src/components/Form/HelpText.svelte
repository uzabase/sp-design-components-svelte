<script lang="ts">
  export let id: string;
  export let text: string;
</script>

<p {id} class="help" data-testid="help">{text}</p>

<style src="./helpText.css"></style>
