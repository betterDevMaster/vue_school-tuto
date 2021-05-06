<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="firstName">FirstName</label>
                <input type="text" class="form-control" id="firstName" required v-model="student.firstName" name="firstName" />
            </div>
            <div class="form-group">
                <label for="lastName">LastName</label>
                <input class="form-control" id="lastName" required v-model="student.lastName" name="lastName" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" id="email" required v-model="student.email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" id="password" required v-model="student.password" name="password" />
            </div>
            <div class="form-group">
                <label for="mobileNumber">MobileNumber</label>
                <input class="form-control" id="mobileNumber" required v-model="student.mobileNumber" name="mobileNumber" />
            </div>

            <button @click="saveTutorial" class="btn btn-success">Submit</button>
        </div> 

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newStudent">Add</button>
        </div>
    </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
    name: "add-student",
    data() {
        return {
            student: {
                id: null,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                mobileNumber: "",
                published: false,
            },
            submitted: false,
        };
    },
    methods: {
        saveTutorial() {
            var data = {
                firstName: this.student.firstName,
                lastName: this.student.lastName,
                email: this.student.email,
                password: this.student.password,
                mobileNumber: this.student.mobileNumber,
            };

            StudentDataService.create(data)
                .then((response) => {
                    console.log('create: response: ',response);
                    this.student.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log('create: catch: ',e);
                    if (e.response.data.code === 500)
                        alert('Validation Error.')
                });
        },

        newStudent() {
            this.submitted = false;
            this.student = {};
        },
    },
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
