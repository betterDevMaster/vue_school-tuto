<template>
    <div class="row">
        <div class="col-md-5">
            <h4>Students List</h4>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(student, index) in students"
                    :key="index"
                    @click="setActiveStudent(student, index)"
                >
                    {{ student.firstName }} {{ student.lastName }}
                </li>
            </ul>
        </div>
        <div class="col-md-7 table-max-height">
            <div v-if="currentStudent">
                <h4>Student</h4>
                <div>
                    <label><strong>FirstName:</strong></label> {{ currentStudent.firstName }}
                </div>
                <div>
                    <label><strong>LastName:</strong></label> {{ currentStudent.lastName }}
                </div>
                <div>
                    <label><strong>Email:</strong></label> {{ currentStudent.email }}
                </div>
                <div>
                    <label><strong>Password:</strong></label> {{ currentStudent.password }}
                </div>
                <div>
                    <label><strong>MobileNumber:</strong></label> {{ currentStudent.mobileNumber }}
                </div>
                <div>
                    <label><strong>Status:</strong></label> {{ currentStudent.published ? "Published" : "Pending" }}
                </div>

                <router-link :to="'/students/' + currentStudent._id" class="badge badge-warning">Edit</router-link>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Student...</p>
            </div>
        </div>
    </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
    name: "students-list",
    data() {
        return {
            students: [],
            currentStudent: null,
            currentIndex: -1,
            title: "",
        };
    },
    methods: {
        retrieveStudents() {
            StudentDataService.getAll()
                .then((response) => {
                    this.students = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveStudents();
            this.currentStudent = null;
            this.currentIndex = -1;
        },

        setActiveStudent(student, index) {
            this.currentStudent = student;
            this.currentIndex = student ? index : -1;
        },

        removeAllStudents() {
            StudentDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        searchTitle() {
            StudentDataService.findByTitle(this.title)
                .then((response) => {
                    this.students = response.data;
                    this.setActiveStudent(null);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.retrieveStudents();
    },
};
</script>

<style lang="scss">
.table-max-height {
    max-height: 85vh;
    overflow: auto;
}
</style>
