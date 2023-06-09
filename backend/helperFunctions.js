exports.filterTrains = (trains) => {
    let filteredTrains = []
    trains.map(train => {
        var date = new Date();
        if(date.getHours() - 12 > 0){
            if(date.getHours() >= train.departureTime.Hours){
                if(date.getMinutes()  >= train.departureTime.Minutes){
                    // Dont Push to array
                }
            }else{
                filteredTrains.push(train)
            }
        }
    })
    return filteredTrains;
}