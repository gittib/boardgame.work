window.openPopup = async (className, preventHash) => {
    const selector = '.c-popup.'+className;
    const $popup = $(selector);

    if (preventHash) {
        if (localStorage.preventHash == preventHash) {
            return {
                'result': 'close',
            };
        }
        localStorage.preventHash = preventHash;
    }

    try {
        $('.c-popup[data-opened]').each(function() {
            const $self = $(this);
            $self.attr('data-opened', Number($self.attr('data-opened'))+1);
        });
        $popup.attr('data-opened', 1)

        return await new Promise((resolve, reject) => {
            $popup.find('.filter-area').off('click.open_popup').on('click.open_popup', function() {
                resolve({
                    'result': 'close',
                });
            });
            $popup.find('.close_button').off('click.open_popup').on('click.open_popup', function() {
                resolve({
                    'result': 'close',
                });
            });
            $popup.find('[data-result]').off('click.open_popup').on('click.open_popup', function() {
                const $self = $(this);
                resolve({
                    'result': $self.attr('data-result'),
                    'info': $self.attr('data-info'),
                });
            });
        });
    } finally {
        $('.c-popup[data-opened]').each(function() {
            const $self = $(this);
            const opened = Number($self.attr('data-opened'));
            if (opened <= 1) {
                $self.removeAttr('data-opened');
            } else {
                $self.attr('data-opened', opened-1);
            }
        });
    }
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
