require('./bootstrap');
require('./upload');

window.setIndexNameToListItems = () => {
    let idx = 1;
    document.querySelectorAll('[data-index]').forEach(dom => {
        dom.setAttribute('data-index', idx++);
    });
    document.querySelectorAll('[data-index] [data-list_name][data-key_name]').forEach(dom => {
        const name = dom.getAttribute('data-list_name')+'['+dom.closest('[data-index]').getAttribute('data-index')+']['+dom.getAttribute('data-key_name')+']';
        dom.setAttribute('name', name);
    });
};

$('form .submit_button').on('click', function() {
    $(this).closest('form').submit();
});
