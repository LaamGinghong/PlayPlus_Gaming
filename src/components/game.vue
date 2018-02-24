<template>
	<div id="game">
		<div id="game_result" v-for="values in game">
			<div class="game_team"><img v-bind:src="values.s_team1logo" width="130px" /><br /><span class="game_team_name">{{values.s_team1}}</span></div>
			<div class="game_middle">
				<div class="game_word game_score" v-bind:style="{'color':color(values.s_team1win)}">{{values.s_team1win}}</div>
				<div class="game_word">:</div>
				<div class="game_word game_score" v-bind:style="{'color':color(values.s_team2win)}">{{values.s_team2win}}</div>
				<div class="game_time">{{values.s_time}}</div>
				<div class="game_status">{{values.s_status}}</div>
			</div>
			<div class="game_team"><img v-bind:src="values.s_team2logo" width="130px" /><br /><span class="game_team_name">{{values.s_team2}}</span></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'game',
		data() {
			return {
				game: {},
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/game?schedule_id=" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.game = data.data;
				}
			});
		},
		methods: {
			color: function(num) {
				if(num == 2) return '#0febc1'
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>