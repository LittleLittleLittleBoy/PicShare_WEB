<template>
  <div id="left-content">
    <div class="outer-div">
      <div class="inter-div">
        <h6 >About <small>· <a href="#" data-toggle="modal" data-target="#myModal">Edit</a></small></h6>
        <ul class="ul-list">
          <li>
            <i class="fa fa-map-marker icon" aria-hidden="true"></i>
            Province:
            <span class="text-muted">{{province}}</span>
          </li>
          <li>
            <i class="fa fa-phone icon" aria-hidden="true"></i>
            Phone:
            <span class="text-muted">{{phone}}</span>
          </li>
          <li>
            <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
            JoinTime:
            <span class="text-muted">{{jointime}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    props:[
      "province",
      "phone",
      "jointime"
    ],
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .outer-div{
    margin-bottom: 1.5rem !important;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .inter-div{
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
  }
  h6{
    font-size: 1rem;
    margin-bottom: 1rem !important;
  }
  .ul-list{
    padding-left: 0;
    list-style: none;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .icon{
    width: 19px;
    height: 14px;
    margin-right: 5px;
  }

</style>
