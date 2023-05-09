if ($('body').hasClass('scenario-show')) {
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
}
