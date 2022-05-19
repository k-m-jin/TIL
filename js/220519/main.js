import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
const App = {
  //데이터는 함수로 만들어서 사용해야함! 참조형이기 때문에 복사
  data() {
    return {
      title: "",
      todos: [
        { id: nanoid(), title: "abc" },
        { id: nanoid(), title: "xyz" },
      ],
    };
  },
  methods: {
    addTodo() {
      if (!this.title.trim()) {
        return;
      }
      this.todos.push({
        id: nanoid(),
        title: this.title,
      });
      this.title = "";
    },
    editMode() {},
    deleteTodo(todoTodelete) {
      const index = this.todos.findIndex((todo) => todo.id === todoTodelete.id);
      this.todos.splice(index, 1);
    },
  },
};

const TodoItem = {
  template: /*HTML */ ` 
  <li>
  <span v-if="!editMode">{{ todo.title }}</span>
  <input v-else v-model="todo.title" @input="inputTitle"/>
  <button v-if="!editMode" @click="onEditMode">update!</button>
  <button v-else @click="offEditMode">ok!</button>
  <button @click="deleteTodo">delete!</button>
</li>`,
  props: {
    todo: Object,
  },
  data() {
    return {
      title: "컴포넌트",
      editMode: false,
    };
  },
  methods: {
    onEditMode() {
      this.editMode = true;
    },
    offEditMode() {
      this.editMode = false;
    },
    inputTitle() {
      this.$emit("update-title", event.target.value);
    },
    deleteToeo() {},
  },
};

const app = Vue.createApp(App);
app.component("todo-item", TodoItem);
app.mount("#app");
