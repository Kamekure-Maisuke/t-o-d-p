<script>
  import { getContext } from 'svelte';
  export let todos = [];
  let add = getContext('add');
  let remove = getContext('remove');
</script>

<h1>todo list</h1>

<p>追加・削除ボタンで編集可能</p>

{#each todos as todo, index}
	<input bind:value={todos[index]}>
	<button on:click={()=>remove(index)}>削除</button><br>
{/each}
<button on:click={add}>追加</button>