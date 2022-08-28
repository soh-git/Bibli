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
    let s = interval >=2 ? "s": ""

    return "il y a " + Math.floor(seconds) + " seconde("+ s;
}