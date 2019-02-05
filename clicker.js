var $input = document.querySelectorAll('.bloko-icon-link');

console.log('Started');

function link_clicker() {
    $input.forEach(function (element) {
        if (element.disabled !== null && !element.disabled) {
            element.click();
            console.log('clicked');
        } else {
            console.log('wait');
        }
    });
}

setInterval(link_clicker, 60000);

