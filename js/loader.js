var bg = document.getElementById("loaderBg"),
  loader = document.getElementById("loader");
/* ロード画面の非表示を解除 */
bg.classList.remove("isHide");
loader.classList.remove("isHide");

/* 読み込み完了 */
window.addEventListener("load", stopload);

/* 10秒経ったら強制的にロード画面を非表示にする */
setTimeout("stopload()", 10000);

/* ロード画面を非表示にする処理 */
function stopload() {
  bg.classList.add("fadeoutBg");
  loader.classList.add("fadeoutLoader");
}
