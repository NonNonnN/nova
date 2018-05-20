<template>
    <div>
      <dl>
        <dt>{{titleList.one}}</dt>
        <dd v-for="link in links"><router-link  :to="link.url">{{link.name}}</router-link></dd>
      </dl>
    </div>
</template>

<script>
  const config ={
    titleList:{
      one:'tools'
    },
    links:[
      {name:'文件管理',url:'/'},
      {name:'图片抓取',url:'/photorender'},
      {name:'图表',url:''},
      {name:'编辑器',url:''},
    ]
  };
    export default {
        name: "catalog",
      data(){
          return config
      }
    }
</script>

<style lang="less" scoped>
div{
  dl{
    width: 100%;
    dt{
      font-size: 30px;
    }
    dd{
      display: block;
      a{
        display: block;
        text-decoration: none;
        font-size: 20px;
        padding: 10px;
        &:hover{
        background: aqua;
        }
        &:visited{
          color: black;
        }
      }
    }
  }
}
</style>
