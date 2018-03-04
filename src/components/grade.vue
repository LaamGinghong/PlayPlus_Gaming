<template>
	<div id="grade">
		<div class="container">
			<div class="row">
				<div class="col-md-12 box">
					<p class="text-center h1" id="grade_title">LPL</p>
				</div>
				<router-link v-bind:to="'/grade/east'" v-on:click.native="grade_details_title_east">
					<div class="col-md-6 col-sm-6 col-xs-6 box">
						<p class="text-center h4 grade_details_title_onclick grade_details_title" id="east">东部战队积分榜</p>
					</div>
				</router-link>
				<router-link v-bind:to="'/grade/west'" v-on:click.native="grade_details_title_west">
					<div class="col-md-6 col-sm-6 col-xs-6 box">
						<p class="text-center h4 grade_details_title" id="west">西部战队积分榜</p>
					</div>
				</router-link>
				<ul>
					<li class="col-md-2 col-xs-2 col-sm-2 text-center grade_details_smalltitle">排名</li>
					<li class="col-md-4 col-xs-4 col-sm-4 text-center grade_details_smalltitle">战队</li>
					<li class="col-md-4 col-xs-4 col-sm-4 text-center grade_details_smalltitle">胜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;负</li>
					<li class="col-md-2 col-xs-2 col-sm-2 text-center grade_details_smalltitle">积分</li>
				</ul>
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'grade',
		data() {
			return {
				east: [],
				west: []
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://localhost:3000/grade_east",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback1',
				success: function(data) {
					vm.east = data.data;
				}
			});
			$.ajax({
				type: "get",
				url: "http://localhost:3000/grade_west",
				async: true,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: 'jsonpCallback2',
				success: function(data) {
					vm.west = data.data;
				}
			});
		},
		methods:{
			grade_details_title_east:function  () {
				$('#east').addClass('grade_details_title_onclick');
				$('#west').removeClass('grade_details_title_onclick');
			},
			grade_details_title_west:function  () {
				$('#west').addClass('grade_details_title_onclick');
				$('#east').removeClass('grade_details_title_onclick');
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>