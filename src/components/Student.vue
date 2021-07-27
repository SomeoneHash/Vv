<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="getStudentName"></button>
    <button @click="unbind">解绑haha事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了');
      this.number++
    },
    getStudentName(){
      //触发Student组件身上的haha事件
      this.$emit('haha',this.name,666,888,999)
      this.$emit('demo')
    },
    unbind(){
      // this.$off('haha') // 解绑一个自定义事件
      // this.$off(['haha','m1']) // 解绑多个自定义事件
      this.$off() // 解绑所有的自定义事件
    },
    death(){
      this.$destroy() // 销毁了当前的Student组件的实例 销毁后所有Student实例的自定义事件全都不奏效。
    },
  }
}
</script>

<style>
.student{
  background-color: yellow;
  padding: 5px;
  margin-top: 30px;
}

</style>