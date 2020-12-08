const $body = document.getElementById('body');
const $btnopen = document.getElementById('btn-open');
const $btnclose = document.getElementById('btn-close');

$btnopen.addEventListener('click', function(){
    $body.classList.add('open-menu')
});

$btnclose.addEventListener('click', function(){
    $body.classList.remove('open-menu')
});