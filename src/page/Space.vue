<template>
  <div>
    <top></top>
    <space-top
      :uid="basicInformation.uid"
      :userImage="basicInformation.photo_url"
      :name="basicInformation.username"
      :description="basicInformation.description"
      :isFollow="basicInformation.isFollow"
      :isman="basicInformation.sex"
      style="margin-top: 56px"></space-top>
    <router-view/>
  </div>
</template>
<script>
  import spaceTop from '@/components/SpaceTop'
  import top from '@/components/Top'
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        basicInformation:{
          photo_url:'http://localhost:8888/photo/picture.jpeg',
          confirm: '',
          username: 'Jacob Thornton',
          description: 'Big belly rude boy, million dollar hustler',
          sex: 0,
          place: 'Canada',
          watch:12,
          watched:1,
          jointime:'2015-09-11',
          isFollow:true,
        }
      }
    },
    components: {
      spaceTop,
      top
    },
    created(){
      api.getMyInformation(this.currentUid).then(res=>{
        this.basicInformation=res.data[0]
      }).catch(res=>{
        this.basicInformation=res.data[0]
      })
    }
  }
</script>
<style>

</style>
