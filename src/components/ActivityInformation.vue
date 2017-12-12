<template>
  <ul class="media-list media-list-stream mb-3">
    <li class="media list-group-item p-4" style="display: flex">
      <img class="media-object mr-3 align-self-start" :src="user_url" style="width: 60px;height: 60px;">
      <div class="media-body">
        <div class="media-heading">
          <button @click="addLike" class="btn float-right" style="padding: 0px;margin-right: 0.4em"><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i></button>
          <button @click="sharePic" class="btn float-right" style="padding: 0px;margin-right: 0.4em"><i class="fa fa-share-alt fa-2x" aria-hidden="true"></i></button>
          <small class="float-right text-muted" style="margin-right: 1em">{{time}}</small>
          <h6 class="d-inline-block">{{username}}</h6>
          <h6 class="d-inline-block" style="margin-left: 0.5em;color: #606060">{{getType}}</h6>
        </div>
        <p style="font-size: 15px;margin-top: 5px" >
          {{description}}
        </p>
        <div class="pic-container">
          <div style="display: inline-block; margin-bottom: 10px; margin-right: 10px; vertical-align: bottom;">
            <img class="media-body-inline-img" :src="photo_url" style="height: 182px">
          </div>
        </div>
        <avarter-list
          ref="avarter"
        :pid="this.pid">

        </avarter-list>

        <ul class="media-list" style="margin-top: 10px">
          <li class="media mt-1" v-for="item in comments" :key="item.cid">
            <div class="media-body comment-div">
              <a style="cursor: hand" @click="changeUserInformation(item.uid)"><strong>{{item.username}}</strong></a>
              :{{item.content}}
            </div>
          </li>
        </ul>
        <div class="input-group" style="margin-top: 0.3em">
          <input v-model="comment" type="text" class="form-control" placeholder="add comment" aria-label="Search for...">
          <span class="input-group-btn">
            <button @click="addComment" class="btn btn-secondary" type="button">comment</button>
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
  import avarterList from '@/components/AvarterList'
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      'pid',
      'photo_url',
      'username',
      'type',
      'description',
      'time',
      'user_url'
    ],
    data(){
      return {
        likes:[],
        comments:[],
        comment:''
      }
    },
    mounted(){
      this.$refs.avarter.getLikes(this.pid,this.currentUid)
      this.getComment()
    },
    components: {
      avarterList
    },
    computed:{
      getType:function () {
        if (this.type==='0'){
          return '分享'
        }else{
          return '转发'
        }
      }
    },
    methods:{
      addLike:function () {
        api.addLike(this.pid,this.currentUid).then(res=>{
          this.$refs.avarter.getLikes(this.pid,this.currentUid)
        }).catch(res=>{
          this.$refs.avarter.getLikes(this.pid,this.currentUid)
        })
      },
      sharePic:function () {
        api.sharePic(this.pid,this.currentUid).then(res=>{}).catch(res=>{})
      },
      addComment:function () {
        api.addComment(this.pid,this.comment,this.currentUid).then(res=>{
          this.getComment()
        }).catch(res=>{
          this.getComment()
        })
      },
      getComment:function () {
        api.getComment(this.pid,this.currentUid).then(res=>{
          this.comments=res.data
        }).catch(res=>{
          this.comments=res.data
        })
      },
      changeUserInformation:function (uid) {
        this.$router.push({name:'friend',params:{uid:uid}})
      }
    }
  }
</script>

<style scoped>
  .media-list{
    padding-left: 0;
    list-style: none;
  }
  .media-list-stream{
    padding-left: 0;
    list-style: none;
  }
  .media-object{
    width: 60px;
    border-radius: 100%;
    margin-right: 5px;
  }
  .media-object-copy{
    width: 30px;
    border-radius: 100%;
    margin-right: 5px;
  }
  .media-body{
    overflow: visible;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  *, *::before, *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size:14px;
  }

  .comment-div{
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size:12px;
  }
  .pic-container{
    margin: 20px 0 10px;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
</style>
