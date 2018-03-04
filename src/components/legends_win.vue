<template>
	<div id="legends_win">
		<ul class="row">
			<li v-for="values in wins">
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
		name:'legends_win',
		data(){
			return{
				wins:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/win",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback4',
				success: function(data) {
					vm.wins = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>