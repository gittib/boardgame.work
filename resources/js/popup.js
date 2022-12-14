window.openPopup = className => {
    return new Promise((resolve, reject) => {
        const selector = '.c-popup.'+className;
        const $popup = $(selector);

        $('.c-popup').removeClass('open');
        $popup.addClass('open');

        $popup.find('.popup-filter-area').off('click').on('click', function() {
            $popup.removeClass('open');
            resolve({
                'result': 'close',
            });
        });
        $popup.find('.close_button').off('click').on('click', function() {
            $popup.removeClass('open');
            resolve({
                'result': 'close',
            });
        });
    });
};
