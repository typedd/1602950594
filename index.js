// @flow
"use strict";

/*::
type Entry = { media?: Array< any > | {} };
*/
const foo /*: 
    (
        Array< Entry >,
        options?: { entriesAreCompleteWithoutMedia: boolean }
    ) => {
		completeEntries: Array< Entry >,
		incompleteEntries: Array< Entry >
	}
*/ = (
  entries,
  { entriesAreCompleteWithoutMedia } = {}
) => {
  if (entriesAreCompleteWithoutMedia === true) {
    return { completeEntries: entries, incompleteEntries: [] };
  }

  const completeEntry /*: (Entry) => boolean */ = (entry) =>
    (Array.isArray(entry.media) && entry.media.length > 0) ||
    Object.keys(entry.media || {}).length > 0;

  const completeEntries = [];
  const incompleteEntries = [];

  for (const entry of entries) {
    if (completeEntry(entry)) {
      completeEntries.push(entry);
    } else {
      incompleteEntries.push(entry);
    }
  }

  return {
    completeEntries,
    incompleteEntries,
  };
};

module.exports = foo;
