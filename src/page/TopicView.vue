<template xmlns="">
  <div class="wrap-block">
    <top></top>
    <topicList class="topic-list"></topicList>
  </div>
</template>
<script>
  import topicList from '@/components/TopicList'
  import top from '@/components/Top'
  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    components: {
      topicList,
      top
    }
  }
</script>
<style scoped>
  .wrap-block{
    margin-top: 80px;
    background: white;
  }
  .topic-list{
    text-align: left;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
