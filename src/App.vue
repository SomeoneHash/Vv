<template>
  <div class="app">
    <h1 class="title">{{msg}}~</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
    <School :getSchoolName='getSchoolName'/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第一种写法，使用@或v-on) -->
    <!-- <Student v-on:haha="getStudentName"/> -->
    <Student @haha="getStudentName" @demo='m1'/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第二种写法，使用ref) -->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
  
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name:'App',
  conponents:{School,Student},
  data() {
    return {
      msg:'你好啊~'
    }
  },
  methods:{
    getSchoolName(name){
      console.log('App收到了学校名',name)
    },
    getStudentName(name,...params){
      console.log("App收到了学生名",name,params)
    }
  },
  mounted(){
    // this.$refs.student.$once('haha',this.getStudentName)
    this.$refs.student.$on('haha',this.getStudentName)
    // setTimeout(()=>{
    //   this.$refs.student.$on('haha',this.getStudentName)
    // },3000)
  },
}
</script>

<style>
.app{
  background-color: blueviolet;
  padding: 5px;
}
</style>