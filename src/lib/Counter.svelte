<script>
  let contar = 0
  const increment = () => {
    contar += 1
  }

  $: string = `Tu has pulsado ${contar} click.`;

  
  $: if(contar > 5) {
    console.log(`El contador es ${contar}`);
    alert(string);
  }

</script>

<button on:click={increment}>
  contar is {contar}
</button>
