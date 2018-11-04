<template>
  <div id="app">
   <transition>
   	
	  <router-view></router-view>
	</transition>
  </div>
</template>
<script>

	export default {
	  name: 'App',
	  mounted: function () {

	  }
	}
</script>

<style lang='less'>
html,body{
	margin:0;
	padding:0;
	height: 100%;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app{
	height: 100%;
	background-color: #f7f9fd;
}
   
</style>