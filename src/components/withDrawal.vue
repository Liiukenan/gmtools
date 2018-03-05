<template>
    <div class="box">
    	<div class="title">
			系统管理
		</div>
    	<div class="account-main">
			<div class="table-responsive user-table">
				<div class="account-list">
					停服开服
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th>服务器名称</th>
								<th>状态</th>
								<th>操作</th>
							</tr>
							<tr>
								<td>SailCraft测试服</td>
								<td>运行中</td>
								<td>
									<a href="javascript:void(0)" class="redact">停服</a>
								</td>
							</tr>
							
					</tbody>
				</table>
			</div>
		</div>
    </div>
</template>

<script type="ecmascript-6">
</script>

<style rel="stylesheet" lang="scss">
	@import "../css/main.scss";
	.box{
		.user-table{
			color:#fff;
			.redact{
				background:#d9544f;
				display:inline-block;
				width:80px;
				height:25px;
				border-radius:5px;
				line-height:25px;

			}

		}
	}
</style>