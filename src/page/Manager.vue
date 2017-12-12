<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a class="navbar-brand" href="#">PicShare</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">management</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid" style="margin-top:80px;padding-left: 30px;padding-right: 30px">
      <div class="row" style="margin-top: 30px;margin-bottom: 30px">
        <div class="col-sm-6">
          <h3>Information management</h3>
        </div>
        <div class="search-area col-sm-6" style="display: inline" align="right">
          <input @change="changeInput" v-model="key" type="text" class="form-control" style="width: 200px;display: inline" >
          <button type="button" class="btn btn-default" style="padding: 0px"><i class="fa fa-search fa-2x" aria-hidden="true"></i></button>
        </div>
      </div>

      <table class="table table-hover table-striped">
        <thead>
        <tr>
          <th>Uid</th>
          <th>Name</th>
          <th>Province</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Operating</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.uid">
          <td>{{item.uid}}</td>
          <td>{{item.name}}</td>
          <td>{{item.province}}</td>
          <td>{{item.isman==0?'女':'男'}}</td>
          <td>{{item.phone}}</td>
          <td><button @click="chooseDelete(item.uid)" type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
        </tr>
        </tbody>
      </table>
      <div class="pagination justify-content-center">
        <ul class="pagination pagination-centered" >
          <li class="page-item"><a class="page-link" v-bind:class="{disabled:currentPage==1}" href="#">Previous</a></li>
          <li class="page-item active"><a class="page-link" href="#">{{currentPage}}</a></li>
          <li class="page-item"><a class="page-link" v-bind:class="{disabled:currentPage<10}"  href="#">Next</a></li>
        </ul>
      </div>


      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <!-- 模态框主体 -->
            <div class="modal-body">
              <h5>Confirm Delete</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button @click="deleteUserInformation" type="button" data-dismiss="modal" class="btn btn-primary">True</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/getData'
  import $ from 'jquery'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data () {
      return {
        currentPage:1,
        deleteUser:'',
        key:'',
        items: [
//          {'uid':'36e103ac18e703b512813ba84f1cb7f1','name':'12','province':'\u91cd\u5e86\u5e02','is_man':'0',"phone":"13012341234"}
        ]
      }
    },
    created(){
      this.getUsers()
    },
    methods:{
      async getUsers(){
        api.getUsers(this.key,this.currentPage).catch(res=>{
          this.items=res.data
        })
      },
      nextPage(){
        this.currentPage=this.currentPage+1
        this.getUsers()
      },
      priviousPage(){
        this.currentPage=this.currentPage-1
        this.getUsers()
      },
      changeInput(){
        this.currentPage=1
        this.getUsers()
      },
      chooseDelete(uid){
        this.deleteUser=uid
      },
      async deleteUserInformation(){
        console.log(this.deleteUser)
        api.deleteUserInformation(this.deleteUser).catch(res=>{
          $('#exampleModal').modal('hide')
          this.deleteUser = ''
          this.getUsers()
        })
      }
    }
  }
</script>
<style>
  a.disabled {
    pointer-events: none;
    cursor: default;
  }
</style>
