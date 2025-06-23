<template>
  <div>
      <div class="application">
        <header class="header__title" @click="myEvent">Application</header>
        <div class="application__content">
          <div class="application__card-wrap">
            <div class="application__card-one" @click="app()">APP点击测试</div>
            <div class="application__card-two" @click="appCall()">模拟APP回调</div>
            <div class="application__card-two" @click="$router.push('/menu/verification-details')">去别的页面</div>
          </div>
          <div class="application__content-img">
            <div class="application__content-img-wrap"><img src="./img/application.png" alt=""></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'entry',
  data () {
    return {
    }
  },
  created () {
  },
  activated () {
    console.log(45454545444);
  },
  mounted () {
  },
  methods: {
    myEvent (data) {
       Toast(`myEvent${data}`);
    },
    app () {
      let webviewParameter = {
        message: 'this.inputInner.messageBlob'
      }
      this.H5WebView.authInWebView({}, (res) => {
        console.log(res, '收到安卓的回调消息')
        this.auth = (res)
      })
    },
    appCall () {
      let mockData = {
        code: 0,
        data: {
          source: {
              sourceType: 'client'
          },
          payload: {
            signData: 'skpjijiukjljoikjiojl'
          }
        },
        message: 'success'
      }
       this.H5WebView.authInWebView(JSON.stringify(mockData))
    }
  },

}


</script>

<style lang="scss" scoped>
@import '@/assets/rem/rem.scss';
@import '@/assets/common/_title.scss';
.application {
  padding-top: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-image: url('./img/main_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 65px;
  .application__content {
    margin-top: 117px;
    .application__card-wrap {
      padding: 0 64px;
    }
    .application__card-one, .application__card-two {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: $font-main-color;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
      height: 180px;
      border-radius: 8px;
      margin-top: 36px;
      line-height: 180px;
    }
    .application__card-one {
      background-image: url('./img/digital_certificate.png');
      background-size: cover;
    }
    .application__card-two {
      background-image: url('./img/automatically_convert.png');
      background-size: cover;
    }
    .application__content-img{
      margin-top: 160px;
      .application__content-img-wrap {
        margin: 0 auto;
        width: 251px;
      }
    }
  }
}
</style>