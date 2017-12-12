<template>
</template>
<script>
  $http({
    method:'POST',
    url:"http://localhost:8080/richman/login/changePhoto",
    data: fd,
    headers: {'Content-Type':undefined},
    transformRequest: angular.identity
  })
    .then( function ( response )
    {
      //上传成功的操作
      alert("uplaod success");
    });


</script>
<style>

</style>
