<template>
    <div v-if="currentStudent" class="edit-form">
        <h4>Student</h4>
        <form>
            <div class="form-group">
                <label for="firstName">FirstName</label>
                <input type="text" class="form-control" id="firstName" v-model="currentStudent.firstName" />
            </div>
            <div class="form-group">
                <label for="lastName">LastName</label>
                <input type="text" class="form-control" id="lastName" v-model="currentStudent.lastName" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="currentStudent.email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" id="password" v-model="currentStudent.password" />
            </div>
            <div class="form-group">
                <label for="mobileNumber">MobileNumber</label>
                <input type="text" class="form-control" id="mobileNumber" v-model="currentStudent.mobileNumber" />
            </div>

            <div class="form-group">
                <label><strong>Status:</strong></label>
                {{ currentStudent.published ? "Published" : "Pending" }}
            </div>
        </form>

        <!-- <button class="badge badge-primary mr-2" v-if="currentStudent.published" @click="updatePublished(false)">
            UnPublish
        </button>
        <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">
            Publish
        </button>
        <button class="badge badge-danger mr-2" @click="deleteStudent">
            Delete
        </button> -->

        <button type="submit" class="badge badge-success" @click="updateStudent">
            Update
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p>Please click on a Student from Students List...</p>
    </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
    name: "student",
    data() {
        return {
            currentStudent: null,
            message: "",
        };
    },
    computed: {
        
    },
    methods: {
        getStudent(id) {
            console.log("id:-----------", id);
            // if (!id) {
            //     this.currentStudent = null;
            //     return;
            // }
            StudentDataService.get(id)
                .then((response) => {
                    this.currentStudent = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updatePublished(status) {
            var data = {
                id: this.currentStudent._id,
                firstName: this.currentStudent.firstName,
                lastName: this.currentStudent.lastName,
                email: this.currentStudent.email,
                password: this.currentStudent.password,
                mobileNumber: this.currentStudent.mobileNumber,
                published: status,
            };
            StudentDataService.update(this.currentStudent._id, data)
                .then((response) => {
                    console.log(response.data);
                    this.currentStudent.published = status;
                    this.message = "The status was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updateStudent() {
            StudentDataService.update(this.currentStudent._id, this.currentStudent)
                .then((response) => {
                    console.log(response.data);
                    this.message = "The student was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        deleteStudent() {
            StudentDataService.delete(this.currentStudent._id)
                .then((response) => {
                    console.log(response.data);
                    this.$router.push({ name: "students" });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getStudent(this.$route.params.id);
    },
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
