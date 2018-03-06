<template>
    <div class="box">
    	<div class="title">
			发送邮件 | 道具
			<ul class="sendEmail">
				<li v-for="(item,index) in send">
					<a href="javascript:void(0)" @click="sendProp(index)">
						<i class="iconfont icon-jiahao"></i>
						{{item.title}}
					</a>
				</li>
			</ul>
			<a href="javascript:void(0)" class="account">
				<span>新增邮件:</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table send-table" :class="{'send-show':emailList}">
				<div class="account-list">
					邮件列表
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th>邮件id</th>
								<th>邮件标题</th>
								<th>发送人</th>
								<th>发送时间</th>
								<th>邮件类型</th>
								<th>管理</th>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
					</tbody>
				</table>
			</div>
			<div class="addEmail user-table email-list" :class="{'email-show':send[0].listShow}">
				<div class="account-list">
					{{send[0].title}}
				</div>
				<div class="send-content">
					
				<form class="form-inline plant send-form">
						<label>发送时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<form class="form-inline plant send-form">
						<label>失效时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<div class="clearit"></div>	
				 <form class="form-group send-form">
				    <label>uid</label>
				    <textarea class="form-control input-text" placeholder="多个uid以,分隔"></textarea>
				  </form>
				  <form class="form-group send-form ">
				    <label>链接</label>
				    <input type="text" class="form-control input-text">
				  </form>
				  <div class="addEmailContent">
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
				  </div>
				  <div class="addEmailContent">
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
				  </div>
				  <div class="table-responsive send-form">
				  	<table class="table">
				  		<tbody>
					  		<tr>
					  			<th>道具id</th>
					  			<th>数量</th>
					  		</tr>
					  		<tr v-for="item in uidlist">
					  			<td>
					  				<select class="form-control no-bg gem-bg" required="required">
					  					<option value="" v-for="list in item.gemList">
					  						{{list.title}}
					  					</option>
					  				</select>
					  			</td>
					  			<td>
					  				<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="">
					  			</td>
					  		</tr>
					  		
				  		</tbody>
				  	</table>
				  </div>
				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
				  </div>
				</div>
			</div>
			<div class="addEmail user-table ditch-list" :class="{'ditch-show':send[1].listShow}">
				<div class="account-list">
					{{send[1].title}}
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
						<label>发送时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<form class="form-inline plant send-form">
						<label>失效时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<div class="clearit"></div>
				 <form class="form-group send-form">
				    <label>链接</label>
				    <input type="text" class="form-control input-text">
				    
				  </form>
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
				  <div class="table-responsive send-form">
				  	<table class="table">
				  		<tbody>
					  		<tr>
					  			<th>道具id</th>
					  			<th>数量</th>
					  		</tr>
					  		<tr v-for="item in quantity">
					  			<td>
					  				<select class="form-control no-bg gem-bg" required="required">
					  					<option value="" v-for="list in item.gemList">
					  						{{list.title}}
					  					</option>
					  				</select>
					  			</td>
					  			<td>
					  				<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="">
					  			</td>
					  		</tr>
				  		</tbody>
				  	</table>
				  </div>
				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
				  </div>
				</div>
			</div>
			<!-- <div class="addEmail user-table platform-list" :class="{'platform-show':send[2].listShow}">
				<div class="account-list">
					{{send[1].title}}
				</div>
				<div class="send-content">
				 <form class="form-inline send-form">
					  <div class="form-group">
					    <label for="exampleInputName2">平台：</label>
					    <select class="form-control form-input">
					    	<option value="ios">ios</option>
					    	<option value="android">android</option>
					    </select>
					  </div>
					</form>
				  <form class="form-inline send-form email-title">
				    <label>邮件标题：</label>
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
				    <label>链接</label>
				    <input type="text" class="form-control input-text">
				  </form>
				  <form class="form-group send-form">
				    <label>邮件内容</label>
				    <textarea class="form-control input-text"></textarea>
				  </form>
				  
				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
				  </div>

				</div>
			</div> -->
		</div>

	</div>
</template>

<script type="ecmascript-6">
    export default{
    	data(){
    		return{
    			plant:[
	    			{title:'平台',select:['android','ios']},
	    			{title:'渠道',select:['所有渠道','ios']},
	    			{title:'服务器',select:['所有渠道','ios']},
    			],
    			quantity:[
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]}
    			],
    			uidlist:[
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]},
	    			{gemList:[{title:'钻石或gem'}]}
    			],
    			emailList:false,
    			send:[
	    			{
	    				title:'按特定uid发送',
	    				listShow:false
	    			},
	    			{
	    				title:'按平台或服务器发送',
	    				listShow:false
	    			}
    			]
    		}
    	},
    	methods:{
    		sendProp(index){
    			this.emailList=true;
    			for(var x of this.send){
    				x.listShow=false;
    			}
    			this.send[index].listShow=true;
    		},
    		sendEmail(){
    			this.emailList=false;
    			for(var x of this.send){
    				x.listShow=false;
    			}
    		},
    		cancelEmail(){
    			this.emailList=false;
    			for(var x of this.send){
    				x.listShow=false;
    			}
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
    @import "../assets/css/main.scss";
	.box{
		
		.title{
			.sendEmail{
				float:right;
				li{
					float:left;
					margin-right:15px;
					a{
						color:#fff;
					}
				}
			}
		}
		.user-table{
			.redact{
				background:#d9544f;
				display:inline-block;
				width:80px;
				height:25px;
				border-radius:5px;
				line-height:25px;
			}
			&.send-table{
				transform:rotateY(0deg);
				opacity:1;
				z-index:100;
				transition:all 0.5s;
			}
			&.send-show{
				transform:rotateY(180deg);
				opacity:0;
				z-index:10;
			}
			&.email-list,&.ditch-list{
				transform:rotateY(-180deg);
				transition:all 0.5s;
				opacity:0;
				z-index:10;
			}
			&.email-show,&.ditch-show{
				transform:rotateY(0deg);
				opacity:1;
				z-index:100;
			}
			.addEmailContent{
				border:1px solid rgba(255,255,255,0.2);
				margin:15px;

			}

		}
	}
</style>