<template>
	<div id="box" style="height: 600px;width: 400px;">
		<button v-on:click="table">按钮</button>
	</div>
</template>

<script>
	export default {
		name: 'box',
		data() {
			return {
				msg: '你好'
			}
		},
		methods: {
			table: function() {
				var app = echarts.init(document.getElementById('box'));
				app.setOption({
					title: {
						text: '世界人口总量',
						subtext: '数据来自网络'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['对敌方英雄输出伤害', '承受伤害']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
					},
					series: [{
							name: '对敌方英雄输出伤害',
							type: 'bar',
							data: [18203, 23489, 29034, 104970, 131744, 630230]
						},
						{
							name: '承受伤害',
							type: 'bar',
							data: [19325, 23438, 31000, 121594, 134141, 681807]
						}
					]
				});
			}
		}
	}
</script>

<style>

</style>