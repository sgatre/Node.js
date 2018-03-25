var util = require('util');

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function() {
    console.log('Hello' + this.name);
  };
}
Base.prototype.showName = function() {
  console.log(this.name);
};

function Sub() {
  this.name = "sub";
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
// ObjSub.showName();
console.log(objSub);

//util.inspect
var util = require('util');
function Person() {
  this,name = 'byvoid';
  this.toString = function() {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//util.isArray(object)
util.isArray([])
util.isArray(new Array)
util.isArray({}) // false

// util.isRegExp(object) 判断是否是正则表达式
// util.isDate(object) 判断是否是日期
util.isDate(new Date()) //true
util.isDate(Date()) //false
util.isDate({}) //false

util.isError(new Error())
util.isError(new TypeError())
