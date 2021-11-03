<template>
  <div class="wrapper">
    <img class="wrapper__img" src="../../assets/logo.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" v-model="data.username"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"  placeholder="请输入密码" v-model="data.password"/>
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link"  @click="handleRegisterClick">立即注册</div>
    <Toast v-if="toastData.showToast" :message="toastData.message"/>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '../../untils/request'
import Toast, { useToastEffect } from '../../components/Toast'
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const data = reactive({ username: '', password: '' })
    const { toastData, showToast } = useToastEffect()
    const handleLogin = async () => {
      try {
        const result = await post('/api/login', {
          username: data.username,
          password: data.password
        })
        if (result.error === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          showToast('登录失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { handleRegisterClick, handleLogin, toastData, data }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.wrapper {
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      // &::placeholder {
      // }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #ffd300;
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
  }
}
</style>
