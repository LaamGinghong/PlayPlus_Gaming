<template>
	<div id="team_details">
		<div id="team_summary">
			<ul class="container">
				<li v-for="value in team_details">
					<ul class="row team_details_summary">
						<li class="col-md-6"><img v-bind:src="value.l_logo_large" /></li>
						<li class="col-md-6 team_details_summary_details">
							<ul>
								<li class="team_details_shortname">{{value.l_shortname}}</li>
								<li class="team_details_name">{{value.l_name}}</li>
								<li class="team_details_summarys">{{value.l_summary}}</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="team_members" class="container">
			<p class="h1" id="members_title">现役成员</p>
			<ul id="members_list">
				<li v-for="values in members">
					<ul>
						<router-link v-bind:to="'/player_details/'+values.p_id"><li class="team_members_img"><img v-bind:src="values.p_image" width="156px" height="156px" /><span class="team_members_character">{{values.p_character}}</span></li></router-link>
						<router-link v-bind:to="'/player_details/'+values.p_id"><li class="team_members_id">{{values.p_userid}}</li></router-link>
					</ul>
				</li>
			</ul>
		</div>
		<div id="team_schedule" class="container">
			<p class="h1" id="team_schedule_title">最近战绩</p>
			<ul id="team_schedule_nav" class="row">
				<li class="col-md-2">状态</li>
				<li class="col-md-2">时间</li>
				<li class="col-md-6">胜败</li>
				<li class="col-md-2">赛事</li>
			</ul>
			<ul>
				<li v-for="values in schedule">
					<ul class="row team_schedule_details">
						<li class="col-md-2 team_schedule_status">{{values.s_status}}</li>
						<li class="col-md-2 team_schedule_time">{{values.s_time}}</li>
						<li class="col-md-2 team_schedule_team1">{{values.s_team1}}</li>
						<li class="col-md-1 team_schedule_team1win">{{values.s_team1win}}</li>
						<li class="col-md-1 team_schedule_team2win">{{values.s_team2win}}</li>
						<li class="col-md-2 team_schedule_team2">{{values.s_team2}}</li>
						<li class="col-md-2 team_schedule_name">{{values.s_name}}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'team_details',
		data() {
			return {
				team_details: {},
				members: [],
				schedule:[]
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/teamdetails?team_id=" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback',
				success: function(data) {
					vm.team_details = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/teammembers?team_id=" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.members = data.data;
				}
			});
			$.ajax({
				type:"get",
				url:"http://localhost:3000/teamschedule?team_id1="+this.$route.params.id+"&team_id2="+this.$route.params.id,
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success:function  (data) {
					vm.schedule=data.data;
				}
			});
		},
		methods:{
			changecolor:function  () {
				
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>