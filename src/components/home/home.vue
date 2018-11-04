<template>
	 <el-container>
		  <el-header>
		  	<HomeHeader></HomeHeader>
		  </el-header>
		  <el-container>
		     <el-aside width="200px">
				<div>
					<ol>
						 <li v-for="item in sideList">
					            <router-link :to="item.path">{{item.tabNmae}}</router-link>
						 </li>
					</ol>
				</div> 
		     </el-aside>
		     <el-main>
		     	<transition>
				  <router-view></router-view>
				</transition>
		     </el-main>
		  </el-container>
	 </el-container>
</template>

<script>
import HomeHeader from './home-header';
	export default {
	  name: 'home',
	  components: { HomeHeader},
	  data() {
	  	 return { 
            sideList:[]
	  	 }
	  	},
	  mounted: function () {
	  	this.sideList=this.$store.getters.getData;
	  	if(this.sideList.length>0){
	  		let that=this;
	  		let router=this.$router.options.routes[1];
	  		this.sideList.forEach(function(data,index,array){
	  			let fmRouter={
	  				component:import('@/components'+data['component'])
	  			  }
	  			fmRouter.component.then(
  						function(value){
  							console.log(value.default)
  							array[index]['component']=value.default;
  		                    router['children'][index]=array[index]['component']
  		                    let childRouter=router['children'][index];
  		      
  		                    console.log(that)
						},
						function(error){
							console.log(error);
						});

	  		})
	  	     
             this.$router.options.routes[1].children=this.sideList;
	  	}else{
	  		  this.$router.push("/login");
	  	}
	  	
	  },
	  methods:{}
	}

</script>

<style lang='less'>
.el-container{
	height: 100%;
	  header{
	   	background-color: #3c82fb;
	   	border-bottom: 0.3px solid #dcdfe6;
	   	img{
	   		width: 50px;
		    height: 50px;
		    margin: 5px 5px 0 20px;
		    border-radius: 50px;
	   	}
	   	ul{
           margin: 0;
           list-style: none;
           overflow: hidden;
           li{
           	float: left;
           	color:#ffffff;
           	font-weight: 200;
           	margin-left:10px;
           	line-height: 3.5;
           }
           a{
           	text-decoration: none;
           	color:#ffffff;
           	display: flex;
           	line-height: 3.5;
           }
	   	}
	   }
	   .el-aside{
	   	background-color: #3c82fb;
	   }
}

.el-aside {
	ol li{
		overflow: hidden;
	    list-style: none;
	    padding: 5px 0 5px 0;
	    margin: 5px 0;
	    margin-left: -40px;
	    text-indent: 36px;
      }
	 ol li a{
	  	text-decoration: none;
	  	color:#ffffff;
	  	display: flex;
	  } 
	 ol li:hover{
	  	background-color: #3665b7;
	  	cursor: pointer;
	  }

}
</style>