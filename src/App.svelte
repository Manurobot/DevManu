<script>
	import { onMount } from 'svelte'
	let data
	onMount(async () => {
		data = await fetch('https://desormex.com/JuegosLSM_Back/public/api/desormex/juego-memoria').then(x => x.json())
	})
</script>

<h1>Posts</h1>

<pre>
	{JSON.stringify(data, null, 2)}
</pre>