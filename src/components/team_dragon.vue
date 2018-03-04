<template>
	<div id="team_dragon">
		<ul class="row">
			<li v-for="values in team_dragon">
				<ul>
					<li class="col-md-1 text-center data_item"><span class="data_item_rank">{{values.rank}}</span></li>
					<li class="col-md-1 text-center data_item">{{values.l_shortname}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_stage}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_win}}/{{values.l_lose}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_winpercent}}%</li>
					<li class="col-md-1 text-center data_item">{{values.l_kill}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_death}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_eyes}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_killeyes}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_earn}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_dragon}}</li>
					<li class="col-md-1 text-center data_item">{{values.l_baron}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'team_dragon',
		data(){
			return{
				team_dragon:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/team_dragon",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback4',
				success: function(data) {
					vm.team_dragon = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>