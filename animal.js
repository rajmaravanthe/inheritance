var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.move = function (distance) {
        this.distance = distance;
        return this.name + " moved distance of " + this.distance + " km";
    };
    animal.prototype.makeSound = function (sound) {
        this.sound = sound;
        return "made sound " + this.sound;
    };
    return animal;
}());
var tiger = (function (_super) {
    __extends(tiger, _super);
    function tiger(name) {
        return _super.call(this, name) || this;
    }
    return tiger;
}(animal));
var elephant = (function (_super) {
    __extends(elephant, _super);
    function elephant(name) {
        return _super.call(this, name) || this;
    }
    return elephant;
}(animal));
var Tiger = new tiger('Tiger');
var Elephant = new elephant('Elephant');
document.write(Tiger.move(12) + " and " + Tiger.makeSound('gurrrrrrrr') + ", ");
document.write(Elephant.move(2) + " and " + Elephant.makeSound('Ummmmaaah'));
