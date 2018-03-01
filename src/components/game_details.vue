<template>
	<div id="game_details" class="container">
		<div id="game_list_bar" v-for="value in game1_details">
			<div v-if="num(value.rg_gamenum)" class="row">
				<ul>
					<li class="col-md-4 text-center game_list_bar_detail game_list_bar_detail_click" v-on:click="first" id="three_firstgame">第一局</li>
					<li class="col-md-4 text-center game_list_bar_detail" v-on:click="second" id="three_secondgame">第二局</li>
					<li class="col-md-4 text-center game_list_bar_detail" v-on:click="third" id="three_thirdgame">第三局</li>
				</ul>
			</div>
			<div v-else class="row">
				<ul>
					<li class="col-md-6 text-center game_list_bar_detail game_list_bar_detail_click" v-on:click="first" id="two_firstgame">第一局</li>
					<li class="col-md-6 text-center game_list_bar_detail" v-on:click="second" id="two_secodgame">第二局</li>
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
			<li class="row" id="game_details_nav">
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
			<li class="row" v-for="values in game1_details" id="game_details_result">
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
			<li id="game_details_table" class="row">
				<ul class="col-md-12 game_details_nav">
					<li class="col-md-12" id="game_details_demage_table" style="height: 1000px;"></li>
					<li class="col-md-6" id="game_details_team1_demage_percent_table" style="height: 400px;"></li>
					<li class="col-md-6" id="game_details_team2_demage_percent_table" style="height: 400px;"></li>
					<li class="col-md-6" id="game_details_team1_earn_percent_table" style="height: 400px;"></li>
					<li class="col-md-6" id="game_details_team2_earn_percent_table" style="height: 400px;"></li>
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
		mounted: function() {
			this.tableOne();
		},
		methods: {
			num: function(num) {
				if(num == 3) return true;
				else return false;
			},
			first: function() {
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
				$('#three_firstgame').addClass('game_list_bar_detail_click');
				$('#three_secondgame').removeClass('game_list_bar_detail_click');
				$('#three_thirdgame').removeClass('game_list_bar_detail_click');
				$('#two_firstgame').addClass('game_list_bar_detail_click');
				$('#two_secodgame').removeClass('game_list_bar_detail_click');
				this.tableOne();
			},
			second: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game2?game2_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback3',
					success: function(data) {
						vm.game1_details = data.data;
					}
				});
				$('#three_firstgame').removeClass('game_list_bar_detail_click');
				$('#three_secondgame').addClass('game_list_bar_detail_click');
				$('#three_thirdgame').removeClass('game_list_bar_detail_click');
				$('#two_firstgame').removeClass('game_list_bar_detail_click');
				$('#two_secodgame').addClass('game_list_bar_detail_click')
				this.tableTwo();
			},
			third: function() {
				let vm = this;
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game3?game3_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback3',
					success: function(data) {
						vm.game1_details = data.data;
					}
				});
				$('#three_firstgame').removeClass('game_list_bar_detail_click');
				$('#three_secondgame').removeClass('game_list_bar_detail_click');
				$('#three_thirdgame').addClass('game_list_bar_detail_click');
				this.tableThree();
			},
			tableOne: function() {
				let app = echarts.init(document.getElementById('game_details_demage_table'), 'dark');
				app.setOption({
					title: {
						text: '赛后数据统计',
						top: '3%'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['对敌方英雄输出伤害', '承受伤害'],
						top: '3%'
					},
					grid: {
						left: '3%',
						right: '4%',
						top: '8%',
						bottom: '5%',
						containLabel: true,
						height: '900px'
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.001]
					},
					yAxis: {
						type: 'category',
						inverse: true,
						data: []
					},
					series: [{
							name: '对敌方英雄输出伤害',
							type: 'bar',
							data: []
						},
						{
							name: '承受伤害',
							type: 'bar',
							data: []
						}
					]
				});
				let teamOnedemagepercent = echarts.init(document.getElementById("game_details_team1_demage_percent_table"), 'dark');
				teamOnedemagepercent.setOption({
					title: {
						text: 'Team1伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwodemagepercent = echarts.init(document.getElementById("game_details_team2_demage_percent_table"), 'dark');
				teamTwodemagepercent.setOption({
					title: {
						text: 'Team2伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamOneearnpercent = echarts.init(document.getElementById("game_details_team1_earn_percent_table"), 'dark');
				teamOneearnpercent.setOption({
					title: {
						text: 'Team1经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwoearnpercent = echarts.init(document.getElementById("game_details_team2_earn_percent_table"), 'dark');
				teamTwoearnpercent.setOption({
					title: {
						text: 'Team2经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game1_members?game1_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback4',
					success: function(data) {
						var members = ['teamOneTop', 'teamOneJun', 'teamOneMid', 'teamOneADC', 'teamOneSup', 'teamTwoTop', 'teamTwoJun', 'teamTwoMid', 'teamTwoADC', 'teamTwoSup'];
						var legends = data.data[0];
						app.setOption({
							yAxis: {
								data: members,
								axisLabel: {
									formatter: function(value) {
										return '{' + value + '| }\n{value|' + value + '}';
									},
									margin: 20,
									interval: 0,
									rich: {
										value: {
											lineHeight: 20,
											align: 'center'
										},
										teamOneTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_toppick
											}
										},
										teamOneJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_junglepick
											}
										},
										teamOneMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_midpick
											}
										},
										teamOneADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_ADCpick
											}
										},
										teamOneSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_supportpick
											}
										},
										teamTwoTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_toppick
											}
										},
										teamTwoJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_junglepick
											}
										},
										teamTwoMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_midpick
											}
										},
										teamTwoADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_ADCpick
											}
										},
										teamTwoSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_supportpick
											}
										}
									}
								}
							}
						})
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game1_demage?game1_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback5',
					success: function(data) {
						var demage = [];
						for(var i in data.data[0]) {
							demage.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '对敌方英雄输出伤害',
									type: 'bar',
									data: demage
								}]
							});
							teamOnedemagepercent.setOption({
								series: [{
									data: [{
										value: demage[0],
										name: 'Team1Top'
									}, {
										value: demage[1],
										name: 'Team1Jun'
									}, {
										value: demage[2],
										name: 'Team1Mid'
									}, {
										value: demage[3],
										name: 'Team1ADC'
									}, {
										value: demage[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwodemagepercent.setOption({
								series: [{
									data: [{
										value: demage[5],
										name: 'Team2Top'
									}, {
										value: demage[6],
										name: 'Team2Jun'
									}, {
										value: demage[7],
										name: 'Team2Mid'
									}, {
										value: demage[8],
										name: 'Team2ADC'
									}, {
										value: demage[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game1_DK?game1_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback6',
					success: function(data) {
						var DK = [];
						for(let i in data.data[0]) {
							DK.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '承受伤害',
									type: 'bar',
									data: DK
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game1_earn?game1_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback7',
					success: function(data) {
						var earn = [];
						for(let i in data.data[0]) {
							earn.push(data.data[0][i]);
							teamOneearnpercent.setOption({
								series: [{
									data: [{
										value: earn[0],
										name: 'Team1Top'
									}, {
										value: earn[1],
										name: 'Team1Jun'
									}, {
										value: earn[2],
										name: 'Team1Mid'
									}, {
										value: earn[3],
										name: 'Team1ADC'
									}, {
										value: earn[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwoearnpercent.setOption({
								series: [{
									data: [{
										value: earn[5],
										name: 'Team2Top'
									}, {
										value: earn[6],
										name: 'Team2Jun'
									}, {
										value: earn[7],
										name: 'Team2Mid'
									}, {
										value: earn[8],
										name: 'Team2ADC'
									}, {
										value: earn[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
			},
			tableTwo: function() {
				let app = echarts.init(document.getElementById('game_details_demage_table'), 'dark');
				app.setOption({
					title: {
						text: '赛后数据统计',
						top: '3%'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['对敌方英雄输出伤害', '承受伤害'],
						top: '3%'
					},
					grid: {
						left: '3%',
						right: '4%',
						top: '8%',
						bottom: '5%',
						containLabel: true,
						height: '900px'
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.001]
					},
					yAxis: {
						type: 'category',
						inverse: true,
						data: []
					},
					series: [{
							name: '对敌方英雄输出伤害',
							type: 'bar',
							data: []
						},
						{
							name: '承受伤害',
							type: 'bar',
							data: []
						}
					]
				});
				let teamOnedemagepercent = echarts.init(document.getElementById("game_details_team1_demage_percent_table"), 'dark');
				teamOnedemagepercent.setOption({
					title: {
						text: 'Team1伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwodemagepercent = echarts.init(document.getElementById("game_details_team2_demage_percent_table"), 'dark');
				teamTwodemagepercent.setOption({
					title: {
						text: 'Team2伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamOneearnpercent = echarts.init(document.getElementById("game_details_team1_earn_percent_table"), 'dark');
				teamOneearnpercent.setOption({
					title: {
						text: 'Team1经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwoearnpercent = echarts.init(document.getElementById("game_details_team2_earn_percent_table"), 'dark');
				teamTwoearnpercent.setOption({
					title: {
						text: 'Team2经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game2_members?game2_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback4',
					success: function(data) {
						var members = ['teamOneTop', 'teamOneJun', 'teamOneMid', 'teamOneADC', 'teamOneSup', 'teamTwoTop', 'teamTwoJun', 'teamTwoMid', 'teamTwoADC', 'teamTwoSup'];
						var legends = data.data[0];
						app.setOption({
							yAxis: {
								data: members,
								axisLabel: {
									formatter: function(value) {
										return '{' + value + '| }\n{value|' + value + '}';
									},
									margin: 20,
									interval: 0,
									rich: {
										value: {
											lineHeight: 20,
											align: 'center'
										},
										teamOneTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_toppick
											}
										},
										teamOneJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_junglepick
											}
										},
										teamOneMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_midpick
											}
										},
										teamOneADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_ADCpick
											}
										},
										teamOneSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_supportpick
											}
										},
										teamTwoTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_toppick
											}
										},
										teamTwoJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_junglepick
											}
										},
										teamTwoMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_midpick
											}
										},
										teamTwoADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_ADCpick
											}
										},
										teamTwoSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_supportpick
											}
										}
									}
								}
							}
						})
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game2_demage?game2_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback5',
					success: function(data) {
						var demage = [];
						for(var i in data.data[0]) {
							demage.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '对敌方英雄输出伤害',
									type: 'bar',
									data: demage
								}]
							});
							teamOnedemagepercent.setOption({
								series: [{
									data: [{
										value: demage[0],
										name: 'Team1Top'
									}, {
										value: demage[1],
										name: 'Team1Jun'
									}, {
										value: demage[2],
										name: 'Team1Mid'
									}, {
										value: demage[3],
										name: 'Team1ADC'
									}, {
										value: demage[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwodemagepercent.setOption({
								series: [{
									data: [{
										value: demage[5],
										name: 'Team2Top'
									}, {
										value: demage[6],
										name: 'Team2Jun'
									}, {
										value: demage[7],
										name: 'Team2Mid'
									}, {
										value: demage[8],
										name: 'Team2ADC'
									}, {
										value: demage[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game2_DK?game2_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback6',
					success: function(data) {
						var DK = [];
						for(let i in data.data[0]) {
							DK.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '承受伤害',
									type: 'bar',
									data: DK
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game2_earn?game2_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback7',
					success: function(data) {
						var earn = [];
						for(let i in data.data[0]) {
							earn.push(data.data[0][i]);
							teamOneearnpercent.setOption({
								series: [{
									data: [{
										value: earn[0],
										name: 'Team1Top'
									}, {
										value: earn[1],
										name: 'Team1Jun'
									}, {
										value: earn[2],
										name: 'Team1Mid'
									}, {
										value: earn[3],
										name: 'Team1ADC'
									}, {
										value: earn[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwoearnpercent.setOption({
								series: [{
									data: [{
										value: earn[5],
										name: 'Team2Top'
									}, {
										value: earn[6],
										name: 'Team2Jun'
									}, {
										value: earn[7],
										name: 'Team2Mid'
									}, {
										value: earn[8],
										name: 'Team2ADC'
									}, {
										value: earn[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
			},
			tableThree: function() {
				let app = echarts.init(document.getElementById('game_details_demage_table'), 'dark');
				app.setOption({
					title: {
						text: '赛后数据统计',
						top: '3%'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['对敌方英雄输出伤害', '承受伤害'],
						top: '3%'
					},
					grid: {
						left: '3%',
						right: '4%',
						top: '8%',
						bottom: '5%',
						containLabel: true,
						height: '900px'
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.001]
					},
					yAxis: {
						type: 'category',
						inverse: true,
						data: []
					},
					series: [{
							name: '对敌方英雄输出伤害',
							type: 'bar',
							data: []
						},
						{
							name: '承受伤害',
							type: 'bar',
							data: []
						}
					]
				});
				let teamOnedemagepercent = echarts.init(document.getElementById("game_details_team1_demage_percent_table"), 'dark');
				teamOnedemagepercent.setOption({
					title: {
						text: 'Team1伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwodemagepercent = echarts.init(document.getElementById("game_details_team2_demage_percent_table"), 'dark');
				teamTwodemagepercent.setOption({
					title: {
						text: 'Team2伤害占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '伤害占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamOneearnpercent = echarts.init(document.getElementById("game_details_team1_earn_percent_table"), 'dark');
				teamOneearnpercent.setOption({
					title: {
						text: 'Team1经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team1Top', 'Team1Jun', 'Team1Mid', 'Team1ADC', 'Team1Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				let teamTwoearnpercent = echarts.init(document.getElementById("game_details_team2_earn_percent_table"), 'dark');
				teamTwoearnpercent.setOption({
					title: {
						text: 'Team2经济占比'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['Team2Top', 'Team2Jun', 'Team2Mid', 'Team2ADC', 'Team2Sup'],
						top: '10%'
					},
					series: [{
						name: '经济占比',
						type: 'pie',
						radius: ['40%', '60%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '24',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: []
					}]
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game3_members?game3_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback4',
					success: function(data) {
						var members = ['teamOneTop', 'teamOneJun', 'teamOneMid', 'teamOneADC', 'teamOneSup', 'teamTwoTop', 'teamTwoJun', 'teamTwoMid', 'teamTwoADC', 'teamTwoSup'];
						var legends = data.data[0];
						app.setOption({
							yAxis: {
								data: members,
								axisLabel: {
									formatter: function(value) {
										return '{' + value + '| }\n{value|' + value + '}';
									},
									margin: 20,
									interval: 0,
									rich: {
										value: {
											lineHeight: 20,
											align: 'center'
										},
										teamOneTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_toppick
											}
										},
										teamOneJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_junglepick
											}
										},
										teamOneMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_midpick
											}
										},
										teamOneADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_ADCpick
											}
										},
										teamOneSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team1_supportpick
											}
										},
										teamTwoTop: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_toppick
											}
										},
										teamTwoJun: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_junglepick
											}
										},
										teamTwoMid: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_midpick
											}
										},
										teamTwoADC: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_ADCpick
											}
										},
										teamTwoSup: {
											height: 40,
											align: 'center',
											backgroundColor: {
												image: legends.rg_team2_supportpick
											}
										}
									}
								}
							}
						})
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game3_demage?game3_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback5',
					success: function(data) {
						var demage = [];
						for(var i in data.data[0]) {
							demage.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '对敌方英雄输出伤害',
									type: 'bar',
									data: demage
								}]
							});
							teamOnedemagepercent.setOption({
								series: [{
									data: [{
										value: demage[0],
										name: 'Team1Top'
									}, {
										value: demage[1],
										name: 'Team1Jun'
									}, {
										value: demage[2],
										name: 'Team1Mid'
									}, {
										value: demage[3],
										name: 'Team1ADC'
									}, {
										value: demage[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwodemagepercent.setOption({
								series: [{
									data: [{
										value: demage[5],
										name: 'Team2Top'
									}, {
										value: demage[6],
										name: 'Team2Jun'
									}, {
										value: demage[7],
										name: 'Team2Mid'
									}, {
										value: demage[8],
										name: 'Team2ADC'
									}, {
										value: demage[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game3_DK?game3_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback6',
					success: function(data) {
						var DK = [];
						for(let i in data.data[0]) {
							DK.push(data.data[0][i]);
							app.setOption({
								series: [{
									name: '承受伤害',
									type: 'bar',
									data: DK
								}]
							})
						}
					}
				});
				$.ajax({
					type: "get",
					url: "http://localhost:3000/game3_earn?game3_id=" + this.$route.params.num,
					async: true,
					dataType: 'jsonp',
					jsonp: 'callback',
					jsonpCallback: 'jsonpCallback7',
					success: function(data) {
						var earn = [];
						for(let i in data.data[0]) {
							earn.push(data.data[0][i]);
							teamOneearnpercent.setOption({
								series: [{
									data: [{
										value: earn[0],
										name: 'Team1Top'
									}, {
										value: earn[1],
										name: 'Team1Jun'
									}, {
										value: earn[2],
										name: 'Team1Mid'
									}, {
										value: earn[3],
										name: 'Team1ADC'
									}, {
										value: earn[4],
										name: 'Team1Sup'
									}]
								}]
							});
							teamTwoearnpercent.setOption({
								series: [{
									data: [{
										value: earn[5],
										name: 'Team2Top'
									}, {
										value: earn[6],
										name: 'Team2Jun'
									}, {
										value: earn[7],
										name: 'Team2Mid'
									}, {
										value: earn[8],
										name: 'Team2ADC'
									}, {
										value: earn[9],
										name: 'Team2Sup'
									}]
								}]
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>