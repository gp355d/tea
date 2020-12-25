<template>
  <div class="container py-4">
    <ol class="breadcrumb bg-white font-weight-bold">
      <li class="breadcrumb-item">
        <router-link class="text-dark" to="/">首頁</router-link>
      </li>
      <li class="breadcrumb-item text-primary">茶的知識</li>
    </ol>
    <h2 class="font-weight-bold mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>台灣茶樹總類</h2>
    <div class="row d-flex">
      <div class="col-md-6">
        <h3 class="text-primary font-weight-bold">青心烏龍</h3>
        <p>可製成茶類，包種茶及烏龍茶，屬晚生種</p>
        <h3 class="text-primary font-weight-bold">特色</h3>
        <p class="tea-tree">樹形稍小屬於開張形，枝葉較密生，葉形長橢圓形，以葉部5~6公分處最闊，葉肉稍厚柔軟富彈性，葉色呈濃綠色富光澤，幼芽呈紫色。由於製茶品質優異，全台灣各茶區均有栽培。在北部坪林茶區稱為「種仔旗」，中部則稱為「烏龍旗」或「凍頂旗」。 目前全省栽種面積最廣，也是茶葉市場最受歡迎的茶，香氣清揚及滋味醇和為最大特徵，為台灣種植比例最高的品種。</p>
      </div>
      <div class="col-md-6">
        <h3 class="text-primary font-weight-bold">台茶12號</h3>
        <p>可製成茶類，包種茶及烏龍茶，屬中生種</p>
        <h3 class="text-primary font-weight-bold">特色</h3>
        <p class="tea-tree">母本台農8號+父本硬枝紅心之雜交後裔，試驗代號為2027，茶改場成功育種的排列順序第十二號。於民國70年命名，樹型橫張型，葉橢圓形，葉肉厚，葉色濃綠富光澤，芽綠中帶紫，富茸毛，芽密度高，樹勢強，高產，採摘期長，抗枝枯病。台茶12號的採收量比青心大冇和青心烏龍高20%至50%。金萱品質特徵具一股濃濃的天然「奶香」。</p>
      </div>
    </div>
    <hr>
    <h2 class="font-weight-bold mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>茶類功效</h2>
    <div class="row">
      <div class="col-md-7 d-flex align-items-center">
        <p class="effect-text">茶一直被視為天然的養生法寶，而茶也的確擁有許多對健康有益的營養成分。喝茶可以<span class="font-weight-bold">防癌、控制血脂、血糖，甚至預防失智</span>，茶葉依照「發酵程度」可以分為六大種類，分別為白茶、青茶、綠茶、紅茶、黑茶、黃茶。 </p>
      </div>
      <div class="col-md-5 d-flex justify-content-center">
        <div class="img-fluid rounded-circle tea-img rounded"></div>
      </div>
    </div>
    <h3 class="text-primary font-weight-bold">六大茶類</h3>
    <div class="row mb-4">
      <div class="col-lg-4 col-md-6 mb-3">
        <div class="card h-100">
          <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">白茶</h3></div>
          <div class="card-body">
            <h4 class="card-title font-weight-bold">功效</h4>
            <p class="effect-intro">清熱解毒、生津止渴、提神醒腦</p>
            <p class="effect-intro">白茶味性寒涼。白茶又稱「美白茶」，它的茶氨酸高，能抗氧化，舒緩神經和消除緊張。</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">綠茶</h3></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">功效</h4>
              <p class="effect-intro">提神醒腦、生津止渴、清熱解毒</p>
              <p class="effect-intro">綠茶味性寒涼，茶葉輕度發酵，故可清熱解。</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">青茶</h3></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">功效</h4>
              <p class="effect-intro">提神醒腦、有助消化</p>
              <p class="effect-intro">味性屬平性，介乎發酵和無發酵之間，生津止渴的作用相對較少。但不同體質的人士應視乎茶葉深淺決定是否飲用，否則會削胃。</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">紅茶</h3></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">功效</h4>
              <p class="effect-intro">溫陽活血、暖胃止瀉、散寒除濕</p>
              <p class="effect-intro">紅茶屬於較溫和的茶，同樣有暖身作用，故適合寒底人士。</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">黑茶</h3></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">功效</h4>
              <p class="effect-intro">溫陽活血、暖胃止瀉、散寒除濕</p>
              <p class="effect-intro">黑茶屬重發酵的茶類，味性溫熱，有暖身作用。</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-header bg-primary"><h3 class="text-white font-weight-bold mb-0">黃茶</h3></div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">功效</h4>
              <p class="effect-intro">清熱解毒、祛痰止咳</p>
              <p class="effect-intro">黃茶味性較寒涼，介乎綠茶和白茶之間，屬輕微發酵的茶葉。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h2 class="font-weight-bold mb-3"><i class="fas fa-leaf mr-2 text-primary"></i>茶包泡法</h2>
    <div class="row mb-3 mb-md-0">
      <div class="col-md-6">
        <h3 class="text-primary font-weight-bold">熱水泡法</h3>
        <ol class="feature pl-5">
          <li><p>加一些熱水到杯裡，靜待約10秒後倒掉，溫杯能讓沖泡溫度更均勻</p></li>
          <li><p>將立體茶包放入溫熱後的空杯內，藉由熱氣聞一下茶香</p></li>
          <li><p>將85~100度熱水均勻淋到茶包上，讓茶葉在熱水中滾動</p></li>
          <li><p>浸泡時間約 3-5分鐘，視茶湯顏色濃淡與個人喜好調整，享用前擺動茶包線可均勻茶湯的濃度</p></li>
          <li><p>原葉立體茶包約可回沖 4-5次</p></li>
          <li><p>好的原片茶葉，久浸也不易苦澀。浸泡越久，咖啡因釋出越多，若是擔心茶湯過濃，可另外準備小碟子置放茶包</p></li>
        </ol>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img class="cold-tea-img img-fluid" src="https://cdn.pixabay.com/photo/2020/02/04/07/42/tee-4817497_960_720.jpg" alt="coldtea">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3 class="text-primary font-weight-bold">冷水泡法</h3>
        <ol class="feature pl-5">
          <li><p>準備茶包及300ml瓶子或杯子</p></li>
          <li><p>倒入300ml常溫水</p></li>
          <li><p>放入冰箱冷藏4~8小時</p></li>
        </ol>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img class="hot-tea-img img-fluid" src="https://images.pexels.com/photos/606256/pexels-photo-606256.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="hottea">
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
@import '../../assets/scss/frontend/main';

@include media-breakpoint-down(xl) {
  .tea-img {
    width: 180px;
    height: 180px;
    background-position: center;
    background-size: cover;
    background-image: url('https://cdn.pixabay.com/photo/2017/06/26/14/00/yellow-tea-2443920_960_720.jpg');
  }

  .cold-tea-img,
  .hot-tea-img {
    width: 300px;
    // height: 200px;
  }

  .effect-text,
  .tea-tree {
    // font-size: 1rem;
    text-indent: 50px;
  }

  .feature {
    li {
      // font-size: 1.75rem;

      // p {
      //   font-size: 1.25rem;
      // }

      p:nth-child(1) {
        margin-bottom: 0;
      }

      p:nth-child(2) {
        margin-bottom: 0;
      }
    }
  }

  // .card-body {
  //   .effect-intro {
  //     // font-size: 1.25rem;
  //   }
  // }
}
</style>
