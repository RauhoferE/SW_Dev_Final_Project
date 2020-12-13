const assert = require('assert');

describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 because text does not contain y', function () {
            let text = 'some-text';
            assert.strictEqual(-1, text.indexOf('y'));
        });
    });
});