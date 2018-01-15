import Store from '@/store/store'
import MenuApi from '@/api/Menu'
import IsLoading from '@/components/IsLoading'

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
        initTabs(state, tabs) {
            state.tabs = tabs;
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
                    let component =import(`@/${menu.componentPath ? menu.componentPath : 'components/NotFound.vue'}`)
                    
                    var newTab = {
                        label: menu.name,
                        index: menu.index,
                        closable: true,
                        component:menu.componentPath
                    }

                    context.commit('addTab', newTab)
                }
            }
            context.commit('switchTab', index)
        },
        closeTab(context, index) {
            let indexNum = context.state.tabs.findIndex(f => f.index == index);
            let activeItem = context.state.activeItem;
            let newTabs = context.state.tabs.filter(f => f.index != index);
            context.commit('initTabs', newTabs)
            if (activeItem == index) {
                context.commit('switchTab', indexNum == 0 ? "adminIndex" : newTabs[indexNum - 1].index)
            }
        }
    }
})