<template>
    <div class="row">
        <div class="col-md-5">
            <h4>Students List</h4>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(course, index) in students"
                    :key="index"
                    @click="setActiveCourse(course, index)"
                >
                    {{ course.firstName }} {{ course.lastName }}
                </li>
            </ul>
        </div>
        <div class="col-md-7 table-max-height">
            <div v-if="currentCourse">
                <h4>Courses</h4>
                <table class="table-bordered table table-bordered">
                    <thead>
                        <tr>
                            <th>StudentId</th>
                            <th>Name</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course in courses" v-bind:key="course">
                            <td>{{ course.studentId }}</td>
                            <td>{{ course.name }}</td>
                            <td>{{ course.lastName }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <br />
                <p>Please click a Student...</p>
            </div>
        </div>
    </div>
</template>

<script>
import CourseDataService from "../services/StudentDataService";

export default {
    name: "courses-list",
    data() {
        return {
            students: [],
            courses: [],
            currentCourse: null,
            currentIndex: -1,
            title: "",
        };
    },
    methods: {
        retrieveStudents() {
            CourseDataService.getAll()
                .then((response) => {
                    this.students = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        retrieveCourses(id) {
            CourseDataService.getCourse(id)
                .then((response) => {
                    this.courses = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveStudents();
            this.currentCourse = null;
            this.currentIndex = -1;
        },

        setActiveCourse(course, index) {
            this.currentCourse = course;
            this.currentIndex = course ? index : -1;
            this.retrieveCourses(course._id);
        },

        removeAllCourses() {
            CourseDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        searchTitle() {
            CourseDataService.findByTitle(this.title)
                .then((response) => {
                    this.students = response.data;
                    this.setActiveCourse(null);
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
