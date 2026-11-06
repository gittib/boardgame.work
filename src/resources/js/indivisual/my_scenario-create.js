if ($('body').hasClass('my_scenario-create')) {
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
