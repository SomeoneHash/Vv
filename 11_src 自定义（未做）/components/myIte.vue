<template>
  <li>
    <label>
      <input type="checkbox" :checked='todo.isDone' @change='handleCheck(todo.id)'/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name:'myItem',
    props:['todo','checkTodo','deleteTodo'],
    methods:{
      handleCheck(id){
        this.checkTodo(id)
      },
      handleDelete(id){
        if(confirm('确定要删除？')){
          this.deleteTodo(id)
        }
      },
    }
  };
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

ul li button {
  float: right;
  display: none;
  margin-top: 7px;
}

li:before {
  content: initial;
}


li:last-child {
  border-bottom: none;
}

li:hover {
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
}

li:hover button {
  display: block;
}

</style>