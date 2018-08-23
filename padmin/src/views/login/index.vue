<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :model="loginForm" :rules="loginRules">
      <h3 class="text-center">PAdmin</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :placeholder="$t('login.password')"
          name="password"
          type="password"
          auto-complete="on"
        />
      </el-form-item>
      <!-- <el-form-item prop="proto">
        <el-checkbox label="同意此协议" v-model="loginForm.proto" name="proto"></el-checkbox>
      </el-form-item> -->
      <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin" style="width:100%" round>{{ $t('login.logIn') }}</el-button>
      <el-row>
        <el-col :span="24">
          <p class="text-info">Already have an account? <a href="#" class="text-blue"><b>Sign In</b></a></p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        proto: true
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }],
        proto: [{ required: true, trigger: 'change' }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/variables.scss';
.login-container {
  margin: 0 auto;
  max-width: 480px;
  position: relative;
  background: $bgfff;
  border-radius: 5px;
  .login-form {
    padding: 20px;
  }
  .text-info {
    text-align: center;
    font-size: $smaller;
    color: $info
  }
}
</style>
