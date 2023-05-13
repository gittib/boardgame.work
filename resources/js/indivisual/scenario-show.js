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

    $('.show_initial_board_wrapper').on('click', () => {
        gtag('event', 'show_initial_board');
        $('.initial_board_wrapper').show();
        $('.show_initial_board_wrapper').hide();
    });
    $('.hide_initial_board_wrapper').on('click', () => {
        $('.initial_board_wrapper').hide();
        $('.show_initial_board_wrapper').show();
    });

    $('.js-like_button').on('click', async function() {
        const $self = $(this);
        $self.toggleClass('liked');
        try {
            const res = await ajaxSubmit($self.closest('form'));
            $self.find('.js-count').text(res.likes);
        } catch (e) {
            $self.toggleClass('liked');
        }
    });

    $('.js-bookmark_button').on('click', async function() {
        const $self = $(this);
        try {
            const res = await ajaxSubmit($self.closest('form'));
            $self.toggleClass('bookmarked');
            if (res.bookmarked) {
                myAlert(res.message);
            }
        } catch (e) {
        }
    });

    $('.js-please_login').on('click', function() {
        myAlert($(this).attr('data-msg'));
    });
}
