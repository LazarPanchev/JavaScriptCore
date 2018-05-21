function nowPlaying(arr) {
    let trackName=arr[0];
    let artistname=arr[1];
    let trackDuration=arr[2];
    console.log(`Now Playing: ${artistname} - ${trackName} [${trackDuration}]`);
    
}

nowPlaying(['Number One', 'Nelly', '4:09']);
nowPlaying(['Changes', '2Pac', '3:57']);