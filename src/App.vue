<template>
	<div id="app">
		<nav class="navbar navbar-inverse" role="navigation" id='nav'>
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
					<router-link class="navbar-brand" v-bind:to="'/'" id="logo">
						<img v-bind:src="imgURL" />
					</router-link>
				</div>
				<div class="collapse navbar-collapse" id="example-navbar-collapse">
					<ul class="nav navbar-nav" id="bar">
						<li class="active" v-on:click="team_active" id="team_btn">
							<router-link v-bind:to="'/team_list'">战队</router-link>
						</li>
						<li v-on:click="schedule_active"  id="schedule_btn">
							<router-link :to="'/schedule/details/'+1">赛程</router-link>
						</li>
						<li v-on:click="grade_active" id="grade_btn">
							<router-link v-bind:to="'/grade/east'">战绩</router-link>
						</li>
						<li class="dropdown"  id="data_btn">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								数据 <b class="caret"></b>
							</a>
							<ul class="dropdown-menu">
								<li v-on:click="data_active">
									<router-link v-bind:to="'/team/win'">战队数据</router-link>
								</li>
								<li class="divider"></li>
								<li v-on:click="data_active">
									<router-link v-bind:to="'/player/kill'">选手数据</router-link>
								</li>
							</ul>
						</li>
						<li v-on:click="legend_active" id="legends_btn">
							<router-link v-bind:to="'/legends/pick'">英雄榜</router-link>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a>
						</li>
						<li>
							<a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				imgURL: '/static/logo.png'
			}
		},
		methods:{
			team_active:function  () {
				$('#team_btn').addClass('active');
				$('#schedule_btn').removeClass('active');
				$('#grade_btn').removeClass('active');
				$('#data_btn').removeClass('active');
				$('#legends_btn').removeClass('active');
			},
			schedule_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').addClass('active');
				$('#grade_btn').removeClass('active');
				$('#data_btn').removeClass('active');
				$('#legends_btn').removeClass('active');
			},
			grade_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').removeClass('active');
				$('#grade_btn').addClass('active');
				$('#data_btn').removeClass('active');
				$('#legends_btn').removeClass('active');
			},
			data_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').removeClass('active');
				$('#grade_btn').removeClass('active');
				$('#data_btn').addClass('active');
				$('#legends_btn').removeClass('active');
			},
			legend_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').removeClass('active');
				$('#grade_btn').removeClass('active');
				$('#data_btn').removeClass('active');
				$('#legends_btn').addClass('active');
			}
		},
		mounted:function(){
			if(this.$route.path == '/team_list') {
				this.team_active();
			}
			if(this.$route.path == '/schedule/details/1') {
				this.schedule_active();
			}
			if(this.$route.path == '/grade/east') {
				this.grade_active();
			}
			if(this.$route.path == '/team/win') {
				this.data_active();
			}
			if(this.$route.path == '/player/kill') {
				this.data_active();
			}
			if(this.$route.path == '/legends/pick') {
				this.legend_active();
			}
		}
	}
</script>

<style>
@import url("assets/css/schedule.css");	
</style>