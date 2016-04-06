# sedoku

My take on an interviewing favorite.  Verify that a given 9x9 table is a sedoku.
The approach here is:
1. define a verifier for a single 9 element "row", based on ensuring that all the possible entries appear.
2. traverse the proposed solution three ways, row, column, and block, with each one travesing the 0 rows/columns/blocks
2.1. in each of these traversals create the corrsesponding single "row" and verify it using 1. above

Note: 
The traverser functions are there to define the arithmentic used to pull out the element from the original board representation (a string) corresponding to the major and minor traversal indexes.  A major index would be for example a row numbers, and minor one would be the element inside the row.
