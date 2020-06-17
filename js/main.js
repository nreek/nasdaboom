import { CountUp } from './CountUp.min.js';

window.onload = function() {
    var countups = document.querySelectorAll('[data-count]')

    countups.forEach(count => {
        var countUp = new CountUp(count, count.attributes['data-count'].value);
        countUp.start();
    })
}