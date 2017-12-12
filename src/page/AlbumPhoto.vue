<template>
  <div >
    <div class="top">
      <h3 style="display: inline;margin: 0px;padding-left:15px;align-self: center;border-left: 3px solid rgba(62,57,98,0.9) ">{{albumName}}</h3>
      <button  class="btn btn-primary mybutton3 end-button" @click="addBlock">{{showText}}</button>
    </div>
    <div v-if="isShow" class="row add-block">
      <div class="col-sm-6">
        <form enctype="multipart/form-data">
          <PictureInput
            style="margin: 5%"
            ref="pictureInput"
            @change="onChange"
            width="200"
            height="200"
            margin="16"
            id="pictrue-input"
            accept="image/jpeg,image/png"
            size="10"
            buttonClass="btn"
            :crop="false"
            :customStrings="{
                   upload: '<h1>Bummer!</h1>',
                    drag: 'Drag a GIF or GTFO'
                }">
          </PictureInput>
        </form>

      </div>

        <div class="col-sm-6 add-block-input">

          <div class="form-group">
            <label for="imgDescription">Photo Description</label>
            <input id="imgDescription" v-model="addImage.description" type="text" class="form-control" placeholder="Description" required>
          </div>
          <div class="form-group">
            <label for="imgTags">Tags <br/><small>use ';' to split ,tags' number is limit to three</small></label>
            <input id="imgTags" type="text" v-model="addImage.tags" class="form-control" placeholder="Tags"required>
          </div>
          <button @click="savePhoto" style="margin-bottom: 1em" class="btn btn-primary mybutton3">Save</button>

        </div>

    </div>

    <photo-list ref="photoDemo" :aid="aid"></photo-list>

  </div>

</template>
<script>
  import PictureInput from 'vue-picture-input'
  import photoList from '@/components/PhotoList'
  import api from '@/api/getData'
  import axios from 'axios'
  import FormData from 'form-data'
  import $ from 'jquery'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        aid:'',
        albumName:'',
        isShow:false,
        showText:'Add',
        addImage:{
          description:'',
          tags:'',
        }
      }
    },
    components:{
      PictureInput,
      photoList
    },
    created() {
      this.aid=this.$route.params.aid
      this.albumName=this.$route.params.albumName
    },
    methods:{
      addBlock:function () {
        if(this.isShow===false){
          this.isShow=true
          this.showText='Hide'
        }else{
          this.isShow=false
          this.showText='Add'
        }
      },
      savePhoto:function () {
        let file=document.querySelector('#pictrue-input').files[0];
        if (file!==undefined){

          let fd=new FormData()
          fd.append('pic',file)
          fd.append('aid',this.aid)
          fd.append('description',this.addImage.description)
          fd.append('tags',this.addImage.tags)
          fd.append('currentUid',this.currentUid)

          $.ajax({
            url: 'http://localhost:8888/public/addNewPhoto',
            type: 'POST',
            cache: false,
            data: fd,
            processData: false,
            contentType: false
          }).done(function(res) {
          }).fail(function(res) {
          });

        }
      }
    }
  }
</script>
<style scoped>
  .mybutton3{
    color: rgba(255,255,255,0.9);
    background-color: rgba(62,57,98,0.9);
    border-color: rgba(62,57,98,0.9);
  }
  .add-block{
    border-color: black;
    border-width: 2px;
    margin: 3%;
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgba(255,255,255,0.8);
    border-radius: 10px;
  }

  .add-block-input{
    margin-top: 2%;
    align-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }
  .form-group{
    text-align: left;
  }

  .top{
    width: 100%;
    height: 50px;
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    vertical-align: baseline;
  }

</style>
