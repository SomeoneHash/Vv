<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <myHeader :addTodo='addTodo'/>
      <myList
       :todos='todos'
       :checkTodo='checkTodo'
       :deleteTodo='deleteTodo'
       />
      <myFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo='clearAllTodo'
      />
    </div>
  </div>
</template>

<script>
  import myHeader from './components/myHeader.vue'
  import myList from './components/myList.vue'
  import myFooter from './components/myFooter.vue'

  
  export default {
    name:'App',
    components: { myHeader,myList,myFooter },
    data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods:{
      //添加一个todo
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      //勾选or取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id)  todo.isDone = !todo.isDone
        })
      },
      //删除一个todo
      deleteTodo(id){
        this.todos = this.todos.filter (todo => todo.id !== id)
      },
      //全选or取消全选
      checkAllTodo(isDone){
        this.todos.forEach((todo)=>{
          todo.isDone = isDone
        })
      },
      //清除所有已经完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.isDone
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
  }
  
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}


/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>