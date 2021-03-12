var diceContainer = document.getElementById("dice-container"), generateDie = document.getElementById("generate-die"), sumDice = document.getElementById("sum-dice"), rollDice = document.getElementById("roll-dice");
var diceArr = [];
generateDie.addEventListener("click", function () { return new Die(null); });
sumDice.addEventListener("click", function () {
    var sum = 0;
    diceArr.forEach(function (die) { return sum += die.value; });
    alert(sum);
});
rollDice.addEventListener("click", function () { return diceArr.forEach(function (die) { return die.roll(); }); });
var Die = /** @class */ (function () {
    function Die(value) {
        var _this = this;
        this.value = value;
        this.div = document.createElement("div");
        this.div.className = "dice";
        this.div.addEventListener("click", function () { return _this.roll(); });
        this.div.addEventListener("dblclick", function () {
            var index = diceArr.indexOf(_this);
            diceArr.splice(index, 1);
            diceContainer.removeChild(_this.div);
        });
        this.roll();
        diceContainer.appendChild(this.div);
        diceArr.push(this);
    }
    Die.prototype.roll = function () {
        var randomNum = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.div.innerHTML = this.value;
    };
    return Die;
}());
