const images = document.querySelectorAll('img');
const caption = document.querySelector('.caption');
const prevBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const description = document.querySelector('#description');
const totalImages = (images.length,4); //最初の4枚のみに制限
let imageIndex = 0;

// 各画像に対応する説明文を配列として管理
const descriptions = [
  `極寒の地、雪と氷に覆われた不毛の大地。視界が悪く、常に雪崩や敵の襲撃に警戒しなければならない。`,
  `かつて栄光を誇った王国の象徴であった『砕けた王冠の城塞』。今は無惨な廃墟と化している。崩壊した石壁と廃墟の中にひっそりと眠る謎が、この地に足を踏み入れた者を待ち受けている。`,
  `古代の火の神殿が眠る場所であり、強力な火の魔法と鍛冶技術を持った種族によって支配されている。`,
  `???????`
];

//
// ドロップダウンメニューのリンクを取得
const navLinks = document.querySelectorAll('.dropdown-content .maps');

// 画像を取得
const sliderImages = document.querySelectorAll('.slider-image');

// 各リンクにクリックイベントを設定
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();  // デフォルトのリンク遷移を防止



    // 対応する画像を表示
    const targetId = link.getAttribute('href').substring(1);  // #frost から frost を取得
    const targetImage = document.getElementById(targetId);
 

    // スムーズにスクロール
    targetImage.scrollIntoView({
      behavior: 'smooth'
    });
  });
});








// ページ全体を読み込んだときに画像スライダーを更新する
window.addEventListener('load', () => {
  updateSlider();
});

// 次へ進むボタンがクリックされたときの処理
nextBtn.addEventListener('click', () => {
  imageIndex++;
  if (imageIndex >= totalImages) {
    imageIndex = 0;
  }
  updateSlider();
});

// 前へ戻るボタンがクリックされたときの処理
prevBtn.addEventListener('click', () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = totalImages - 1;
  }
  updateSlider();
});

// 画像スライダーを更新する関数
function updateSlider() {
  // すべての画像、キャプション、説明をフェードアウトさせる
  images.forEach((image) => {
    image.classList.remove('show');
  });
  caption.classList.remove('show');
  description.classList.remove('show');

  // 画像がフェードアウトした後に新しい画像を表示する
  setTimeout(() => {
    // 新しい画像をフェードインさせる
    images[imageIndex].classList.add('show');
    caption.classList.add('show');
    description.classList.add('show');
    caption.innerHTML = images[imageIndex].alt; // 画像のalt属性をキャプションにセット
    description.innerHTML = descriptions[imageIndex]; // 対応する説明文をセット
  }, 800); // 0,8秒（トランジションの時間）後に新しい内容を表示
}


//下から上にスクロール
$(window).scroll(function () {
  let scrollAnimationElm = document.querySelectorAll('.scroll_up');
  let scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      let triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});



const questions=document.querySelectorAll('.question');
const answers=document.querySelectorAll('.hiddenAns');

questions.forEach((question, index) => {
  question.onclick = function() {
    answers[index].classList.toggle("show");
   
  };
});


const mage = document.querySelector('img[src="./images/mage.png"]');

// 画像がすでに読み込まれている場合も考慮して
if (mage.complete) {
  mage.classList.add('show');
} else {
  // 画像が読み込まれたときのイベントリスナーを追加
  mage.addEventListener('load', function() {
    // 画像が表示されたときにクラスを追加
    mage.classList.add('show');
  });
}


//ローディング画面
window.addEventListener("DOMContentLoaded", () => {
  // ページが完全に読み込まれた後、3秒間ローディング画面を表示
  setTimeout(() => {
      // ローディング画面を非表示にする
      const loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
          loadingScreen.style.display = "none";
      }
  }, 3000); // 3000ms = 3秒後
});