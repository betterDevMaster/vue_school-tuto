<template>
    <StudentTable />
</template>

<script>
// @ is an alias to /src
import StudentTable from '@/components/StudentTable.vue'

export default {
  name: 'home',
  components: {
    StudentTable
  }
}
</script>
<style scoped>
div.main {
  display: flex;
  width: 100%
}
div.left {
  width:30%;
  background-color: '#C7C6A0';
}
div.right {
  margin: 0 auto;
}
</style>
