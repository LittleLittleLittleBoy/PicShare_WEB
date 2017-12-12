<template>
  <div class="photolist">
    <waterfall
      :align="align"
      :line-gap="200"
      :min-line-gap="200"
      :max-line-gap="300"
      :single-max-width="400"
      :watch="items"
      ref="waterfall"
      style="padding-right: 100px"
    >
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item,index) in items"
        :width="width"
        :height="width*item.rate"
        :order="index"
        :key="item.pid"
        style="margin-top: 15px"
      >
        <PhotoItem
          :pid="item.pid"
          :width="width"
          :rate="item.rate"
          :src="item.src"
          :description="item.description"
          :tags="item.tags"
          @deletephoto="getPhotoList"
          @changephoto="getPhotoList"
        >

        </PhotoItem>
      </waterfall-slot>
    </waterfall>
  </div>
</template>
<script>
  import Waterfall from 'vue-waterfall';
  import PhotoItem from '@/components/PhotoItem'
  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      'aid'
    ],
    data(){
      return {
        align:'center',
        width:230,
        items: [{
          pid:'1',
          rate:1,
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:0.4,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:0.8,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:2,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:1.5,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:0.4,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        },{
          pid:'1',
          rate:0.8,
          style: {
            background: 'rgba(21,174,103,.5)'
          },
          src:'/src/assets/loginbackground.jpg',
          description:'家庭',
          tags:'开心;真开心'
        }]
      }
    },
    components:{
      'waterfall': Waterfall.waterfall,
      'waterfall-slot': Waterfall.waterfallSlot,
      PhotoItem
    },
    created(){
      this.getPhotoList()
    },
    methods:{
      getPhotoList(){
        api.getPhotoList(this.aid,this.currentUid).then(res=>{
          this.items=res.data
        }).catch(res=>{
          this.items=res.data
        })
      },
    }
  }

</script>
<style>
  div{
    display: block;
  }
  .item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
    color: rgb(0,158,107);
  }
  .photolist{
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1.5em;
  }
</style>
