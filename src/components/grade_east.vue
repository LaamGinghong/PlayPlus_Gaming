<template>
	<div id="grade_east">
		<ul class="container">
			<li v-for="values in east">
				<ul class="row">
					<li class="col-md-2 col-sm-2 col-xs-2 grade_details grade_rank">{{values.g_rank}}</li>
					<router-link v-bind:to="'/team_list/'+values.l_id"><li class="col-md-2 grade_details grade_teamlogo visible-lg"><img v-bind:src="values.g_teamlogo" width="52px" height="52px"/></li></router-link>
					<router-link v-bind:to="'/team_list/'+values.l_id"><li class="col-md-2 col-sm-4 col-xs-4 grade_details grade_team">{{values.g_team}}</li></router-link>
					<li class="col-md-2 col-sm-2 col-xs-2 grade_details grade_win">{{values.g_win}}</li>
					<li class="col-md-2 col-sm-2 col-xs-2 grade_details grade_lose">{{values.g_lose}}</li>
					<li class="col-md-2 col-sm-2 col-xs-2 grade_details grade_mark">{{values.g_mark}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'grade_east',
		data() {
			return {
				east:[]
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type:"get",
				url:"http://localhost:3000/grade_east",
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success:function  (data) {
					vm.east=data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>