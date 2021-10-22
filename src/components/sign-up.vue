<template>
    <div class="vue-tempalte">
        <form @submit.prevent="handleSubmit">
            <h3>Sign Up</h3>
         
           <headerHeader title="my title"/>
           <headerHeader subtitle="my title"/>
        


            <div class="form-group">
                <label>First Name</label>
                <input type="text" v-model="user.firstName" id="firstName" class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" v-validate="{ alpha: true , required:true}"/>
                <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>
            
            </div>

             <div class="form-group">
                <label>last Name</label>
                <input type="text" class="form-control form-control-lg" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" v-model="user.lastName" id="lastName" name="lastName" v-validate="{ alpha: true,required }"/>
                        <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Last Name is required</div>

            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email is required</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span></div>

            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                 <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                 <span v-if="!$v.user.password.required">Password is required</span>
                <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                 </div>
            </div>
            
            <div class="form-group">
                <label> Confirm Password</label>
                   <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                 <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                 <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                </div>
            </div>

            

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
           

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
            <!--errors-->
                <div class="alert alert-danger" v-show="errors.any()">
                  <div v-if="errors.has('password')">
                    {{ errors.first('password') }}
                  </div>
                  <div v-if="errors.has('password_confirmation')">
                    {{ errors.first('password_confirmation') }}
                  </div>
                </div>
        </form>

    </div>
</template>

<script>
import headerHeader from '@/components/headerHeader'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    export default {
    
        data() {
            return {
                title:"my title",
                subtitle:"subtitle",

                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                
     },
       submitted: false
        };
    },
         validations: {
            user: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
        },
        methods: {
            handleSubmit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            }
        },
        components:{
            
            headerHeader,
                
        }

        }
       

    
</script>