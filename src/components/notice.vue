<template>
    <div class="box">
    	<div class="title">
			公告配置
			<a href="javascript:void(0)" class="account" @click="noticeshow" v-if="showList">
				<i class="iconfont icon-jiahao"></i>
				<span>添加公告</span>
			</a>
		</div>
		<div class="account-main" >
			<div class="table-responsive user-table noticebox" :class="{'notice-show':noticeShow}">
				<div class="account-list">
					邮件列表
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th v-for="item in emailList.title">{{item.cont}}</th>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)" @click="noticeshow">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							
					</tbody>
				</table>
			</div>
			<div class="addEmail user-table noticemain" :class="{'notice-main':!noticeShow}">
				<div class="account-list">
					新增公告
				</div>
				<div class="send-content">
					<form class="form-inline plant send-form" v-for="item in plant">
					    <label>{{item.title}}：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android" v-for="x in item.select">{{x}}</option>
					    </select>
					</form>
					<form class="form-inline plant send-form">
						<button type="button" class="btn form-input add-language">+ 新增</button>
					</form>
					<div class="clearit"></div>
					<form class="form-inline plant send-form">
						<label>开始时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<form class="form-inline plant send-form">
						<label>结束时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<div class="clearit"></div>
					<form class="form-inline send-form plant">
					    <label>类型：</label>
					    <select  class="form-control form-input" required="required" v-model="announcementType" @change="selectType">
					    	<option value="inform">通知公告</option>
					    	<option value="activity">活动公告</option>
					    </select>
					</form>
					<form class="form-inline send-form plant" v-show="activity">
					    <label>跳转到活动界面：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android">活动1</option>
					    </select>
					</form>
					<div class="clearit"></div>
					<form class="form-inline send-form email-title">
					    <label>标题：</label>
					    <input type="text" class="form-control input-text">
					  </form>
					  <form class="form-inline send-form email-title">
					    <label>语言：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="英语">英语</option>
					    </select>
					    <button type="button" class="btn form-input add-language">+ 新增</button>
					  </form>
					  <div class="clearit"></div>
					  <form class="form-group send-form">
					    <label>内容</label>
					    <textarea class="form-control input-text"></textarea>
					  </form>
					
				  <form class="form-group send-form" v-show="activity">
				    <label>跳转链接</label>
				    <input type="text" class="form-control input-text">
				  </form>
				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
		   		</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
    	data(){
    		return{
    			plant:[
	    			{title:'平台',select:['所有平台','android','ios']},
	    			{title:'渠道',select:['所有渠道','ios']},
	    			{title:'服务器',select:['notice','events','more']}
    			],
    			noticeShow:false,
    			showList:true,
    			emailList:{
    				title:[
    					{cont:'序号'},
    					{cont:'平台'},
    					{cont:'渠道'},
    					{cont:'标题'},
    					{cont:'标签'},
    					{cont:'语种'},
    					{cont:'状态'},
    					{cont:'生效日期'},
    					{cont:'失效日期'},
    					{cont:'添加时间'},
    					{cont:'添加人'},
    					{cont:'操作'}
    				
    				]

    			},
    			announcementType:'inform',
    			activity:false

    			
    		}
    	},
    	mounted(){
    		console.log(this.announcementType);
    	},
    	methods:{
    		noticeshow(){
    			this.noticeShow=true;
    			this.showList=!this.noticeShow;

    		},
    		sendEmail(){
    			this.noticeShow=false;
    			this.showList=!this.noticeShow;


    		},
    		cancelEmail(){
    			this.noticeShow=false;
    			this.showList=!this.noticeShow;
    		},
    		selectType(){
    			if(this.announcementType=='activity'){
    				this.activity=true;
    			}else
    			if(this.announcementType=='inform'){
    				this.activity=false;
    			}
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
@import "../css/main.scss";
    .account-main{
    	
    	.noticebox{
    		transform:scale(1,1);
    		transition:all 0.5s;
    		&.notice-show{
    			transform:scale(0,0);
				
    		}
    	}
    	.noticemain{
    		transform:scale(1,1);
    		transition:all 0.5s;
    		&.notice-main{
				transform:scale(0,0);
    		}
    	}
    }
</style>