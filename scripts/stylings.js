////////////////////////////////////////////////////////////////////////
// Overlayes stylings while minimally impacting original implementation/
////////////////////////////////////////////////////////////////////////

var dateButtons = 'button[id^=btn-]';

// Center button items for mobile collapsed navbar
$(dateButtons).addClass('w-100');

// Close navbar on click for collabed navbar
$(dateButtons).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});