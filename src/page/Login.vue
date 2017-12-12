<template>
  <div class="login-root">
    <div class="content">
      <div class="left pane">
        <form>
          <p class="text-muted" style="font-size: 30px;text-align: left">Sign In</p>
          <input v-model="loginForm.phone" class="form-control text-muted" type="text" placeholder="Username" required/>
          <input v-model="loginForm.password" class="form-control text-muted" type="password" placeholder="Password" required/>
          <p v-if="cansee" style="color: indianred;">用户名或密码有误</p>
          <button @click="submitForm('loginForm')" class="btn btn-primary mybutton">Sign In</button>
        </form>
      </div>
      <div class="right pane">
        <div class="register">
          <p style="font-size: 30px;">Sign Up</p>
          <p class="right-text" style="font-size: 12px">You can sign up for create your own album and restore beautiful memory.More surprises waiting for you to find.</p>
          <p class="right-text" style="font-size: 12px">Join us now</p>
          <button class="btn btn-primary mybutton2" data-toggle="modal" data-target="#registerModal">Sign Up</button>
        </div>
      </div>
      <!-- Modal -->
      <div ref="registerModal" class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!--register form-->
              <div >
                <h3>Register</h3>
                <form ref="registerForm" v-on:submit="submitRegisterForm">
                  <input type="text" class="form-control" placeholder="Name" v-model="registerForm.username" required>
                  <input type="text" class="form-control" placeholder="Phone" v-model="registerForm.phone" required>
                  <input type="password" class="form-control" placeholder="Password" v-model="registerForm.password" required/>
                  <input type="password" class="form-control" placeholder="Confirm" v-model="registerForm.confirm" required/>
                  <label class="radio-inline" style="width: 30%"><input v-model="registerForm.sex" style="margin-right: 1em" type="radio" name="optradio" selected value="0">男</label>
                  <label class="radio-inline" style="width: 30%"><input v-model="registerForm.sex" style="margin-right: 1em" type="radio" name="optradio" value="1">女</label>
                  <br/>
                  <select v-model="registerForm.place" class="form-control" >
                    <option value="" style="display: none" selected>地区</option>
                    <option value="北京市">北京市</option>
                    <option value="天津市">天津市</option>
                    <option value="上海市">上海市</option>
                    <option value="重庆市">重庆市</option>
                    <option value="河北省">河北省</option>
                    <option value="山西省">山西省</option>
                    <option value="辽宁省">辽宁省</option>
                    <option value="吉林省">吉林省</option>
                    <option value="黑龙江省">黑龙江省</option>
                    <option value="江苏省">江苏省</option>
                    <option value="浙江省">浙江省</option>
                    <option value="安徽省">安徽省</option>
                    <option value="福建省">福建省</option>
                    <option value="江西省">江西省</option>
                    <option value="山东省">山东省</option>
                    <option value="河南省">河南省</option>
                    <option value="湖南省">湖南省</option>
                    <option value="广东省">广东省</option>
                    <option value="海南省">海南省</option>
                    <option value="四川省">四川省</option>
                    <option value="贵州省">贵州省</option>
                    <option value="云南省">云南省</option>
                    <option value="陕西省">陕西省</option>
                    <option value="甘肃省">甘肃省</option>
                    <option value="青海省">青海省</option>
                    <option value="台湾省">台湾省</option>
                    <option value="内蒙古自治区">内蒙古自治区</option>
                    <option value="广西壮族自治区">广西壮族自治区</option>
                    <option value="西藏自治区">西藏自治区</option>
                    <option value="宁夏回族自治区">宁夏回族自治区</option>
                    <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                    <option value="香港特别行政区">香港特别行政区</option>
                    <option value="澳门特别行政区">澳门特别行政区</option>
                  </select>
                  <input v-model="registerForm.description" type="text" class="form-control" placeholder="Description" required/>
                  <p v-if="canseeRight" style="color: indianred;">{{message}}</p>
                  <button type="button" class="btn btn-secondary mybutton4" data-dismiss="modal">Cancel</button>
                  <button @click="submitRegister" class="btn btn-primary mybutton3">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import api from '@/api/getData'

  export default {
    stores:{
      currentUid:'state.currentUid'
    },
    data () {
      return {
        cansee: false,
        canseeRight: false,
        message: '两次密码不一致',
        loginForm: {
          phone: '',
          password: ''
        },
        registerForm: {
          phone: '',
          password: '',
          confirm: '',
          username: '',
          description: '',
          sex: '',
          place: ''
        }
      }
    },
    methods: {
      async submitForm (formName) {
        let information = {
          username: this.loginForm.phone,
          password: this.loginForm.password
        }
        api.login(information).then(res=>{
          if (res.data.successMessage === 0) {
            this.$router.push('/')
            this.currentUid=res.data.uid
          } else {
            this.cansee = true
          }
        }).catch(res => {
          if (res.data.successMessage === 0) {
            this.$router.push('/')
            this.currentUid=res.data.uid
          } else {
            this.cansee = true
          }
        })
      },
      submitRegister () {
        if (this.registerForm.password !== this.registerForm.confirm) {
          this.canseeRight = true
        } else {
          this.$refs.registerForm.submit()
        }
      },
      async submitRegisterForm () {
        console.log(this.registerForm)
        api.register(this.registerForm).then(res => {
          if (res.data.errormessage === 0) {
            return true
          } else {
            this.canseeRight = true
            this.message = '该手机号已经注册，请直接登陆'
          }
        }).catch(res => {
          if (res.data.errormessage === 0) {
            return true
          } else {
            this.canseeRight = true
            this.message = '该手机号已经注册，请直接登陆'
          }
        })
      }
    }
  }
</script>


<style scoped>
  .login-root{
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    align-content: center;
    background: url("/src/assets/loginbackground.jpg") no-repeat;
    background-size: cover;
  }
  .content{
    position: relative;
    left: 15%;
    top:17%;
    display: block;
    height:66%;
    width: 70%;
  }
  .pane{
    float: left;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    width: 50%;

  }
  .left{
    text-align: center;
    border-radius: 5px;
    box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
    background-color: white;
    padding-top: 130px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: rgba(255,255,255,0.8);
  }
  .right{
    padding-top: 4%;
    padding-bottom: 4%;
    text-align: left;
  }
  .register{
    height: 100%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 30%;
    background-color: rgba(62,57,98,0.9);
    color: rgba(255,255,255,0.8);
  }
  p{
    margin: 0px;
  }
  .form-control{
    border-radius: 25px;
    padding-right: 1em;
    padding-left: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: center;
    height: 50px;
  }
  .mybutton{
    width: 100%;
    border-radius: 25px;
    color: rgba(255,255,255,0.9);
    background-color: rgba(62,57,98,0.9);
    border-color: rgba(62,57,98,0.9);
  }
  .mybutton3{
    border-radius: 25px;
    color: rgba(255,255,255,0.9);
    background-color: rgba(62,57,98,0.9);
    border-color: rgba(62,57,98,0.9);
  }
  .mybutton4{
    border-radius: 25px;
  }
  .right-text{
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .mybutton2{
    border-radius: 25px;
    color: rgba(255,255,255,0.9);
    width: 40%;
    border-color: rgba(255,255,255,0.9);
    background-color: inherit;
    margin-top: 1.6em;
  }
  .modal-body{
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
