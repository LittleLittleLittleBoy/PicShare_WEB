<template>
  <ul class="avatar-list">
    <li class="avatar-list-item" v-for="item in likes" :key="item.uid">
      <div  style="margin: 0px;padding: 0px;display: inline">
        <img class="rounded-circle" :src="item.photo_url" style="height: 20px;width: 20px">
      </div>
    </li>

    <span style="font-size: 12px;text-align: end">等<strong>{{this.countNumber}}</strong>人觉得很赞</span>
  </ul>
</template>
<script>
  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:['pid'],
    data(){
      return {
        likes:[],
        countNumber:0
      }
    },
    created(){
      this.getLikes(this.pid,this.currentUid)
    },
    methods:{
      getLikes:function(pid){
        api.getLikes(pid,this.currentUid).then(res=>{
          this.likes=res.data.likes
          this.countNumber=res.data.countNumber
        }).catch(res=>{
          this.likes=res.data.likes
          this.countNumber=res.data.countNumber
        })
      }
    }
  }
</script>
<style scoped>
  .avatar-list{
    list-style: none;
    padding: 0;
    margin-top: 0;
  }
  span, span *{
    vertical-align: bottom;
  }
  .avatar-list-item{
    display: inline-block;
    width: 30px;
    margin-right: 5px;
    vertical-align: top;
  }

  img {
    width: 100%;
  }
  div{
    margin: 10px;
    padding: 20px;
  }
</style>
