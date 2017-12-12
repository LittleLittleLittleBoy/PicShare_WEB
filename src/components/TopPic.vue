<template>
  <div id="left-content">
    <div class="card card-profile bottom-base">
      <div class="top-block">
        <h6 class="bottom-base">Topic Photos</h6>
        <div data-grid="images" data-target-height="150">
          <div class="pic-block" v-for="item in tops" :key="item.pid">
            <img data-width="640" data-height="640" data-action="zoom" :src="item.photo_url" style="width: 100%;">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:['tops'],
    data(){
      return {
        items:[
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'},
          {pid:'123',photo_url:'http://localhost:8888/photo/background.jpg'}
        ]
      }
    }
  }
</script>
<style scoped>
  .bottom-base {
    margin-bottom: 1rem !important;
  }
  .pic-block{
    margin-bottom: 10px;
    margin-right: 10px;
    width: 40%;
    display: inline-block;
    vertical-align: bottom;
  }

  h6{
    font-size: 1rem;
  }
  .top-block {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
  }
</style>
