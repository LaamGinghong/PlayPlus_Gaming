<template>
	<div id="player">
		<div class="container" id="player_most">
			<ul class="row">
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="kill[0].p_image" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							{{kill[0].p_team}}{{kill[0].p_userid}}<br />
							<span class="most_percent">总击杀：{{kill[0].p_kill}}</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">击杀最多</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="mvp[0].p_image" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							{{mvp[0].p_team}}{{mvp[0].p_userid}}<br />
							<span class="most_percent">MVP次数：{{mvp[0].p_MVP}}</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">MVP最多</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="kda[0].p_image" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							{{kda[0].p_team}}{{kda[0].p_userid}}<br />
							<span class="most_percent">KDA最高：{{kda[0].p_kda}}</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">KDA最高</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="player_rank">
			<div class="container">
				<ul class="row">
					<li class="col-md-12 text-center data_rank_title">选手排行榜</li>
					<router-link v-bind:to="'/player/stage'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn" id="stage_btn" v-on:click="stage_btn"><img v-bind:src="'/static/登场.png'" /><br />登场</li>
					</router-link>
					<router-link v-bind:to="'/player/kill'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn data_rank_item_btn_click" id="kill_btn" v-on:click="kill_btn"><img v-bind:src="'/static/击杀.png'" /><br />击杀</li>
					</router-link>
					<router-link v-bind:to="'/player/death'">
						<li class="col-md-1 visible-lg text-center data_rank_item_btn" id="death_btn" v-on:click="death_btn"><img v-bind:src="'/static/死亡.png'" /><br />死亡</li>
					</router-link>
					<router-link v-bind:to="'/player/assist'">
						<li class="col-md-1 visible-lg text-center data_rank_item_btn" id="assist_btn" v-on:click="assist_btn"><img v-bind:src="'/static/助攻.png'" /><br />助攻</li>
					</router-link>
					<router-link v-bind:to="'/player/kda'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn" id="KDA_btn" v-on:click="KDA_btn"><img v-bind:src="'/static/kda.png'" /><br />KDA</li>
					</router-link>
					<router-link v-bind:to="'/player/earn'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn" id="earn_btn" v-on:click="earn_btn"><img v-bind:src="'/static/经济.png'" /><br />经济</li>
					</router-link>
					<router-link v-bind:to="'/player/CS'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn" id="CS_btn" v-on:click="CS_btn"><img v-bind:src="'/static/补刀.png'" /><br />补刀</li>
					</router-link>
					<li class="col-md-1 visible-lg text-center data_rank_item_btn"><img v-bind:src="'/static/输出占比.png'" /><br />输出占比</li>
					<router-link v-bind:to="'/player/eyes'">
						<li class="col-md-1 visible-lg text-center data_rank_item_btn" id="eyes_btn" v-on:click="eyes_btn"><img v-bind:src="'/static/插眼.png'" /><br />插眼</li>
					</router-link>
					<router-link v-bind:to="'/player/killeyes'">
						<li class="col-md-1 visible-lg text-center data_rank_item_btn" id="killeyes_btn" v-on:click="killeyes_btn"><img v-bind:src="'/static/排眼.png'" /><br />排眼</li>
					</router-link>
					<li class="col-md-1 visible-lg text-center data_rank_item_btn"><img v-bind:src="'/static/参团.png'" /><br />参团率</li>
					<router-link v-bind:to="'/player/mvp'">
						<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item_btn" id="MVP_btn" v-on:click="MVP_btn"><img v-bind:src="'/static/MVP.png'" /><br />MVP</li>
					</router-link>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item">排名</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item">选手</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item" id="stage_item">出场次数</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item data_rank_item_click" id="kill_item">击杀</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="death_item">死亡</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="assist_item">助攻</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item" id="KDA_item">KDA</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="earn_item">经济</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="CS_item">补刀</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="eyes_item">插眼</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="killeyes_item">排眼</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item" id="MVP_items">MVP次数</li>
				</ul>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'player',
		data() {
			return {
				kill: [],
				mvp: [],
				kda: []
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/kill",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.kill = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/mvp",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success: function(data) {
					vm.mvp = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/kda",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback3',
				success: function(data) {
					vm.kda = data.data;
				}
			});
		},
		methods: {
			stage_btn: function() {
				$('#stage_btn').addClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').addClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			kill_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').addClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').addClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			death_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').addClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').addClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			assist_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').addClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').addClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			KDA_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').addClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').addClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			earn_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').addClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').addClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			CS_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').addClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').addClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			eyes_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').addClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').addClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			killeyes_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').addClass('data_rank_item_btn_click');
				$('#MVP_btn').removeClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').addClass('data_rank_item_click');
				$('#MVP_items').removeClass('data_rank_item_click');
			},
			MVP_btn: function() {
				$('#stage_btn').removeClass('data_rank_item_btn_click');
				$('#kill_btn').removeClass('data_rank_item_btn_click');
				$('#assist_btn').removeClass('data_rank_item_btn_click');
				$('#death_btn').removeClass('data_rank_item_btn_click');
				$('#KDA_btn').removeClass('data_rank_item_btn_click');
				$('#earn_btn').removeClass('data_rank_item_btn_click');
				$('#CS_btn').removeClass('data_rank_item_btn_click');
				$('#eyes_btn').removeClass('data_rank_item_btn_click');
				$('#killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#MVP_btn').addClass('data_rank_item_btn_click');
				$('#stage_item').removeClass('data_rank_item_click');
				$('#kill_item').removeClass('data_rank_item_click');
				$('#assist_item').removeClass('data_rank_item_click');
				$('#death_item').removeClass('data_rank_item_click');
				$('#KDA_item').removeClass('data_rank_item_click');
				$('#earn_item').removeClass('data_rank_item_click');
				$('#CS_item').removeClass('data_rank_item_click');
				$('#eyes_item').removeClass('data_rank_item_click');
				$('#killeyes_item').removeClass('data_rank_item_click');
				$('#MVP_items').addClass('data_rank_item_click');
			}
		},
		updated: function() {
			if(this.$route.path == '/player/stage') {
				this.stage_btn();
			}
			if(this.$route.path == '/player/kill') {
				this.kill_btn();
			}
			if(this.$route.path == '/player/death') {
				this.death_btn();
			}
			if(this.$route.path == '/player/assist') {
				this.assist_btn();
			}
			if(this.$route.path == '/player/KDA') {
				this.KDA_btn();
			}
			if(this.$route.path == '/player/earn') {
				this.earn_btn();
			}
			if(this.$route.path == '/player/CS') {
				this.CS_btn();
			}
			if(this.$route.path == '/player/eyes') {
				this.eyes_btn();
			}
			if(this.$route.path == '/player/killeyes') {
				this.killeyes_btn();
			}
			if(this.$route.path == '/player/MVP') {
				this.MVP_btn();
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>