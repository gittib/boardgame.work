if ($('body').hasClass('my_scenario-create')) {
    function updateLists() {
        setIndexNameToListItems();

        let criminalListHtml = '<option></option>';
        $('select[data-key_name=character_id] option:selected').each(function() {
            const $option = $(this);
            criminalListHtml += '<option value="'+$option.val()+'">'+$option.text()+'</option>';
        });
        $('select.criminal').each(function() {
            const $select = $(this);
            const charaId = $select.val();
            $select.html(criminalListHtml);
            $select.val(charaId);
        });
    }

    updateLists();

    $('[name=days]').on('change click', function() {
        const d = $(this).val();
        $('.scenario_incident_list > li[data-day]').each(function() {
            const $dom = $(this);
            if ($dom.attr('data-day') <= d) {
                $dom.show();
            } else {
                $dom.hide();
            }
        });
    });
    $('[name=days]').click();

    $('.scenario_character_list').on('click', '.character_row .js-chara_delete_button', async function() {
        const $self = $(this);
        const charaName = $self.closest('.character_row').find('select[data-key_name=character_id] option:selected').text();
        const msg = CHARA_DELETE_CONFIRM_MESSAGE.replace('___CHARA___', charaName);
        if ($('.character_row').length > 1) {
            const {result} = await myConfirm(msg);
            if (result == 'ok') {
                $self.closest('.character_row').remove();
                updateLists();
            }
        }
    });
    $('.scenario_character_list').on('click change', 'select[data-key_name=character_id]', function() {
        updateLists();
    });
    $('.scenario_character_list').on('change', '.character_row select[data-key_name=character_id]', function() {
        $(this).closest('.character_row').removeClass('is-error');
    });
    $('.js-chara_add_button').on('click', function() {
        const $dom = $('.character_row:last').clone();
        $dom.removeClass('is-error');
        $('.scenario_character_list').append($dom);
        updateLists();
    });
}
