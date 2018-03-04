<template>
	<div id="player_assist">
		<ul class="row">
			<li v-for="values in player_assist">
				<ul>
					<li class="col-md-1 text-center data_item"><span class="data_item_rank">{{values.rank}}</span></li>
					<li class="col-md-1 text-center data_item">{{values.p_team}}{{values.p_userid}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_stage}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_kill}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_death}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_assist}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_kda}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_earn}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_CS}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_eyes}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_killeyes}}</li>
					<li class="col-md-1 text-center data_item">{{values.p_MVP}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'player_assist',
		data(){
			return{
				player_assist:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/assist",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback4',
				success: function(data) {
					vm.player_assist = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>