<template>
  <div class="activity-container">
    <activity-information
      v-for="item in items"
      :key="item.pid"
    :pid="item.pid"
    :photo_url="item.photo_url"
    :username="item.username"
    :type="item.type"
    :description="item.description"
    :time="item.createtime"
    :user_url="item.user_url"
    >

    </activity-information>
  </div>
</template>
<script>
  import activityInformation from '@/components/ActivityInformation'
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        items:[

        ]
      }
    },
    created(){
      this.getActivityList(this.uid)
    },
    components: {
      activityInformation
    },
    methods:{
      getActivityList(uid){
        api.getShareWork(uid,this.currentUid).then(res=>{
          this.items=res.data
        }).catch(res=>{
          this.items=res.data
        })
      }
    },
    computed:{
      uid:function () {
        return this.$route.params.uid
      }
    }
  }
</script>
<style scoped>
  .activity-container{
    padding-left: 20%;
    padding-right: 20%;
    margin-top: 2em;
    text-align: left;
  }
</style>
