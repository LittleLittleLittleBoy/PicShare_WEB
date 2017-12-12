<template>
  <div class="album-list row">
    <div class="title-block">
      <h3 class="h3-block">影集</h3>
    </div>
    <div class="album-item col-md-3" v-for="(item,index) in items" :key="index">
      <album-item
        :aid="item.aid"
      :albumImage="item.albumImage"
      :albumTitle="item.title"
      :albumTag="item.albumTag"
      :albumNumber="albumActualNumber(item.albumNumber)"
      @deletealbum="getAlbumList" @changealbum="getAlbumList"></album-item>
    </div>
    <div class="album-item col-md-3" style="width: 206px;height: 288px;text-align: center;color: #707070;">
      <i data-toggle="modal" data-target="#addNewAlbum" class="fa fa-plus fa-5x" aria-hidden="true" style="width: 100%;margin-top: 1.5em;background: inherit;border-color: rgba(255,255,255,0)"></i>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addNewAlbum" tabindex="-1" role="dialog" aria-labelledby="addNewAlbum" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <div class="form-group">
              <label for="albumNameInput">Album Name</label>
              <input v-model="albumName" type="text" class="form-control" id="albumNameInput" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="albumTags">Tags <br/><small>use ';' to split ,tags' number is limit to three</small></label>
              <input v-model="tags" type="text" class="form-control" id="albumTags" placeholder="Tags">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" @click="addNewAlbum"  data-dismiss="modal" class="btn btn-primary">True</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import albumItem from '@/components/AlbumItem'
  import api from '@/api/getData'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data(){
      return {
        albumName:'',
        tags:'',
        items:[

        ]
      }
    },
    created(){
      this.getAlbumList()
    },
    components: {
      albumItem
    },
    methods:{
      async getAlbumList(){
        api.getAlbumList(this.currentUid).then(res=>{
          this.items=res.data
        }).catch(res=>{
          this.items=res.data
        })
      },
      async addNewAlbum() {
        console.log(this.albumName+this.tags)
        api.addAlbum(this.albumName,this.tags,this.currentUid).then(res=>{
          console.log(res)
          this.getAlbumList()
        }).catch(err=>{
          console.log(err)
          this.getAlbumList()
        })
      },
      albumActualNumber:function (number) {
        return number===null?0:number
      }
    },
    computed:{

    }
  }
</script>
<style scoped>
  .album-list{
    padding-left: 10%;
    padding-right: 10%;
    text-align: left;
  }
  .album-item{
    display: flex;
    padding: 10px;
  }
  .title-block{
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 10px;
  }
  .h3-block{
    padding-left: 10px;
    font-size: 30px;
    border-left: 3px solid rgba(62,57,98,0.9);
  }


</style>
