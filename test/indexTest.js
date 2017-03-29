const assert = require('assert');
const mapFilter = require('./../index.js')

describe('mapFilter', function() {
  it('should be able to return all original values if no fn is specified', function() {
    assert.equal(3, mapFilter([1,2,3]).length);
    assert.equal(1, mapFilter([1,2,3])[0]);
    assert.equal(2, mapFilter([1,2,3])[1]);
    assert.equal(3, mapFilter([1,2,3])[2]);
  });

  it('should be able to exclude values', function() {
    assert.equal(2, mapFilter([1,2,3], v => {
      if (v < 3) {
        return v
      }
    }).length);
    assert.equal(1, mapFilter([1,2,3], v => {
      if (v < 3) {
        return v
      }
    })[0]);
    assert.equal(2, mapFilter([1,2,3], v => {
      if (v < 3) {
        return v
      }
    })[1]);
  });

  it('should be able to map values', function() {
    let people = [{
      age: 20,
      name: 'boris'
    }, {
      age: 21,
      name: 'julia'
    }, {
      age: 50,
      name: 'old sport'
    }]
    let v = mapFilter(people, p => {
      if (p.age < 30) {
        return {name: p.name}
      }
    })


    assert.equal(2, v.length);
    assert.equal('boris', v[0].name);
    assert.equal(undefined, v[0].age);
  });

  it('should be able to handle falsey values', function() {
    let values = [0, 1, 2, 3]

    let v = mapFilter(values, v => {
      if (v > 0) {
        return !(v % 2)
      }
    })


    assert.equal(3, v.length);
    assert.equal(false, v[0]);
    assert.equal(true, v[1]);
    assert.equal(false, v[2]);
  });

});
