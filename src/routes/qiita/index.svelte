<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch('qiita.json');
    const data = await res.json();
    return { posts: data };
	}
</script>

<script>
  export let posts;
</script>

<svelte:head>
	<title>qiita</title>
</svelte:head>

<h1>Qiita記事一覧</h1>

<ul>
  {#each posts as post}
  <li><a rel='prefetch' href='{post.url}'>{post.title}</a></li>
  {/each}
</ul>