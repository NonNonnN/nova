<template>
  <div>
    <ul>
      <li v-for="item in items">
        <a :href="item.url">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  const config={
    items:[
      {name:"主页",url:'/'},
      {name:'仓库',url:'http://www.baidu.com'},
      {name:'日志',url:'/'}
    ]
  };
    export default {
        name: "navigate",
      data(){
          return config
      }
    }
</script>

<style lang="less" scoped>
  div{
    text-align: center;
    margin: auto;
    ul{
      height: 100%;
      display: flex;
      align-items: center;
      li{
        padding: 0 30px 0 0;
        display: inline-block;
        a{
          font-size: 30px;
          text-align: center;
          line-height: normal;
          display: inline-block;
          text-decoration: none;
          color: beige;
        }
        a:link{
          color: beige;
        }
        a:active{
          color: beige;

        }
        a:visited{
          color: beige;
        }
        a:hover{
          background: red;
        }
      }
    }
  }

</style>
