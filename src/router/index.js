import Vue from 'vue'
import Router from 'vue-router'
import team_list from '@/components/team_list'
import team_details from '@/components/team_details'
import schedule from '@/components/schedule'
import details from '@/components/details'
import grade from '@/components/grade'
import grade_east from '@/components/grade_east'
import grade_west from '@/components/grade_west'
import player_details from '@/components/player_details'
import game from '@/components/game'
import game_details from '@/components/game_details'
import legends from '@/components/legends'
import legends_pick from '@/components/legends_pick'
import legends_ban from '@/components/legends_ban'
import legends_win from '@/components/legends_win'
import player from '@/components/player'
import player_kill from '@/components/player_kill'
import player_death from '@/components/player_death'
import player_assist from '@/components/player_assist'
import player_kda from '@/components/player_kda'
import player_mvp from '@/components/player_mvp'
import player_stage from '@/components/player_stage'
import player_earn from '@/components/player_earn'
import player_CS from '@/components/player_CS'
import player_eyes from '@/components/player_eyes'
import player_killeyes from '@/components/player_killeyes'
import team from '@/components/team'
import team_win from '@/components/team_win'
import team_kill from '@/components/team_kill'
import team_death from '@/components/team_death'
import team_eyes from '@/components/team_eyes'
import team_killeyes from '@/components/team_killeyes'
import team_earn from '@/components/team_earn'
import team_dragon from '@/components/team_dragon'
import team_baron from '@/components/team_baron'


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
		path: '/team_list',
		name: 'team_list',
		component: team_list
	}, {
		path: '/',
		name: 'team_list',
		component: team_list
	}, {
		path: '/team_list/:id',
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
	},{
		path:'/legends',
		name:'legends',
		component:legends,
		children:[{
			path:'/legends/pick',
			name:'legends_pick',
			component:legends_pick
		},{
			path:'/legends/ban',
			name:'legends_ban',
			component:legends_ban
		},{
			path:'/legends/win',
			name:'legends_win',
			component:legends_win
		}]
	},{
		path:'/player',
		name:'player',
		component:player,
		children:[{
			path:'/player/kill',
			name:'player_kill',
			component:player_kill
		},{
			path:'/player/death',
			name:'player_death',
			component:player_death
		},{
			path:'/player/assist',
			name:'player_assist',
			component:player_assist
		},{
			path:'/player/kda',
			name:'player_kda',
			component:player_kda
		},{
			path:'/player/mvp',
			name:'player_mvp',
			component:player_mvp
		},{
			path:'/player/stage',
			name:'player_stage',
			component:player_stage
		},{
			path:'/player/earn',
			name:'player_earn',
			component:player_earn
		},{
			path:'/player/CS',
			name:'player_earn',
			component:player_CS
		},{
			path:'/player/eyes',
			name:'player_eyes',
			component:player_eyes
		},{
			path:'/player/killeyes',
			name:'player_killeyes',
			component:player_killeyes
		}]
	},{
		path:'/team',
		name:'team',
		component:team,
		children:[{
			path:'/team/win',
			name:'team_win',
			component:team_win
		},{
			path:'/team/kill',
			name:'team_kill',
			component:team_kill
		},{
			path:'/team/death',
			name:'team_death',
			component:team_death
		},{
			path:'/team/eyes',
			name:'team_eyes',
			component:team_eyes
		},{
			path:'/team/killeyes',
			name:'team_killeyes',
			component:team_killeyes
		},{
			path:'/team/earn',
			name:'team_earn',
			component:team_earn
		},{
			path:'/team/dragon',
			name:'team_dragon',
			component:team_dragon
		},{
			path:'/team/baron',
			name:'team_baron',
			component:team_baron
		}]
	}]
})