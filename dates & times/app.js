// DATES AND TIMES

    // dates & times
    const now = new Date();
    console.log(now);
    console.log(typeof now);

    // year, month, day, times
    console.log('getfullYear:', now.getFullYear());
    console.log('getMonth:', now.getMonth());
    console.log('getDate:', now.getDate());
    console.log('getDay:', now.getDay());
    console.log('getHours:', now.getHours());
    console.log('getMinutes:', now.getMinutes());
    console.log('getSeconds:', now.getSeconds());

    // timestamps
    console.log('timestamp:', now.getTime());
    console.log(now.getTime());

    // date strings
    console.log(now.toDateString());
    console.log(now.toTimeString());
    console.log(now.toLocaleString());

    // to create not a current date:

    const before = new Date('February 1 2019 7:30:38');
    console.log(now.getTime(), before.getTime());

    const diff = now.getTime() - before.getTime();
    console.log(diff);

    const mins = Math.round(diff / 1000 / 60);
    console.log(mins);

    const hours = Math.round(mins / 60);
    console.log(hours);

    const days = Math.round(hours / 24);
    console.log(days);

    console.log('The post was written ${days} ago.')

    // converting timestamp into date objects
    const timestamp = 998730437389;
    console.log(new Date(timestamp));


    // BUILDING A CLOCK()

    const clock = document.querySelector('.clock');

    const tick = () => {
        const now = new Date();

        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
        
        const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
        `;

        clock.innerHTML = html;

    };

    setInterval(tick, 1000);


    // date-fns
    const newNow = new Date();
    // console.log(dateFns.isToday(newNow));

    //formatting options
    console.log(dateFns.format(now, 'YYYY'));
    console.log(dateFns.format(now, 'MMMM'));
    console.log(dateFns.format(now, 'MM'));
    console.log(dateFns.format(now, 'dddd'));
    console.log(dateFns.format(now, 'Do'));
    console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

    //comparing dates
    const newBefore = new Date('February 1 2019 12:00:19');

    console.log(dateFns.distanceInWords(newNow, newBefore));
    console.log(dateFns.distanceInWords(newNow, newBefore, {addSuffix: true}));