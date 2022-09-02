function timeSinceFR(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        let s = interval >=2 ? "s": ""
        return "il y a " + Math.floor(interval) + " an"+ s;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return "il y a " + Math.floor(interval) + " mois";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        let s = interval >=2 ? "s": ""

        return "il y a " + Math.floor(interval) + " jour"+ s;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        let s = interval >=2 ? "s": ""

        return "il y a " + Math.floor(interval) + " heure"+ s;
    }
    interval = seconds / 60;
    if (interval > 1) {
        let s = interval >=2 ? "s": ""
        return "il y a " + Math.floor(interval) + " minute"+ s;
    }
    let s = seconds >=2 ? "s": ""

    return "il y a " + Math.floor(seconds) + " seconde("+ s;
}

function timeSinceEN(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) return Math.floor(interval) + "year"+ (interval >=2 ? "s": "")+ " ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " month"+ (interval >=2 ? "s": "")+ " ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " day"+( interval >=2 ? "s": "")+ " ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hour"+( interval >=2 ? "s": "")+ " ago";
    interval = seconds / 60;
    if (interval > 1)  return Math.floor(interval) +" minute"+ ( interval >=2 ? "s": "")+ " ago";
    return Math.floor(seconds) +"second"+( seconds >=2 ? "s" : "")+ " ago";
}

function replace (str, occurrence, replacement, caseSensitive)
{
    var pattern = occurrence.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var flags = (caseSensitive === false ? 'gi' : 'g');
    var regex = new RegExp(pattern, flags);
    return str.replace(regex, String(replacement));
}
 function dateFormat(date, str) {
   
  
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dt = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthNum = (month + 1);
    var monthName = months[month];
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    console.log({year})
    var placeholders = [
        ['YYYY', year],
        ['YY', +year.toString().substring(2, 4)],
        ['MM', monthNum.toString().padStart(2, '0')],
        ['M', monthNum],
        ['DD', dt.toString().padStart(2, '0')],
        ['D', dt],
        ['hh', hours.toString().padStart(2, '0')],
        ['h', hours],
        ['mm', minutes.toString().padStart(2, '0')],
        ['m', minutes],
        ['ss', seconds.toString().padStart(2, '0')],
        ['s', seconds],
        ['ll', milliseconds.toString().padStart(2, '0')],
        ['XX', monthName],
        ['X', monthName.toString().substring(0, 3)],
        ['ZZ', days[day]],
        ['Z', days[day].toString().substring(0, 3)]
    ];
    var placeholder, occurrence;
    for (var i = 0, j = placeholders.length; i < j; i++) {
        placeholder = placeholders[i];
        occurrence = placeholder[0];
        if (str.indexOf(occurrence) === -1) {
            continue;
        }
        str = replace(str, occurrence, placeholder[1]);
    }
    return str;
}