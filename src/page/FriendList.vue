<template>
  <div class="friend-list row">
    <div class="title-block">
      <h3 class="h3-block">朋友</h3>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="show('all')" type="button" class="btn btn-secondary">全部</button>
        <button @click="show('大神')" type="button" class="btn btn-secondary">大神</button>
        <button @click="show('同学')" type="button" class="btn btn-secondary">同学</button>
        <button @click="show('家人')" type="button" class="btn btn-secondary">家人</button>
      </div>
    </div>
    <div class="friend-item col-md-4" v-for="item in items" :key="item.photo_url">
      <person-information
        :friend="true"
        :uid="item.uid"
        :userImage="item.photo_url"
        :name="item.username"
        :description="item.description"
        :follows="item.watch"
        :followers="item.watched"
        :isman="item.sex"
      >

      </person-information>
    </div>
  </div>

</template>
<script>
  import personInformation from '@/components/PersonInformation'
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    components: {
      personInformation
    },
    data(){
      return {
        items:[],
        data:[]
      }
    },
    created(){
      this.getFriend()
    },
    methods:{
      getFriend(){
        api.getFriends(this.currentUid).then(res=>{
          this.items=res.data
          this.data=res.data
        }).catch(res=>{
          this.items=res.data
          this.data=res.data
        })
      },
      show(tag){
        console.log(this.data)
        this.items=[]
        if (tag==='all'){
          let item
          for ( item in this.data){
            this.items.push(this.data[item])
          }
        }else {
          for (let item in this.data){
            if(this.data[item].group===tag){
              this.items.push(this.data[item])
            }
          }
        }
      }
    }
  }
</script>
<style scoped>
  .friend-list{
    padding-left: 10%;
    padding-right: 10%;
    text-align: left;
  }
  .friend-item{
    display: flex;
    padding: 10px;
  }
  .title-block{
    width: 100%;
    margin-top: 2em;
    margin-bottom: 1em;
    padding-left: 10px;
    vertical-align: middle;
  }
  .h3-block{
    display: inline;
    margin: 0em;
    padding-left: 10px;
    vertical-align: bottom;
    font-size: 30px;
    border-left: 3px solid rgba(62,57,98,0.9);
  }
  .btn-group{
    float: right;
  }
</style>
