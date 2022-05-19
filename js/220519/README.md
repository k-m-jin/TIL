### input event

```html
<div id="app">
  <!-- 수동연결방식 input 이벤트를 이용(한글 등) -->
  <!-- <input :value="title" @input="changeInput" /> -->
  <input :value="title" @input="title = $event.target.value" />
  <!-- <input v-model="title" /> -->
  <h1>{{title}}</h1>
  <input type="checkbox" v-model="checked" />
  <!-- vmodel로 같은 데이터를 연결했기 때문에 name 이 필요없음 -->
  <input type="radio" name="heropy" value="H1" v-model="radio" />
  <input type="radio" name="heropy" value="H2" v-model="radio" />
  <h2>{{radio}}</h2>
</div>
```

```js
const App = {
  //데이터는 함수로 만들어서 사용해야함! 참조형이기 때문에 복사
  data() {
    return {
      title: "Hello~",
      checked: true,
      radio: "",
    };
  },
  methods: {
    changeInput(event) {
      console.log(event.target.value);
      this.title = event.target.value;
    },
  },
};
Vue.createApp(App).mount("#app");
//팩토리 함수
```

# todo

```js
const App = {
  //데이터는 함수로 만들어서 사용해야함! 참조형이기 때문에 복사
  data() {
    return {
      title: "Hello~",
    };
  },
};

const app = Vue.createApp(App);
app.mount("#app");
```

# todo

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="module" defer src="./main.js"></script>
  </head>
  <body>
    <div id="app">
      <input v-model="title" @keydown.enter="addTodo" />
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
          <button @click="editMode">update!</button>
          <button @click="deleteTodo(todo)">delete!</button>
        </li>
      </ul>
      <todo-item></todo-item>
    </div>
  </body>
</html>
```

```js
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
```

# component

### 컴포넌트 이유

- 캡슐화
- 재사용

### props는 단방향 부모가 자식에게

### emits 자식이 부모에게

## props

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="module" defer src="./main.js"></script>
  </head>
  <body>
    <div id="app">
      <input v-model="title" @keydown.enter="addTodo" />
      <ul>
        <todo-item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        ></todo-item>
      </ul>
    </div>
  </body>
</html>
```

```js
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
  <input v-else v-model="todo.title"/>
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
    deleteToeo() {},
  },
};

const app = Vue.createApp(App);
app.component("todo-item", TodoItem);
app.mount("#app");
```

## emits

같은 의미

```html
<todo-item
  @hello="todo.title=$event"
  @hello="updateTitle(todo, $event)"
></todo-item>
```

```js
  updateTitle(todo, event) {
      todo.title = event;
    },
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="module" defer src="./main.js"></script>
  </head>
  <body>
    <div id="app">
      <input v-model="title" @keydown.enter="addTodo" />
      <ul>
        <todo-item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @update-title="todo.title=$event"
        ></todo-item>
      </ul>
    </div>
  </body>
</html>
```

```js
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
```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
