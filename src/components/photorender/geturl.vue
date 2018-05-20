<template>
    <div>
      <span>
        <input type="text" ref="input"/>
        <button v-on:click='sends'>提交</button>
      </span>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "geturl",
      data(){
          return{
            submit:{
              url:''
            }
          }
      },
      methods:{
          sends(){
            this.submit.url=this.$refs.input.value;
            $.ajax({
              url:'http://127.0.0.1:8000/getphotolinks',
              type:'get',
              dataType:'json',
              traditional:true,
              data:this.submit,
              success(data){
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
