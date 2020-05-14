<template>
  <div>
    <slot />
    <md-table v-model="people" md-card @md-selected="onSelect">
      <md-table-toolbar>
        <h1 class="md-title">{{title}}</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getRowClassName(item)" md-selectable="single">
        <!-- <md-table-cell md-label="ID" md-sort-by="_id" md-numeric>{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="Name" md-sort-by="name"><router-link :to="item.name">{{ item.name }}</router-link></md-table-cell>
        <!-- <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell> -->
      </md-table-row>
    </md-table>

    <!-- <p>Selected:</p>
    {{ selected }} -->
  </div>
</template>

<script>
export default {
  name: 'ClassTable',
  props: ['title'],
  data: () => ({
    selected: {},
    people: [
      {
        _id: 1,
        name: 'Class 1'
      },
      {
        id: 2,
        name: 'Class 2'
      }
    ]
  }),
  methods: {
    getRowClassName: ({ id }) => ({
      'md-primary': id === 2,
      'md-accent': id === 3
    }),
    onSelect (item) {
      this.selected = item
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
</style>
