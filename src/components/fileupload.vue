<template>
    <div>
      <span>
        <input type="file" @change="onUpload">
      </span>
    </div>
</template>

<script>
    export default {
        name: "fileupload",
      methods:{
          onUpload(e){
            const formdata=new FormData();

          }
      }
    }
</script>

<style scoped>

</style>
