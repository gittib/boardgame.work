window.setIndexNameToListItems = () => {
    let idx = 1;
    document.querySelectorAll('[data-index]').forEach(dom => {
        dom.setAttribute('data-index', idx++);
    });
    document.querySelectorAll('[data-index] [data-list_name][data-key_name]').forEach(dom => {
        const name = dom.getAttribute('data-list_name')+'['+dom.closest('[data-index]').getAttribute('data-index')+']['+dom.getAttribute('data-key_name')+']';
        dom.setAttribute('name', name);
    });
};

$('form .submit_button').on('click', function() {
    $(this).closest('form').submit();
});

window.addEventListener("DOMContentLoaded", () => {
  // textareaタグを全て取得
  const textareaEls = document.querySelectorAll("textarea");

  textareaEls.forEach((textareaEl) => {
    // デフォルト値としてスタイル属性を付与
    textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
    // inputイベントが発生するたびに関数呼び出し
    textareaEl.addEventListener("input", setTextareaHeight);
  });

  // textareaの高さを計算して指定する関数
  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
  }
});
