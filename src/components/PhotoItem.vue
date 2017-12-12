<template>
  <div style="padding: 0px;margin: 0px;text-align: center" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut" >
    <img :src="src" :width="this.width" :height="this.height"/>
    <i data-toggle="modal" data-target="#sharePhotoMobal" v-show="hover" class="fa fa-share-alt icon-holder icon-share" aria-hidden="true"></i>
    <i data-toggle="modal" data-target="#deletePhotoMobal"  v-show="hover" class="fa fa-times icon-holder icon-delete" aria-hidden="true"></i>
    <i data-toggle="modal" data-target="#changePhotoMobal" v-show="hover"  class="fa fa-user icon-holder icon-user" aria-hidden="true"></i>
    <div v-show="hover" class="content-div" >
      <p style="color: aliceblue">{{description}}</p>
      <p style="font-size: 7px" >
        <a href="#" class="badge badge-secondary" v-for="item in photoTags" style="pointer-events: none;margin-left: 3px;cursor: default;color: #f0f0f0">
          {{item}}
        </a>
      </p>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="deletePhotoMobal" tabindex="-1" role="dialog" aria-labelledby="deleteAlbumMobal" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <h5>Confirm Delete</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button @click="deletePhoto" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="changePhotoMobal" tabindex="-1" role="dialog" aria-labelledby="deleteAlbumMobal" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <h5>Confirm change your head picture</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button @click="changePhoto" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="sharePhotoMobal" tabindex="-1" role="dialog" aria-labelledby="deleteAlbumMobal" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <h5>Confirm share</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button @click="sharePhoto" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      'pid',
      'src',
      'width',
      'rate',
      'description',
      'tags'
    ],
    data(){
      return {
        hover:false,
        styleObj:{
          width:this.width,
        }
      }
    },
    computed:{
      height:function () {
        return this.width*this.rate
      },
      photoTags:function () {
        return this.tags.split(";")
      }
    },
    methods:{
      mouseOver: function () {
        this.hover = true
      },
      mouseOut: function () {
        this.hover = false
      },
      deletePhoto:function () {
        api.deletePhoto(this.pid,this.currentUid).then(res=>{
          this.$emit('deletephoto','Test')
        }).catch(res=>{
          this.$emit('deletephoto','Test')
        })
      },
      changePhoto:function () {
        api.changePhoto(this.pid,this.currentUid).then(res=>{
          this.$emit('changephoto','Test')
        }).catch(res=>{
          this.$emit('changephoto','Test')
        })
      },
      sharePhoto:function () {
        api.addShareWork(this.pid,this.currentUid).then(res=>{
        }).catch(res=>{
        })
      }
    }
  }

</script>
<style scoped>
  .icon-holder{
    position: absolute;
    width: 24px;
    height: 24px;
    top: -10px;
    background: #fff;
    text-align: center;
    line-height: 24px;
    color: #333;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    z-index: 1000;
  }
  .content-div{
    position: absolute;
    background: rgba(112,112,112,0.5);
    text-align: center;
    z-index: 100;
    width: 230px;
    height: 50px;
    top: 0px;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  .content-div *{
    padding: 0px;
    margin: 0px;
  }
  .icon-delete{
    right: -10px;
  }
  .icon-user{
    right: 20px;
  }
  .icon-share{
    right: 50px;
  }
</style>
