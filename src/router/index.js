import Vue from 'vue'
import Router from 'vue-router'
import team from '@/components/team_list'
import team_details from '@/components/team_details'
import schedule from '@/components/schedule'
import details from '@/components/details'
import grade from '@/components/grade'
import grade_east from '@/components/grade_east'
import grade_west from '@/components/grade_west'
import player_details from '@/components/player_details'
import game from '@/components/game'
import game_details from '@/components/game_details'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/schedule',
		name: 'schedule',
		component: schedule,
		children: [{
			path: '/schedule/details/:num',
			name: 'detail',
			component: details
		}]
	}, {
		path: '/team',
		name: 'team',
		component: team
	}, {
		path: '/',
		name: 'team',
		component: team
	}, {
		path: '/team/:id',
		name: 'team_details',
		component: team_details
	}, {
		path: '/grade',
		name: 'grade',
		component: grade,
		children: [{
			path: '/grade/east',
			name: 'grade_east',
			component: grade_east
		}, {
			path: '/grade/west',
			name: 'grade_west',
			component: grade_west
		}]
	}, {
		path: '/player_details/:id',
		name: 'player_details',
		component: player_details
	}, {
		path: '/game/:id',
		name: 'game',
		component: game,
		children:[{
			path:'/game/:id/:num',
			name:'game_details',
			component:game_details
		}]
	}]
})