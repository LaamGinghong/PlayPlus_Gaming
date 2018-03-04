<template>
	<div id="team">
		<div class="container" id="team_most">
			<ul class="row">
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="team_win[0].l_logo" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							<span class="team_name">战队：{{team_win[0].l_shortname}}</span><br />
							<span class="most_percent">胜率：{{team_win[0].l_winpercent}}</span>
						</li>
						<li class="col-md-12 most">胜率最高</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="team_kill[0].l_logo" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							<span class="team_name">战队：{{team_kill[0].l_shortname}}</span><br />
							<span class="most_percent">击杀次数：{{team_kill[0].l_kill}}</span>
						</li>
						<li class="col-md-12 most">击杀最多</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="team_earn[0].l_logo" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							<span class="team_name">战队：{{team_earn[0].l_shortname}}</span><br />
							<span class="most_percent">经济：{{team_earn[0].l_earn}}</span>
						</li>
						<li class="col-md-12 most">经济最高</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="team_rank">
			<div class="container">
				<ul class="row">
					<li class="col-md-12 text-center data_rank_title">战队排行榜</li>
					<router-link v-bind:to="'/team/win'">
						<li id="team_win_btn" v-on:click="team_win_btn" class="text-center data_rank_item_btn team_rank_item team_rank_item_first data_rank_item_btn_click"><img v-bind:src="'/static/胜率.png'"/><br />胜率</li>
					</router-link>
					<router-link v-bind:to="'/team/kill'">
						<li id="team_kill_btn" v-on:click="team_kill_btn" class="text-center data_rank_item_btn team_rank_item"><img v-bind:src="'/static/击杀.png'"/><br />击杀</li>
					</router-link>
					<router-link v-bind:to="'/team/death'">
						<li id="team_death_btn" v-on:click="team_death_btn" class="text-center data_rank_item_btn team_rank_item"><img v-bind:src="'/static/死亡.png'"/><br />死亡</li>
					</router-link>
					<router-link v-bind:to="'/team/eyes'">
						<li id="team_eyes_btn" v-on:click="team_eyes_btn" class="text-center data_rank_item_btn team_rank_item"><img v-bind:src="'/static/插眼.png'"/><br />插眼</li>
					</router-link>
					<router-link v-bind:to="'/team/killeyes'">
						<li id="team_killeyes_btn" v-on:click="team_killeyes_btn" class="text-center data_rank_item_btn team_rank_item"><img v-bind:src="'/static/排眼.png'"/><br />排眼</li>
					</router-link>
					<router-link v-bind:to="'/team/earn'">
						<li id="team_earn_btn" v-on:click="team_earn_btn" class="text-center data_rank_item_btn team_rank_item"><img v-bind:src="'/static/经济.png'"/><br />经济</li>
					</router-link>
					<router-link v-bind:to="'/team/dragon'">
						<li id="team_dragon_btn" v-on:click="team_dragon_btn" class="text-center data_rank_item_btn team_rank_item visible-lg"><img v-bind:src="'/static/小龙.png'" height="32px"/><br />小龙</li>
					</router-link>
					<router-link v-bind:to="'/team/baron'">
						<li id="team_baron_btn" v-on:click="team_baron_btn" class="text-center data_rank_item_btn team_rank_item visible-lg"><img v-bind:src="'/static/大龙.png'"/><br />大龙</li>
					</router-link>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item">排名</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item">战队</li>
					<li class="col-md-1 col-sm-2 col-xs-2 text-center data_rank_item" id="stage_item">出场次数</li>
					<li class="col-md-1 text-center data_rank_item visible-lg" id="kill_item">胜/负</li>
					<li id="team_win_item" class="col-sm-2 col-xs-2 col-md-1 text-center data_rank_item data_rank_item_click">胜率</li>
					<li id="team_kill_item" class="col-sm-2 col-xs-2 col-md-1 text-center data_rank_item">击杀</li>
					<li id="team_death_item" class="col-md-1 text-center data_rank_item visible-lg">死亡</li>
					<li id="team_eyes_item" class="col-md-1 text-center data_rank_item visible-lg">场均插眼</li>
					<li id="team_killeyes_item" class="col-md-1 text-center data_rank_item visible-lg" >场均排眼</li>
					<li id="team_earn_item" class="col-sm-2 col-xs-2 col-md-1 text-center data_rank_item">经济</li>
					<li id="team_dragon_item" class="col-md-1 text-center data_rank_item visible-lg">场均小龙</li>
					<li id="team_baron_item" class="col-md-1 text-center data_rank_item visible-lg">场均大龙</li>
				</ul>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'team',
		data(){
			return{
				team_win:[],
				team_kill:[],
				team_earn:[]
			}
		},
		created:function(){
			let vm = this;
			$.ajax({
				type:"get",
				url:"http://localhost:3000/team_win",
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.team_win = data.data;
				}
			});
			$.ajax({
				type:"get",
				url:"http://localhost:3000/team_kill",
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success: function(data) {
					vm.team_kill = data.data;
				}
			});
			$.ajax({
				type:"get",
				url:"http://localhost:3000/team_earn",
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback3',
				success: function(data) {
					vm.team_earn = data.data;
				}
			});
		},
		methods:{
			team_win_btn:function  () {
				$('#team_win_btn').addClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').addClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_kill_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').addClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').addClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_death_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').addClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').addClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_eyes_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').addClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').addClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_killeyes_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').addClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').addClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_earn_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').addClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').addClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_dragon_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').addClass('data_rank_item_btn_click');
				$('#team_baron_btn').removeClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').addClass('data_rank_item_click');
				$('#team_baron_item').removeClass('data_rank_item_click');
			},
			team_baron_btn:function  () {
				$('#team_win_btn').removeClass('data_rank_item_btn_click');
				$('#team_kill_btn').removeClass('data_rank_item_btn_click');
				$('#team_death_btn').removeClass('data_rank_item_btn_click');
				$('#team_eyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_killeyes_btn').removeClass('data_rank_item_btn_click');
				$('#team_earn_btn').removeClass('data_rank_item_btn_click');
				$('#team_dragon_btn').removeClass('data_rank_item_btn_click');
				$('#team_baron_btn').addClass('data_rank_item_btn_click');
				$('#team_win_item').removeClass('data_rank_item_click');
				$('#team_kill_item').removeClass('data_rank_item_click');
				$('#team_death_item').removeClass('data_rank_item_click');
				$('#team_eyes_item').removeClass('data_rank_item_click');
				$('#team_killeyes_item').removeClass('data_rank_item_click');
				$('#team_earn_item').removeClass('data_rank_item_click');
				$('#team_dragon_item').removeClass('data_rank_item_click');
				$('#team_baron_item').addClass('data_rank_item_click');
			}
		},
		updated:function(){
			if(this.$route.path == '/team/win') {
				this.team_win_btn();
			}
			if(this.$route.path == '/team/kill') {
				this.team_kill_btn();
			}
			if(this.$route.path == '/team/death') {
				this.team_death_btn();
			}
			if(this.$route.path == '/team/earn') {
				this.team_earn_btn();
			}
			if(this.$route.path == '/team/eyes') {
				this.team_eyes_btn();
			}
			if(this.$route.path == '/team/killeyes') {
				this.team_killeyes_btn();
			}
			if(this.$route.path == '/team/dragon') {
				this.team_dragon_btn();
			}
			if(this.$route.path == '/team/baron') {
				this.team_baron_btn();
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>