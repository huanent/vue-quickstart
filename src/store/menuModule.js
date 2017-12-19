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
        addMenu(state, menu) {
            state.menu = menu;
        },
        onMenuClick(state, index) {
            if (index != "adminIndex") {
                var tab = state.tabs.find(f => f.index == index)
                if (!tab) {
                    let menu = state.menu.find(f => f.index == index)
                    let component = () => import(`@/${menu.componentPath ? menu.componentPath : 'components/AdminHome/NotFound.vue'}`)
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