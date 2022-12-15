window.openPopup = className => {
    return new Promise((resolve, reject) => {
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
