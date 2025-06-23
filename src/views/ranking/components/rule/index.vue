<template>
  <div class="rule-modal" v-if="visible">
    <div class="rule-mask" @click="close"></div>
    <div class="rule-content">
      <div class="rule-header">
        <span class="rule-title">规则</span>
        <!-- <span class="rule-close" @click="close">×</span> -->
      </div>
      <div class="rule-body">
        <p>活动时间: 每周一00:00-周日23:59:59（统计时间为北京时间）</p>
        <ul>
          <li>本周送出或收到对应本周周星礼物，会有对应的榜单，周星礼物对应2个榜单，明星榜和荣誉榜</li>
          <li>本周周星榜按照用户收到本周周星礼物价值值高低进行榜单排名，1钻石=1台值</li>
          <li>本周荣誉榜按照用户送出本周指定周星礼物价值值高低进行榜单排名，1钻石=1台值</li>
          <li>活动奖励在次周三个工作日内进行发放，奖励如无特殊约定在[背包]自行查看</li>
          <li>活动奖励的自定义礼物名称需符合平台规定，具体以客服联系平台客服</li>
        </ul>
        <!-- <p class="rule-footer">*活动解释权归本平台所有</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RuleModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.rule-modal {
  position: fixed;
  z-index: 9999;
  left: 0; top: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  .rule-mask {
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
  }
  .rule-content {
    background-image: url(../../../../assets/img/ranking/rule-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    width: 700px;
    padding: 24px 20px 16px 20px;
    z-index: 1;
    .rule-header {
      display: flex; justify-content: center; align-items: center; position: relative;
      .rule-title {
        margin-bottom: 30px;
        color: #fff;
        font-size: 38px;
      }
      .rule-close {
        position: absolute; right: 0; top: 0; font-size: 22px; color: #a07cff; cursor: pointer;
      }
    }
    .rule-body {
      font-weight: bold;
      font-size: 28px;
      margin-top: 16px;
      color: #C77EF1;
      ul {  padding: 0;
        margin-top: 30px;
        li { margin-bottom: 58px; line-height: 44px;}
      }
      .rule-footer {
        margin-top: 12px; font-size: 12px; color: #b7a6e6;
      }
    }
  }
}
</style>
