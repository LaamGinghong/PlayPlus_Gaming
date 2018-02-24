<template>
	<div id="schedule" class="container">
		<ul id="title" class="row">
			<li class="col-md-1 col-sm-1">状态</li>
			<li class="col-md-1 col-sm-1">赛事名称</li>
			<li class="col-md-2 col-sm-2">赛事阶段</li>
			<li class="col-md-2 col-sm-2">比赛时间</li>
			<li class="col-md-6 col-sm-6">对阵情况</li>
		</ul>
		<router-view/>
		<div class="page-bar container">
			<ul class="row">
				<li v-if="cur>1"  class="col-md-1 col-md-offset-3">
					<router-link v-on:click.native="cur--,pageClick()" v-bind:to="'/schedule/details/'+(cur-1)" ><</router-link>
				</li>
				<li v-if="cur==1" class="col-md-1 col-md-offset-3">
					<a class="banclick"><</a>
				</li>
				<li v-for="index in indexs" v-bind:class="{ 'active': cur == index}" class="col-md-1 ">
					<router-link v-on:click.native="btnClick(index)" v-bind:to="'/schedule/details/'+index">{{index}}</router-link>
				</li>
				<li v-if="cur!=all" class="col-md-1 ">
					<router-link v-on:click.native="cur++,pageClick()" v-bind:to="'/schedule/details/'+(cur+1)">></router-link>
				</li>
				<li v-if="cur == all" class="col-md-1">
					<a class="banclick">></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'schedule',
		data() {
			return {
				all: 7, //总页数
				cur: this.$route.params.num //当前页数
			}
		},
		methods: {
			color: function(num) {
				if(num == 2) return '#0eebc1'
			},
			background: function(result) {
				if(result == '未开始') return '#cfa14a';
			},
			btnClick: function(data) {
				if(data != this.cur) {
					this.cur = data;
				}
			},
			pageClick: function() {
//				console.log('现在在' + this.cur + '页');
			}
		},
		computed: {
			indexs: function() {
				var left = 1;
				var right = this.all;
				var ar = [];
				if(this.all >= 5) {
					if(this.cur > 3 && this.cur < this.all - 2) {
						left = this.cur - 2
						right = this.cur + 2
					} else {
						if(this.cur <= 3) {
							left = 1
							right = 5
						} else {
							right = this.all
							left = this.all - 4
						}
					}
				}
				while(left <= right) {
					ar.push(left)
					left++
				}
				return ar
			}
		}
	}
</script>

<style>
	@import url("../assets/css/schedule.css");
</style>