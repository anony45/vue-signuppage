<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control form-control-lg" v-validate="{ alpha: true , required:true}"/>
            </div>
             <div class="form-group">
                <label>last Name</label>
                <input type="text" class="form-control form-control-lg" v-validate="{ alpha: true,required }"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-validate="{ required: true, email: true }" />
                <span>{{ errors.first('email') }}</span>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password"  name="password" class="form-control form-control-lg"  v-validate="'required'"  ref="password"/>
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            </div>
            
            <div class="form-group">
                <label> Confirm Password</label>
                <input type="password" name="password_confirmation" class="form-control form-control-lg" v-validate="'required|confirmed:password'" data-vv-as="password" />
                <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
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
    export default {
        data() {
            return {}
        }
    }
    
</script>