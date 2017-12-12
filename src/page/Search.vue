<template>

  <div>
    <top></top>
    <div class="main-div">
      <div style="padding-left: 5%;padding-right: 5%;margin:1em">
        <h3 class="h3-block">People</h3>
        <div class="friend-item col-md-4" v-for="item in persons" :key="item.photo_url">
          <person-information
            :friend="true"
            :uid="item.uid"
            :userImage="item.userImage"
            :name="item.username"
            :description="item.description"
            :follows="item.watch"
            :followers="item.watched"
            :isman="item.sex"
          >

          </person-information>
        </div>
      </div>
      <div style="padding-left: 5%;padding-right: 5%;margin:1em;">
        <h3 class="h3-block">Activity</h3>
        <div class="activity-container">
          <activity-information v-for="item in activitys"
                                style="width: 720px"
                                :key="item.pid"
                                :pid="item.pid"
                                :photo_url="item.photo_url"
                                :username="item.username"
                                :type="item.type"
                                :description="item.description"
                                :time="item.createtime"
                                :user_url="item.user_url">

          </activity-information>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import top from '@/components/Top'
  import PersonInformation from '@/components/PersonInformation'
  import ActivityInformation from '@/components/ActivityInformation'
  import api from '@/api/getData'
  export default {
    data(){
      return {
        persons:[],
        activitys:[]
      }
    },
    components:{
      top,
      PersonInformation,
      ActivityInformation
    },
    created(){
      this.search()
    },
    methods:{
      search:function () {
        let key=this.$route.params.key
        api.search(key).then(res=>{
          this.persons=res.data.user
          this.activitys=res.data.work
        }).catch(res=>{
          this.persons=res.data.user
          this.activitys=res.data.work
        })
      }
    }
  }

</script>
<style scoped>
  .main-div{
    padding-top: 80px;
    padding-left: 4%;
    padding-right: 4%;
  }
  .h3-block{
    margin: 0em;
    padding-left: 10px;
    vertical-align: bottom;
    text-align: left;
    font-size: 25px;
    border-left: 3px solid rgba(62,57,98,0.9);
    margin:1em
  }
  .activity-container{
    padding-left: 10%;
    padding-right: 20%;
    margin-top: 2em;
    text-align: left;
  }
</style>
