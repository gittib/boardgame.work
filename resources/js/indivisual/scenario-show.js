if ($('body').hasClass('scenario-show')) {
    $('.summary_qr img').on('click', function() {
        $(this).toggleClass('scaled');
    });

    $('.js-show_private_sheet').on('click', async function() {
        const dialogMessage = $(this).attr('data-dialog_message');
        const {result} = await myConfirm(dialogMessage);
        if (result == 'ok') {
            $('.private_sheet_wrapper').addClass('showing');
            $('.js-hide_private_sheet').show();
            $('.js-show_private_sheet').hide();
        }
    });
    $('.js-hide_private_sheet').on('click', () => {
        $('.private_sheet_wrapper').removeClass('showing');
        $('.js-hide_private_sheet').hide();
        $('.js-show_private_sheet').show();
    });

    var has_show_initial_board = false;
    $('.show_initial_board_wrapper').on('click', () => {
        if (!has_show_initial_board) {
            gtag('event', 'show_initial_board');
            has_show_initial_board = true;
        }
        $('.initial_board_wrapper').show();
        $('.show_initial_board_wrapper').hide();
    });
    $('.hide_initial_board_wrapper').on('click', () => {
        $('.initial_board_wrapper').hide();
        $('.show_initial_board_wrapper').show();
    });

    $('.js-like_button').on('click', async function() {
        const $p = $(this).closest('p');
        $p.toggleClass('liked');
        try {
            const res = await ajaxSubmit($p.closest('form'));
            $p.find('.js-count').text(res.likes);
        } catch (e) {
            $p.toggleClass('liked');
        }
    });

    $('.js-bookmark_button').on('click', async function() {
        const $p = $(this).closest('p');
        try {
            const res = await ajaxSubmit($p.closest('form'));
            $p.toggleClass('bookmarked');
            myAlert(res.message);
        } catch (e) {
        }
    });

    $('.js-please_login').on('click', function() {
        myAlert($(this).attr('data-msg'));
    });

    $('a.incident_explain').on('click', function() {
        openPopup('js-popup-incident_explain');
    });
    $('.js-popup-incident_explain ul.incident_list > li').on('click', function() {
        const $self = $(this);
        console.log($self.find('p.note').text());
        myAlert($self.find('p.note').html(), $self.find('a').text());
    });

    $('.font_size_adjust .close').on('click', function () {
        $(this).closest('.font_size_adjust').hide();
    });
    $('.js-font_size_adjust').on('input', function() {
        const $self = $(this);
        localStorage.scenarioFontSize = $self.val();
        $('.public_sheet').css({'font-size': $self.val()+'px'});
        $('.private_sheet').css({'font-size': $self.val()+'px'});
    });
    if (Number(localStorage.scenarioFontSize) > 0) {
        const fontSize = Number(localStorage.scenarioFontSize);
        $('.js-font_size_adjust').val(fontSize);
        $('.public_sheet').css({'font-size': fontSize+'px'});
        $('.private_sheet').css({'font-size': fontSize+'px'});
    }
}

if($('#quiz-strings_wrapper').length > 0) {
    // 「脚本家への指針」当てクイズ
    window.confirmToShowHint = async s => {
        if ($('dd.advice > .content').is(':visible')) {
            return {result:'ok'};
        } else {
            return await myConfirm(s);
        }
    };

    const sHintLabel = $('#quiz-hint_label').text();
    const sConfirm = $('#quiz-confirm_to_show_hint').text();

    [
        ['.scenario_title', '#quiz-label_title'],
        ['.private_sheet .difficulty', '#quiz-label_diff'],
        ['dd.feature', '#quiz-label_feature'],
        ['dd.story', '#quiz-label_story'],
    ].forEach(it => {
        let $dom = $(it[0]);
        if ($dom.length <= 0) return;
        let sLabel = $(it[1]).text();
        $dom.children().hide();
        let $tmp = $('<a href="javascript:void(0);">');
        $dom.append($tmp);
        $tmp.text(sHintLabel.replace('___LABEL___', sLabel));
        $tmp.on('click', async function() {
            const $self = $(this);
            const theConfirm = sConfirm.replace('___LABEL___', sLabel);
            const {result} = await confirmToShowHint(theConfirm);
            if (result == 'ok') {
                $self.parent().children().removeAttr('style');
                $self.remove();
            }
        });
    });

    let $dom = $('dd.advice');
    $dom.children().hide();
    let $tmp = $('<a href="javascript:void(0);">');
    $dom.append($tmp);
    $tmp.text($('#quiz-answer_label').text());
    $tmp.on('click', async function() {
        const $self = $(this);
        const {result} = await confirmToShowHint($('#quiz-confirm_to_show_answer').text());
        if (result == 'ok') {
            $self.parent().children().removeAttr('style');
            $self.remove();
        }
    });
}
