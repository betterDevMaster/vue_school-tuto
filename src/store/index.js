import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: []
  },
  mutations: {
    list (state, students) {
      state.students = students
    },
    delete (state, id) {
      console.log(id)
      state.students = state.students.filter(record => (record._id !== id))
    },
    add (state, student) {
      console.log(student)
      state.students.push(student)
    }
  },
  getters: {
    students: state => state.students
  },
  actions: {
  },
  modules: {
  }
})
