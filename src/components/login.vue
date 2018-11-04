<template>

    
  	<div class="grid-content bg-purple-dark">
      <div class="userDecr">
        <section>
          <p>超级管理员：用户名：superAdmin  密码：123456</p>
          <p>普通管理员：用户名：admin  密码：123456</p>
           <p>学生：用户名：student  密码：123456</p>
        </section>
      </div>

  			<section>
  				<h2>用户登录 <span v-text="error" class="error"></span></h2>
		  		<el-form ref="form" label-width="80px">
					 <el-form-item label="用户名称:">
					    <el-input v-model="userNmae"></el-input>
					  </el-form-item>
					   <el-form-item label="密码:">
					        <el-input v-model="password"></el-input>
					  </el-form-item>
					  <el-button type="primary" v-on:click="login()">登陆</el-button>
			    </el-form>
		    </section>
  	</div>
  	 
</template>

<script>

export default {
    data(){
      return {
        userNmae:"",
        password:"",
        error:"",
        roleList:['superAdmin','admin','student']
      }
    },
    methods:{
    	login:function(){
        if((this.userNmae !== "" && this.userNmae !== null)&&(this.password!==null&&this.password!=="")){
          if(getRole(this.roleList,this.userNmae)&&(this.password=="123456"||this.password==123456)){
             this.error="";
             let that=this;
            this.axios.get('/static/data/'+that.userNmae+'.json')
              .then(function (response) {
                if(response.data){
                  that.$store.dispatch('updata',response.data);
                  that.$router.push("/home");
                }
              }).catch(function (error) {
                  console.log(error);
              });
          }else{
             this.error="输入有效的用户名或密码";
          }
             
        }else{
          this.error="请输入用户或密码";
        }
       
    	}
    }
   }
function getRole(roleList,userNmae){
       for(let i=0;i<roleList.length;i++){
        if(roleList[i]===userNmae){
          return true;
        }
       }
       return false;
}
</script>
<style lang='less'>

	.bg-purple-dark{
		height: 100%;
		display:flex;
        justify-content:center;
        align-items:center;
        .userDecr{
          position: absolute;
          top:10px;
          left: 10px;
        }
       section{
       	  padding: 0 20px 20px 20px;
		  border-radius: 4px;
          border: 1px solid #dcdfe6;
          h2{
          	 color: #1f2f3d;
             font-weight: 500;
             .error{
              font-size:16px;
              color:#F56C6C;
            }
          }
		}
		.el-form{
			width:350px;
			.el-button{
				width:100%;
			}
		}
	}

</style>