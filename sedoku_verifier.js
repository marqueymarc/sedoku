//sedoku
var testrowg = "123456789";
var testrowbad = "123446789";
function shouldEq(testid, a, b) { if (a != b) console.log(testid + " failed");}
shouldEq("goodrow", sedoku1(testrowg), true);
shouldEq("badrow", sedoku1(testrowbad), false);

var testg = "154873296386592714729641835863725149975314628412968357631457982598236471247189563";
var testb = "158473296386592714729641835863725149972314628412968357631457982598236471247189563";

// a 9 character string test for a sedoku "group"
function sedoku1(str) {
  var arr = [0,0,0, 0,0,0, 0,0,0];

  return (str.length === 9) &&
      str.split('').map(function (s) {return arr[s.charAt(0) - '1'] = 1}) &&
      arr.every(function (i) {return i === 1});

}

// access for row index
function row(str, major, minor) {
  major -= 1;
  minor -= 1;
  return str.charAt(major*9 + minor);

}
//access for col index
function col(str, major, minor) {
  major -= 1;
  minor -= 1;
  return str.charAt(minor*9 + major);

}
//access by block major index
function block(str, major, minor) {
  major -= 1;
  minor -= 1;
  var x, y;
  y = Math.floor(major / 3) * 3  + minor % 3;
  x = Math.floor(minor / 3) + (major %3)* 3;
  return str.charAt(y + x*9);
}
// traverse through major row/col/block based on iterator
function traverse(input, iter, major) {
    var slice = Array(9);
    for (var minor = 1; minor <= 9; minor++) {
      slice[minor - 1] = iter(input, major, minor);
    }
  return slice.join('');

}
// test a string to see if it is a sedoku
function sedoku(input) {
  var iterators = {row: row, col: col, block: block};
  if (input.length != 81) {
    console.log("length is wrong");
    return false;
  }

  for (var key in iterators) {
    var iter = iterators[key];
    for (var major = 1; major <= 9; major++) {
      var slice = traverse(input, iter, major);

      if (!sedoku1(slice)) {
        console.log("failed on " + key + " " + major + ": "  + slice);
        return false;
      }
    }
  }
  return true;

}
//console.log("block");
//for (var i = 1; i <=9; i++)
//  console.log(traverse(testg, block, i));
//console.log("row");
//
//for (var i = 1; i <=9; i++)
//  console.log(traverse(testg, row, i));
//console.log("col");
//
//for (var i = 1; i <=9; i++)
//  console.log(traverse(testg, col, i));
shouldEq("good", sedoku(testg), true);
shouldEq("bad", sedoku(testb), false);
