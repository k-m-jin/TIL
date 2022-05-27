<template>
<CreateTodo/>
<TodoList/>
</template>

<script>
import CreateTodo from './components/CreateTodo.vue'
import TodoList from './components/TodoList.vue'
export default {
    components: { 
      CreateTodo,
      TodoList }
}
</script>