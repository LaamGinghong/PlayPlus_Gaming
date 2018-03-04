<template>
	<div id="legends">
		<div class="container" id="legends_most">
			<ul class="row">
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="'/static/legends/'+pick[0].l_title+'.jpg'" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							英雄名：{{pick[0].l_title}}<br />
							<span class="most_percent">PICK率：{{pick[0].l_pick_percent}}%</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">PICK最多</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="'/static/legends/'+ban[0].l_title+'.jpg'" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							英雄名：{{ban[0].l_title}}<br />
							<span class="most_percent">BAN率：{{ban[0].l_ban_percent}}%</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">BAN最多</li>
					</ul>
				</li>
				<li class="col-md-4 col-sm-4 col-xs-4">
					<ul>
						<li class="col-md-6 col-sm-12 col-xs-12 image_most_mobile"><img v-bind:src="'/static/legends/'+win[0].l_title+'.jpg'" width="156px" class="image_most" /><span class="legends_border visible-lg"></span></li>
						<li class="col-md-6 most_summary visible-lg">
							英雄名：{{win[0].l_title}}<br />
							<span class="most_percent">WIN率：{{win[0].l_win_percent}}%</span>
						</li>
						<li class="col-md-12 col-sm-12 col-xs-12 most">WIN最多</li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="data_rank">
			<div class="container">
				<ul class="row">
					<li class="col-md-12 text-center data_rank_title">英雄排行榜</li>
					<router-link v-bind:to="'/legends/pick'">
						<li class="col-md-4 col-sm-4 col-xs-4 text-center data_rank_item_btn data_rank_item_btn_click" v-on:click="pick_btn" id="pick_btn"><img v-bind:src="'/static/PICK.png'" /><br />PICK</li>
					</router-link>
					<router-link v-bind:to="'/legends/ban'">
						<li class="col-md-4 col-sm-4 col-xs-4 text-center data_rank_item_btn" v-on:click="ban_btn" id="ban_btn"><img v-bind:src="'/static/BAN.png'" /><br />BAN</li>
					</router-link>
					<router-link v-bind:to="'/legends/win'">
						<li class="col-md-4 col-sm-4 col-xs-4 text-center data_rank_item_btn" v-on:click="win_btn" id="win_btn"><img v-bind:src="'/static/胜率.png'" /><br />胜率</li>
					</router-link>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item">排名</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item">英雄名</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item">出场次数</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item data_rank_item_click" id="pick_item">Pick比率</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item" id="ban_item">Ban比率</li>
					<li class="col-md-2 col-sm-2 col-xs-2 text-center data_rank_item" id="win_item">胜率</li>
				</ul>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'legends',
		data() {
			return {
				pick: [],
				ban: [],
				win: []
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/pick",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.pick = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/ban",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success: function(data) {
					vm.ban = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/win",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback3',
				success: function(data) {
					vm.win = data.data;
				}
			});
		},
		updated: function() {
			if(this.$route.path == '/legends/pick') {
				this.pick_btn();
			}
			if(this.$route.path == '/legends/ban') {
				this.ban_btn();
			}
			if(this.$route.path == '/legends/win') {
				this.win_btn();
			}
		},
		methods: {
			pick_btn: function() {
				$('#pick_btn').addClass('data_rank_item_btn_click');
				$('#ban_btn').removeClass('data_rank_item_btn_click');
				$('#win_btn').removeClass('data_rank_item_btn_click');
				$('#pick_item').addClass('data_rank_item_click');
				$('#ban_item').removeClass('data_rank_item_click');
				$('#win_item').removeClass('data_rank_item_click');
			},
			ban_btn: function() {
				$('#pick_btn').removeClass('data_rank_item_btn_click');
				$('#ban_btn').addClass('data_rank_item_btn_click');
				$('#win_btn').removeClass('data_rank_item_btn_click');
				$('#pick_item').removeClass('data_rank_item_click');
				$('#ban_item').addClass('data_rank_item_click');
				$('#win_item').removeClass('data_rank_item_click');
			},
			win_btn: function() {
				$('#pick_btn').removeClass('data_rank_item_btn_click');
				$('#ban_btn').removeClass('data_rank_item_btn_click');
				$('#win_btn').addClass('data_rank_item_btn_click');
				$('#pick_item').removeClass('data_rank_item_click');
				$('#ban_item').removeClass('data_rank_item_click');
				$('#win_item').addClass('data_rank_item_click');
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>