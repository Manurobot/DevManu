<script>
	import axios from 'axios';
	import baseUrl from '../env/environments'

	// export let url = 'https://desormex.com/JuegosLSM_Back/public/api/desormex/juego-memoria';

	let List = [];

	const getPosts = async () => {
  const response = await axios.get(baseUrl);
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
    <li>{post.Nombre}</li>
	<img src="{post.Base}" width="100px"/>
  {/each}
</ul>