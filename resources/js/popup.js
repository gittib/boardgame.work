window.openPopup = (className, preventHash) => {
    return new Promise((resolve, reject) => {
        if (preventHash) {
            if (localStorage.preventHash == preventHash) {
                resolve({
                    'result': 'close',
                });
            }
            localStorage.preventHash = preventHash;
        }

        const selector = '.c-popup.'+className;
        const $popup = $(selector);

        $popup.addClass('open');

        $popup.find('.filter-area').off('click.open_popup').on('click.open_popup', function() {
            $popup.removeClass('open');
            resolve({
                'result': 'close',
            });
        });
        $popup.find('.close_button').off('click.open_popup').on('click.open_popup', function() {
            $popup.removeClass('open');
            resolve({
                'result': 'close',
            });
        });
        $popup.find('[data-result]').off('click.open_popup').on('click.open_popup', function() {
            const $self = $(this);
            $popup.removeClass('open');
            resolve({
                'result': $self.attr('data-result'),
                'info': $self.attr('data-info'),
            });
        });
    });
};

window.myAlert = (msg, title = '', preventHash = null) => {
    $('.c-popup.js-popup-my_confirm .button_wrapper [data-result=cancel]').hide();
    $('.c-popup.js-popup-my_confirm .message').html(msg.replace("\\n", '<br>'));
    $('.c-popup.js-popup-my_confirm .title').text(title);
    return openPopup('js-popup-my_confirm', preventHash);
};

window.myConfirm = (msg, title = '') => {
    $('.c-popup.js-popup-my_confirm .button_wrapper [data-result=cancel]').show();
    $('.c-popup.js-popup-my_confirm .message').html(msg.replace("\\n", '<br>'));
    $('.c-popup.js-popup-my_confirm .title').text(title);
    return openPopup('js-popup-my_confirm');
};
