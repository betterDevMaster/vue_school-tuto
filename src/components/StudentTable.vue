<template>
  <transition name="fade">
    <div>
      <h1 class="md-title">Student List({{className}})</h1>
      <md-table v-model="$store.getters.students" md-card @md-selected="onSelect">
        <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
          <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</!-->
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Age" md-sort-by="age">{{ item.age }}</md-table-cell>
          <md-table-cell md-label="Address" md-sort-by="address">{{ item.address }}</md-table-cell>
          <md-table-cell md-label="Action" md-sort-by="address">
            <md-button class="md-raised md-primary" v-on:click="editStudent(item._id)">Edit</md-button>
            <md-button class="md-raised md-accent" v-on:click="deleteStudent(item._id)">delete</md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    <!-- <p>Selected:</p> -->
    <!-- {{ selected }} -->
  </div>
  </transition>
</template>

<script>
import axios from 'axios'
import CONSTANTS from '../constants'
// import { store } from '../store'
export default {
  name: 'StuidentTable',
  show: false,
  data: function () {
    return {
    // selected: {},
      className: 'Please select the class.'
      // people: []
    }
  },

  // computed: {
  //   className: function () {
  //     console.log(this.$route.params.class)
  //     return this.$route.params.class
  //   }
  // },
  // beforeUpdate () {
  //   console.log(this.getClassName())
  // },

  watch: {
    '$route': 'fetchData'
  },
  methods: {
    editStudent (id) {

    },
    deleteStudent (id) {
      if (window.confirm('Are you delete the student')) {
        axios.delete(`${CONSTANTS.API_URL}/student/${id}`)
          .then((res) => {
            this.$store.commit('delete', res.data[0])
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    onSelect (item) {
      this.selected = item
    },
    fetchData () {
      this.show = false
      this.className = this.$route.params.class
      axios.get('http://localhost:8000/student/' + this.className)
        .then((resp) => {
          this.$store.commit('list', resp.data)
          // this.people = this.coin = resp.data
          this.show = true
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
