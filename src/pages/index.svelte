<script>
	import axios from 'axios';
	// import baseUrl from '../env/environments'
	let innerHTML = `Hola mundo, <b>soy Manuel</b>`;

	export let url = 'https://desormex.com/JuegosLSM_Back/public/api/desormex/juego-memoria';

	let List = [];

	const getPosts = async () => {
  const response = await axios.get(url);
  if (response.status === 200) {
    const posts = response.data.Payload;
	List = posts;
  } else {
    throw new Error('Error fetching posts');
  }
};

getPosts();
</script>

<h1>Posts</h1>

<p>{@html innerHTML}</p>

<ul>
  {#each List as post}
    <li>{post.Nombre}
      <!-- {src} is short for src={src} -->
	  <img src="{post.Base}" width="100px">
    </li>
	<li>{post.Identidad}</li>
  {/each}
</ul>


<style>
	ul>li {
		color: crimson;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
