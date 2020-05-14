<template>
  <div class="home">
    <h1> Congratulations!</h1>
    <div class="main">
      <div class='left'>
        <ClassTable title="Class List">ABC</ClassTable>
      </div>
      <div class='right'>
        <StudentTable />
        <StudentForm />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassTable from '@/components/ClassTable.vue'
import StudentTable from '@/components/StudentTable.vue'
import StudentForm from '@/components/StudentForm.vue'

export default {
  name: 'home',
  components: {
    ClassTable,
    StudentTable,
    StudentForm
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
