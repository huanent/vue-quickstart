import Vuex from 'vuex'
import Vue from 'vue'
import Menu from '../api/Menu'
import MenuApi from '../api/Menu'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menu: [],
        tabs: [
        ],
        activeItem: ''
    },
    getters: {
        subMenu(state) {
            var subs = state.menu.filter(f => f.sub).map(f => f.sub)
            return Array.from(new Set(subs))
        },
        groupMenu(state) {
            return (sub) => {
                var groups = state.menu
                    .filter(f => f.sub == sub && f.group)
                    .map(f => f.group);
                return Array.from(new Set(groups))
            }
        },
        itemMenu(state) {
            return (sub, group) => {
                var items = state.menu
                    .filter(f => f.sub == sub && f.group == group && f.name)
                    .map(f => {
                        return {
                            name: f.name,
                            index: f.index
                        }
                    });
                return Array.from(new Set(items))
            }
        }
    },
    mutations: {
        addMenu(state, menu) {
            state.menu = menu;
        },
        onMenuClick(state, index) {
            if (index != "adminIndex") {
                var tab = state.tabs.find(f => f.index == index)
                if (!tab) {
                    let menu = state.menu.find(f => f.index == index)
                    var name = '../components/AdminHome/UserManager.vue';
                    var component = () => import(name+'');

                    state.tabs.push({
                        label: menu.name,
                        index: menu, index,
                        closable: true,
                        component: component
                    })
                }
            }
            state.activeItem = index;
        }
    },
    actions: {
        getMenu(context) {
            MenuApi.getMenu().then(rsp => {
                context.commit('addMenu', rsp.data);
            });
        }
    }
})