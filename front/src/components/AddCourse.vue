<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="studentId">StudentId</label>
                <select class="form-control" v-model="course.studentId">
                    <option v-for="name in names" v-bind:key="name.id" :value="name.id" >{{ name.val }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" required v-model="course.name" name="name" />
            </div>
            <div class="form-group">
                <label for="lastName">LastName</label>
                <input class="form-control" id="lastName" required v-model="course.lastName" name="lastName" />
            </div>

            <button @click="saveCourse" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newCourse">Add</button>
        </div>
    </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
    name: "add-course",
    data() {
        return {
            course: {
                id: null,
                studentId: null,
                name: "",
                lastName: "",
                published: false,
            },
            submitted: false,
            // name: null,
            names: [],
        };
    },
    methods: {
        retrieveStudents() {
            StudentDataService.getAll()
                .then((response) => {
                    // this.students = response.data;
                    console.log("retrieveStudents : ----------", response.data);
                    for (const resp of response.data) {
                        this.names.push({id: resp._id, val: resp.firstName + ' ' + resp.lastName })
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        saveCourse() {
            var data = {
                studentId: this.course.studentId,
                name: this.course.name,
                lastName: this.course.lastName,
            };
            console.log('data: ------- ', data)
            StudentDataService.createCourse(this.course.studentId, data)
                .then((response) => {
                    this.course.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        newCourse() {
            this.submitted = false;
            this.course = {};
        },
    },
    mounted() {
        this.retrieveStudents();
    },
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
