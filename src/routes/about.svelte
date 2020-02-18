<script>
  import { setContext } from 'svelte';
  import Todo from '../components/Todo.svelte';

  let todos = [];
  const add = () => {todos = [...todos,'']};
  const remove = (index) => {todos = [...todos.slice(0,index), ...todos.slice(index+1)]};

  setContext('add',add);
  setContext('remove',remove);
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Todo {todos} />