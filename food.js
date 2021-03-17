var milkImg;

class Food {
    constructor() {
        milkImg = loadImage("Milk.png");
    }

    getFoodCount() {
        var foodCountRef = database.ref("foodCount");
        foodCountRef.on("value",function(data) {
            foodCount = data.val; 
        });
    }

    deductCount(){

    }
}