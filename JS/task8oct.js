var ratings = [];

function rating() {
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;

    var obj = {
        name: val1,
        rating: val2
    };

    ratings.push(obj);

    console.log(ratings);
}

function inspectRatings() {
    var val3 = document.getElementById("val3").value;

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i].name === val3) {
            console.log(ratings[i].rating);
        }
    }
}

function updateRating() {
    var val4 = document.getElementById("val4").value;
    var val5 = document.getElementById("val5").value;
    for (let i = 0; i < ratings.length; i++) {
        if(ratings[i].name === val4) {
            ratings[i].rating = val5;
            console.log("Rating updated successfully");
        }
    }
}

function deleteRating() {
    var val6 = document.getElementById("val6").value;
    for (let i = 0; i < ratings.length; i++) {
        if(ratings[i].name === val6) {
            ratings.splice(i, 1);
            console.log("Rating deleted successfully");
        }
    }
}