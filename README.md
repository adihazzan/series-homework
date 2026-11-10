# series-homework

# SeriesHub Project & Bug Fixes
A series data management project (SeriesHub) containing data retrieval and update services, alongside bug fixes and immutability enforcement.
## Running the Tests
To run the project's automated test suite, ensure Node.js is installed and run the following command in your terminal:
```bash
node check.js

1)Using { ...show } creates only a shallow copy at the top level,
meaning the nested properties (such as the seasons array and the season/episode objects inside it)
still point to the same memory references as the original data. To prevent mutating the original source (Mutation),
you must create a new copy at every level you touch: clone the show object, map and recreate the seasons array and season objects,
and spread (...) the episodes array when adding the new episode.

2.The colleague used { ...show } but accessed the internal array directly via show.seasons[0] and performed a .push() operation on it.
Since the copying was only shallow, the original seasons and episodes array was not duplicated—it remained shared with the original data.
Therefore, the .push() operation physically modified the original data in memory. As a result, the testing mechanism detected a data mutation and failed.
