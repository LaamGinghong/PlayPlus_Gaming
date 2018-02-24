<template>
	<div id="grade_west">
		<ul class="container">
			<li v-for="values in west">
				<ul class="row">
					<li class="col-md-2 grade_details grade_rank">{{values.g_rank}}</li>
					<router-link v-bind:to="'/team/'+values.l_id"><li class="col-md-2 grade_details grade_teamlogo"><img v-bind:src="values.g_teamlogo" width="52px" height="52px"/></li></router-link>
					<router-link v-bind:to="'/team/'+values.l_id"><li class="col-md-2 grade_details grade_team">{{values.g_team}}</li></router-link>
					<li class="col-md-2 grade_details grade_win">{{values.g_win}}</li>
					<li class="col-md-2 grade_details grade_lose">{{values.g_lose}}</li>
					<li class="col-md-2 grade_details grade_mark">{{values.g_mark}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'grade_west',
		data() {
			return {
				west:[]
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type:"get",
				url:"http://localhost:3000/grade_west",
				async:true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success:function  (data) {
					vm.west=data.data;
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>