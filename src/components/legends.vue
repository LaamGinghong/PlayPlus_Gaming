<template>
	<div id="legends">
		<div class="container" id="legends_most">
			<ul class="row">
				<li class="col-md-4">
					<ul>
						<li class="col-md-6"><img v-bind:src="'/static/legends/'+pick[0].l_title+'.jpg'" width="156px" class="legends_image_most" /><span class="legends_border"></span></li>
						<li class="col-md-6 legends_most_summary">
							英雄名：{{pick[0].l_title}}<br />
							<span class="legends_most_percent">PICK率：{{pick[0].l_pick_percent}}%</span>
						</li>
						<li class="col-md-12 legends_most">PICK最多</li>
					</ul>
				</li>
				<li class="col-md-4">
					<ul>
						<li class="col-md-6"><img v-bind:src="'/static/legends/'+ban[0].l_title+'.jpg'" width="156px" class="legends_image_most"/><span class="legends_border"></span></li>
						<li class="col-md-6 legends_most_summary">
							英雄名：{{ban[0].l_title}}<br />
							<span class="legends_most_percent">BAN率：{{ban[0].l_ban_percent}}%</span>
						</li>
						<li class="col-md-12 legends_most">BAN最多</li>
					</ul>
				</li>
				<li class="col-md-4">
					<ul>
						<li class="col-md-6"><img v-bind:src="'/static/legends/'+win[0].l_title+'.jpg'" width="156px" class="legends_image_most"/><span class="legends_border"></span></li>
						<li class="col-md-6 legends_most_summary">
							英雄名：{{win[0].l_title}}<br />
							<span class="legends_most_percent">WIN率：{{win[0].l_win_percent}}%</span>
						</li>
						<li class="col-md-12 legends_most">WIN最多</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'legends',
		data() {
			return {
				pick: [],
				ban:[],
				win:[]
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/pick_down",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.pick = data.data;
				}
			});
			$.ajax({
				type:"get",
				url: "http://localhost:3000/ban_down",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success: function(data) {
					vm.ban = data.data;
				}
			});
			$.ajax({
				type:"get",
				url: "http://localhost:3000/win_down",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback3',
				success: function(data) {
					vm.win = data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>