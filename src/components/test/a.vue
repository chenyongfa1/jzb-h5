<template>
  <div class="components-a">
    <button @click="abtn">A按钮</button>
  </div>
</template>

<script>
    export default {
        name: "Atest",
        data () {
          return {
            'msg':"我是组件A"
        }
      },
      methods:{
        abtn:function(){
          this.$emit("myFun",this.msg)   //$emit这个方法会触发一个事件
          console.log(this.msg)
        }
      }
    }
</script>

<style scoped>

</style>
