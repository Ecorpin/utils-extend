var assert = require('assert');
var util = require('../index');

describe('extend', function() {
  it('Two arguments', function() {
    var target = { k: 'v' };
    var source = { k: 'v2' };

    util.extend(target, source);

    assert.deepEqual(target, { k: 'v2' });
  });

  it('More arguments', function() {
    var target = { k: 'v' };
    var source = { k: 'v2' };
    var source2 = { k: 'v3' };

    util.extend(target, source, source2);

    assert.deepEqual(target, { k: 'v3' });
  });

  it('deep clone', function() {
    var target = {};
    var target2 = {
      k1: { age: 5 },
      k3: [{ age: 5 }]
    };
    var source = {
      k1: { k: 'v' },
      k2: [1, 2, 3 ],
      k3: [
        { k: 'v' },
        { k2: 'v2' },
        { k3: 'v3' }
      ]
    };

    util.extend(target, source);
    util.extend(target2, source);
    
    assert.deepEqual(target, source);
    assert.deepEqual(target2, {
      k1: { k: 'v', age: 5 },
      k2: [1, 2, 3],
      k3: [
        { k: 'v', age: 5},
        { k2: 'v2' },
        { k3: 'v3' }
      ]
    });
  });
});

describe('extend – prototype‐pollution guard', function() {
  it('should ignore __proto__ and not add own-property on target', function() {
    var target    = {};
    // craft a source object that tries to assign to __proto__
    var malicious = JSON.parse('{"__proto__": {"polluted": true}}');

    util.extend(target, malicious);

    // target itself must not gain 'polluted'
    assert.strictEqual(target.polluted, undefined);
  });

  it('should not pollute Object.prototype via __proto__', function() {
    // clean any leftover from previous runs
    delete Object.prototype.polluted;

    var malicious = { "__proto__": { "polluted": true } };
    util.extend({}, malicious);

    // global prototype must remain untouched
    assert.strictEqual(Object.prototype.polluted, undefined);
  });
});