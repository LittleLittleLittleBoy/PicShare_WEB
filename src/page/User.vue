<template>
  <div>

    <top></top>

    <div class="profile-header text-center" :style={backgroundImage:backgroundImage}>
      <div class="container-fluid">
        <div class="container-inner">
          <img class="rounded-circle media-object" :src="userInformation.userImage" style="width: 100px;height: 100px;">
          <h3 class="profile-header-user">{{userInformation.username}}<i v-if="userInformation.isman==1" class="fa fa-male gender" aria-hidden="true"></i><i v-if="userInformation.isman==0"  class="fa fa-female gender" aria-hidden="true"></i></h3>
          <p class="profile-header-bio">{{userInformation.description}}</p>
          <button @click="beNotFriend" v-if="isFollow" class="btn btn-outline-primary btn-sm">
          <span class="icon icon-add-user"></span> Unfollow
          </button>
          <button data-toggle="modal" data-target="#followModel"  v-if="isFollow==false" class="btn btn-outline-primary btn-sm">
            <span class="icon icon-add-user"></span> Follow
          </button>
        </div>
      </div>
    </div>

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


      <!-- Modal -->
      <div class="modal fade" id="followModel" tabindex="-1" role="dialog" aria-labelledby="followModel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <!-- 模态框主体 -->
            <div class="modal-body">
              <div class="form-group">
                <label for="groupChoose">ChooseGroup</label>
                <select id="groupChoose" v-model="group" type="text" class="form-control" placeholder="choose" >
                  <option selected>大学</option>
                  <option>同学</option>
                  <option>家人</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button @click="beFriend" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import top from '@/components/Top'
  import activityInformation from '@/components/ActivityInformation'
  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        items:[],
        group:'',
        isFollow:true,
        uid:'9c725c6b696bf19f1feba00b2d354095',
        userInformation:{
          userImage:'',
          username:'',
          isman:0,
          watched:0,
          watch:0
        }
      }
    },
    components:{
      top,
      activityInformation
    },
    created(){
      this.isFriend()
      this.getActivityList(this.uid)
      this.getUserInformation()
    },
    methods:{
      getUserInformation:function () {
        api.getOtherUserInformation(this.uid,this.currentUid).then(res=>{
          this.userInformation=res.data[0]
        }).catch(res=>{
          this.userInformation=res.data[0]
        })
      },
      isFriend:function () {
        api.isFriend(this.uid,this.currentUid).then(res=>{
          if (res.data.isFriend==0){
            this.isFollow=false
          }else{
            this.isFollow=true
          }
        }).catch(res=>{
          if (res.data.isFriend==0){
            this.isFollow=false
          }else{
            this.isFollow=true
          }
        })
      },
      getActivityList(uid){
        api.getShareWork(uid,this.currentUid).then(res=>{
          this.items=res.data
        }).catch(res=>{
          this.items=res.data
        })
      },
      beFriend(){
        api.beFriend(this.uid,this.group,this.currentUid).then(res=>{

        }).catch(res=>{

        })
      },
      beNotFriend(){
        console.log(this.uid)
        api.beNotFriend(this.uid,this.currentUid).then(res=>{

        }).catch(res=>{

        })
      }
    },
    computed:{
      backgroundImage:function () {
        return 'url(\''+this.userInformation.userImage+'\')'
      }
    }
  }

</script>
<style>
  .btn-outline-primary{
    color: rgba(255,255,255,0.9);
    border-color: rgba(255,255,255,0.9);

  }
  .fa-male{
    margin-left: 10px;
    color: deepskyblue
  }
  .fa-female{
    margin-left: 10px;
    color: hotpink;
  }
  .profile-header{
    position: relative;
    display: table;
    width: 100%;
    padding-bottom: 3.2rem;
    margin-bottom: 0;
    text-align: center;
    background-size: cover;
    border: 0;
    height: 350px;
    margin-top: 56px;
  }
  .container-fluid{
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    display: table-cell;
    width: 1000000px;
    max-width: 1230px;
    text-align: center;
    vertical-align: middle;
  }
  .container-inner{
    max-width: 300px;
    margin: 0 auto;
  }
  .media-object{
    width: 110px;
    display: inline-block;
    margin-right: 0;
  }
  .profile-header-user{
    margin-top: 20px;
    color: #fff;
  }
  .profile-header-bio{
    font-size: 16px;
    color: #fff;
    margin-bottom: 5px;
  }
  .activity-container{
    padding-left: 20%;
    padding-right: 20%;
    margin-top: 2em;
    text-align: left;
  }
</style>
