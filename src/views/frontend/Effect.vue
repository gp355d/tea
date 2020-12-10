<template>
<div class="container py-4">
  <div class="row mb-2">
    <div class="col-md-8">
      <h2 class="effect font-weight-bold">喝茶好處</h2>
      <p class="effect-text">茶一直被視為天然的養生法寶，而茶也的確擁有許多對健康有益的營養成分。喝茶可以防癌、控制血脂、血糖，甚至預防失智
        ，茶葉依照「發酵程度」可以分為6大種類，分別為白茶、青茶、綠茶、紅茶、黑茶、黃茶。</p>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <img class="img-fluid rounded-circle tea-img"
        src="https://cdn.pixabay.com/photo/2017/06/26/14/00/yellow-tea-2443920_960_720.jpg" alt="tea">
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <h3 class="font-weight-bold">6大茶類功效</h3>
      <ol class="feature">
        <li>
          <h4>白茶</h4>
          <p>清熱解毒、生津止渴、提神醒腦</p>
          <p>白茶味性寒涼。白茶又稱「美白茶」，它的茶氨酸高，能抗氧化，舒緩神經和消除緊張。</p>
        </li>
        <li>
          <h4>綠茶</h4>
          <p>提神醒腦、生津止渴、清熱解毒</p>
          <p>綠茶味性寒涼，茶葉輕度發酵，故可清熱解。</p>
        </li>
        <li>
          <h4>青茶</h4>
          <p>提神醒腦、有助消化</p>
          <p>味性屬平性，介乎發酵和無發酵之間，生津止渴的作用相對較少。但不同體質的人士應視乎茶葉深淺決定是否飲用，否則會削胃。</p>
        </li>
        <li>
          <h4>紅茶</h4>
          <p>溫陽活血、暖胃止瀉、散寒除濕</p>
          <p>紅茶屬於較溫和的茶，同樣有暖身作用，故適合寒底人士。</p>
        </li>
        <li>
          <h4>黑茶</h4>
          <p>溫胃養胃、消滯去膩、驅風醒酒</p>
          <p>黑茶屬重發酵的茶類，味性溫熱，有暖身作用。</p>
        </li>
        <li>
          <h4>黃茶</h4>
          <p>清熱解毒、祛痰止咳</p>
          <p>黃茶味性較寒涼，介乎綠茶和白茶之間，屬輕微發酵的茶葉。</p>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
@include media-breakpoint-down(xl) {
  .tea-img {
    width: 200px;
    height: 200px;
  }

  .effect-text {
    font-size: 1.25rem;
  }

  .feature {
    li {
      p {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
