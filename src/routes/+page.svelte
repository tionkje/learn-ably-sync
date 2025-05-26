<script lang="ts">
  import '$lib/ably.js';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

	let result = $state<any>(null)
	async function dorequest(){
		result = await fetch('/').then(r=>r.text())
	}
</script>


<button onclick={dorequest}>Fetch Data</button>

{#if result}
	<pre>{JSON.stringify(result,null,2)}</pre>
{/if}

<pre>{JSON.stringify(data.data, null, 2)}</pre>
