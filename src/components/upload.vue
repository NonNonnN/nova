<template>
    <div>
      <fileupload id="fileupload"></fileupload>
      <div>
        <span>
        <ul>
          <li><a>{{message}}</a></li>
        </ul>
      </span>
        <span>
          <li v-for="file in files">
          <a >
            {{file.fsname}}
          </a>
        </li>
      </span>
      </div>
    </div>
</template>
<script>
  import $ from 'jquery'
  import upload from './js/upload'
  import Inputgroup from "./inputgroup";
  import Fileupload from "./fileupload";

  const visit=new upload()
    export default {
        name: "upload",
      components: {Fileupload, Inputgroup},
      data(){
        return {
          files:{},
          message:'返回',
          path:['/']
        };
      },
      beforeMount:function () {
        this.uploading();
      },
      methods:{

        uploading(){
            let serf=this;
          $.ajax({
            url:'http://127.0.0.1:8000/readfs',
            type:'get',
            dataType:'json',
            jsonp:'callback',
            data:{
              path:this.path
            },
            traditional:true,
            success:function (data) {
              const b=visit.plant(data);
              serf.files=b
            }
          });
        },
        visit(){
          let serf=this;
          const a=visit.plant(this.files,(data)=>{
            serf=data
          });
          serf.files=a;
          console.log('123')
        },

        }
    }
</script>

<style lang="less"scoped>
div {
  font-size: 20px;
  #fileupload {
    overflow: hidden;
  }
  div {
    span {
    }
    display: block;
      li {
        padding: 0 0 10px 10px;
        display: block;
        text-align: left;
        &:hover {
          background: aqua;
        }
        &:before{
          background: #2c3e50;
        }
      }
    }
  }

</style>
