<template>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">Storelytic</h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">

          <Form @submit="handleRegister" :validation-schema="schema">
<div v-if="!successful" >
 <div class="form-group">
              <label class="font-semibold text-sm text-gray-600 pb-1 block" for="username">Username</label>
              <Field name="username" type="text" class="form-control border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <ErrorMessage name="username" class="error-feedback text-red-600  mb-50" />
            </div>

            <div class="form-group">
              <label class="font-semibold text-sm text-gray-600 pb-1 block" for="email">E-mail</label>
              <Field name="email" type="email" class="form-control border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <ErrorMessage name="email" class="error-feedback text-red-600  mb-50" />
            </div>

            <div class="form-group">
              <label class="font-semibold text-sm text-gray-600 pb-1 block" for="password">Password</label>
              <Field name="password" type="password" class="form-control border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <ErrorMessage name="password" class="error-feedback text-red-600 mb-2" />
            </div>

</div>
           
            <div class="form-group">
              <button class="btn btn-primary transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Register</span>
              </button>
            </div>

            <div class="form-group">
              <div   v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'">
                {{  message  }}
              </div>
            </div>

          </Form>
        </div>

      </div>

    </div>
  </div>
  </template>
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  export default {
    name: "Register",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
        email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
        password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
      });
      return {
        successful: false,
        loading: false,
        message: "",
        schema,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      handleRegister(user) {
        this.message = "";
        this.successful = false;
        this.loading = true;
        this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },
    },
  };
  </script>