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
    const $self = $(this);
    const $form = $self.closest('form');
    const originalTarget = $form.attr('target');

    if ($self.attr('data-target')) {
        $form.attr('target', $self.attr('data-target'));
    }
    if ($self.attr('data-action')) {
        $form.attr('action', $self.attr('data-action'));
    }
    $form.submit();

    if (originalTarget) {
        $form.attr('target', originalTarget);
    } else {
        $form.removeAttr('target');
    }
});

$('.js-language_setting').on('change', function() {
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

window.ajaxSubmit = async $form => {
    const url = $form.attr('action');
    const method = $form.attr('method');
    const csrfToken = $('[name=csrf-token]').attr('content');
    const formData = new URLSearchParams($form.serialize());

    const response = await fetch(url, {
        method: method,
        headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};

// 脚本画面のフォントサイズ調整機能
$('.js-font_size_button').on('click', function () {
    $('#menu_toggle').prop('checked', false);
    if ($('.font_size_adjust').length > 0) {
        $('.font_size_adjust').show();
    } else {
        myAlert($('[data-only_scenario_show]').attr('data-only_scenario_show'));
    }
});
