<template>
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top" style="background-color: rgba(62,57,98,0.9)">
    <a class="navbar-brand" href="#" style="color: white">PicShare</a>
    <div style="display: flex;flex-basis: 100%">
      <ul class="navbar-nav">
        <li >
          <a class="nav-link" @click="gotoHome"><i class="fa fa-home top-label" aria-hidden="true" ></i>Home</a>
        </li>
        <li >
          <a class="nav-link" @click="gotoSpace"><i class="fa fa-archive top-label" aria-hidden="true" ></i>Space</a>
        </li>
        <li >
          <a class="nav-link" @click="gotoTopic"><i class="fa fa-tag top-label" aria-hidden="true" ></i>Topic</a>
        </li>
      </ul>

    </div>
    <input @keyup.enter="search" v-model="searchInput" type="text" class="form-control" placeholder="Search" style="float: right;display: flex;flex-flow: row wrap;width: 180px"/>
  </nav>
</template>

<script>
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        searchInput:""
      }
    },
    methods:{
      gotoHome:function () {
        this.$router.push({ name: 'Home'})
      },
      gotoSpace:function () {
        this.$router.push({ name: 'Space'})
      },
      gotoTopic:function () {
        this.$router.push({ name: 'Topic'})
      },
      search:function () {
        this.$router.push({name:'Search',params:{key:this.searchInput}})
      }
    }
  }
</script>

<style scoped>
  #img-title{
    height: 35px;
    width: 35px;
    border-radius: 20px;
    border-style: none;
  }
  #drapdown-menu-down{
    width: 100px;
  }
  .top-label{
    display: inline;
    margin-right: 5px
  }
</style>
