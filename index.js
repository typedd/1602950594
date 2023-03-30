'use strict';

// TODO: type this function
// TODO: refactor this function
module.exports = (entries, {entriesAreCompleteWithoutMedia} = {}) => {
	if (entriesAreCompleteWithoutMedia === true) {
		return {completeEntries: entries, incompleteEntries: []};
	}

	return entries.reduce(
		(acc, entry) => {
			if (Array.isArray(entry.media)) {
				if (entry.media.length > 0) {
					acc.completeEntries.push(entry);
				} else {
					acc.incompleteEntries.push(entry);
				}

				return acc;
			}

			if (Object.keys(entry.media || {}).length > 0) {
				acc.completeEntries.push(entry);
			} else {
				acc.incompleteEntries.push(entry);
			}

			return acc;
		},
		{completeEntries: [], incompleteEntries: []}
	);
};
