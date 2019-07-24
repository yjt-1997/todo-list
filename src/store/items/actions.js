import axios from 'axios'
import mutationsType from './mutationsType'

const baseUrl = 'http://5d36b54b86300e0014b6452c.mockapi.io/api/v1/lists';
export const actions = {
    getList({ commit }) {
        axios.get(baseUrl).then(response => commit(mutationsType.RE_LOAD_ITEMS, response.data));
    },
    addItem(context, data) {
        axios.post(baseUrl, data).then(() => this.dispatch('getList'));
    },
    updateItem(context, data) {
        axios.put(`${baseUrl}/${data.id}`, data).then(() => this.dispatch('getList'));
    },
    deleteItem(context, data) {
        axios.delete(`${baseUrl}/${data.id}`, data).then(() => this.dispatch('getList'));
    },
}