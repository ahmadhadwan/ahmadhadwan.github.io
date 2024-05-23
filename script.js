function forcehttps() {
    if (location.protocol !== 'https:' &&
        location.protocol !== 'file:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
        //location.replace("https://youtu.be/dQw4w9WgXcQ?si=IClE_zPHLFJfK_uf");
    }
}

forcehttps();
