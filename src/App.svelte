<script>
	import axios from 'axios';
	// import baseUrl from '../env/environments'

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

<ul>
  {#each List as post}
    <li>{post.Nombre}
      <!-- {src} is short for src={src} -->
	  <img src="{post.Base}" width="100px">
    </li>
  {/each}
</ul>


<style>
	ul>li {
		color: crimson;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
