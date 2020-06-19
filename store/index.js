export const state = () => ({
    searchKeyword: [],
    keyword: []
})

export const mutations = {
    SET_SEARCHED_KEYWORD(state, payload) {
        state.searchKeyword = payload
    },
    SET_KEYWORD(state, payload) {
        state.keyword = payload
    }
}

export const actions = {

    SetSearchedKeyword({ commit }, searchKeyword) {
        commit('SET_SEARCHED_KEYWORD', searchKeyword)
    },
    SetKeyword({ commit }, Keyword) {
        commit('SET_KEYWORD', Keyword)
    },


}