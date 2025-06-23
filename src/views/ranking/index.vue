<template>
  <div class="ranking-page">
    <!-- 顶部Banner -->
    <div class="banner">
      <img class="banner-bg" src="@/assets/img/ranking/header-countdown.png" alt="banner" />
    </div>

    <div class="ranking-content">
      <!-- Tab/规则/奖励 -->
      <div class="banner-actions">
        <img class="action-icon" src="@/assets/img/ranking/text-rule.png" alt="规则" @click="showRule = true" />
        <div class="ranking-tabs">
          <div class="tab-item">明星榜</div>
          <div class="tab-item active">荣耀榜</div>
        </div>
        <img class="action-icon" src="@/assets/img/ranking/text-reward.png" alt="奖励" @click="showReward = true" />
      </div>

      <!-- 榜单头部 -->
      <div class="list-header">
        <div class="header-rank">排名</div>
        <div class="header-user">用户信息</div>
        <div class="header-score">贡献值</div>
      </div>

      <!-- 榜单内容 -->
      <div class="ranking-list">
        <div v-for="(item, idx) in rankingList" :key="item.id" class="ranking-item">
          <div class="item-rank">
            <img v-if="idx === 0" src="@/assets/img/ranking/1st.png" alt="1st" />
            <img v-else-if="idx === 1" src="@/assets/img/ranking/2st.png" alt="2st" />
            <img v-else-if="idx === 2" src="@/assets/img/ranking/3st.png" alt="3st" />
            <span v-else>{{ (idx+1).toString().padStart(2, '0') }}</span>
          </div>
          <div class="item-user">
            <div class="user-avatar"></div>
            <span class="user-name">{{ item.nickname }}</span>
          </div>
          <div class="item-score">{{ item.score }}</div>
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
      rankingList: Array(5).fill().map((_, i) => ({
        id: i + 1,
        nickname: '显示用户昵称',
        score: 123456
      }))
    };
  },
};
</script>

<style scoped lang="scss">
.ranking-page {
  background: linear-gradient(90deg, #a36fff, #f7b3ff);
  min-height: 100vh;
  padding-bottom: 20px;
}

.banner {
  height: 628px;

  &-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
  }
}

.ranking-content {
  padding: 20px 0 30px;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 41px;
  margin-bottom: 20px;

  .action-icon {
    width: 124px;
    height: 74px;
    cursor: pointer;
  }
}

.ranking-tabs {
  flex: 1;
  display: flex;
  background: #fff;
  border-radius: 37px;
  height: 75px;
  padding: 2px;

  .tab-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D5A8EF;
    font-size: 28px;
    min-width: 180px;

    &.active {
      color: #fff;
      background: url('../../assets/img/ranking/tab-active.png') no-repeat;
      background-size: 100% 100%;
      padding: 22px;
    }
  }
}

.list-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  color: #fff;
  font-size: 20px;

  .header-rank {
    width: 124px;
    text-align: center;
  }

  .header-user {
    flex: 1;
    padding-left: 20px;
  }

  .header-score {
    padding-right: 40px;
  }
}

.ranking-list {
  padding: 0 10px;
}

.ranking-item {
  display: flex;
  align-items: center;
  height: 145px;
  padding: 10px 16px;
  margin-bottom: 14px;
  background: url('../../assets/img/ranking/item-bg.png') no-repeat;
  background-size: cover;

  .item-rank {
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

  .item-user {
    flex: 1;
    display: flex;
    align-items: center;

    .user-avatar {
      width: 100px;
      height: 100px;
      margin: 0 10px 0 21px;
      border-radius: 50%;
      background: linear-gradient(0deg, #9F56CB 0%, #F988E7 100%);
    }

    .user-name {
      color: #C170F0;
      line-height: 50px;
    }
  }

  .item-score {
    min-width: 60px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: right;
  }
}
</style>