<template>
    <div>
      <div class="components-a">
        <div>{{btext}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Btest",
        data () {
          return {
            'btext':"我是B组件内容"
          }
        },

        methods:{
          bbtn:function(){
            this.$on("myFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题
              this.btext = message
            })
          }
        },
      created:function(){
        this.bbtn();
      },
    }
</script>

<style scoped>

</style>
