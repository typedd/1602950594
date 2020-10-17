// @flow
var assert = require("assert");
const foo = require("..");

// $FlowFixMe
describe("asdf", function () {
  // $FlowFixMe
  it("asdf", function () {
        const entries = [{ media: [] }];
    const result = foo(entries, { entriesAreCompleteWithoutMedia: true });
    assert.deepEqual(result, {
      completeEntries: entries, incompleteEntries: [],
    });
  });
  // $FlowFixMe
  it("asdf", function () {
    const result = foo([{ media: [1, 2, 3] }, { media: [] }]);
    assert.deepEqual(result, {
      completeEntries: [{ media: [1, 2, 3] }],
      incompleteEntries: [{ media: [] }],
    });
  });
});
