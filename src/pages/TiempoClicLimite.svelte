<script>

    import Swal from 'sweetalert2'

	let count = 0;

	$: if (count >= 10) {
		Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
            });
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
