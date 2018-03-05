import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import user from '@components/user.vue';
import withDrawal from '@components/withDrawal.vue';
import openService from '@components/openService.vue';
import notice from '@components/notice.vue';
import gift from '@components/gift.vue';
import chargeback from '@components/chargeback.vue';
import diamond from '@components/diamond.vue';
import diamondChange from '@components/diamondChange.vue';
import player from '@components/player.vue';
import band from '@components/ban.vue';

export default new VueRouter({
	linkActiveClass:'list-active',
	mode:'hash',
	routes:[
		{
			path:'/',
			redirect:'/user',
			component:user
		},
		{
			path:'/user',
			component:user
		},
		{
			path:'/withDrawal', 
			component:withDrawal
		},
		{
			path:'/openService', 
			component:openService
		},
		{
			path:'/notice',
			component:notice
		},
		{
			path:'/gift',
			component:gift
		},
		{
			path:'/chargeback',
			component:chargeback
		},
		{
			path:'/diamond',
			component:diamond
		},
		{
			path:'/ban',
			component:band
		},
		{
			path:'/player',
			component:player
		},
		{
			path:'/diamondChange',
			component:diamondChange
		}



	]
})