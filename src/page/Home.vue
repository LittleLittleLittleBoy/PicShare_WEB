<template>
  <div>
    <top></top>
    <div class="main-div">
      <div style="flex: 0 0 25%;">
        <person-information
          :friend="false"
          :userImage="basicInformation.photo_url"
          :uid="2333"
        :name="basicInformation.username"
        :description="basicInformation.description"
        :follows="basicInformation.watch"
        :followers="basicInformation.watched"
        :isman="basicInformation.sex" class="person-information"></person-information>
        <detail-information
          :province="basicInformation.place"
          :phone="basicInformation.phoneNumber"
          :jointime="basicInformation.jointime"
          class="detail-information"></detail-information>
      </div>
      <div class="activity-div">
        <activity-information v-for="item in pics"
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
      <div style="flex: 0 0 25%">
        <top-pic
          :tops="tops"
        >

        </top-pic>
      </div>
    </div>

    <!-- 模态框 -->
    <div class="modal fade" id="myModal" >
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- 模态框头部 -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- 模态框主体 -->
          <div class="modal-body">
            <form class="form-block" ref="basicInformation" v-on:submit="submitUpdateForm">
              <input type="text" class="form-control" placeholder="Name" v-model="basicInformation.username" required>
              <input type="password" class="form-control" placeholder="Password" v-model="basicInformation.password" required/>
              <input type="password" class="form-control" placeholder="Confirm" v-model="basicInformation.confirm" required/>
              <label class="radio-inline" style="width: 30%"><input v-model="basicInformation.sex" style="margin-right: 1em" type="radio" name="optradio" selected value="1">男</label>
              <label class="radio-inline" style="width: 30%"><input v-model="basicInformation.sex" style="margin-right: 1em" type="radio" name="optradio" value="0">女</label>
              <br/>
              <select v-model="basicInformation.place" class="form-control" >
                <option value="" style="display: none" selected>地区</option>
                <option value="北京市">北京市</option>
                <option value="天津市">天津市</option>
                <option value="上海市">上海市</option>
                <option value="重庆市">重庆市</option>
                <option value="河北省">河北省</option>
                <option value="山西省">山西省</option>
                <option value="辽宁省">辽宁省</option>
                <option value="吉林省">吉林省</option>
                <option value="黑龙江省">黑龙江省</option>
                <option value="江苏省">江苏省</option>
                <option value="浙江省">浙江省</option>
                <option value="安徽省">安徽省</option>
                <option value="福建省">福建省</option>
                <option value="江西省">江西省</option>
                <option value="山东省">山东省</option>
                <option value="河南省">河南省</option>
                <option value="湖南省">湖南省</option>
                <option value="广东省">广东省</option>
                <option value="海南省">海南省</option>
                <option value="四川省">四川省</option>
                <option value="贵州省">贵州省</option>
                <option value="云南省">云南省</option>
                <option value="陕西省">陕西省</option>
                <option value="甘肃省">甘肃省</option>
                <option value="青海省">青海省</option>
                <option value="台湾省">台湾省</option>
                <option value="内蒙古自治区">内蒙古自治区</option>
                <option value="广西壮族自治区">广西壮族自治区</option>
                <option value="西藏自治区">西藏自治区</option>
                <option value="宁夏回族自治区">宁夏回族自治区</option>
                <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                <option value="香港特别行政区">香港特别行政区</option>
                <option value="澳门特别行政区">澳门特别行政区</option>
              </select>
              <input v-model="basicInformation.description" type="text" class="form-control" placeholder="Description" required/>
              <button type="button" class="btn btn-secondary mybutton4" data-dismiss="modal">Cancel</button>
              <button @click="updateInformation" class="btn btn-primary mybutton3">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import top from '@/components/Top'
  import personInformation from '@/components/PersonInformation'
  import detailInformation from '@/components/DetailInformation'
  import activityInformation from '@/components/ActivityInformation'
  import topPic from '@/components/TopPic'
  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data () {
      return {
        pics:[],
        tops:[],
        canseeRight: true,
        basicInformation: {
          photo_url:'http://localhost:8888/photo/picture.jpeg',
          phoneNumber: '13012341234',
          password: '',
          confirm: '',
          username: 'Jacob Thornton',
          description: 'Big belly rude boy, million dollar hustler',
          sex: 0,
          place: 'Canada',
          watch:12,
          watched:1,
          jointime:'2015-09-11',
        }
      }
    },
    created(){
      this.getMyInformation()
      this.getFriendPicture()
      this.getTopPhoto()
    },
    components: {
      top,
      personInformation,
      detailInformation,
      activityInformation,
      topPic
    },
    methods: {
      updateInformation () {
        if (this.basicInformation.password !== this.basicInformation.confirm) {
          this.canseeRight = false
        } else {
          this.submitUpdateForm()
        }
      },
      submitUpdateForm () {

        let information={
          name:this.basicInformation.username,
          description:this.basicInformation.description,
          place:this.basicInformation.place,
          sex:this.basicInformation.sex,
          password:this.basicInformation.password
        }
        api.updateInformation(information,this.currentUid).then(res=>{

        }).catch(res=>{

        })
      },
      getMyInformation:function () {
        api.getMyInformation(this.currentUid).then(res=>{
          this.basicInformation=res.data[0]
        }).catch(res=>{
          this.basicInformation=res.data[0]
        })
      },
      getFriendPicture:function () {
        api.getFriendPicture(this.currentUid).then(res=>{
          this.pics=res.data
        }).catch(res=>{
          this.pics=res.data
        })
      },
      getTopPhoto:function () {
        api.getTopPhoto().then(res=>{
          this.tops=res.data
        }).catch(res=>{
          this.tops=res.data
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
    display: flex;
    flex-wrap: wrap;
  }
  .main-div .person-information ,.main-div .detail-information{
    position: relative;
    flex-direction: column;
    border-radius: 0.25rem;
    margin-top: 1em;
    margin-bottom: 1em;
    box-sizing: inherit;
  }
  .main-div .person-information{
    display: flex;
  }
  .main-div .detail-information{
    text-align: left;
    display: block;
    flex: 1 1 auto;
  }
  .activity-div{
    flex: 0 0 50%;
    padding-left: 2%;
    padding-right: 2%;
    max-width: 50%;
    text-align: left;
  }
  .form-block *{
    margin-bottom: 1em;
  }
  .form-block{
    padding-left: 4%;
    padding-right: 4%;
  }

  .mybutton3{
    margin-left: 2em;
    border-radius: 25px;
    color: rgba(255,255,255,0.9);
    background-color: rgba(62,57,98,0.9);
    border-color: rgba(62,57,98,0.9);
  }
  .mybutton4{
    border-radius: 25px;
  }
</style>
