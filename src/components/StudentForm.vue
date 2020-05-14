<template>
  <div class='userAdd'>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add student</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field :class="getValidationClass('name')">
                <label for="name">Name</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.name.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.name.minlength">Invalid first name</span>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('address')">
            <label for="address">Address</label>
            <md-input type="address" name="address" id="address" autocomplete="address" v-model="form.address" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.address.required">The address is required</span>
            <span class="md-error" v-else-if="!$v.form.address.address">Invalid address</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Add student</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
import CONSTANTS from '../constants'

export default {
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      age: null,
      address: null
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      address: {
        required,
        minLength: minLength(3)
        // email
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.name = null
      this.form.age = null
      this.form.address = null
    },
    addUser () {
      this.sending = true
      axios.post(`${CONSTANTS.API_URL}/student`, { ...this.form, class: this.$route.params.class })
        .then((res) => {
          this.$store.commit('add', res.data[0])
        })
        .catch((err) => {
          console.log(err)
        })
      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.name}`
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.addUser()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .userAdd {
      margin-top: 20px
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
