

$(document).mousemove(function (e) {
    $('#curser').css({ 'top': e.clientY - 270, 'left': e.clientX - 150 });
});

var words = [
    '',
    'ghost',
    'Death',
    'Pumpkin',
    'Devil',
    'Kill',
    'Scared',
    'Die',

];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};
$(function () { // after page load
    setInterval(function () {
        $('#random-word').fadeOut(500, function () {
            $(this).html(getRandomWord()).fadeIn(500);
        });

    }, 5000);
});