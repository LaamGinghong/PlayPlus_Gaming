<template>
	<div id="game_details" class="container">
		<div id="game_list_bar" v-for="value in game1_details">
			<div v-if="num(value.rg_gamenum)" class="row">
				<ul>
					<li class="col-md-4 text-center game_list_bar_detail game_list_bar_detail_click">第一局</li>
					<li class="col-md-4 text-center game_list_bar_detail">第二局</li>
					<li class="col-md-4 text-center game_list_bar_detail">第三局</li>
				</ul>
			</div>
			<div v-else class="row">
				<ul>
					<li class="col-md-6 text-center game_list_bar_detail game_list_bar_detail_click">第一局</li>
					<li class="col-md-6 text-center game_list_bar_detail">第二局</li>
				</ul>
			</div>
		</div>
		<ul>
			<li v-for="values in game1_details" class="row">
				<ul>
					<li class="col-md-4 text-center game1_summary">
						<ul class="game1_team">
							<li class="col-md-2 text-center game1_team1logo"><img v-bind:src="values.rg_team1logo" width="55px" /></li>
							<li class="col-md-4 text-center game1_team1">{{values.rg_team1}}</li>
						</ul>
						<ul class="game1_resouce">
							<li class="col-md-3 text-center game1_resouce_name">大龙数</li>
							<li class="col-md-3 text-center game1_resouce_name">小龙数</li>
							<li class="col-md-3 text-center game1_resouce_name">防御塔</li>
							<li class="col-md-3 text-center game1_resouce_name">经济</li>
						</ul>
						<ul class="game1_resouce_details">
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/baron.png'" />{{values.rg_team1_barons}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/dragon.png'" />{{values.rg_team1_dragons}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/tower.png'" />{{values.rg_team1_towers}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/money.png'" />{{values.rg_team1_earn}}</li>
						</ul>
						<ul class="game1_banlist">
							<li><img v-bind:src="values.rg_team1_firstban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team1_secondban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team1_thirdban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team1_forthban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team1_lastban" width="40px" /></li>
						</ul>
					</li>
					<li class="col-md-4 text-center game1_summary">
						<ul>
							<li class="col-md-4 text-right game1_details_center_team1kill">{{values.rg_team1_kill}}</li>
							<li class="col-md-4 text-center game1_details_center_fighticon"><img v-bind:src="'/static/fight.png'" /></li>
							<li class="col-md-4 text-left game1_details_center_team2kill">{{values.rg_team2_kill}}</li>
							<li class="col-md-12 text-center game1_details_center_ban">BAN</li>
						</ul>
					</li>
					<li class="col-md-4 text-center game1_summary">
						<ul class="game1_team">
							<li class="col-md-4 text-center game1_team1 col-md-offset-5">{{values.rg_team2}}</li>
							<li class="col-md-2 text-center game1_team2logo"><img v-bind:src="values.rg_team2logo" width="55px" /></li>
						</ul>
						<ul class="game1_resouce">
							<li class="col-md-3 text-center game1_resouce_name">经济</li>
							<li class="col-md-3 text-center game1_resouce_name">防御塔</li>
							<li class="col-md-3 text-center game1_resouce_name">小龙数</li>
							<li class="col-md-3 text-center game1_resouce_name">大龙数</li>
						</ul>
						<ul class="game1_resouce_details">
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/money.png'" />{{values.rg_team2_earn}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/tower.png'" />{{values.rg_team2_towers}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/dragon.png'" />{{values.rg_team2_dragons}}</li>
							<li class="col-md-3 text-center game1_resouce_details_msg"><img v-bind:src="'/static/baron.png'" />{{values.rg_team2_barons}}</li>
						</ul>
						<ul class="game2_banlist">
							<li><img v-bind:src="values.rg_team2_firstban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team2_secondban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team2_thirdban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team2_forthban" width="40px" /></li>
							<li><img v-bind:src="values.rg_team2_lastban" width="40px" /></li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="row">
				<ul class="col-md-12 game_details_button_list">
					<li class="game_details_button_click game_details_button col-md-2 col-md-offset-4">赛后综述</li>
					<li class="game_details_button col-md-2">数据统计</li>
				</ul>
			</li>
			<li class="row">
				<ul class="col-md-12 game_details_nav">
					<li class="game_details_player col-md-1">选手</li>
					<li class="game_details_legend col-md-1">英雄</li>
					<li class="game_details_kda col-md-2">击杀/死亡/助攻</li>
					<li class="game_details_money col-md-1">金钱</li>
					<li class="game_details_cs col-md-1">补刀</li>
					<li class="game_details_cs col-md-1">补刀</li>
					<li class="game_details_money col-md-1">金钱</li>
					<li class="game_details_kda col-md-2">击杀/死亡/助攻</li>
					<li class="game_details_legend col-md-1">英雄</li>
					<li class="game_details_player col-md-1">选手</li>
				</ul>
			</li>
			<li class="row" v-for="values in game1_details">
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team1_topplayer" width="60px" /><br />{{values.rg_team1}}{{values.rg_team1_top_id}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team1_toppick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team1_topkill}}</span>/{{values.rg_team1_topdeath}}/{{values.rg_team1_topassists}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team1_topearn}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team1_topcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team2_topcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team2_topearn}}</li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team2_topkill}}</span>/{{values.rg_team2_topdeath}}/{{values.rg_team2_topassists}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team2_toppick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team2_topplayer" width="60px" /><br />{{values.rg_team2}}{{values.rg_team2_top_id}}</li>
				</ul>
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team1_jungleplayer" width="60px" /><br />{{values.rg_team1}}{{values.rg_team1_jungle_id}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team1_junglepick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team1_junglekill}}</span>/{{values.rg_team1_jungledeath}}/{{values.rg_team1_jungleassists}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team1_jungleearn}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team1_junglecs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team2_junglecs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team2_jungleearn}}</li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team2_junglekill}}</span>/{{values.rg_team2_jungledeath}}/{{values.rg_team2_jungleassists}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team2_junglepick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team2_jungleplayer" width="60px" /><br />{{values.rg_team2}}{{values.rg_team2_jungle_id}}</li>
				</ul>
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team1_midplayer" width="60px" /><br />{{values.rg_team1}}{{values.rg_team1_mid_id}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team1_midpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team1_midkill}}</span>/{{values.rg_team1_middeath}}/{{values.rg_team1_midassists}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team1_midearn}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team1_midcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team2_midcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team2_midearn}}</li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team2_midkill}}</span>/{{values.rg_team2_middeath}}/{{values.rg_team2_midassists}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team2_midpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team2_midplayer" width="60px" /><br />{{values.rg_team2}}{{values.rg_team2_mid_id}}</li>
				</ul>
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team1_ADCplayer" width="60px" /><br />{{values.rg_team1}}{{values.rg_team1_ADC_id}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team1_ADCpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team1_ADCkill}}</span>/{{values.rg_team1_ADCdeath}}/{{values.rg_team1_ADCassists}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team1_ADCearn}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team1_ADCcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team2_ADCcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team2_ADCearn}}</li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team2_ADCkill}}</span>/{{values.rg_team2_ADCdeath}}/{{values.rg_team2_ADCassists}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team2_ADCpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team2_ADCplayer" width="60px" /><br />{{values.rg_team2}}{{values.rg_team2_ADC_id}}</li>
				</ul>
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team1_supportplayer" width="60px" /><br />{{values.rg_team1}}{{values.rg_team1_support_id}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team1_supportpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team1_supportkill}}</span>/{{values.rg_team1_supportdeath}}/{{values.rg_team1_supportassists}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team1_supportearn}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team1_supportcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playercs">{{values.rg_team2_supportcs}}</li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerearn">{{values.rg_team2_supportearn}}</li>
					<li class="col-md-2 text-center game_details_player_details game_details_playerkda"><span class="game_details_playerkill">{{values.rg_team2_supportkill}}</span>/{{values.rg_team2_supportdeath}}/{{values.rg_team2_supportassists}}</li>
					<li class="col-md-1 text-center game_details_player_details"><img v-bind:src="values.rg_team2_supportpick" width="50px" class="game_details_playerpick" /></li>
					<li class="col-md-1 text-center game_details_player_details game_details_playerid"><img v-bind:src="values.rg_team2_supportplayer" width="60px" /><br />{{values.rg_team2}}{{values.rg_team2_support_id}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'game_details',
		data() {
			return {
				game1_details: {}
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/game1?game1_id=" + this.$route.params.num,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback3',
				success: function(data) {
					vm.game1_details = data.data;
				}
			});
		},
		methods: {
			num: function(num) {
				if(num == 3) return true;
				else return false;
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>