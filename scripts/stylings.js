// Close navbar on click for collapsed navbar
$('button[id^=btn-]').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});