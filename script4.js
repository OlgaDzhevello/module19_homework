// ---------------- Задание 4 ---------------------
// Реализуйте консольное приложение на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function Device(name, power) {
    this.name = name,
    this.power = power,         // мощность в ваттах
    this.isOn = false         // выключен 
}

Device.prototype.turnOn = function () {
    this.isOn = true;
}

Device.prototype.turnOff = function () {
    this.isOn = false
}

function Phone(name, power, subclass, color) {
    this.name = name,
    this.power = power,         // мощность в ваттах
    this.subclass = subclass ||'Phone',
    this.color = color || 'Black'
}

Phone.prototype = new Device;

const myIphone = new Phone ('Iphone', 50, 'Mobile', 'White');
const homePhone = new Phone ('homePhone', 40);


homePhone.turnOn();     //  включить домашний телефон

console.log(myIphone, homePhone);

const computer = new Device('Desktop', 300);
const miniPC = new Device('miniPC', 50);

miniPC.turnOn       //  поставить мини ПК на зарядку

console.log(computer, miniPC);
 
