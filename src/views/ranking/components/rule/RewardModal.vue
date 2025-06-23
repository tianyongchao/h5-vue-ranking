<template>
  <div class="reward-modal" v-if="visible">
    <div class="reward-mask" @click="close"></div>
    <div class="rule-content">
      <div class="rule-header">
        <span class="rule-title">奖励</span>
        <!-- <span class="rule-close" @click="close">×</span> -->
      </div>
      <div class="center-tab">
        <div class="item-tab">明星榜</div>
        <div class="active item-tab">富豪榜</div>
      </div>
      <div class="rule-body">
        <div class="item-ranking">
          <div class="reward-title">
            <img src="../../../../assets/img/ranking/1st-text.png" alt="">
          </div>
          <div class="reward-wrap">
            <div v-for="(i, index) in 3">
              <div class="reward-item">
                <img src="../../../../assets/img/ranking/reward-item-content.png" alt="">
                <div v-if="index === 1" class="reward-icon-week">
                  <img src="../../../../assets/img/ranking/icon-week.png" alt="">
                </div>
                <div v-if="index === 0" class="reward-icon-days">
                  <div class="reward-icon-days-text">7天</div>
                  <img src="../../../../assets/img/ranking/icon-days.png" alt="">
                </div>
              </div>
              <div class="reward-text">专属奖励6字</div>
              <div>价值123456</div>
            </div>
          </div>

        </div>
        <div class="item-ranking">
          <div class="reward-title">
            <img src="../../../../assets/img/ranking/2st-text.png" alt="">
          </div>
          <div class="reward-wrap">
            <div v-for="(i, index) in 3">
              <div class="reward-item">
                <img src="../../../../assets/img/ranking/reward-item-content.png" alt="">
                <div v-if="index === 1" class="reward-icon-week">
                  <img src="../../../../assets/img/ranking/icon-week.png" alt="">
                </div>
                <div v-if="index === 0" class="reward-icon-days">
                  <div class="reward-icon-days-text">7天</div>
                  <img src="../../../../assets/img/ranking/icon-days.png" alt="">
                </div>
              </div>
              <div class="reward-text">专属奖励6字</div>
              <div>价值123456</div>
            </div>
          </div>

        </div>
        <div class="item-ranking item-ranking-last">
          <div class="reward-title">
            <img src="../../../../assets/img/ranking/3st-text.png" alt="">
          </div>
          <div class="reward-wrap">
            <div>
              <div class="reward-item">
                <img src="../../../../assets/img/ranking/reward-item-content.png" alt="">
                <div v-if="index === 1" class="reward-icon-week">
                  <img src="../../../../assets/img/ranking/icon-week.png" alt="">
                </div>
                <div v-if="index === 0" class="reward-icon-days">
                  <div class="reward-icon-days-text">7天</div>
                  <img src="../../../../assets/img/ranking/icon-days.png" alt="">
                </div>
              </div>
              <div class="reward-text">专属奖励6字</div>
              <div>价值123456</div>
            </div>
            <div class="st3-wrap">
              <div class="st3-item"></div>
              <div class="reward-text">专属奖励6字</div>
              <div>价值123456</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RewardModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.reward-modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .reward-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
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
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .rule-title {
        position: relative;
        top: 15px;
        color: #fff;
        font-size: 38px;
      }

      .rule-close {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 22px;
        color: #a07cff;
        cursor: pointer;
      }
    }

    .rule-body {
      font-weight: bold;
      font-size: 28px;
      margin-top: 16px;
      color: #C77EF1;

      ul {
        padding: 0;
        margin-top: 30px;

        li {
          margin-bottom: 58px;
          line-height: 44px;
        }
      }

      .rule-footer {
        margin-top: 12px;
        font-size: 12px;
        color: #b7a6e6;
      }
    }
  }
}

.center-tab {
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 70px;
  width: 60%;
  padding: 2px;
  display: flex;
  align-items: center;
  color: #D5A8EF;
  font-size: 28px;
  border-radius: 37px;
  height: 75px;
  background-color: #fff;
  justify-content: space-between;

  .item-tab {
    text-align: center;
    min-width: 180px !important;
  }

  .active {
    padding: 22px;
    background-image: url('../../../../assets/img/ranking/tab-active.png');
    color: #fff;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .icon-back {
    width: 124px;
    height: 74px;
  }

  .icon-mic {
    width: 124px;
    height: 74px;
  }
}

.item-ranking {
  margin-bottom: 40px;
}

.reward-title {
  text-align: center;

  img {
    width: 201px;
    // height: 70px;
  }
}

.reward-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  .reward-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    background-image: url('../../../../assets/img/ranking/reward-item-bg.png');
    background-repeat: no-repeat;
    background-size: contain;

    img {
      width: 80%;
      height: 80%;
    }

    .reward-icon-week {
      width: 88px;
      height: 50px;
      top: -10px;
      right: -20px;
      position: absolute;
    }

    .reward-icon-days {
      width: 88px;
      height: 50px;
      top: 0px;
      right: -10px;
      position: absolute;
    }

    .reward-icon-days-text {
      font-size: 22px;
      color: #fff;
      top: 5px;
      right: 35px;
      position: absolute;
    }
  }
}


.item-ranking-last {
  justify-content: space-between;
}

.st3-wrap {
  flex: 0.8;
  .st3-item {
    background-image: url('../../../../assets/img/ranking/st3-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 180px;
  }
}

.reward-text {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #fff;
  /* 文字颜色 */
  text-shadow:
    0 0 6px #e7d3ff,
    0 0 12px #d6aaff,
    0 0 24px #ffffff;
  background: rgba(255, 240, 255, 0.3);
  /* 模拟淡粉背景 */
}
</style>