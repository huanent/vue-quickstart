import Store from './store'
import MenuApi from '../api/Menu'

Store.registerModule('menu', {
    namespaced: true,
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
        initMenu(state, menu) {
            state.menu = menu;
        },
        addTab(state, tab) {
            state.tabs.push(tab)
        },
        switchTab(state, nowIndex) {
            state.activeItem = nowIndex
        }
    },
    actions: {
        getMenu(context) {
            MenuApi.getMenu().then(rsp => {
                context.commit('initMenu', rsp.data);
            });
        },
        clickMenuItem(context, index) {
            if (index != "adminIndex") {
                var tab = context.state.tabs.find(f => f.index == index)
                if (!tab) {
                    let menu = context.state.menu.find(f => f.index == index)
                    let component = () => import(`@/${menu.componentPath ? menu.componentPath : 'components/AdminHome/NotFound.vue'}`)
                    var newTab = {
                        label: menu.name,
                        index: menu, index,
                        closable: true,
                        component: component
                    }
                    context.commit('addTab', newTab)
                }
            }
            context.commit('switchTab', index)
        }
    }
})