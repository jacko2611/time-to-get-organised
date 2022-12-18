let today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

$(function() {
    function applyColors() {
        const times = $('.time-block');
        for (let i = 0; i < times.length; i++) {
            const timeBlock = times[i];
            const currentTime = dayjs().hour()
            const hour = timeBlock.getAttribute('data-hour');
            const hourNum = parseInt(hour);
            if (hourNum < currentTime) {
                timeBlock.classList.add("past");
            }
            else if (hourNum === currentTime) {
                timeBlock.classList.add("present");
            }
            else {
                timeBlock.classList.add("future");
            }
        }
    }

    function eventHandlers() {
        const times = $('.time-block');
        for (let i = 0; i < times.length; i++) {
            const timeBlock = times[i];
            const button = timeBlock.querySelector('button');
            const textArea = timeBlock.querySelector('textarea');
            const hour = timeBlock.getAttribute('data-hour');
            button.addEventListener('click', function() {
                localStorage.setItem(hour, textArea.value);
            });
        }
    }

    function load() {
        const times = $('.time-block');
        for (let i = 0; i < times.length; i++) {
            const timeBlock = times[i];
            const hour = timeBlock.getAttribute('data-hour');
            const savedEvents = localStorage.getItem(hour);
            const textArea = timeBlock.querySelector('textarea');
            textArea.value = savedEvents;  
        }
    }

    
applyColors();
eventHandlers();
load();
})
