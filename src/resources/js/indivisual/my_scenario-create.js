if ($('body').hasClass('my_scenario-create')) {
    function updateLists() {
        setIndexNameToListItems();

        const crowdCriminalListHtml = $('.clone_base .js-crowd_criminal_list_html');
        let criminalListHtml = '<option></option>';
        $('select[data-key_name=character_id] option:selected').each(function() {
            const $option = $(this);
            criminalListHtml += '<option value="'+$option.val()+'">'+$option.text()+'</option>';
        });
        $('select.criminal').each(function() {
            const $select = $(this);
            const $selectIncident = $select.closest('.incident_wrapper').find('select.incident');
            const incidentId = Number($selectIncident.val());

            const charaId = $select.val();
            if (CROWD_INCIDENT_IDS.includes(incidentId)) {
                $select.html(crowdCriminalListHtml.clone());
            } else {
                $select.html(criminalListHtml);
            }
            $select.val(charaId);
        });
    }

    $(() => {
        $('[name=days]').click();
        updateLists();
    });

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
    $('.scenario_incident_list select.incident').on('click change', function() {
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

    function switchCrazyTruthSelect() {
        $('.for_crazy_truth').hide();
        $('select.rule_x').each(function() {
            if ($(this).val() == $('#crazy_truth_rule_id').attr('data-rule_id')) {
                $('.for_crazy_truth').show();
            }
        });
    }
    switchCrazyTruthSelect();
    $('select.rule_x').on('change', () => {
        switchCrazyTruthSelect();
    });

    $('.js-what_is_quiz').on('click', function() {
        myAlert($('#what_is_quiz').html());
    });

    $('.js-what_is_plus').on('click', function() {
        myAlert($('#what_is_plus_message').html());
    });
}
