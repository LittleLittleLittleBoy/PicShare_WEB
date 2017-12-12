<template>
  <div class="profile-header text-center" :style={backgroundImage:backgroundImage}>
    <div class="container-fluid">
      <div class="container-inner">
        <img class="rounded-circle media-object" :src="userImage" style="width: 100px;height: 100px;">
        <h3 class="profile-header-user">{{name}}<i v-if="isman==1" class="fa fa-male gender" aria-hidden="true"></i><i v-if="isman==0"  class="fa fa-female gender" aria-hidden="true"></i></h3>
        <p class="profile-header-bio">{{description}}</p>
        <!--<button class="btn btn-outline-primary btn-sm">-->
          <!--<span class="icon icon-add-user"></span> {{isFollow==false?'Follow':'Unfollow'}}-->
        <!--</button>-->
      </div>
    </div>
    <nav class="profile-header-nav">
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link" :class="{active:albumChoose}" href="#" @click="gotoAlbum"><strong>Photos</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active:activityChoose}" href="#"  @click="gotoActivity"><strong>Activity</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active:followChoose}" href="#"  @click="gotoFollows"><strong>Follows</strong></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      'uid',
      'userImage',
      'name',
      'description',
      'isFollow',
      'isman',
      'currentChoose'
    ],

    data () {
      return {
        albumChoose:true,
        activityChoose:false,
        followChoose:false
      }
    },
    computed:{
      backgroundImage:function () {
        return 'url(\''+this.userImage+'\')'
      }
    },
    methods:{
      gotoAlbum:function () {
        this.$router.push('/album')
        this.albumChoose=true
        this.activityChoose=false
        this.followChoose=false
      },
      gotoActivity:function () {
        this.$router.push('/activity/'+this.uid)
        this.albumChoose=false
        this.activityChoose=true
        this.followChoose=false
      },
      gotoFollows:function () {
        this.$router.push('/friend')
        this.albumChoose=false
        this.activityChoose=false
        this.followChoose=true
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
  .profile-header-nav{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .nav-tabs .nav-link{
    padding: 0 10px 18px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    -webkit-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
  .nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{
    color: #fff;
    background: transparent;
    border-color: transparent;
  }
  .nav {
    border-bottom: 0;
    vertical-align: top;
  }
  .nav-item{
    position: relative;
    margin-bottom: -1px;
  }
  .nav-tabs .nav-item .active{
    color: #fff;
    background: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-item .active:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    margin-left: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
</style>
