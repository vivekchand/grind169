export const data = [
  {
    "Url": "https://leetcode.com/problems/two-sum/",
    "Problem": "Two Sum",
    "Summary": "use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice;"
  },
  {
    "Url": "https://leetcode.com/problems/valid-parentheses/",
    "Problem": "Valid Parentheses",
    "Summary": "push opening brace on stack, pop if matching close brace, at end if stack empty, return true;"
  },
  {
    "Url": "https://leetcode.com/problems/merge-two-sorted-lists",
    "Problem": "Merge two sorted lists",
    "Summary": "insert each node from one list into the other"
  },
  {
    "Url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
    "Problem": "Best time to Buy & Sell stock",
    "Summary": "find local min and search for local max, sliding window"
  },
  {
    "Url": "https://leetcode.com/problems/valid-palindrome",
    "Problem": "Valid Palindrome",
    "Summary": "left, right pointers, update left and right until each points at alphanum, compare left and right, continue until left >= right, don’t distinguish between upper/lowercase;"
  },
  {
    "Url": "https://leetcode.com/problems/invert-binary-tree/",
    "Problem": "Invert Binary Tree",
    "Summary": "recursive dfs to invert subtrees; bfs to invert levels, use collections.deque; iterative dfs is easy with stack if doing pre-order traversal"
  },
  {
    "Url": "https://leetcode.com/problems/valid-anagram",
    "Problem": "Valind Anagram",
    "Summary": "hashmap to count each char in str1, decrement for str2;"
  },
  {
    "Url": "https://leetcode.com/problems/binary-search/",
    "Problem": "Binary Search",
    "Summary": "divide array into two halves, check if target matches with mid, if not update high / low based on target < or > mid element"
  },
  {
    "Url": "https://leetcode.com/problems/flood-fill",
    "Problem": "Flood Fill",
    "Summary": "call a recursive function fill passing oldColor & newColor argument .. within function check if not already newColor then fill it & explore the neighbors by checking the boundary"
  },
  {
    "Url": "https://leetcode.com/problems/maximum-subarray",
    "Problem": "Maximum Subarray",
    "Summary": "pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix"
  },
  {
    "Url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
    "Problem": "Lowest common ancestor of a binary search tree",
    "Summary": "compare p, q values to curr node, base case: one is in left, other in right subtree, then curr is lca;"
  },
  {
    "Url": "https://leetcode.com/problems/balanced-binary-tree",
    "Problem": "Balanced Binary tree",
    "Summary": "isBalanced calls maxHeight recrusively by checking if abs maxHeight of left & right is not greater than 1 ... also isBalanced is called recursively for left & right nodes"
  },
  {
    "Url": "https://leetcode.com/problems/linked-list-cycle",
    "Problem": "Linked List Cycle",
    "Summary": "dict to remember visited nodes; two pointers at different speeds, if they meet there is loop"
  },
  {
    "Url": "https://leetcode.com/problems/implement-queue-using-stacks",
    "Problem": "Implement Queue Using Stacks",
    "Summary": "Keep 2 stacks, on push - push all items from s1 into s2, push new item into s1 & again push back all items into s1 from s2; on pop - pop the top element in s1, if s1 is not empty, store the front element by peeking intot it; on peek - just return the front element; on empty - check if s1 is empty"
  },
  {
    "Url": "https://leetcode.com/problems/first-bad-version",
    "Problem": "First Bad Version",
    "Summary": "Use binary search; find mid, check if isBadVersion(mid) && isBadVersion(mid-1) - then high = mid -1; else if isBadVersion(mid) then mid else low = mid + 1;"
  },
  {
    "Url": "https://leetcode.com/problems/ransom-note",
    "Problem": "Ransom Note",
    "Summary": "Create a map of character & count for chars in magazine string; Now keep a counter of removal & increment whenever char in ransomeNote is in the map; return true if removal count is equal to  length of ransom note string"
  },
  {
    "Url": "https://leetcode.com/problems/climbing-stairs",
    "Problem": "Climbing Stairs",
    "Summary": "subproblem find (n-1) and (n-2), sum = n;"
  },
  {
    "Url": "https://leetcode.com/problems/longest-palindrome",
    "Problem": "Longest Palindrome",
    "Summary": "Create a map of character & count of chars; now iterate throw these counts & increment ans by keyCount / 2 * 2; if ans is now even & keyCount is odd - then increment ans by 1; return ans;"
  },
  {
    "Url": "https://leetcode.com/problems/reverse-linked-list",
    "Problem": "Reverse Linked List",
    "Summary": "iterate through maintaining cur and prev; recursively reverse, return new head of list;"
  },
  {
    "Url": "https://leetcode.com/problems/majority-element",
    "Problem": "Majority Element",
    "Summary": "find the candidate by maintaining a count variable; go through all nums - if count becomes zero; make the num candidate; increment count by 1 if candidate is num & else decrement by -1; return candidate"
  },
  {
    "Url": "https://leetcode.com/problems/add-binary",
    "Problem": "Add Binary",
    "Summary": "Sum each char from right to left by subtracting from '0'; append to res the sum % 2 & carry would be sum / 2 & once out of while if carry != 0 then append 1 to res; return reversed res; (reversed because we are iterating from right to left);"
  },
  {
    "Url": "https://leetcode.com/problems/diameter-of-binary-tree",
    "Problem": "Diameter of Binary Tree",
    "Summary": "diameter is same as longest path of binary tree; do an post order traversal on longestPath to find the max path;"
  },
  {
    "Url": "https://leetcode.com/problems/middle-of-the-linked-list",
    "Problem": "Middle of the Linked List",
    "Summary": "fast pointer will be initialized head.next.next & slow head; fast will run till fast !=null and fast.next != null; fast will ofcourse step twice & slow once; slow.next would be middle of linked list;"
  },
  {
    "Url": "https://leetcode.com/problems/maximum-depth-of-binary-tree",
    "Problem": "Maximum Depth of Binary Tree",
    "Summary": "Calling the same func recursively with Math.max for root.left & root.left + 1 would give the max depth;"
  },
  {
    "Url": "https://leetcode.com/problems/contains-duplicate",
    "Problem": "Contains Duplicate",
    "Summary": "put in set; if another number exisits in set return true;"
  },
  {
    "Url": "https://leetcode.com/problems/meeting-rooms",
    "Problem": "Meeting rooms",
    "Summary": "sort intervais; if prev interval end > next interval start then is conflicting - return false;"
  },
  {
    "Url": "https://leetcode.com/problems/roman-to-integer",
    "Problem": "Roman to Integer",
    "Summary": "put in map all symbol & their value; traverse from right-2 to left; if value at curr < value at prev -> decrement res with current value else increment with current value; update prev value; return result;"
  },
  {
    "Url": "https://leetcode.com/problems/backspace-string-compare",
    "Problem": "Backspace string compare",
    "Summary": "Let i & j be pointers of both strings pointing to last character; loop infinite - keep a counter back initialized to 0 ; decrement i until back > 0 or char is '#'; do same with j for other string; now compare if both char are same - then decrement i & j; if not break out of loop -- if both i & j are -1 then return true;"
  },
  {
    "Url": "https://leetcode.com/problems/counting-bits",
    "Problem": "Counting Bits",
    "Summary": "Can be solved as a dynamic programming problem; initialize dp[0] = 0; offset = 1; loop i from 1 to n; if offset *2 == i -> offset = i; dp[i] = 1 + dp[i - offset]; return dp;"
  },
  {
    "Url": "https://leetcode.com/problems/same-tree",
    "Problem": "Same Tree",
    "Summary": "if both p & q are null - then good; if either p or q is null - then bad; if p val is not equal to q val - then bad; return same recursive check for p.left, q.left & p.right. q.right;"
  },
  {
    "Url": "https://leetcode.com/problems/number-of-1-bits",
    "Problem": "Number of 1 Bits",
    "Summary": "count the right most bit; right shift after counting; return total count;"
  },
  {
    "Url": "https://leetcode.com/problems/longest-common-prefix",
    "Problem": "Longest Common Prefix",
    "Summary": "find minLength of all strings; Now do a binary search (low=0, high=minLenth) of isCommonPrefix(strs[], len) - which compares all strings if there is a common prefix from 0 to len - 1; if there is a match set low = mid + 1 (to increase the size of string); if not a match set high = mid - 1; return the longest common substring from 0 to (low + high) / 2;"
  },
  {
    "Url": "https://leetcode.com/problems/single-number",
    "Problem": "Single Number",
    "Summary": "set duplicate number x to 0; loop throw all numbers & xor number with x; return x;"
  },
  {
    "Url": "https://leetcode.com/problems/palindrome-linked-list",
    "Problem": "Palindrome Linked List",
    "Summary": "add all numbers into a list; now again loop & check if first == last; first = first.next; last--;"
  },
  {
    "Url": "https://leetcode.com/problems/move-zeroes/",
    "Problem": "Move Zeroes",
    "Summary": "keep a counter of zeros; at same time keep a separate index to store in nums; fill zeros until index becomes zeroCount;"
  },
  {
    "Url": "https://leetcode.com/problems/symmetric-tree/",
    "Problem": "Symmetric Tree",
    "Summary": "just do isSameTree(root.left, root.right);"
  },
  {
    "Url": "https://leetcode.com/problems/missing-number",
    "Problem": "Missing Number",
    "Summary": "expectedXor for i=0 to n; actualXor for all num; return expectedXor ^ actualXor;"
  },
  {
    "Url": "https://leetcode.com/problems/palindrome-number/",
    "Problem": "Palindrome Number",
    "Summary": "reverse number & check if same as original number"
  },
  {
    "Url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "Problem": "Convert Sorted Array to Binary Search Tree",
    "Summary": "do a preOrder traversal on the numbers;"
  },
  {
    "Url": "https://leetcode.com/problems/reverse-bits",
    "Problem": "Reverse Bits",
    "Summary": "keep left shifting result; if the bit is 1; increment result; right shift n; return result;"
  },
  {
    "Url": "https://leetcode.com/problems/subtree-of-another-tree",
    "Problem": "Subtree of Another Tree",
    "Summary": "if root is null then false; if sameTree(root, subRoot) return true;"
  },
  {
    "Url": "https://leetcode.com/problems/squares-of-a-sorted-array",
    "Problem": "Squares of a Sorted Array",
    "Summary": "Initialize left = 0 & right = n - 1; compare abs value from both ends if left value is less than right value; store product of right value in result[i] if not store product of left value; return result;"
  },
  {
    "Url": "https://leetcode.com/problems/insert-interval",
    "Problem": "Insert Interval",
    "Summary": "create a new linked list; store intervals until start of interval is less than start of newInterval; if newInterval start is after interval end; then just add the interval else merge interval by finding max of end; now until the end of intervals check in above fashion & return list converted to an array;"
  },
  {
    "Url": "https://leetcode.com/problems/01-matrix/",
    "Problem": "01 Matrix",
    "Summary": "have a queue of int[] to store r & c; add into a queue the r & c where mat[r][c] is 0 else set as -1;  now loop until queue is empty in all 4 directions & ensure if value other than -1 is ignored; then store mat[next_r][next_c] as mat[r][c] + 1 and put the next_r & next_c in queue;"
  },
  {
    "Url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "Problem": "K Closest Points to Origin",
    "Summary": "put into heap the distance from origin of all points upto the size becomes k; when > k pop & push new; return the elements from heap as a array;"
  },
  {
    "Url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "Problem": "Longest Substring Without Repeating Characters",
    "Summary": "keep a set for window; while end is less than length of string check if set does not already contain the character if so add it & check longest else remove the character from set;"
  },
  {
    "Url": "https://leetcode.com/problems/3sum/",
    "Problem": "3 Sum",
    "Summary": "sort nums; set target as 0-nums[i]; now search between low(i+1) and high(nums.length-1) when their sum match target - add to list; now until numbers are same - low++ or high--; and then explicitly increment low or decrement high;"
  },
  {
    "Url": "https://leetcode.com/problems/binary-tree-level-order-traversal",
    "Problem": "Binary Tree Level Order Traversal",
    "Summary": "Keep a map of level & list of integers; now do a tree traversal preferably inorder & push in map based on level; & return the values of map;"
  },
  {
    "Url": "https://leetcode.com/problems/clone-graph/",
    "Problem": "Clone Graph",
    "Summary": "Create a map visited; do a dfs by first cloning and add the new node in map; explore neighbors by recursively calling it;"
  },
  {
    "Url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "Problem": "Evaluate Reverse Polish Notation",
    "Summary": "push if number else for symbol - pop 2 values & do the operation in symbol & push the result; pop & return the last element in stack;"
  },
  {
    "Url": "https://leetcode.com/problems/course-schedule/",
    "Problem": "Course Schedule",
    "Summary": "Create a adj map of pre-requisites from end -> [start1, start2, start3]; indegree[start1]++; now iterate through indegrees to find if any is 0 - if so add into a queue; now until queue becomes empty check indegree[cur] == 0 - if so increment count; decrement indegree of all of cur neighbours & if indegree[nei] becomes zero - add it to queue; return true if count == numCourses;"
  },
  {
    "Url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "Problem": "Implement Trie (Prefix Tree)",
    "Summary": "define TrieNode which has a map of character & TrieNode; a boolean isWord & string word itself after reaching the end; Now to implement Trie class - insert can check if char already exisits then use it to jump & add missing character; for search - do similar approach & startsWith -- keep going until characters are matching;"
  },
  {
    "Url": "https://leetcode.com/problems/coin-change",
    "Problem": "Coin Change",
    "Summary": "create a dp array of size amount+1; fill the array with amount+1; loop through 1 to amount & for all coin -> if i - coint > 0 then dp[i] = Math.max(dp[i], dp[i- coin] + 1)"
  },
  {
    "Url": "https://leetcode.com/problems/product-of-array-except-self/",
    "Problem": "Product of Array Except Self",
    "Summary": "make two passes, first in-order, second in-reverse, to compute products"
  },
  {
    "Url": "https://leetcode.com/problems/min-stack/",
    "Problem": "Min Stack",
    "Summary": "create StackItem which stores val & minVal; on every push update minVal & store val; on pop - just pop; on top - just peek & return val; on min - just peek & return minVal;"
  },
  {
    "Url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "Problem": "Validate Binary Search Tree",
    "Summary": "trick is use built in python min/max values float(\"inf\"), \"-inf\", as parameters; iterative in-order traversal, check each val is greater than prev;"
  },
  {
    "Url": "https://leetcode.com/problems/number-of-",
    "Problem": "Number of Islands",
    "Summary": "foreach cell, if cell is 1 and unvisited run dfs, increment cound and marking each contigous 1 as visited"
  },
  {
    "Url": "https://leetcode.com/problems/rotting-oranges/",
    "Problem": "Rotting Oranges",
    "Summary": "Use a queue to store row, col where grid row col is 2; at the same time count fresh oranges where grid row col is 1; add into queue a large row col 999 999; now loop until queue is empty - store row col; check if row reaches 999 - then increment minutesElapsed & if queue is not empty add another 999 pair; for the case row is not 999 - explore in all the 4 directions where orange is fresh - make it rotten & decreement freshOranges & add it to queue; finally return minutesElapsed if freshOranges == 0 else -1;"
  },
  {
    "Url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "Problem": "Search in Rotated Sorted Array",
    "Summary": "at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half"
  },
  {
    "Url": "https://leetcode.com/problems/combination-sum/",
    "Problem": "Combination Sum",
    "Summary": "initialize a result array list; backtrack by decrementing remain to meet target with a tempList; use i instead of i+1 to use same element multiple times; return the result;"
  },
  {
    "Url": "https://leetcode.com/problems/permutations/",
    "Problem": "Permutations",
    "Summary": "initialize a result array list; backtrack checking if size of tempList is equal to length of nums - if so add it to result; else iterate through all the element, skipping duplicates add element to tempList, backtrack & remove again from tempList; return the result;"
  },
  {
    "Url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "Problem": "Lowest common ancestor of a binary tree",
    "Summary": "check if root is null or p == root or q == root - then return root;  recursively find lowest common ancestor for root.left & store in left & same for root.right & store in right; check if left == null - then return right else check if right == null then return left else root;"
  },
  {
    "Url": "https://leetcode.com/problems/time-based-key-value-store/",
    "Problem": "Time Based Key Value Store",
    "Summary": "Use a tree map to store timestamp - value; use floorKey to retrieve the closest floor value"
  },
  {
    "Url": "https://leetcode.com/problems/accounts-merge/",
    "Problem": "Accounts Merge",
    "Summary": "Use Union-Find; First create a map of emailId -> accId ; if existing emailId then union it; iterate through all accIds for each accId find absolute parent & store the email; return the merged accounts;"
  },
  {
    "Url": "https://leetcode.com/problems/sort-colors/",
    "Problem": "Sort Colors",
    "Summary": "Sort an array of 0s, 1s, and 2s in linear time by initializing three pointers, low, mid, and high to 0, 0, and nums.length - 1 respectively and iterating through the array, swapping 0s with the element at the low pointer, swapping 2s with the element at the high pointer and only incrementing mid for 1s."
  },
  {
    "Url": "https://leetcode.com/problems/word-break/",
    "Problem": "Word Break",
    "Summary": "Using a boolean dp array of size (n+1) where n is the length of the input string, where dp[i] is true if the substring s[0...i-1] can be segmented into a space-separated sequence of one or more dictionary words, and check for each substring of the input string if it is present in the dictionary and update the dp array accordingly."
  },
  {
    "Url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "Problem": "Partition Equal Subset Sum",
    "Summary": "The solution uses Dynamic Programming to check whether it is possible to partition the given array into two subsets with equal sum by creating a 2D dp array and filling it up using a nested loop and checking the sum using first i-1 elements and the current element."
  },
  {
    "Url": "https://leetcode.com/problems/string-to-integer-atoi/",
    "Problem": "String to Integer (atoi)",
    "Summary": "Iterate through the characters of the string, starting from the first non-whitespace character, taking into account the sign of the number, and checking for integer overflow, it will return the final integer value"
  },
  {
    "Url": "https://leetcode.com/problems/spiral-matrix/",
    "Problem": "Spiral Matrix",
    "Summary": "Iterate through the matrix in a spiral pattern using four pointers to keep track of the four boundaries (top, bottom, left, and right) of the matrix, adding the elements of the current top row, right column, bottom row, and left column to the result list, and moving the boundaries accordingly."
  },
  {
    "Url": "https://leetcode.com/problems/subsets/",
    "Problem": "Subsets",
    "Summary": "The solution generates all subsets of a given array of integers using a backtracking approach by adding elements to a current subset and recursively calling the backtracking function until all elements have been added, then removing the last element and moving on to the next one until all subsets have been generated."
  },
  {
    "Url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "Problem": "Binary Tree Right Side View",
    "Summary": "The solution uses BFS to get the right-side view of a binary tree by adding nodes to a queue and keeping track of the last node of each level, adding its value to the result list, then continuing to the next level until the queue is empty."
  },
  {
    "Url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "Problem": "Longest Palindromic Substring",
    "Summary": "The solution finds the longest palindromic substring in a given string by expanding around each possible center and updating the substring's length and starting index if a longer one is found."
  },
  {
    "Url": "https://leetcode.com/problems/unique-paths/",
    "Problem": "Unique Paths",
    "Summary": "The solution uses dynamic programming to find the number of unique paths from the top-left to the bottom-right of a grid by updating the number of paths at each cell as the sum of paths from its top and left cells."
  },
  {
    "Url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    "Problem": "Construct Binary Tree from Preorder and Inorder Traversal",
    "Summary": "This solution implements a function to build a binary tree from preorder and inorder traversal arrays. The function first builds a map to store the value and its index in the inorder array. Then, it recursively constructs the tree using the preorder array by selecting the next preorder value as the root and using the map to find its corresponding index in the inorder array to divide the inorder array into two subtrees."
  },
  {
    "Url": "https://leetcode.com/problems/container-with-most-water",
    "Problem": "Container With Most Water",
    "Summary": "The solution uses a two pointer approach to find the maximum area of a container that can be formed between two lines among a given set of lines. It starts from the first and last line, calculates the area and moves the pointer with the smaller height towards the center, repeating the calculation until both pointers meet. The solution returns the maximum area found."
  },
  {
    "Url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    "Problem": "Letter Combinations of a Phone Number",
    "Summary": "The solution uses backtracking to find all possible letter combinations for a given string of digits, which represent the buttons on a phone keypad. It uses a map of digits to the letters they correspond to, and a backtrack function that starts with an empty path and builds it up by adding one letter at a time from the current digit's possibilities. If the path length equals the number of digits, it is added to the result list of combinations. After adding the letter, it continues to the next digit and repeats the process, backtracking by removing the letter before moving on to the next possibility. The solution returns a list of all possible combinations."
  },
  {
    "Url": "https://leetcode.com/problems/word-search",
    "Problem": "Word Search",
    "Summary": "The solution checks if a word exists in a two-dimensional grid of characters (board). It uses backtracking to explore all possible paths from every cell in the board. For each cell, it checks if the current character in the board matches the next character in the word. If it does, it marks the current cell as visited by replacing it with '#', and continues to explore the neighbors in all four directions. If the next character in the word is not found, it backtracks by restoring the cell back to its original character. If all characters in the word are found in a path, the function returns true. If no path is found, it returns false."
  },
  {
    "Url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
    "Problem": "Find All Anagrams in a String",
    "Summary": "This is a solution for finding all anagrams of a string p in another string s. It uses two arrays target and window to store the frequency of each character in p and the current window in s, respectively. Two pointers start and end are used to slide the window through s. If the window size becomes equal to the length of p, it checks if window is an anagram of p by comparing target and window. If so, it adds the starting index start of the window to the result list. After checking, it moves start forward by one and decrements the count of the character at start in window."
  },
  {
    "Url": "https://leetcode.com/problems/minimum-height-trees",
    "Problem": "Minimum Height Trees",
    "Summary": "This code implements a solution to find the minimum height trees in an undirected graph represented as an adjacency list, where the input is a number n of nodes and a 2D array of edges. The solution uses a two-pointer approach, starting from the leaf nodes with only one connection, and iteratively removing them until only two nodes are left, which are returned as the minimum height trees."
  },
  {
    "Url": "https://leetcode.com/problems/task-scheduler",
    "Problem": "Task Scheduler",
    "Summary": "This solution finds the least amount of intervals required to complete a list of tasks, where each task is represented by a unique character and no two tasks of the same type can be scheduled within 'n' units of time. It uses an array to store the frequency of each task, calculates the maximum frequency and the number of tasks with that frequency, then calculates the total intervals needed based on those values and returns the maximum of that and the length of the task array."
  },
  {
    "Url": "https://leetcode.com/problems/lru-cache",
    "Problem": "LRU Cache",
    "Summary": "The LRUCache class implements a Least Recently Used (LRU) cache with a fixed size. It uses a hash map and a doubly linked list to store the keys and values. The get method retrieves a value from the cache, updating its usage time by removing it and adding it back to the list. The put method inserts a new key and value, or updates an existing one. If the cache is full, the least recently used entry is removed to make room for the new one. The addNode and removeNode methods manage adding and removing nodes from the doubly linked list."
  },
  {
    "Url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
    "Problem": "Kth Smallest Element in a BST",
    "Summary": "In-order traverse the BST using a stack and return the kth element, where k is decremented after visiting each node."
  },
  {
    "Url": "https://leetcode.com/problems/daily-temperatures",
    "Problem": "Daily Temperatures",
    "Summary": "This solution uses a stack to track indices of decreasing temperatures and calculates the number of days until a warmer temperature for each day."
  },
  {
    "Url": "https://leetcode.com/problems/house-robber",
    "Problem": "House Robber",
    "Summary": "The solution calculates the maximum sum of non-adjacent elements in an input array using dynamic programming, where a dp array stores the maximum sum for each index and is updated using the formula dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])."
  },
  {
    "Url": "https://leetcode.com/problems/gas-station/",
    "Problem": "Gas Station",
    "Summary": "The solution determines if it is possible to travel a complete circle by starting from each station in the gas and cost arrays, and returns the starting station index if it is possible, or returns -1 if it is not possible by checking if the total gas is less than the total cost."
  },
  {
    "Url": "https://leetcode.com/problems/next-permutation/",
    "Problem": "Next Permutation",
    "Summary": "This solution finds the next lexicographic permutation of the given array. It does so by finding the first element from the right that is smaller than its next element, swapping it with the next smallest element to its right, and finally reversing the elements to its right. The solution uses two helper functions, swap to swap two elements in the array, and reverseArray to reverse a range of elements in the array."
  },
  {
    "Url": "https://leetcode.com/problems/valid-sudoku/",
    "Problem": "Valid Sudoku",
    "Summary": "This solution checks if a 9x9 2D array representing a sudoku puzzle is valid or not. It does so by iterating 9 times over each row, column, and cube of the sudoku board, and checking for duplicates in each row, column, and cube using hash sets. If there is any duplicate found in a row, column, or cube, the function returns false. If all 9 rows, columns, and cubes are checked without any duplicates found, the function returns true, meaning the sudoku is valid.\n\nThe time complexity of this solution is O(N^2) where N is the size of the sudoku board (9x9)."
  },
  {
    "Url": "https://leetcode.com/problems/group-anagrams",
    "Problem": "Group Anagrams",
    "Summary": "This solution groups anagrams in the input string array by counting the frequency of each character in each string, concatenating the count of each character into a key, and adding the string to a list of strings associated with the key in a HashMap, finally returning the values of the HashMap as a List of List of strings."
  },
  {
    "Url": "https://leetcode.com/problems/maximum-product-subarray",
    "Problem": "Maximum Product Subarray",
    "Summary": "This solution finds the maximum product subarray by keeping track of the current maximum and minimum product ending at the current position, updating these values in each iteration, and updating the overall maximum product as needed."
  },
  {
    "Url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "Problem": "Design Add and Search Words Data Structure",
    "Summary": "A Trie-based solution to add words to a dictionary and search for words that match a pattern in the word list, where dots are treated as wildcards. It uses a Trie data structure to store the words and implements a recursive match function to traverse the Trie and find the words that match the pattern."
  },
  {
    "Url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "Problem": "Pacific Atlantic Water Flow",
    "Summary": "The solution uses a DFS algorithm to find all cells that can reach both the Pacific and Atlantic Oceans by starting from cells adjacent to the oceans and marking cells that are reachable. The solution returns a list of coordinates of cells that can reach both oceans."
  },
  {
    "Url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
    "Problem": "Remove Nth Node From End of List",
    "Summary": "The solution uses two pointers, first and second, both initially pointing to a dummy node. The first pointer is advanced n + 1 steps, so that the gap between first and second is n nodes apart. Then, the first and second pointers are both moved to the end of the linked list, with the second pointer n steps behind the first pointer. Finally, the n-th node from the end of the linked list is removed by updating the next field of the node before it (i.e., second.next = second.next.next). The modified linked list is returned by returning the next field of the dummy node (i.e., return dummy.next)."
  },
  {
    "Url": "https://leetcode.com/problems/shortest-path-to-get-food",
    "Problem": "Shortest Path to Get Food",
    "Summary": "The solution implements a breadth-first search (BFS) algorithm to find the shortest path to the food ('#') in a grid represented by a 2D character array. The grid can contain '*' (the starting point), '#' (the food), 'X' (wall), and '.' (empty cell). The BFS algorithm starts from the starting point, and moves to its neighbors (up, down, left, right) until it finds the food. The number of steps taken is stored in the variable \"step\", and it's incremented each time all cells at the current level are processed. The algorithm uses a queue to store cells to be processed and a 2D boolean array \"visited\" to mark cells that have already been processed. If the food is not found, the algorithm returns -1."
  },
  {
    "Url": "https://leetcode.com/problems/find-the-duplicate-number",
    "Problem": "Find the Duplicate Number",
    "Summary": "This solution uses two pointers to find the entry point of a cycle in an array. It moves one pointer one step at a time and the other pointer two steps at a time until they meet, which indicates the presence of a duplicate element. It then uses two more pointers to find the entry point of the cycle, which is the duplicate element."
  },
  {
    "Url": "https://leetcode.com/problems/top-k-frequent-words",
    "Problem": "Top K Frequent Words",
    "Summary": "This solution uses a HashMap to store the frequency of each word in the input list, and a PriorityQueue to store the top k frequent words. The PriorityQueue is implemented as a min heap, where the comparator first compares the frequency of two words and then the lexicographical order of the words in case of a tie. The solution returns a list of the words in the order they were removed from the PriorityQueue."
  },
  {
    "Url": "https://leetcode.com/problems/longest-increasing-subsequence",
    "Problem": "Longest Increasing Subsequence",
    "Summary": "This solution uses a dynamic programming approach to find the length of the longest increasing subsequence in a given sequence of integers. It uses an array dp to store the length of the longest increasing subsequence ending at each index, and updates the dp values using two nested loops. The time complexity of this solution is O(n^2)."
  },
  {
    "Url": "https://leetcode.com/problems/graph-valid-tree",
    "Problem": "Graph Valid Tree",
    "Summary": "This solution performs a DFS traversal on the graph, keeping track of the visited nodes and their parents in the DFS tree. If we encounter a visited node that is not the parent of the current node, it means that there is a cycle in the graph and the graph is not a valid tree. Otherwise, we continue the DFS traversal until all nodes are visited. If all nodes are visited, then the graph is a valid tree."
  },
  {
    "Url": "https://leetcode.com/problems/course-schedule-ii",
    "Problem": "Course Schedule II",
    "Summary": "This solution uses a Breadth-First Search (BFS) algorithm to perform a topological sort on the given graph. We initialize the graph and count the number of incoming edges (prerequisites) for each node in the graph. We find all nodes with zero incoming edges, push them onto the queue, and remove all their outgoing edges from the graph. We repeat this process until all nodes have been visited or there are no more nodes with zero incoming edges. If there are no more nodes left in the graph, we return the ordering of nodes. Otherwise, we return an empty array."
  },
  {
    "Url": "leetcode.com/problems/swap-nodes-in-pairs",
    "Problem": "Swap Node in Pairs",
    "Summary": "The solution first checks if there are at least two nodes to swap. If so, it recursively swaps the rest of the list after the second node, and then swaps the first two nodes and returns the second node, which becomes the new head of the swapped list."
  },
  {
    "Url": "https://leetcode.com/problems/path-sum-ii",
    "Problem": "Path Sum II",
    "Summary": "The solution is a recursive implementation to find all root-to-leaf paths that sum to a given value in a binary tree. The pathSum method initializes an empty list for storing the paths and starts the recursive process with the recurseTree method. The recurseTree method first checks if the current node is a leaf node and if its value matches the remaining sum. If it does, it adds the current path to the list of paths. If not, it recursively calls the method on the left and right subtrees, subtracting the current node's value from the remaining sum each time. Finally, it removes the current node from the path's list before returning."
  },
  {
    "Url": "https://leetcode.com/problems/longest-consecutive-sequence",
    "Problem": "Longest Consecutive Sequence",
    "Summary": "This solution uses a HashSet to efficiently determine the existence of elements in the array. It iterates through the array and for each element, it checks if it is the start of a sequence. If it is, it continues adding elements to the sequence by checking if the next element is in the HashSet. It keeps track of the length of the longest sequence encountered and returns it. This solution has a time complexity of O(n) because it only iterates through the array twice and the time complexity of HashSet operations is O(1)."
  },
  {
    "Url": "https://leetcode.com/problems/rotate-array",
    "Problem": "Rotate Array",
    "Summary": "This solution performs a cyclic rotation of the array by reversing the entire array and then reversing the first k elements and the last n - k elements separately. It uses a helper function to reverse the elements in the array between two indices. The time complexity of this solution is O(n)."
  },
  {
    "Url": "https://leetcode.com/problems/odd-even-linked-list",
    "Problem": "Odd Even Linked List",
    "Summary": "This solution splits the given linked list into two separate lists - one containing the odd nodes and one containing the even nodes - and then merges them back together. It uses two pointers, odd and even, to iterate over the linked list and connect the nodes to their respective lists. Finally, it merges the even list back onto the end of the odd list and returns the head of the modified linked list."
  },
  {
    "Url": "https://leetcode.com/problems/decode-string/",
    "Problem": "Decode String",
    "Summary": "The solution uses two stacks to keep track of the current string and number of times it needs to be repeated. It iterates through the input string character by character, performs stack operations, and returns the final decoded string."
  },
  {
    "Url": "https://leetcode.com/problems/contiguous-array",
    "Problem": "Contiguous Array",
    "Summary": "This solution uses a hashmap to store the running sum of the binary array and the index at which it was first encountered. We initialize the hashmap with a key-value pair of (0, -1). It iterates through the binary array, and for each element, it updates the running sum based on the value of the element, and checks if the current sum is already in the hashmap. If it is, it updates the maximum length of a contiguous subarray if the difference between the current index and the index at which the sum was first encountered is greater than the current maximum. If the sum is not in the hashmap, it adds it to the hashmap with the current index as its value. After iterating through all the elements, it returns the maximum length of a contiguous subarray with equal number of 0 and 1."
  },
  {
    "Url": "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    "Problem": "Maximum Width of Binary Tree",
    "Summary": "This solution uses a BFS approach with two queues to traverse the binary tree level by level. We keep track of the indices of the nodes in each level to calculate the width of the level. We update the maximum width if we find a level with a greater width. The solution returns the maximum width of the binary tree."
  },
  {
    "Url": "https://leetcode.com/problems/find-k-closest-elements",
    "Problem": "Find K Closest Elements",
    "Summary": "This solution uses binary search to find the index of the element in the array that is closest to x, and then uses two pointers to find the k closest elements. The left pointer starts from the index of the closest element and moves left, while the right pointer starts from the index of the closest element and moves right. We add the element with the smallest absolute difference between the element and x to the result list, and repeat until we have k elements in the result. The final result list is sorted in ascending order."
  },
  {
    "Url": "https://leetcode.com/problems/longest-repeating-character-replacement",
    "Problem": "Longest Repeating Character Replacement",
    "Summary": "This solution uses a sliding window approach to find the longest substring with all repeating characters. We initialize two pointers left and right to 0 and use an array count to keep track of the frequency of characters in the substring. We move the right pointer to the right until we have a substring with all repeating characters or until we have used up all k operations. We update the maximum repeating character count and the maximum length of the substring. If the number of non-repeating characters in the substring is greater than k, we move the left pointer to the right and decrement the count of the character at the left end of the substring. We repeat the above steps until we have processed the entire string. The final result is the maximum length of the substring seen so far."
  },
  {
    "Url": "https://leetcode.com/problems/inorder-successor-in-bst/",
    "Problem": "Inorder Successor in BST",
    "Summary": "This solution finds the in-order successor of a given node in a binary search tree by traversing the tree in an in-order fashion until the given node is found, and then returning the next node in the traversal. The time complexity is O(h) and the space complexity is O(h), where h is the height of the tree."
  }
];