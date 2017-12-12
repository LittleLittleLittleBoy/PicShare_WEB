<template>
  <div class="row" >
    <div class="col-md-9">
      <h3 class="h3-block">全部话题</h3>
      <ul class="topic-list card">
        <li class="topics-item">
          <a hidefocus href="#" class="topics-item-l link">
            <img src="/src/assets/background.jpg" width="80px" height="80px" >
          </a>
          <div class="topics-item-r">
            <h4 class="topic-name">
              <a hidefocus href="#" class="link topic-title-text" style="font-size: 18px">活动标题</a>
            </h4>
            <p class="topics-item-desc">
              <a hidefocus href="#" class="link topic-title-text" style="font-size: 12px">活动描述</a>
            </p>
            <p style="margin-top: 5px;color: gray;font-size: 12px">
              话题主持人：<a hidefocus="" class="link topic-title-text" href="#" >用户名</a>
            </p>
          </div>
        </li>

      </ul>
    </div>
    <div class="col-md-3">
      <h3 class="h3-block" style="font-size: 16px">往期精彩话题</h3>
      <ul class="topic-list card" style="width: 100%">
        <li class="topics-item" style="height: 45px;margin-bottom: 20px">
          <a hidefocus href="#" class="topics-item-l link" style="width: 45px;height: 45px">
            <img src="/src/assets/background.jpg" width="45px" height="45px">
          </a>
          <div class="topics-item-r-copy">
            <h4 class="topic-name">
              <a hidefocus href="#" class="link topic-title-text" style="font-size: 15px">活动标题</a>
            </h4>
            <p class="topics-item-desc-right">
              <a hidefocus href="#" class="link topic-title-text-light" style="font-size: 12px">活动描述</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .h3-block{
    margin: 0em;
    padding-left: 10px;
    vertical-align: bottom;
    font-size: 25px;
    border-left: 3px solid rgba(62,57,98,0.9);
  }
  .row{
    padding-top: 4em;
    padding-left: 10%;
    padding-right: 10%;
  }
  .topic-list{
    padding: 0px;
    margin-left: 0px;
    list-style: none;
    background-color: #ffffff;
    margin-top: 20px;
    padding-left: 20px;
  }
  .link{
    text-decoration: none;
  }
  .link:hover{
    text-decoration: none;
    color:goldenrod;
  }
  .topics-item{
    display: list-item;
    margin-top: 15px;
    height: 94px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .topics-item-l{
    float: left;
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
  .topics-item-r{
    float: left;
    width: 470px;
    margin: 0;
    padding: 0;
  }
  .topics-item-r-copy{
    float: left;
  }
  .topic-name{
    font-size: 18px;
    font-weight: 400;
  }
  .topics-item-desc{
    overflow: hidden;
    min-height: 30px;
    padding-top: 3px;
    margin: 0;
    word-wrap: break-word;
    word-break: break-all;
  }
  .topics-item-desc-right{
    font-size: 13px;
    line-height: 20px;
    top: 25px;
    left: 55px;
    overflow: hidden;
    height: 20px;
  }
  .col-md-9{
    padding-left: 5%;
    padding-right: 5%;
  }

  .topic-title-text{
    color: #484551;
  }
  .topic-title-text-light{
    color: #707070;
  }
</style>
