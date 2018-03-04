<template>
	<div id="detail">
		<ul id="schedule_details">
			<li v-for="value in msg" class="details">
				<ul class="row">
					<router-link v-bind:to="'/game/'+value.s_id">
						<li class="col-md-1 col-sm-1 details_status">
							<span class="status" v-bind:style="{'background':background(value.s_status)}">{{value.s_status}}</span>
						</li>
					</router-link>
					<li class="col-md-1 col-sm-1">{{value.s_name}}</li>
					<li class="col-md-2 col-sm-2">{{value.s_stage}}</li>
					<li class="col-md-2 col-sm-2">{{value.s_time}}</li>
					<router-link v-bind:to="'/game/'+value.s_id+'/'+value.s_id">
						<li class="col-md-1 col-sm-1"><img v-bind:src="value.s_team1logo" width="40px" height="40px" /></li>
						<li class="col-md-1	col-sm-1">{{value.s_team1}}</li>
						<li class="col-md-1 col-sm-1">
							<span class="score" v-bind:style="{'color':color(value.s_team1win)}">{{value.s_team1win}}</span>
						</li>
						<li class="col-md-1 col-sm-1">
							<span class="score" v-bind:style="{'color':color(value.s_team2win)}">{{value.s_team2win}}</span>
						</li>
						<li class="col-md-1 col-sm-1">{{value.s_team2}}</li>
						<li class="col-md-1 col-sm-1 details_team2logo"><img v-bind:src="value.s_team2logo" width="40px" height="40px" /></li>
					</router-link>
				</ul>
			</li>
		</ul>
		<ul id="schedule_details_mobile">
			<li v-for="value in msg" class="details_mobile">
				<ul class="row">
					<li class="col-xs-12 col-sm-12 details_time_mobile">
						<span class="col-xs-6 col-sm-6 text-center">{{value.s_time}}</span>
						<span class="col-xs-6 col-sm-6 text-center">{{value.s_name}}{{value.s_stage}}</span>
					</li>
					<li class="col-xs-4 col-sm-4 text-center details_logo_mobile"><img v-bind:src="value.s_team1logo" width="40px"/><br />{{value.s_team1}}</li>
					<li class="col-xs-4 col-sm-4 text-center details_result_mobile">{{value.s_team1win}}:{{value.s_team2win}}</li>
					<li class="col-xs-4 col-sm-4 text-center details_logo_mobile"><img v-bind:src="value.s_team2logo" width="40px"/><br />{{value.s_team2}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				msg: [],
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/schedule" + this.$route.params.num,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback',
				success: function(data) {
					vm.msg = data.data;
				}
			});
		},
		methods: {
			color: function(num) {
				if(num == 2) return '#0eebc1'
			},
			background: function(result) {
				if(result == '未开始') return '#cfa14a';
			},
			change: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: "http://localhost:3000/schedule" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback',
					success: function(data) {
						vm.msg = data.data;
					}
				});
			}
		},
		watch: {
			'$route': 'change'
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>