<script>
	let contar = 0;

	function handleClick() {
		contar += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {contar}
	{contar === 1 ? 'tiempo' : 'tiempos'}
</button>
