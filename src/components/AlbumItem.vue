<template>
  <div v-on:mouseover="mouseOver" v-on:mouseout="mouseOut"  class="card" style="width: 206px;height: 288px;">
    <img @click.self="showDetail"  class="card-img-top" :src="getAlbumImage()" >
    <div class="card-body">
      <p >{{albumTitle}}</p>
      <p style="font-size: 7px" >
        <a href="#" class="badge badge-secondary" v-for="item in albumTags" style="margin-left: 3px;cursor: default">
          {{item}}
        </a>
      </p>
      <p class="card-text" style="font-size: 10px;margin-bottom: 0px">共<span style="color: dodgerblue">{{albumNumber}}</span>张图片</p>
      <i data-toggle="modal" data-target="#deleteAlbumMobal"  v-show="hover" class="fa fa-times icon-holder icon-delete" aria-hidden="true"></i>
      <i data-toggle="modal" data-target="#changeAlbumMobal" v-show="hover"  class="fa fa-pencil icon-holder icon-edit" aria-hidden="true"></i>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="deleteAlbumMobal" tabindex="-1" role="dialog" aria-labelledby="deleteAlbumMobal" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <h5>Confirm Delete</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button @click="deleteAlbum" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="changeAlbumMobal" tabindex="-1" role="dialog" aria-labelledby="changeAlbumMobal" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <div class="form-group">
              <label for="albumNameInput">Album Name</label>
              <input v-model="albumTitle" type="text" class="form-control" id="albumNameInput" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="albumTags">Tags <br/><small>use ';' to split ,tags' number is limit to three</small></label>
              <input v-model="albumTag" type="text" class="form-control" id="albumTags" placeholder="Tags">
            </div>
          </div>
          <div class="modal-footer">
            <button @click="deleteAlbum" type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" data-dismiss="modal" class="btn btn-primary">True</button>
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
     'aid',
     'albumImage',
     'albumTitle',
     'albumTag',
     'albumNumber'
   ],
   data () {
     return {
       hover: false
     }
   },
   methods: {
     mouseOver: function () {
       this.hover = true
     },
     mouseOut: function () {
       this.hover = false
     },
     async deleteAlbum() {
        api.deleteAlbum(this.aid,this.currentUid).then(res=>{
          this.$emit('deletealbum','Test')
        }).catch(err=>{
          this.$emit('deletealbum','Test')
        })
     },
     async changeAlbum() {
       api.changeAlbum(this,aid,this.albumTitle,this.albumTag,this.currentUid).then(res=>{
         this.$emit('changealbum','Test')
       }).catch(err=>{
         this.$emit('changealbum','Test')
       })
     },
     showDetail:function () {
       this.$router.push({ name: 'photoList', params: { aid: this.aid,albumName:this.albumTitle }})
     },
     getAlbumImage:function () {
       if (this.albumImage===undefined||this.albumImage===null){
         return 'http://127.0.0.1:8888/photo/background.jpg'
       }else{
         return this.albumImage
       }
     }

   },
   computed:{
     albumTags:function () {
       return this.albumTag.split(";")
     }
   }
 }
</script>
<style scoped>
  p{
    font-size: 20px;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }
  .card-body{
    padding: 0.5em;
  }
  .card-img-top{
    width: 206px;
    height: 206px;
  }
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
  }
  .icon-delete{
    right: -10px;
  }
  .icon-edit{
    right: 20px;
  }
</style>
