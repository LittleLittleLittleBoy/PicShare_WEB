<template>
  <div id="left-content">
    <div class="card card-profile" style="width: 276px;height: 396px;">
      <div class="card-header" :style="{backgroundImage: backgroundImage}" ></div>
      <div @click="changeToFriend" class="card-body text-xs-center">
        <img :src='userImage' class="card-profile-img" >
        <h5 class="card-title">{{name}}<i v-if="isman==1" class="fa fa-male gender" aria-hidden="true"></i><i v-if="isman==0" class="fa fa-female gender" aria-hidden="true"></i></h5>
        <p class="mb-2">{{description}}</p>

        <ul class="friend-list mt-4">
          <li class="friend-list-item">
            <a href="#" class="friend-list-item-link" data-toggle="modal">
              Follows
              <h6>{{follows}}</h6>
            </a>
          </li>
          <li class="friend-list-item">
            <a href="#" class="friend-list-item-link" data-toggle="modal">
              Followers
              <h6>{{followers}}</h6>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      'uid',
      'friend',
      'userImage',
      'name',
      'description',
      'follows',
      'followers',
      'isman'
    ],
    data () {
      return {

      }
    },
    created () {

    },
    computed:{
      backgroundImage:function () {
        return 'url(\''+this.userImage+'\')'
      }
    },
    methods:{
      changeToFriend:function () {
        if (this.friend==true){
          this.$router.push({name:'User',params:{uid:this.uid}})
        }
      }
    }
  }
</script>

<style scoped>
  .card-header{
    height: 150px;
    background-size: cover;
  }
  .text-xs-center{
    text-align: center;
  }
  .card-profile-img{
    width: 100px;
    height: 100px;
    margin-top: -70px;
    margin-bottom: 5px;
    border: 3px solid #fff;
    border-radius: 100%;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  .gender{
    display: inline;
    margin-left: 5px;
  }

  .fa-male{
    color: deepskyblue
  }
  .fa-female{
    color: hotpink;
  }
  .friend-list{
    list-style: none;
    padding: 0;
  }
  .friend-list-item {
    display: inline-block;
    padding: 0 10px;
    border-right: 1px solid #d4dbe0;
  }
  .friend-list-item:last-child {
    border-right: 0;
  }
  .friend-list-item-link, .friend-list-item-link:hover, .friend-list-item-link:focus {
    color: inherit;
    text-decoration: inherit;
  }

  h6{
    font-size: 1rem;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
</style>
