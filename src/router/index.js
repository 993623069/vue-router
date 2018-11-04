import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home/home'
import TeacherList from '@/components/teacherList/teacherList'
import StudentList from '@/components/studentList/studentList'
import UserList from '@/components/userList/userList'
import StudentPool from '@/components/studentPool/studentPool'
Vue.use(Router)
export default new Router({
  routes: [
	    {
	      path: '/login',
	      component: Login
	    },
	    {
	      path: '/home',
	      component: Home,
	      children:[
            {
            	path:'home',
            	component:Home
            },
             {
            	path:'teacherList',
            	component:TeacherList
            },
             {
            	path:'studentList',
            	component:StudentList
            },
             {
            	path:'userList',
            	component:UserList
            },
             {
            	path:'studentPool',
            	component:StudentPool
            }
	      ]
	    },
	     {
	      path: '/',
	      component: Login
	    }
  ]
})
