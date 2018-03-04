<template>
	<div id="team_list">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<p class="text-center h1" id="teamlist_title">LPL</p>
				</div>
				<ul id="teamlist">
					<li v-for="value in message">
						<ul>
							<router-link v-bind:to="'/team_list/'+value.l_id">
								<li class="teamlist_logo"><img v-bind:src="value.l_logo" width="130px" height="130px" /></li>
							</router-link>
							<router-link v-bind:to="'/team_list/'+value.l_id">
								<li class="teamlist_name">{{value.l_shortname}}</li>
							</router-link>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'team_list',
		data() {
			return {
				message: []
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/team",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback',
				success: function(data) {
					vm.message = data.data;
				}
			});

		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>