<template>
	<div id="legends_pick">
		<ul class="row">
			<li v-for="values in picks">
				<ul>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item"><span class="data_item_rank">{{values.rank}}</span></li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item">{{values.l_title}}</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item">{{values.l_pick}}</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item">{{values.l_pick_percent}}%</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item">{{values.l_ban_percent}}%</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_item">{{values.l_win_percent}}%</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'legends_pick',
		data(){
			return{
				picks:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/pick",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback4',
				success: function(data) {
					vm.picks = data.data;
				}
			});
		}
	}
</script>

<style>
@import url("../assets/css/schedule.css");
.data_item{
	height: 50px;
	line-height: 50px;
	color: #a0a0a0;
	font-size: 14px;
	background: #2e2e2e;
	font-weight: bold;
	padding: 0;
}
.data_item_rank{
	display: block;
	width: 26px;
	height: 26px;
	border-radius: 50%;
	background: #181818;
	color: #c49f58;
	text-align: center;
	line-height: 26px;
	margin: 14px auto 0;
}
</style>