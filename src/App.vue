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
							<router-link v-bind:to="'/team'">战队</router-link>
						</li>
						<li v-on:click="schedule_active"  id="schedule_btn">
							<router-link :to="'/schedule/details/'+1">赛程</router-link>
						</li>
						<li v-on:click="grade_active" id="grade_btn">
							<router-link v-bind:to="'/grade/east'">战绩</router-link>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								数据 <b class="caret"></b>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="#">战队数据</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">选手数据</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">英雄榜</a>
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
			},
			schedule_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').addClass('active');
				$('#grade_btn').removeClass('active');
			},
			grade_active:function  () {
				$('#team_btn').removeClass('active');
				$('#schedule_btn').removeClass('active');
				$('#grade_btn').addClass('active');
			}
		}
	}
</script>

<style>
	* {
		font-family: "微软雅黑";
	}
	
</style>