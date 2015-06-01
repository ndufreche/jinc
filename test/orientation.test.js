var
  test = require('tape'),
  Point = require('./../src/point'),
  orientation = require('./../src/orientation');

test('Orientation test 0', function (t) {
  t.plan(5);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([2, 1]);

  t.equal(orientation.getDelta(pointA, pointB, 0), 0);
  t.equal(orientation.getDelta(pointA, pointB, 25), 0 - 25);
  t.equal(orientation.getDelta(pointA, pointB, 98), 0 - 98);
  t.equal(orientation.getDelta(pointA, pointB, 203), 0 - 203);
  t.equal(orientation.getDelta(pointA, pointB, 306), 0 - 306);
});

test('Orientation test 1 to 44', {skip: true}, function (t) {
  t.plan(5);
});
  
test('Orientation test 45', function (t) {  
  t.plan(5);

  var
    pointA = Point([1, 1]),
    pointB = Point([2, 2]);

  t.equal(orientation.getDelta(pointA, pointB, 45), 0);
  t.equal(orientation.getDelta(pointA, pointB, 15), 45 - 15);
  t.equal(orientation.getDelta(pointA, pointB, 133), 45 - 133);
  t.equal(orientation.getDelta(pointA, pointB, 225), 45 - 225);
  t.equal(orientation.getDelta(pointB, pointA, 315), 45 - 315);
});

test('Orientation test 46 to 89', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 90', function (t) {
  t.plan(5);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([1, 2]);

  t.equal(orientation.getDelta(pointA, pointB, 90), 0);
  t.equal(orientation.getDelta(pointA, pointB, 15), 90 - 15);
  t.equal(orientation.getDelta(pointA, pointB, 165), 90 - 165);
  t.equal(orientation.getDelta(pointA, pointB, 235), 90 - 235);
  t.equal(orientation.getDelta(pointA, pointB, 354), 90 - 354);
});

test('Orientation test 91 to 134', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 135', function (t) {
  t.plan(5);
  
  var
    pointA = Point([2, 1]),
    pointB = Point([1, 2]);
  
  t.equal(orientation.getDelta(pointA, pointB, 135), 0);
  t.equal(orientation.getDelta(pointA, pointB, 47), 135 - 47);
  t.equal(orientation.getDelta(pointA, pointB, 165), 135 - 165);
  t.equal(orientation.getDelta(pointA, pointB, 254), 135 - 254);
  t.equal(orientation.getDelta(pointA, pointB, 315), 135 - 315);
});

test('Orientation test 136 to 179', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 180', function (t) {
  t.plan(5);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([2, 1]);
  
  t.equal(orientation.getDelta(pointB, pointA, 180), 0);
  t.equal(orientation.getDelta(pointB, pointA, 15), 180 - 15);
  t.equal(orientation.getDelta(pointB, pointA, 132), 180 - 132);
  t.equal(orientation.getDelta(pointB, pointA, 211), 180 - 211);
  t.equal(orientation.getDelta(pointB, pointA, 314), 180 - 314);
});

test('Orientation test 181 to 224', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 225', function (t) {
  t.plan(5);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([2, 2]);
  
  t.equal(orientation.getDelta(pointB, pointA, 225), 0);
  t.equal(orientation.getDelta(pointB, pointA, 45), 225 - 45);
  t.equal(orientation.getDelta(pointB, pointA, 175), 225 - 175);
  t.equal(orientation.getDelta(pointB, pointA, 195), 225 - 195);
  t.equal(orientation.getDelta(pointB, pointA, 318), 225 - 318);
});

test('Orientation test 226 to 269', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 270', function (t) {
  t.plan(5);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([1, 2]);
  
  t.equal(orientation.getDelta(pointB, pointA, 270), 0);
  t.equal(orientation.getDelta(pointB, pointA, 35), 270 - 35);
  t.equal(orientation.getDelta(pointB, pointA, 92), 270 - 92);
  t.equal(orientation.getDelta(pointB, pointA, 205), 270 - 205);
  t.equal(orientation.getDelta(pointB, pointA, 286), 270 - 286);
});

test('Orientation test 271 to 314', {skip: true}, function (t) {
  t.plan(5);
});

test('Orientation test 315', function (t) {
  t.plan(5);
  
  var
    pointA = Point([2, 1]),
    pointB = Point([1, 2]);
  
  t.equal(orientation.getDelta(pointB, pointA, 315), 0);
  t.equal(orientation.getDelta(pointB, pointA, 16), 315 - 16);
  t.equal(orientation.getDelta(pointB, pointA, 135), 315 - 135);
  t.equal(orientation.getDelta(pointB, pointA, 195), 315 - 195);
  t.equal(orientation.getDelta(pointB, pointA, 343), 315 - 343);
});

test('Orientation test 316 to 359', {skip: true}, function (t) {
  t.plan(5);
});

test('Distance test', function (t) {
  t.plan(2);
  
  var
    pointA = Point([1, 1]),
    pointB = Point([2, 2]);
  
  t.equal(orientation.getDistance(pointA, pointB), Math.sqrt(2) * 100000);
  
  pointA = Point([1, 1]);
  pointB = Point([3, 4]);
  
  t.equal(orientation.getDistance(pointA, pointB), Math.sqrt(13) * 100000);
});
