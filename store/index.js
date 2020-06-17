export const state = () => ({
    searchKeyword: ''
})

export const mutations = {
    SET_SEARCHED_KEYWORD(state, payload) {
        state.searchKeyword = payload
    }
}

export const actions = {

    SetSearchedKeyword({ commit }, searchKeyword) {
        commit('SET_SEARCHED_KEYWORD', searchKeyword)
    }
}