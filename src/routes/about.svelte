<script>
	let todos = [];
	const add = () => {todos = [...todos,'']}
	const remove = (index) => {todos = [...todos.slice(0,index), ...todos.slice(index+1)]}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>todo list</h1>
{#each todos as todo, index}
	<input bind:value={todos[index]}>
	<button on:click={()=>remove(index)}>削除</button><br>
{/each}
<button on:click={add}>追加</button>