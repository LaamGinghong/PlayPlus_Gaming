<template>
	<div id="player_details">
		<div id="player_summary">
			<ul class="container">
				<li v-for="values in player">
					<ul class="row">
						<li class="col-md-6 player_details_image col-sm-12 col-xs-12 text-center"><img v-bind:src="values.p_image_large" width="500px" height="500px" class="details_logo" /></li>
						<li class="col-md-6 player_details_summary_details col-sm-12 col-xs-12 text-center">
							<ul>
								<li class="player_details_userid">{{values.p_userid}}</li>
								<li class="player_details_name">{{values.p_name}}</li>
								<ul>
									<li class="player_details_kda col-md-4 col-sm-4 col-xs-4">{{values.p_kda}}</li>
									<li class="player_details_CS col-md-4 col-sm-4 col-xs-4">{{values.p_CS}}</li>
									<li class="player_details_teamfight col-md-4 col-sm-4 col-xs-4">{{values.p_teamfight}}%</li>
								</ul>
								<ul>
									<li class="col-md-4 player_kda_avg  col-sm-4 col-xs-4"><span class="content_box">场均KDA</span></li>
									<li class="col-md-4 player_cs_avg col-sm-4 col-xs-4"><span class="content_box">场均补刀</span></li>
									<li class="col-md-4 player_teamfight_avg col-sm-4 col-xs-4"><span class="content_box">场均参团率</span></li>
								</ul>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<div class="hide_bar"></div>
			<ul class="container player_details_summary_details2">
				<li v-for="values in player" class="col-md-2 col-md-offset-2 col-xs-12 col-sm-12">
					<ul class="row">
						<li class="col-md-6 player_details_teamlogo"><img v-bind:src="values.l_logo" width="70px" height="70px" /></li>
						<li class="col-md-6 player_details_character">{{values.p_character}}</li>
						<li class="col-md-12 player_details_team">{{values.l_name}}</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="player_data" class="container">
			<p class="h1" id="player_data_title">个人数据</p>
			<ul class="row" id="player_data_nav">
				<li class="col-md-1 line1">赛事名称</li>
				<li class="col-md-1 line1">出场次数</li>
				<li class="col-md-1 line2">总击杀<br />(场均击杀)</li>
				<li class="col-md-1 line2">总死亡<br />(场均死亡)</li>
				<li class="col-md-1 line2">总助攻<br />(场均助攻)</li>
				<li class="col-md-1 line1">KDA</li>
				<li class="col-md-1 line1">场均经济</li>
				<li class="col-md-1 line1">场均补刀</li>
				<li class="col-md-1 line1">场均插眼</li>
				<li class="col-md-1 line1">场均排眼</li>
				<li class="col-md-1 line2">场均参团率</li>
				<li class="col-md-1 line1">MVP次数</li>
			</ul>
			<ul class="row" id="player_data_nav_mobile">
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">赛事名称</li>
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">出场次数</li>
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">KDA</li>
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">场均经济</li>
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">场均补刀</li>
				<li class="col-sm-2 col-xs-2 player_data_item_mobile text-center">MVP次数</li>
			</ul>
			<ul class="row">
				<li v-for="values in player" class="player_data_all">
					<ul>
						<li class="col-md-1 player_data_details player_data_details_big">LPL</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_stage}}</li>
						<li class="col-md-1 player_data_details player_data_details_small">{{values.p_kill}}<br /><span class="player_data_details_smallfont">{{values.p_avgkill}}</span></li>
						<li class="col-md-1 player_data_details player_data_details_small">{{values.p_death}}<br /><span class="player_data_details_smallfont">{{values.p_avgdeath}}</span></li>
						<li class="col-md-1 player_data_details player_data_details_small">{{values.p_assist}}<br /><span class="player_data_details_smallfont">{{values.p_avgassist}}</span></li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_kda}}</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_earn}}</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_CS}}</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_eyes}}</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_killeyes}}</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_teamfight}}%</li>
						<li class="col-md-1 player_data_details player_data_details_big">{{values.p_MVP}}</li>
					</ul>
					<ul>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">LPL</li>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">{{values.p_stage}}</li>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">{{values.p_kda}}</li>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">{{values.p_earn}}</li>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">{{values.p_CS}}</li>
						<li class="col-sm-2 col-xs-2 text-center player_data_details_mobile">{{values.p_MVP}}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'player_details',
		data() {
			return {
				player: {}
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/player_details?player_id=" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback',
				success: function(data) {
					vm.player = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>