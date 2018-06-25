function attachEventsListeners() {
        let daysElement=document.getElementById('days');
        let hoursElement=document.getElementById('hours');
        let minutesElement=document.getElementById('minutes');
        let secondsElement=document.getElementById('seconds');

        document.getElementById('daysBtn')
            .addEventListener('click', convertTime);
        document.getElementById('hoursBtn')
            .addEventListener('click', convertTime);
        document.getElementById('minutesBtn')
            .addEventListener('click', convertTime);
        document.getElementById('secondsBtn')
            .addEventListener('click', convertTime);

        function convertTime(event) {
            let initialTime=event.target.id;
            let time=0;
            switch (initialTime){
                case 'daysBtn':
                    time=Number(daysElement.value);
                    hoursElement.value=time*24;
                    minutesElement.value=time*1440;
                    secondsElement.value=time*86400;
                    break;
                case 'hoursBtn':
                    time=Number(hoursElement.value);
                    daysElement.value=time/24;
                    minutesElement.value=time*60;
                    secondsElement.value=time*3600;
                    break;
                case 'minutesBtn':
                    time=Number(minutesElement.value);
                    daysElement.value=time/1440;
                    hoursElement.value=time/60;
                    secondsElement.value=time*60;
                    break;
                case 'secondsBtn':
                    time=Number(secondsElement.value);
                    daysElement.value=time/86400;
                    hoursElement.value=time/3600;
                    minutesElement.value=time/60;
                    break;
            }
        }

        //One day is equal to 24 hoursElement/1440 minutesElement/86400 secondsElement.
}