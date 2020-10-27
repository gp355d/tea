<template>
<div class="container">
    <div class="row mb-2 text-left">
        <div class="col-md-4">
              <img class="img-fluid rounded-circle" src="https://cdn.pixabay.com/photo/2017/06/26/14/00/yellow-tea-2443920_960_720.jpg" alt="tea">
        </div>
        <div class="col-md-8">
            <h2>茶優點</h2>
            <p class="text-left">一直被視為天然的養生法寶，而茶也的確擁有許多對健康有益的營養成分。喝茶可以防癌、控制血脂、血糖，甚至預防失智
    ，茶葉依照「發酵程度」可以分為6大種類，分別為白茶、青茶、綠茶、紅茶、黑茶、黃茶。</p>
        </div>
    </div>
    <h3 class="text-left">茶總類</h3>
    <div class="row text-left">
    <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">白茶</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">綠茶</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">青茶</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">紅茶</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings2" role="tab" aria-controls="settings">黑茶</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings1" role="tab" aria-controls="settings">黃茶</a>
        </div>
    </div>
    <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <h3>功效</h3>
            <P>清熱解毒、生津止渴、提神醒腦</P>
            <p>白茶味性寒涼。白茶又稱「美白茶」，它的茶氨酸高，能抗氧化，舒緩神經和消除緊張。</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
            <h3>功效</h3>
            <p>提神醒腦、生津止渴、清熱解毒</p>
            <p>綠茶味性寒涼，茶葉輕度發酵，故可清熱解。</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
            <h3>功效</h3>
            <p>提神醒腦、有助消化</p>
            <p>味性屬平性，介乎發酵和無發酵之間，生津止渴的作用相對較少。但不同體質的人士應視乎茶葉深淺決定是否飲用，否則會削胃。</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
            <h3>功效</h3>
            <p>溫陽活血、暖胃止瀉、散寒除濕</p>
            <p>紅茶屬於較溫和的茶，同樣有暖身作用，故適合寒底人士。</p>
        </div>
        <div class="tab-pane fade" id="list-settings1" role="tabpanel" aria-labelledby="list-settings-list">
            <h3>功效</h3>
            <p>溫胃養胃、消滯去膩、驅風醒酒</p>
            <p>黑茶屬重發酵的茶類，味性溫熱，有暖身作用。</p>
        </div>
        <div class="tab-pane fade" id="list-settings2" role="tabpanel" aria-labelledby="list-settings-list">
            <h3>功效</h3>
            <p>清熱解毒、祛痰止咳</p>
            <p>黃茶味性較寒涼，介乎綠茶和白茶之間，屬輕微發酵的茶葉。</p>
        </div>
        </div>
    </div>
    </div>
</div>
</template>
