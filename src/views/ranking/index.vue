<template>
  <div class="ranking-page">
    <!-- 顶部Banner -->
    <div class="banner">
      <img class="banner-bg" src="@/assets/img/ranking/header-countdown.png" alt="banner" />
    </div>
    <div class="ranking-content">
    <!-- Tab/规则/奖励 -->
    <div class="banner-content">
      <div @click="showRule = true"><img class="icon-back" src="@/assets/img/ranking/text-rule.png" alt="back" /></div>
      <div class="center-tab">
        <div class="item-tab">明星榜</div>
        <div class="active item-tab">荣耀榜</div>
      </div>
      <div><img class="icon-mic" src="@/assets/img/ranking/text-reward.png" alt="mic" @click="showReward = true" /></div>


    </div>
    <!-- 榜单头部 -->
    <div class="list-header">
      <div class="rank">排名</div>
      <div class="user-info">用户信息</div>
      <div class="contribution">贡献值</div>
    </div>

    <!-- 榜单内容 -->
    <div class="ranking-list">
      <div v-for="(item, idx) in rankingList" :key="item.id" class="ranking-item">
        <div class="rank-num">
          <img v-if="idx === 0" src="@/assets/img/ranking/1st.png" alt="1st" />
          <img v-else-if="idx === 1" src="@/assets/img/ranking/2st.png" alt="2st" />
          <img v-else-if="idx === 2" src="@/assets/img/ranking/3st.png" alt="3st" />
          <span v-else>{{ (idx+1).toString().padStart(2, '0') }}</span>
        </div>
        <div class="user-info">
          <div class="avatar"></div>
          <span class="nickname">{{ item.nickname }}</span>
        </div>
        <div class="score">{{ item.score }}</div>
      </div>
    </div>
    </div>
    <RuleModal :visible="showRule" @close="showRule = false" />
    <RewardModal :visible="showReward" @close="showReward = false" />
  </div>
</template>

<script>
import RuleModal from './components/rule/index.vue';
import RewardModal from './components/rule/RewardModal.vue';
export default {
  components: { RuleModal, RewardModal },
  data() {
    return {
      showRule: false,
      showReward: false,
      rankingList: [
        { id: 1, nickname: '显示用户昵称', score: 123456 },
        { id: 2, nickname: '显示用户昵称', score: 123456 },
        { id: 3, nickname: '显示用户昵称', score: 123456 },
        { id: 4, nickname: '显示用户昵称', score: 123456 },
        { id: 5, nickname: '显示用户昵称', score: 123456 },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.ranking-content {
  position: relative;
  padding-bottom: 30px;
}
.ranking-page {
  background: linear-gradient(90deg, #a36fff, #f7b3ff);
  min-height: 100vh;
  padding-bottom: 20px;
}
.banner {
  position: relative;
  width: 100%;
  height: 628px;
  .banner-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
  }
}
.list-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 8px;
  .rank {
    text-align: center;
    width: 124px;
  }
  .user-info {
    flex: 1;
    padding-left: 20px;
  }
  .contribution {
    padding-right: 40px;
  }
}
.ranking-list {
  padding: 0 10px;
  .ranking-item {
    height: 145px;
    background-image: url('../../assets/img/ranking/item-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 14px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    .rank-num {
      width: 84px;
      text-align: center;
      font-size: 44px;
      font-weight: bold;
      color: #fff;
      img {
        width: 84px;
        height: 84px;
      }
    }
    .user-info {
      display: flex;
      align-items: center;
      flex: 1;
      .avatar {
        margin-left: 21px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: linear-gradient(0deg, #9F56CB 0%, #F988E7 100%);
        margin-right: 10px;
      }
      .nickname {
        color: #C170F0;
        line-height: 50px;
      }
    }
    .score {
      min-width: 60px;
      text-align: right;
      font-size: 30px;
      color: #fff;
      font-weight: bold;
    }
  }
}
.banner-content {
  margin-top: 20px;
  display: flex;
  gap: 41px;
  align-items: center;
  .center-tab {
    padding: 2px;
    display: flex;
    align-items: center;
    color: #D5A8EF;
    font-size: 28px;
    border-radius: 37px;
    height: 75px;
    background-color: #fff;
    flex: 1;
    justify-content: space-between;
    .item-tab {
      text-align: center;
      min-width: 180px !important;
    }
    .active {
      padding: 22px;
      background-image: url('../../assets/img/ranking/tab-active.png');
      color: #fff;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
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
</style>
