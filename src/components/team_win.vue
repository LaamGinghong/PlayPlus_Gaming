<template>
	<div id="team_win">
		<ul class="row">
			<li v-for="values in team_wins">
				<ul>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item"><span class="data_item_rank">{{values.rank}}</span></li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item">{{values.l_shortname}}</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item">{{values.l_stage}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_win}}/{{values.l_lose}}</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item">{{values.l_winpercent}}%</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item">{{values.l_kill}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_death}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_eyes}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_killeyes}}</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_item">{{values.l_earn}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_dragon}}</li>
					<li class="col-md-1 text-center data_item visible-lg">{{values.l_baron}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'team_win',
		data(){
			return{
				team_wins:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/team_win",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback4',
				success: function(data) {
					vm.team_wins = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>