export const data = [
  {
    "Id": 127,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/51.%20N-Queens/NQueens.java",
    "Url": "https://leetcode.com/problems/n-queens/",
    "Week": 11,
    "Category": "Backtracking",
    "Problem": "N-Queens",
    "Summary": "This solution uses backtracking to place N queens on an N×N chessboard such that no two queens attack each other. It recursively tries placing queens in different positions, checking for validity, and backtracks when a conflict is found. The solution returns all distinct solutions to the N-queens puzzle.",
    "Type": "Hard"
  },
  {
    "Id": 126,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/130.%20Surrounded%20Regions/SurroundedRegions.java",
    "Url": "https://leetcode.com/problems/surrounded-regions/",
    "Week": 11,
    "Category": "Graph",
    "Problem": "Surrounded Regions",
    "Summary": "This solution uses DFS to mark 'O's that are not surrounded by 'X's. It starts from the border 'O's and marks all connected 'O's as 'E'. Then it traverses the entire board, changing remaining 'O's to 'X's and 'E's back to 'O's.",
    "Type": "Medium"
  },
  {
    "Id": 1,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/1.%20Two%20Sum/TwoSum.java",
    "Url": "https://leetcode.com/problems/two-sum/",
    "Week": 1,
    "Category": "Array",
    "Problem": "Two Sum",
    "Summary": "use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice;",
    "Type": "Easy"
  },
  {
    "Id": 2,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/20.%20Valid%20Parentheses/ValidParentheses.java",
    "Url": "https://leetcode.com/problems/valid-parentheses/",
    "Week": 1,
    "Category": "Stack",
    "Problem": "Valid Parentheses",
    "Summary": "push opening brace on stack, pop if matching close brace, at end if stack empty, return true;",
    "Type": "Easy"
  },
  {
    "Id": 3,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/21.%20Merge%20Two%20Sorted%20Lists/MergeTwoLists.java",
    "Url": "https://leetcode.com/problems/merge-two-sorted-lists",
    "Week": 1,
    "Category": "Linked List",
    "Problem": "Merge two sorted lists",
    "Summary": "insert each node from one list into the other",
    "Type": "Easy"
  },
  {
    "Id": 4,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/121.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock/MaxProfit.java",
    "Url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
    "Week": 1,
    "Category": "Array",
    "Problem": "Best time to Buy & Sell stock",
    "Summary": "find local min and search for local max, sliding window",
    "Type": "Easy"
  },
  {
    "Id": 5,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/125.%20Valid%20Palindrome/ValidPalindrome.java",
    "Url": "https://leetcode.com/problems/valid-palindrome",
    "Week": 1,
    "Category": "String",
    "Problem": "Valid Palindrome",
    "Summary": "left, right pointers, update left and right until each points at alphanum, compare left and right, continue until left >= right, don’t distinguish between upper/lowercase;",
    "Type": "Easy"
  },
  {
    "Id": 6,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/226.%20Invert%20Binary%20Tree/InvertBinaryTree.java",
    "Url": "https://leetcode.com/problems/invert-binary-tree/",
    "Week": 1,
    "Category": "Binary Tree",
    "Problem": "Invert Binary Tree",
    "Summary": "recursive dfs to invert subtrees; bfs to invert levels, use collections.deque; iterative dfs is easy with stack if doing pre-order traversal",
    "Type": "Easy"
  },
  {
    "Id": 7,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/242.%20Valid%20Anagram/ValidAnagram.java",
    "Url": "https://leetcode.com/problems/valid-anagram",
    "Week": 1,
    "Category": "String",
    "Problem": "Valid Anagram",
    "Summary": "hashmap to count each char in str1, decrement for str2;",
    "Type": "Easy"
  },
  {
    "Id": 8,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/704.%20Binary%20Search/BinarySearch.java",
    "Url": "https://leetcode.com/problems/binary-search/",
    "Week": 1,
    "Category": "Binary Search",
    "Problem": "Binary Search",
    "Summary": "divide array into two halves, check if target matches with mid, if not update high / low based on target < or > mid element",
    "Type": "Easy"
  },
  {
    "Id": 9,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/733.%20Flood%20Fill/FloodFill.java",
    "Url": "https://leetcode.com/problems/flood-fill",
    "Week": 1,
    "Category": "Graph",
    "Problem": "Flood Fill",
    "Summary": "call a recursive function fill passing oldColor & newColor argument .. within function check if not already newColor then fill it & explore the neighbors by checking the boundary",
    "Type": "Easy"
  },
  {
    "Id": 10,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/53.%20Maximum%20Subarray/MaxSubArray.java",
    "Url": "https://leetcode.com/problems/maximum-subarray",
    "Week": 1,
    "Category": "Dynamic Programming",
    "Problem": "Maximum Subarray",
    "Summary": "pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix",
    "Type": "Easy"
  },
  {
    "Id": 11,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/235.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree/LowestCommonAncestor.java",
    "Url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
    "Week": 1,
    "Category": "Binary Search Tree",
    "Problem": "Lowest common ancestor of a binary search tree",
    "Summary": "compare p, q values to curr node, base case: one is in left, other in right subtree, then curr is lca;",
    "Type": "Easy"
  },
  {
    "Id": 12,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/110.%20Balanced%20Binary%20Tree/BalancedBinaryTree.java",
    "Url": "https://leetcode.com/problems/balanced-binary-tree",
    "Week": 1,
    "Category": "Binary Tree",
    "Problem": "Balanced Binary tree",
    "Summary": "isBalanced calls maxHeight recrusively by checking if abs maxHeight of left & right is not greater than 1 ... also isBalanced is called recursively for left & right nodes",
    "Type": "Easy"
  },
  {
    "Id": 13,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/141.%20Linked%20List%20Cycle/LinkedListCycle.java",
    "Url": "https://leetcode.com/problems/linked-list-cycle",
    "Week": 1,
    "Category": "Linked List",
    "Problem": "Linked List Cycle",
    "Summary": "dict to remember visited nodes; two pointers at different speeds, if they meet there is loop",
    "Type": "Easy"
  },
  {
    "Id": 14,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/232.%20Implement%20Queue%20using%20Stacks/MyQueue.java",
    "Url": "https://leetcode.com/problems/implement-queue-using-stacks",
    "Week": 1,
    "Category": "Stack",
    "Problem": "Implement Queue Using Stacks",
    "Summary": "Keep 2 stacks, on push - push all items from s1 into s2, push new item into s1 & again push back all items into s1 from s2; on pop - pop the top element in s1, if s1 is not empty, store the front element by peeking intot it; on peek - just return the front element; on empty - check if s1 is empty",
    "Type": "Easy"
  },
  {
    "Id": 15,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/278.%20First%20Bad%20Version/FirstBadVersion.java",
    "Url": "https://leetcode.com/problems/first-bad-version",
    "Week": 1,
    "Category": "Binary Search",
    "Problem": "First Bad Version",
    "Summary": "Use binary search; find mid, check if isBadVersion(mid) && isBadVersion(mid-1) - then high = mid -1; else if isBadVersion(mid) then mid else low = mid + 1;",
    "Type": "Easy"
  },
  {
    "Id": 16,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/383.%20Ransom%20Note/RansomNote.java",
    "Url": "https://leetcode.com/problems/ransom-note",
    "Week": 1,
    "Category": "Hash Table",
    "Problem": "Ransom Note",
    "Summary": "Create a map of character & count for chars in magazine string; Now keep a counter of removal & increment whenever char in ransomeNote is in the map; return true if removal count is equal to  length of ransom note string",
    "Type": "Easy"
  },
  {
    "Id": 17,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/70.%20Climbing%20Stairs/ClimbingStairs.java",
    "Url": "https://leetcode.com/problems/climbing-stairs",
    "Week": 1,
    "Category": "Dynamic Programming",
    "Problem": "Climbing Stairs",
    "Summary": "subproblem find (n-1) and (n-2), sum = n;",
    "Type": "Easy"
  },
  {
    "Id": 18,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/409.%20Longest%20Palindrome/LongestPalindrome.java",
    "Url": "https://leetcode.com/problems/longest-palindrome",
    "Week": 1,
    "Category": "String",
    "Problem": "Longest Palindrome",
    "Summary": "Create a map of character & count of chars; now iterate throw these counts & increment ans by keyCount / 2 * 2; if ans is now even & keyCount is odd - then increment ans by 1; return ans;",
    "Type": "Easy"
  },
  {
    "Id": 19,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/206.%20Reverse%20Linked%20List/ReverseLinkedList.java",
    "Url": "https://leetcode.com/problems/reverse-linked-list",
    "Week": 2,
    "Category": "Linked List",
    "Problem": "Reverse Linked List",
    "Summary": "iterate through maintaining cur and prev; recursively reverse, return new head of list;",
    "Type": "Easy"
  },
  {
    "Id": 20,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/169.%20Majority%20Element/MajorityElement.java",
    "Url": "https://leetcode.com/problems/majority-element",
    "Week": 2,
    "Category": "Array",
    "Problem": "Majority Element",
    "Summary": "find the candidate by maintaining a count variable; go through all nums - if count becomes zero; make the num candidate; increment count by 1 if candidate is num & else decrement by -1; return candidate",
    "Type": "Easy"
  },
  {
    "Id": 21,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/67.%20Add%20Binary/AddBinary.java",
    "Url": "https://leetcode.com/problems/add-binary",
    "Week": 2,
    "Category": "Binary",
    "Problem": "Add Binary",
    "Summary": "Sum each char from right to left by subtracting from '0'; append to res the sum % 2 & carry would be sum / 2 & once out of while if carry != 0 then append 1 to res; return reversed res; (reversed because we are iterating from right to left);",
    "Type": "Easy"
  },
  {
    "Id": 22,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/543.%20Diameter%20of%20Binary%20Tree/DiameterOfBinaryTree.java",
    "Url": "https://leetcode.com/problems/diameter-of-binary-tree",
    "Week": 2,
    "Category": "Binary Tree",
    "Problem": "Diameter of Binary Tree",
    "Summary": "diameter is same as longest path of binary tree; do an post order traversal on longestPath to find the max path;",
    "Type": "Easy"
  },
  {
    "Id": 23,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/876.%20Middle%20of%20the%20Linked%20List/MiddleNode.java",
    "Url": "https://leetcode.com/problems/middle-of-the-linked-list",
    "Week": 2,
    "Category": "Linked List",
    "Problem": "Middle of the Linked List",
    "Summary": "fast pointer will be initialized head.next.next & slow head; fast will run till fast !=null and fast.next != null; fast will ofcourse step twice & slow once; slow.next would be middle of linked list;",
    "Type": "Easy"
  },
  {
    "Id": 24,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/104.%20Maximum%20Depth%20of%20Binary%20Tree/MaximumDepthOfBinaryTree.java",
    "Url": "https://leetcode.com/problems/maximum-depth-of-binary-tree",
    "Week": 2,
    "Category": "Binary Tree",
    "Problem": "Maximum Depth of Binary Tree",
    "Summary": "Calling the same func recursively with Math.max for root.left & root.left + 1 would give the max depth;",
    "Type": "Easy"
  },
  {
    "Id": 25,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/217.%20Contains%20Duplicate/ContainsDuplicate.java",
    "Url": "https://leetcode.com/problems/contains-duplicate",
    "Week": 2,
    "Category": "Array",
    "Problem": "Contains Duplicate",
    "Summary": "put in set; if another number exisits in set return true;",
    "Type": "Easy"
  },
  {
    "Id": 26,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/252.%20Meeting%20Rooms/MeetingRooms.java",
    "Url": "https://leetcode.com/problems/meeting-rooms",
    "Week": 2,
    "Category": "Array",
    "Problem": "Meeting rooms",
    "Summary": "sort intervais; if prev interval end > next interval start then is conflicting - return false;",
    "Type": "Easy"
  },
  {
    "Id": 27,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/13.%20Roman%20to%20Integer/RomanToInt.java",
    "Url": "https://leetcode.com/problems/roman-to-integer",
    "Week": 2,
    "Category": "Math",
    "Problem": "Roman to Integer",
    "Summary": "put in map all symbol & their value; traverse from right-2 to left; if value at curr < value at prev -> decrement res with current value else increment with current value; update prev value; return result;",
    "Type": "Easy"
  },
  {
    "Id": 28,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/844.%20Backspace%20String%20Compare/BackspaceCompare.java",
    "Url": "https://leetcode.com/problems/backspace-string-compare",
    "Week": 2,
    "Category": "Stack",
    "Problem": "Backspace string compare",
    "Summary": "Let i & j be pointers of both strings pointing to last character; loop infinite - keep a counter back initialized to 0 ; decrement i until back > 0 or char is '#'; do same with j for other string; now compare if both char are same - then decrement i & j; if not break out of loop -- if both i & j are -1 then return true;",
    "Type": "Easy"
  },
  {
    "Id": 29,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/338.%20Counting%20Bits/CountBits.java",
    "Url": "https://leetcode.com/problems/counting-bits",
    "Week": 2,
    "Category": "Binary",
    "Problem": "Counting Bits",
    "Summary": "Can be solved as a dynamic programming problem; initialize dp[0] = 0; offset = 1; loop i from 1 to n; if offset *2 == i -> offset = i; dp[i] = 1 + dp[i - offset]; return dp;",
    "Type": "Easy"
  },
  {
    "Id": 30,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/100.%20Same%20Tree/SameTree.java",
    "Url": "https://leetcode.com/problems/same-tree",
    "Week": 2,
    "Category": "Binary Tree",
    "Problem": "Same Tree",
    "Summary": "if both p & q are null - then good; if either p or q is null - then bad; if p val is not equal to q val - then bad; return same recursive check for p.left, q.left & p.right. q.right;",
    "Type": "Easy"
  },
  {
    "Id": 31,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/191.%20Number%20of%201%20Bits/NumberOf1Bits.java",
    "Url": "https://leetcode.com/problems/number-of-1-bits",
    "Week": 2,
    "Category": "Binary",
    "Problem": "Number of 1 Bits",
    "Summary": "count the right most bit; right shift after counting; return total count;",
    "Type": "Easy"
  },
  {
    "Id": 32,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/14.%20Longest%20Common%20Prefix/LongestCommonPrefix.java",
    "Url": "https://leetcode.com/problems/longest-common-prefix",
    "Week": 2,
    "Category": "String",
    "Problem": "Longest Common Prefix",
    "Summary": "find minLength of all strings; Now do a binary search (low=0, high=minLenth) of isCommonPrefix(strs[], len) - which compares all strings if there is a common prefix from 0 to len - 1; if there is a match set low = mid + 1 (to increase the size of string); if not a match set high = mid - 1; return the longest common substring from 0 to (low + high) / 2;",
    "Type": "Easy"
  },
  {
    "Id": 33,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/136.%20Single%20Number/SingleNumber.java",
    "Url": "https://leetcode.com/problems/single-number",
    "Week": 2,
    "Category": "Binary",
    "Problem": "Single Number",
    "Summary": "set duplicate number x to 0; loop throw all numbers & xor number with x; return x;",
    "Type": "Easy"
  },
  {
    "Id": 34,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/234.%20Palindrome%20Linked%20List/IsPalindrome.java",
    "Url": "https://leetcode.com/problems/palindrome-linked-list",
    "Week": 2,
    "Category": "Linked List",
    "Problem": "Palindrome Linked List",
    "Summary": "add all numbers into a list; now again loop & check if first == last; first = first.next; last--;",
    "Type": "Easy"
  },
  {
    "Id": 35,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/283.%20Move%20Zeroes/MoveZeroes.java",
    "Url": "https://leetcode.com/problems/move-zeroes/",
    "Week": 3,
    "Category": "Array",
    "Problem": "Move Zeroes",
    "Summary": "keep a counter of zeros; at same time keep a separate index to store in nums; fill zeros until index becomes zeroCount;",
    "Type": "Easy"
  },
  {
    "Id": 36,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/101.%20Symmetric%20Tree/SymmetricTree.java",
    "Url": "https://leetcode.com/problems/symmetric-tree/",
    "Week": 3,
    "Category": "Binary Tree",
    "Problem": "Symmetric Tree",
    "Summary": "just do isSameTree(root.left, root.right);",
    "Type": "Easy"
  },
  {
    "Id": 37,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/268.%20Missing%20Number/MissingNumber.java",
    "Url": "https://leetcode.com/problems/missing-number",
    "Week": 3,
    "Category": "Binary",
    "Problem": "Missing Number",
    "Summary": "expectedXor for i=0 to n; actualXor for all num; return expectedXor ^ actualXor;",
    "Type": "Easy"
  },
  {
    "Id": 38,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/9.%20Palindrome%20Number/PalindromeNumber.java",
    "Url": "https://leetcode.com/problems/palindrome-number/",
    "Week": 3,
    "Category": "Math",
    "Problem": "Palindrome Number",
    "Summary": "reverse number & check if same as original number",
    "Type": "Easy"
  },
  {
    "Id": 39,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/108.%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/SortedArrayToBST.java",
    "Url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "Week": 3,
    "Category": "Binary Search Tree",
    "Problem": "Convert Sorted Array to Binary Search Tree",
    "Summary": "do a preOrder traversal on the numbers;",
    "Type": "Easy"
  },
  {
    "Id": 40,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/190.%20Reverse%20Bits/ReverseBits.java",
    "Url": "https://leetcode.com/problems/reverse-bits",
    "Week": 3,
    "Category": "Binary",
    "Problem": "Reverse Bits",
    "Summary": "keep left shifting result; if the bit is 1; increment result; right shift n; return result;",
    "Type": "Easy"
  },
  {
    "Id": 41,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/572.%20Subtree%20of%20Another%20Tree/IsSubTree.java",
    "Url": "https://leetcode.com/problems/subtree-of-another-tree",
    "Week": 3,
    "Category": "Binary Tree",
    "Problem": "Subtree of Another Tree",
    "Summary": "if root is null then false; if sameTree(root, subRoot) return true;",
    "Type": "Easy"
  },
  {
    "Id": 42,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/977.%20Squares%20of%20a%20Sorted%20Array/SortedSquares.java",
    "Url": "https://leetcode.com/problems/squares-of-a-sorted-array",
    "Week": 3,
    "Category": "Array",
    "Problem": "Squares of a Sorted Array",
    "Summary": "Initialize left = 0 & right = n - 1; compare abs value from both ends if left value is less than right value; store product of right value in result[i] if not store product of left value; return result;",
    "Type": "Easy"
  },
  {
    "Id": 43,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/57.%20Insert%20Interval/InsertInterval.java",
    "Url": "https://leetcode.com/problems/insert-interval",
    "Week": 3,
    "Category": "Array",
    "Problem": "Insert Interval",
    "Summary": "create a new linked list; store intervals until start of interval is less than start of newInterval; if newInterval start is after interval end; then just add the interval else merge interval by finding max of end; now until the end of intervals check in above fashion & return list converted to an array;",
    "Type": "Medium"
  },
  {
    "Id": 44,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/542.%2001%20Matrix/UpdateMatrix.java",
    "Url": "https://leetcode.com/problems/01-matrix/",
    "Week": 3,
    "Category": "Graph",
    "Problem": "01 Matrix",
    "Summary": "have a queue of int[] to store r & c; add into a queue the r & c where mat[r][c] is 0 else set as -1;  now loop until queue is empty in all 4 directions & ensure if value other than -1 is ignored; then store mat[next_r][next_c] as mat[r][c] + 1 and put the next_r & next_c in queue;",
    "Type": "Medium"
  },
  {
    "Id": 45,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/973.%20K%20Closest%20Points%20to%20Origin/KClosestPointsToOrigin.java",
    "Url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "Week": 3,
    "Category": "Heap",
    "Problem": "K Closest Points to Origin",
    "Summary": "put into heap the distance from origin of all points upto the size becomes k; when > k pop & push new; return the elements from heap as a array;",
    "Type": "Medium"
  },
  {
    "Id": 46,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/3.%20Longest%20Substring%20Without%20Repeating%20Characters/LengthOfLongestSubstring.java",
    "Url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "Week": 3,
    "Category": "String",
    "Problem": "Longest Substring Without Repeating Characters",
    "Summary": "keep a set for window; while end is less than length of string check if set does not already contain the character if so add it & check longest else remove the character from set;",
    "Type": "Medium"
  },
  {
    "Id": 47,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/15.%203Sum/ThreeSum.java",
    "Url": "https://leetcode.com/problems/3sum/",
    "Week": 4,
    "Category": "Array",
    "Problem": "3 Sum",
    "Summary": "sort nums; set target as 0-nums[i]; now search between low(i+1) and high(nums.length-1) when their sum match target - add to list; now until numbers are same - low++ or high--; and then explicitly increment low or decrement high;",
    "Type": "Medium"
  },
  {
    "Id": 48,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/102.%20Binary%20Tree%20Level%20Order%20Traversal/LevelOrderTraversal.java",
    "Url": "https://leetcode.com/problems/binary-tree-level-order-traversal",
    "Week": 4,
    "Category": "Binary Tree",
    "Problem": "Binary Tree Level Order Traversal",
    "Summary": "Keep a map of level & list of integers; now do a tree traversal preferably inorder & push in map based on level; & return the values of map;",
    "Type": "Medium"
  },
  {
    "Id": 49,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/133.%20Clone%20Graph/CloneGraph.java",
    "Url": "https://leetcode.com/problems/clone-graph/",
    "Week": 4,
    "Category": "Graph",
    "Problem": "Clone Graph",
    "Summary": "Create a map visited; do a dfs by first cloning and add the new node in map; explore neighbors by recursively calling it;",
    "Type": "Medium"
  },
  {
    "Id": 50,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/150.%20Evaluate%20Reverse%20Polish%20Notation/EvaluateReversePolishNotation.java",
    "Url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "Week": 4,
    "Category": "Stack",
    "Problem": "Evaluate Reverse Polish Notation",
    "Summary": "push if number else for symbol - pop 2 values & do the operation in symbol & push the result; pop & return the last element in stack;",
    "Type": "Medium"
  },
  {
    "Id": 51,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/207.%20Course%20Schedule/CourseSchedule.java",
    "Url": "https://leetcode.com/problems/course-schedule/",
    "Week": 4,
    "Category": "Graph",
    "Problem": "Course Schedule",
    "Summary": "Create a adj map of pre-requisites from end -> [start1, start2, start3]; indegree[start1]++; now iterate through indegrees to find if any is 0 - if so add into a queue; now until queue becomes empty check indegree[cur] == 0 - if so increment count; decrement indegree of all of cur neighbours & if indegree[nei] becomes zero - add it to queue; return true if count == numCourses;",
    "Type": "Medium"
  },
  {
    "Id": 52,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/208.%20Implement%20Trie%20(Prefix%20Tree)/Trie.java",
    "Url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "Week": 4,
    "Category": "Trie",
    "Problem": "Implement Trie (Prefix Tree)",
    "Summary": "define TrieNode which has a map of character & TrieNode; a boolean isWord & string word itself after reaching the end; Now to implement Trie class - insert can check if char already exisits then use it to jump & add missing character; for search - do similar approach & startsWith -- keep going until characters are matching;",
    "Type": "Medium"
  },
  {
    "Id": 53,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/322.%20Coin%20Change/CoinChange.java",
    "Url": "https://leetcode.com/problems/coin-change",
    "Week": 4,
    "Category": "Dynamic Programming",
    "Problem": "Coin Change",
    "Summary": "create a dp array of size amount+1; fill the array with amount+1; loop through 1 to amount & for all coin -> if i - coint > 0 then dp[i] = Math.max(dp[i], dp[i- coin] + 1)",
    "Type": "Medium"
  },
  {
    "Id": 54,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/238.%20Product%20of%20Array%20Except%20Self/ProductExceptSelf.java",
    "Url": "https://leetcode.com/problems/product-of-array-except-self/",
    "Week": 4,
    "Category": "Array",
    "Problem": "Product of Array Except Self",
    "Summary": "make two passes, first in-order, second in-reverse, to compute products",
    "Type": "Medium"
  },
  {
    "Id": 55,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/155.%20Min%20Stack/MinStack.java",
    "Url": "https://leetcode.com/problems/min-stack/",
    "Week": 4,
    "Category": "Stack",
    "Problem": "Min Stack",
    "Summary": "create StackItem which stores val & minVal; on every push update minVal & store val; on pop - just pop; on top - just peek & return val; on min - just peek & return minVal;",
    "Type": "Medium"
  },
  {
    "Id": 56,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/98.%20Validate%20Binary%20Search%20Tree/IsValidBST.java",
    "Url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "Week": 4,
    "Category": "Binary Search Tree",
    "Problem": "Validate Binary Search Tree",
    "Summary": "trick is use built in python min/max values float(\"inf\"), \"-inf\", as parameters; iterative in-order traversal, check each val is greater than prev;",
    "Type": "Medium"
  },
  {
    "Id": 57,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/200.%20Number%20of%20Islands/NumOfIslands.java",
    "Url": "https://leetcode.com/problems/number-of-",
    "Week": 4,
    "Category": "Graph",
    "Problem": "Number of Islands",
    "Summary": "foreach cell, if cell is 1 and unvisited run dfs, increment cound and marking each contigous 1 as visited",
    "Type": "Medium"
  },
  {
    "Id": 58,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/994.%20Rotting%20Oranges/RottingOranges.java",
    "Url": "https://leetcode.com/problems/rotting-oranges/",
    "Week": 5,
    "Category": "Graph",
    "Problem": "Rotting Oranges",
    "Summary": "Use a queue to store row, col where grid row col is 2; at the same time count fresh oranges where grid row col is 1; add into queue a large row col 999 999; now loop until queue is empty - store row col; check if row reaches 999 - then increment minutesElapsed & if queue is not empty add another 999 pair; for the case row is not 999 - explore in all the 4 directions where orange is fresh - make it rotten & decreement freshOranges & add it to queue; finally return minutesElapsed if freshOranges == 0 else -1;",
    "Type": "Medium"
  },
  {
    "Id": 59,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/33.%20Search%20in%20Rotated%20Sorted%20Array/Search.java",
    "Url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "Week": 5,
    "Category": "Binary Search",
    "Problem": "Search in Rotated Sorted Array",
    "Summary": "at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half",
    "Type": "Medium"
  },
  {
    "Id": 60,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/39.%20Combination%20Sum/CombinationSum.java",
    "Url": "https://leetcode.com/problems/combination-sum/",
    "Week": 5,
    "Category": "Array",
    "Problem": "Combination Sum",
    "Summary": "initialize a result array list; backtrack by decrementing remain to meet target with a tempList; use i instead of i+1 to use same element multiple times; return the result;",
    "Type": "Medium"
  },
  {
    "Id": 61,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/46.%20Permutations/Permute.java",
    "Url": "https://leetcode.com/problems/permutations/",
    "Week": 5,
    "Category": "Recursion",
    "Problem": "Permutations",
    "Summary": "initialize a result array list; backtrack checking if size of tempList is equal to length of nums - if so add it to result; else iterate through all the element, skipping duplicates add element to tempList, backtrack & remove again from tempList; return the result;",
    "Type": "Medium"
  },
  {
    "Id": 62,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/56.%20Merge%20Intervals/Merge.java",
    "Url": "https://leetcode.com/problems/merge-intervals/",
    "Week": 5,
    "Category": "Array",
    "Problem": "Merge Intervals",
    "Summary": "check if root is null or p == root or q == root - then return root;  recursively find lowest common ancestor for root.left & store in left & same for root.right & store in right; check if left == null - then return right else check if right == null then return left else root;",
    "Type": "Medium"
  },
  {
    "Id": 63,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/236.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/LowestCommonAncestor.java",
    "Url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "Week": 5,
    "Category": "Binary Tree",
    "Problem": "Lowest common ancestor of a binary tree",
    "Summary": "This solution finds the lowest common ancestor (LCA) of two nodes in a binary tree. It recursively searches for the LCA by checking if the current node is either of the two nodes or null, and then recurses on the left and right subtree. It returns the LCA by checking which subtree contains both nodes or returns the current node if one node is in the left subtree and the other is in the right subtree.",
    "Type": "Medium"
  },
  {
    "Id": 64,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/981.%20Time%20Based%20Key-Value%20Store/TimeMap.java",
    "Url": "https://leetcode.com/problems/time-based-key-value-store/",
    "Week": 5,
    "Category": "Binary Search",
    "Problem": "Time Based Key Value Store",
    "Summary": "Use a tree map to store timestamp - value; use floorKey to retrieve the closest floor value",
    "Type": "Medium"
  },
  {
    "Id": 65,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/721.%20Accounts%20Merge/AccountsMerge.java",
    "Url": "https://leetcode.com/problems/accounts-merge/",
    "Week": 5,
    "Category": "Graph",
    "Problem": "Accounts Merge",
    "Summary": "Use Union-Find; First create a map of emailId -> accId ; if existing emailId then union it; iterate through all accIds for each accId find absolute parent & store the email; return the merged accounts;",
    "Type": "Medium"
  },
  {
    "Id": 66,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/75.%20Sort%20Colors/SortColors.java",
    "Url": "https://leetcode.com/problems/sort-colors/",
    "Week": 5,
    "Category": "Array",
    "Problem": "Sort Colors",
    "Summary": "Sort an array of 0s, 1s, and 2s in linear time by initializing three pointers, low, mid, and high to 0, 0, and nums.length - 1 respectively and iterating through the array, swapping 0s with the element at the low pointer, swapping 2s with the element at the high pointer and only incrementing mid for 1s.",
    "Type": "Medium"
  },
  {
    "Id": 67,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/139.%20Word%20Break/WordBreak.java",
    "Url": "https://leetcode.com/problems/word-break/",
    "Week": 5,
    "Category": "Trie",
    "Problem": "Word Break",
    "Summary": "Using a boolean dp array of size (n+1) where n is the length of the input string, where dp[i] is true if the substring s[0...i-1] can be segmented into a space-separated sequence of one or more dictionary words, and check for each substring of the input string if it is present in the dictionary and update the dp array accordingly.",
    "Type": "Medium"
  },
  {
    "Id": 68,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/416.%20Partition%20Equal%20Subset%20Sum/ParitionEqualSubsetSum.java",
    "Url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "Week": 6,
    "Category": "Dynamic Programming",
    "Problem": "Partition Equal Subset Sum",
    "Summary": "The solution uses Dynamic Programming to check whether it is possible to partition the given array into two subsets with equal sum by creating a 2D dp array and filling it up using a nested loop and checking the sum using first i-1 elements and the current element.",
    "Type": "Medium"
  },
  {
    "Id": 69,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/8.%20String%20to%20Integer%20(atoi)/StringToInteger.java",
    "Url": "https://leetcode.com/problems/string-to-integer-atoi/",
    "Week": 6,
    "Category": "String",
    "Problem": "String to Integer (atoi)",
    "Summary": "Iterate through the characters of the string, starting from the first non-whitespace character, taking into account the sign of the number, and checking for integer overflow, it will return the final integer value",
    "Type": "Medium"
  },
  {
    "Id": 70,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/54.%20Spiral%20Matrix/SpiralMatrix.java",
    "Url": "https://leetcode.com/problems/spiral-matrix/",
    "Week": 6,
    "Category": "Matrix",
    "Problem": "Spiral Matrix",
    "Summary": "Iterate through the matrix in a spiral pattern using four pointers to keep track of the four boundaries (top, bottom, left, and right) of the matrix, adding the elements of the current top row, right column, bottom row, and left column to the result list, and moving the boundaries accordingly.",
    "Type": "Medium"
  },
  {
    "Id": 71,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/78.%20Subsets/Subsets.java",
    "Url": "https://leetcode.com/problems/subsets/",
    "Week": 6,
    "Category": "Recursion",
    "Problem": "Subsets",
    "Summary": "The solution generates all subsets of a given array of integers using a backtracking approach by adding elements to a current subset and recursively calling the backtracking function until all elements have been added, then removing the last element and moving on to the next one until all subsets have been generated.",
    "Type": "Medium"
  },
  {
    "Id": 72,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/199.%20Binary%20Tree%20Right%20Side%20View/BinaryTreeRightSideView.java",
    "Url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "Week": 6,
    "Category": "Binary Tree",
    "Problem": "Binary Tree Right Side View",
    "Summary": "The solution uses BFS to get the right-side view of a binary tree by adding nodes to a queue and keeping track of the last node of each level, adding its value to the result list, then continuing to the next level until the queue is empty.",
    "Type": "Medium"
  },
  {
    "Id": 73,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/5.%20Longest%20Palindromic%20Substring/LongestPalindromicSubstring.java",
    "Url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "Week": 6,
    "Category": "String",
    "Problem": "Longest Palindromic Substring",
    "Summary": "The solution finds the longest palindromic substring in a given string by expanding around each possible center and updating the substring's length and starting index if a longer one is found.",
    "Type": "Medium"
  },
  {
    "Id": 74,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/62.%20Unique%20Paths/UniquePaths.java",
    "Url": "https://leetcode.com/problems/unique-paths/",
    "Week": 6,
    "Category": "Dynamic Programming",
    "Problem": "Unique Paths",
    "Summary": "The solution uses dynamic programming to find the number of unique paths from the top-left to the bottom-right of a grid by updating the number of paths at each cell as the sum of paths from its top and left cells.",
    "Type": "Medium"
  },
  {
    "Id": 75,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/105.%20Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal/ConstructBinaryTreeFromPreAndInorderTraversal.java",
    "Url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    "Week": 6,
    "Category": "Binary Tree",
    "Problem": "Construct Binary Tree from Preorder and Inorder Traversal",
    "Summary": "This solution implements a function to build a binary tree from preorder and inorder traversal arrays. The function first builds a map to store the value and its index in the inorder array. Then, it recursively constructs the tree using the preorder array by selecting the next preorder value as the root and using the map to find its corresponding index in the inorder array to divide the inorder array into two subtrees.",
    "Type": "Medium"
  },
  {
    "Id": 76,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/11.%20Container%20With%20Most%20Water/ContainerWithMostWater.java",
    "Url": "https://leetcode.com/problems/container-with-most-water",
    "Week": 6,
    "Category": "Array",
    "Problem": "Container With Most Water",
    "Summary": "The solution uses a two pointer approach to find the maximum area of a container that can be formed between two lines among a given set of lines. It starts from the first and last line, calculates the area and moves the pointer with the smaller height towards the center, repeating the calculation until both pointers meet. The solution returns the maximum area found.",
    "Type": "Medium"
  },
  {
    "Id": 77,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/17.%20Letter%20Combinations%20of%20a%20Phone%20Number/LetterCombinationsOfPhoneNumber.java",
    "Url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    "Week": 6,
    "Category": "Recursion",
    "Problem": "Letter Combinations of a Phone Number",
    "Summary": "The solution uses backtracking to find all possible letter combinations for a given string of digits, which represent the buttons on a phone keypad. It uses a map of digits to the letters they correspond to, and a backtrack function that starts with an empty path and builds it up by adding one letter at a time from the current digit's possibilities. If the path length equals the number of digits, it is added to the result list of combinations. After adding the letter, it continues to the next digit and repeats the process, backtracking by removing the letter before moving on to the next possibility. The solution returns a list of all possible combinations.",
    "Type": "Medium"
  },
  {
    "Id": 78,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/79.%20Word%20Search/WordSearch.java",
    "Url": "https://leetcode.com/problems/word-search",
    "Week": 6,
    "Category": "Graph",
    "Problem": "Word Search",
    "Summary": "The solution checks if a word exists in a two-dimensional grid of characters (board). It uses backtracking to explore all possible paths from every cell in the board. For each cell, it checks if the current character in the board matches the next character in the word. If it does, it marks the current cell as visited by replacing it with '#', and continues to explore the neighbors in all four directions. If the next character in the word is not found, it backtracks by restoring the cell back to its original character. If all characters in the word are found in a path, the function returns true. If no path is found, it returns false.",
    "Type": "Medium"
  },
  {
    "Id": 79,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/438.%20Find%20All%20Anagrams%20in%20a%20String/FindAnagrams.java",
    "Url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
    "Week": 7,
    "Category": "String",
    "Problem": "Find All Anagrams in a String",
    "Summary": "This is a solution for finding all anagrams of a string p in another string s. It uses two arrays target and window to store the frequency of each character in p and the current window in s, respectively. Two pointers start and end are used to slide the window through s. If the window size becomes equal to the length of p, it checks if window is an anagram of p by comparing target and window. If so, it adds the starting index start of the window to the result list. After checking, it moves start forward by one and decrements the count of the character at start in window.",
    "Type": "Medium"
  },
  {
    "Id": 80,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/310.%20Minimum%20Height%20Trees/FindMinHeightTrees.java",
    "Url": "https://leetcode.com/problems/minimum-height-trees",
    "Week": 7,
    "Category": "Graph",
    "Problem": "Minimum Height Trees",
    "Summary": "This code implements a solution to find the minimum height trees in an undirected graph represented as an adjacency list, where the input is a number n of nodes and a 2D array of edges. The solution uses a two-pointer approach, starting from the leaf nodes with only one connection, and iteratively removing them until only two nodes are left, which are returned as the minimum height trees.",
    "Type": "Medium"
  },
  {
    "Id": 81,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/621.%20Task%20Scheduler/LeastInterval.java",
    "Url": "https://leetcode.com/problems/task-scheduler",
    "Week": 7,
    "Category": "Heap",
    "Problem": "Task Scheduler",
    "Summary": "This solution finds the least amount of intervals required to complete a list of tasks, where each task is represented by a unique character and no two tasks of the same type can be scheduled within 'n' units of time. It uses an array to store the frequency of each task, calculates the maximum frequency and the number of tasks with that frequency, then calculates the total intervals needed based on those values and returns the maximum of that and the length of the task array.",
    "Type": "Medium"
  },
  {
    "Id": 82,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/146.%20LRU%20Cache/LRUCache.java",
    "Url": "https://leetcode.com/problems/lru-cache",
    "Week": 7,
    "Category": "Linked List",
    "Problem": "LRU Cache",
    "Summary": "The LRUCache class implements a Least Recently Used (LRU) cache with a fixed size. It uses a hash map and a doubly linked list to store the keys and values. The get method retrieves a value from the cache, updating its usage time by removing it and adding it back to the list. The put method inserts a new key and value, or updates an existing one. If the cache is full, the least recently used entry is removed to make room for the new one. The addNode and removeNode methods manage adding and removing nodes from the doubly linked list.",
    "Type": "Medium"
  },
  {
    "Id": 83,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/230.%20Kth%20Smallest%20Element%20in%20a%20BST/KthSmallest.java",
    "Url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
    "Week": 7,
    "Category": "Binary Search Tree",
    "Problem": "Kth Smallest Element in a BST",
    "Summary": "In-order traverse the BST using a stack and return the kth element, where k is decremented after visiting each node.",
    "Type": "Medium"
  },
  {
    "Id": 84,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/739.%20Daily%20Temperatures/DailyTemperatures.java",
    "Url": "https://leetcode.com/problems/daily-temperatures",
    "Week": 7,
    "Category": "Stack",
    "Problem": "Daily Temperatures",
    "Summary": "This solution uses a stack to track indices of decreasing temperatures and calculates the number of days until a warmer temperature for each day.",
    "Type": "Medium"
  },
  {
    "Id": 85,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/198.%20House%20Robber/HouseRobber.java",
    "Url": "https://leetcode.com/problems/house-robber",
    "Week": 7,
    "Category": "Dynamic Programming",
    "Problem": "House Robber",
    "Summary": "The solution calculates the maximum sum of non-adjacent elements in an input array using dynamic programming, where a dp array stores the maximum sum for each index and is updated using the formula dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]).",
    "Type": "Medium"
  },
  {
    "Id": 86,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/134.%20Gas%20Station/GasStation.java",
    "Url": "https://leetcode.com/problems/gas-station/",
    "Week": 7,
    "Category": "Array",
    "Problem": "Gas Station",
    "Summary": "The solution determines if it is possible to travel a complete circle by starting from each station in the gas and cost arrays, and returns the starting station index if it is possible, or returns -1 if it is not possible by checking if the total gas is less than the total cost.",
    "Type": "Medium"
  },
  {
    "Id": 87,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/31.%20Next%20Permutation/NextPermutation.java",
    "Url": "https://leetcode.com/problems/next-permutation/",
    "Week": 7,
    "Category": "Recursion",
    "Problem": "Next Permutation",
    "Summary": "This solution finds the next lexicographic permutation of the given array. It does so by finding the first element from the right that is smaller than its next element, swapping it with the next smallest element to its right, and finally reversing the elements to its right. The solution uses two helper functions, swap to swap two elements in the array, and reverseArray to reverse a range of elements in the array.",
    "Type": "Medium"
  },
  {
    "Id": 88,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/36.%20Valid%20Sudoku/IsValidSudoku.java",
    "Url": "https://leetcode.com/problems/valid-sudoku/",
    "Week": 7,
    "Category": "Matrix",
    "Problem": "Valid Sudoku",
    "Summary": "This solution checks if a 9x9 2D array representing a sudoku puzzle is valid or not. It does so by iterating 9 times over each row, column, and cube of the sudoku board, and checking for duplicates in each row, column, and cube using hash sets. If there is any duplicate found in a row, column, or cube, the function returns false. If all 9 rows, columns, and cubes are checked without any duplicates found, the function returns true, meaning the sudoku is valid.\n\nThe time complexity of this solution is O(N^2) where N is the size of the sudoku board (9x9).",
    "Type": "Medium"
  },
  {
    "Id": 89,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/49.%20Group%20Anagrams/GroupAnagrams.java",
    "Url": "https://leetcode.com/problems/group-anagrams",
    "Week": 8,
    "Category": "String",
    "Problem": "Group Anagrams",
    "Summary": "This solution groups anagrams in the input string array by counting the frequency of each character in each string, concatenating the count of each character into a key, and adding the string to a list of strings associated with the key in a HashMap, finally returning the values of the HashMap as a List of List of strings.",
    "Type": "Medium"
  },
  {
    "Id": 90,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/152.%20Maximum%20Product%20Subarray/MaxProduct.java",
    "Url": "https://leetcode.com/problems/maximum-product-subarray",
    "Week": 8,
    "Category": "Dynamic Programming",
    "Problem": "Maximum Product Subarray",
    "Summary": "This solution finds the maximum product subarray by keeping track of the current maximum and minimum product ending at the current position, updating these values in each iteration, and updating the overall maximum product as needed.",
    "Type": "Medium"
  },
  {
    "Id": 91,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/211.%20Design%20Add%20and%20Search%20Words%20Data%20Structure/WordDictionary.java",
    "Url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "Week": 8,
    "Category": "Trie",
    "Problem": "Design Add and Search Words Data Structure",
    "Summary": "A Trie-based solution to add words to a dictionary and search for words that match a pattern in the word list, where dots are treated as wildcards. It uses a Trie data structure to store the words and implements a recursive match function to traverse the Trie and find the words that match the pattern.",
    "Type": "Medium"
  },
  {
    "Id": 92,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/417.%20Pacific%20Atlantic%20Water%20Flow/PacificAtlantic.java",
    "Url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "Week": 8,
    "Category": "Graph",
    "Problem": "Pacific Atlantic Water Flow",
    "Summary": "The solution uses a DFS algorithm to find all cells that can reach both the Pacific and Atlantic Oceans by starting from cells adjacent to the oceans and marking cells that are reachable. The solution returns a list of coordinates of cells that can reach both oceans.",
    "Type": "Medium"
  },
  {
    "Id": 93,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/19.%20Remove%20Nth%20Node%20From%20End%20of%20List/RemoveNthFromEnd.java",
    "Url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
    "Week": 8,
    "Category": "Linked List",
    "Problem": "Remove Nth Node From End of List",
    "Summary": "The solution uses two pointers, first and second, both initially pointing to a dummy node. The first pointer is advanced n + 1 steps, so that the gap between first and second is n nodes apart. Then, the first and second pointers are both moved to the end of the linked list, with the second pointer n steps behind the first pointer. Finally, the n-th node from the end of the linked list is removed by updating the next field of the node before it (i.e., second.next = second.next.next). The modified linked list is returned by returning the next field of the dummy node (i.e., return dummy.next).",
    "Type": "Medium"
  },
  {
    "Id": 94,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/1730.%20Shortest%20Path%20to%20Get%20Food/GetFood.java",
    "Url": "https://leetcode.com/problems/shortest-path-to-get-food",
    "Week": 8,
    "Category": "Graph",
    "Problem": "Shortest Path to Get Food",
    "Summary": "The solution implements a breadth-first search (BFS) algorithm to find the shortest path to the food ('#') in a grid represented by a 2D character array. The grid can contain '*' (the starting point), '#' (the food), 'X' (wall), and '.' (empty cell). The BFS algorithm starts from the starting point, and moves to its neighbors (up, down, left, right) until it finds the food. The number of steps taken is stored in the variable \"step\", and it's incremented each time all cells at the current level are processed. The algorithm uses a queue to store cells to be processed and a 2D boolean array \"visited\" to mark cells that have already been processed. If the food is not found, the algorithm returns -1.",
    "Type": "Medium"
  },
  {
    "Id": 95,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/287.%20Find%20the%20Duplicate%20Number/FindDuplicate.java",
    "Url": "https://leetcode.com/problems/find-the-duplicate-number",
    "Week": 8,
    "Category": "Binary",
    "Problem": "Find the Duplicate Number",
    "Summary": "This solution uses two pointers to find the entry point of a cycle in an array. It moves one pointer one step at a time and the other pointer two steps at a time until they meet, which indicates the presence of a duplicate element. It then uses two more pointers to find the entry point of the cycle, which is the duplicate element.",
    "Type": "Medium"
  },
  {
    "Id": 96,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/692.%20Top%20K%20Frequent%20Words/TopKFrequent.java",
    "Url": "https://leetcode.com/problems/top-k-frequent-words",
    "Week": 8,
    "Category": "Heap",
    "Problem": "Top K Frequent Words",
    "Summary": "This solution uses a HashMap to store the frequency of each word in the input list, and a PriorityQueue to store the top k frequent words. The PriorityQueue is implemented as a min heap, where the comparator first compares the frequency of two words and then the lexicographical order of the words in case of a tie. The solution returns a list of the words in the order they were removed from the PriorityQueue.",
    "Type": "Medium"
  },
  {
    "Id": 97,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/300.%20Longest%20Increasing%20Subsequence/LengthOfLIS.java",
    "Url": "https://leetcode.com/problems/longest-increasing-subsequence",
    "Week": 8,
    "Category": "Dynamic Programming",
    "Problem": "Longest Increasing Subsequence",
    "Summary": "This solution uses a dynamic programming approach to find the length of the longest increasing subsequence in a given sequence of integers. It uses an array dp to store the length of the longest increasing subsequence ending at each index, and updates the dp values using two nested loops. The time complexity of this solution is O(n^2).",
    "Type": "Medium"
  },
  {
    "Id": 98,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/261.%20Graph%20Valid%20Tree/ValidTree.java",
    "Url": "https://leetcode.com/problems/graph-valid-tree",
    "Week": 8,
    "Category": "Graph",
    "Problem": "Graph Valid Tree",
    "Summary": "This solution performs a DFS traversal on the graph, keeping track of the visited nodes and their parents in the DFS tree. If we encounter a visited node that is not the parent of the current node, it means that there is a cycle in the graph and the graph is not a valid tree. Otherwise, we continue the DFS traversal until all nodes are visited. If all nodes are visited, then the graph is a valid tree.",
    "Type": "Medium"
  },
  {
    "Id": 99,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/210.%20Course%20Schedule%20II/FindOrder.java",
    "Url": "https://leetcode.com/problems/course-schedule-ii",
    "Week": 9,
    "Category": "Graph",
    "Problem": "Course Schedule II",
    "Summary": "This solution uses a Breadth-First Search (BFS) algorithm to perform a topological sort on the given graph. We initialize the graph and count the number of incoming edges (prerequisites) for each node in the graph. We find all nodes with zero incoming edges, push them onto the queue, and remove all their outgoing edges from the graph. We repeat this process until all nodes have been visited or there are no more nodes with zero incoming edges. If there are no more nodes left in the graph, we return the ordering of nodes. Otherwise, we return an empty array.",
    "Type": "Medium"
  },
  {
    "Id": 100,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/24.%20Swap%20Nodes%20in%20Pairs/SwapPairs.java",
    "Url": "leetcode.com/problems/swap-nodes-in-pairs",
    "Week": 9,
    "Category": "Linked List",
    "Problem": "Swap Node in Pairs",
    "Summary": "The solution first checks if there are at least two nodes to swap. If so, it recursively swaps the rest of the list after the second node, and then swaps the first two nodes and returns the second node, which becomes the new head of the swapped list.",
    "Type": "Medium"
  },
  {
    "Id": 101,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/113.%20Path%20Sum%20II/PathSum.java",
    "Url": "https://leetcode.com/problems/path-sum-ii",
    "Week": 9,
    "Category": "Binary Tree",
    "Problem": "Path Sum II",
    "Summary": "The solution is a recursive implementation to find all root-to-leaf paths that sum to a given value in a binary tree. The pathSum method initializes an empty list for storing the paths and starts the recursive process with the recurseTree method. The recurseTree method first checks if the current node is a leaf node and if its value matches the remaining sum. If it does, it adds the current path to the list of paths. If not, it recursively calls the method on the left and right subtrees, subtracting the current node's value from the remaining sum each time. Finally, it removes the current node from the path's list before returning.",
    "Type": "Medium"
  },
  {
    "Id": 102,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/128.%20Longest%20Consecutive%20Sequence/LongestConsecutive.java",
    "Url": "https://leetcode.com/problems/longest-consecutive-sequence",
    "Week": 9,
    "Category": "Array",
    "Problem": "Longest Consecutive Sequence",
    "Summary": "This solution uses a HashSet to efficiently determine the existence of elements in the array. It iterates through the array and for each element, it checks if it is the start of a sequence. If it is, it continues adding elements to the sequence by checking if the next element is in the HashSet. It keeps track of the length of the longest sequence encountered and returns it. This solution has a time complexity of O(n) because it only iterates through the array twice and the time complexity of HashSet operations is O(1).",
    "Type": "Medium"
  },
  {
    "Id": 103,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/189.%20Rotate%20Array/RotateArray.java",
    "Url": "https://leetcode.com/problems/rotate-array",
    "Week": 9,
    "Category": "Array",
    "Problem": "Rotate Array",
    "Summary": "This solution performs a cyclic rotation of the array by reversing the entire array and then reversing the first k elements and the last n - k elements separately. It uses a helper function to reverse the elements in the array between two indices. The time complexity of this solution is O(n).",
    "Type": "Medium"
  },
  {
    "Id": 104,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/328.%20Odd%20Even%20Linked%20List/OddEvenList.java",
    "Url": "https://leetcode.com/problems/odd-even-linked-list",
    "Week": 9,
    "Category": "Linked List",
    "Problem": "Odd Even Linked List",
    "Summary": "This solution splits the given linked list into two separate lists - one containing the odd nodes and one containing the even nodes - and then merges them back together. It uses two pointers, odd and even, to iterate over the linked list and connect the nodes to their respective lists. Finally, it merges the even list back onto the end of the odd list and returns the head of the modified linked list.",
    "Type": "Medium"
  },
  {
    "Id": 105,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/394.%20Decode%20String/DecodeString.java",
    "Url": "https://leetcode.com/problems/decode-string/",
    "Week": 9,
    "Category": "Stack",
    "Problem": "Decode String",
    "Summary": "The solution uses two stacks to keep track of the current string and number of times it needs to be repeated. It iterates through the input string character by character, performs stack operations, and returns the final decoded string.",
    "Type": "Medium"
  },
  {
    "Id": 106,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/525.%20Contiguous%20Array/FindMaxLength.java",
    "Url": "https://leetcode.com/problems/contiguous-array",
    "Week": 9,
    "Category": "Array",
    "Problem": "Contiguous Array",
    "Summary": "This solution uses a hashmap to store the running sum of the binary array and the index at which it was first encountered. We initialize the hashmap with a key-value pair of (0, -1). It iterates through the binary array, and for each element, it updates the running sum based on the value of the element, and checks if the current sum is already in the hashmap. If it is, it updates the maximum length of a contiguous subarray if the difference between the current index and the index at which the sum was first encountered is greater than the current maximum. If the sum is not in the hashmap, it adds it to the hashmap with the current index as its value. After iterating through all the elements, it returns the maximum length of a contiguous subarray with equal number of 0 and 1.",
    "Type": "Medium"
  },
  {
    "Id": 107,
    "Solution": "",
    "Url": "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    "Week": 9,
    "Category": "Binary Tree",
    "Problem": "Maximum Width of Binary Tree",
    "Summary": "This solution uses a BFS approach with two queues to traverse the binary tree level by level. We keep track of the indices of the nodes in each level to calculate the width of the level. We update the maximum width if we find a level with a greater width. The solution returns the maximum width of the binary tree.",
    "Type": "Medium"
  },
  {
    "Id": 108,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/658.%20Find%20K%20Closest%20Elements/FindKClosestElements.java",
    "Url": "https://leetcode.com/problems/find-k-closest-elements",
    "Week": 9,
    "Category": "Heap",
    "Problem": "Find K Closest Elements",
    "Summary": "This solution uses binary search to find the index of the element in the array that is closest to x, and then uses two pointers to find the k closest elements. The left pointer starts from the index of the closest element and moves left, while the right pointer starts from the index of the closest element and moves right. We add the element with the smallest absolute difference between the element and x to the result list, and repeat until we have k elements in the result. The final result list is sorted in ascending order.",
    "Type": "Medium"
  },
  {
    "Id": 109,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/424.%20Longest%20Repeating%20Character%20Replacement/CharacterReplacement.java",
    "Url": "https://leetcode.com/problems/longest-repeating-character-replacement",
    "Week": 9,
    "Category": "String",
    "Problem": "Longest Repeating Character Replacement",
    "Summary": "This solution uses a sliding window approach to find the longest substring with all repeating characters. We initialize two pointers left and right to 0 and use an array count to keep track of the frequency of characters in the substring. We move the right pointer to the right until we have a substring with all repeating characters or until we have used up all k operations. We update the maximum repeating character count and the maximum length of the substring. If the number of non-repeating characters in the substring is greater than k, we move the left pointer to the right and decrement the count of the character at the left end of the substring. We repeat the above steps until we have processed the entire string. The final result is the maximum length of the substring seen so far.",
    "Type": "Medium"
  },
  {
    "Id": 110,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/285.%20Inorder%20Successor%20in%20BST/InorderSuccessor.java",
    "Url": "https://leetcode.com/problems/inorder-successor-in-bst/",
    "Week": 10,
    "Category": "Binary Search Tree",
    "Problem": "Inorder Successor in BST",
    "Summary": "This solution finds the in-order successor of a given node in a binary search tree by traversing the tree in an in-order fashion until the given node is found, and then returning the next node in the traversal. The time complexity is O(h) and the space complexity is O(h), where h is the height of the tree.",
    "Type": "Medium"
  },
  {
    "Id": 111,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/55.%20Jump%20Game/CanJump.java",
    "Url": "https://leetcode.com/problems/jump-game",
    "Week": 10,
    "Category": "Greedy",
    "Problem": "Jump Game",
    "Summary": "This solution starts from the end of the array and moves backwards, checking at each position if we can reach the end from that position. If we can, we update the end index to the current position and repeat the process. If we reach the start of the array and can reach the end from the start, we return true, otherwise we return false. This solution has a time complexity of O(n) and a space complexity of O(1).",
    "Type": "Medium"
  },
  {
    "Id": 112,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/2.%20Add%20Two%20Numbers/AddTwoNumbers.java",
    "Url": "https://leetcode.com/problems/add-two-numbers/description/",
    "Week": 10,
    "Category": "Linked List",
    "Problem": "Add Two Numbers",
    "Summary": "This solution adds two non-negative integers represented as linked lists by traversing both linked lists simultaneously and adding the corresponding digits of both linked lists. If the sum of the digits is greater than or equal to 10, carry over the remainder to the next digit. The sum of the digits at each position is stored in a new linked list, which is returned as the result.",
    "Type": "Medium"
  },
  {
    "Id": 113,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/22.%20Generate%20Parentheses/GenerateParentheses.java",
    "Url": "https://leetcode.com/problems/generate-parentheses",
    "Week": 10,
    "Category": "Recursion",
    "Problem": "Generate Parentheses",
    "Summary": "This solution uses a recursive backtracking approach to generate all possible combinations of well-formed parentheses. It initializes an empty list and starts with an empty string. The backtrack method recursively generates all valid prefixes of the parentheses string, and then adds the remaining closing parentheses to form a complete string. It checks the base case when the length of the current string is equal to n*2. The solution generates all possible combinations of well-formed parentheses by incrementing open and close parenthesis count while maintaining the condition that the number of closed parentheses is less than the number of open parentheses.",
    "Type": "Medium"
  },
  {
    "Id": 114,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/148.%20Sort%20List/SortList.java",
    "Url": "https://leetcode.com/problems/sort-list/",
    "Week": 10,
    "Category": "Linked List",
    "Problem": "Sort List",
    "Summary": "This solution implements the merge sort algorithm to sort a linked list. It uses the merge() function to merge two sorted sub-lists. The sortList() function divides the input list into two halves and recursively sorts them using merge sort. Finally, it merges the sorted halves using the merge() function and returns the sorted list.",
    "Type": "Medium"
  },
  {
    "Id": 115,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/323.%20Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph/CountComponents.java",
    "Url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "Week": 10,
    "Category": "Graph",
    "Problem": "Number of Connected Components in an Undirected Graph",
    "Summary": "This solution uses Depth First Search (DFS) algorithm to find the number of connected components in an undirected graph. It initializes an array to keep track of visited nodes and an adjacency list to represent the graph. Then, for each unvisited node, it performs a DFS traversal and marks all reachable nodes as visited. Finally, it returns the total number of DFS traversals performed, which is equal to the number of connected components in the graph.",
    "Type": "Medium"
  },
  {
    "Id": 116,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/1197.%20Minimum%20Knight%20Moves/MinKnightMoves.java",
    "Url": "https://leetcode.com/problems/minimum-knight-moves",
    "Week": 10,
    "Category": "Graph",
    "Problem": "Minimum Knight Moves",
    "Summary": "This solution uses breadth-first search (BFS) to find the minimum number of moves a knight needs to reach the target position on a chessboard. It creates a visited set to store the positions that have already been visited and uses a queue to perform BFS. The algorithm iteratively adds the neighboring positions to the queue, updates the number of moves required to reach those positions, and marks them as visited. It continues this process until it reaches the target position or exhausts all possible moves. Finally, it returns the minimum number of moves required to reach the target position.",
    "Type": "Medium"
  },
  {
    "Id": 117,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/735.%20Asteroid%20Collision/AsteroidCollision.java",
    "Url": "https://leetcode.com/problems/asteroid-collision/",
    "Week": 10,
    "Category": "Stack",
    "Problem": "Asteroid Collision",
    "Summary": "This solution uses a stack to keep track of the asteroids. It iterates through the given array of asteroids and checks if each asteroid can collide with any of the asteroids in the stack. If two asteroids collide, the smaller one will explode. Finally, the remaining asteroids in the stack are returned as an array.",
    "Type": "Medium"
  },
  {
    "Id": 118,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/560.%20Subarray%20Sum%20Equals%20K/SubarraySum.java",
    "Url": "https://leetcode.com/problems/subarray-sum-equals-k",
    "Week": 10,
    "Category": "Array",
    "Problem": "Subarray Sum Equals K",
    "Summary": "This solution uses a HashMap to keep track of the running sum and its frequency. It initializes the HashMap with a key-value pair of 0 and 1 to handle the case when the subarray sum equals k. It iterates through the array, adding each element to the sum variable. It checks if there is a subarray with sum k by checking if the HashMap contains the key sum - k. If it does, it adds the frequency of that sum to the count variable. Finally, it adds the current sum to the HashMap by putting the key-value pair (sum, map.getOrDefault(sum, 0) + 1). It returns the count variable, which represents the number of subarrays with sum k.",
    "Type": "Medium"
  },
  {
    "Id": 119,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/528.%20Random%20Pick%20with%20Weight/PickIndex.java",
    "Url": "https://leetcode.com/problems/random-pick-with-weight",
    "Week": 10,
    "Category": "Math",
    "Problem": "Random Pick with Weight",
    "Summary": "This solution uses prefix sum and binary search to select an index from an array of positive integers proportionally to its weight. It initializes a prefix sum array and a total sum variable to 0, and iterates through the input array to calculate the prefix sum array and the total sum. When selecting an index, it generates a random integer between 0 and the total sum, and performs binary search on the prefix sum array to find the index i such that prefixSum[i - 1] < rand < prefixSum[i]. Finally, it returns the index i.",
    "Type": "Medium"
  },
  {
    "Id": 120,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/215.%20Kth%20Largest%20Element%20in%20an%20Array/FindKthLargest.java",
    "Url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "Week": 11,
    "Category": "Heap",
    "Problem": "Kth Largest Element in an Array",
    "Summary": "This solution finds the kth largest element in an array of integers using a min heap priority queue. It iterates through the array, adding elements to the queue and maintaining a size of k by removing the smallest element if the queue exceeds k.",
    "Type": "Medium"
  },
  {
    "Id": 121,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/48.%20Rotate%20Image/RotateImage.java",
    "Url": "https://leetcode.com/problems/rotate-image",
    "Week": 11,
    "Category": "Matrix",
    "Problem": "Rotate Image",
    "Summary": "This solution rotates an n x n 2D matrix in place by 90 degrees clockwise. It first performs a transpose of the matrix by swapping the elements along the diagonal, and then performs a reflection of the matrix by swapping the elements along the y-axis. This effectively rotates the matrix by 90 degrees clockwise.",
    "Type": "Medium"
  },
  {
    "Id": 122,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/103.%20Binary%20Tree%20Zigzag%20Level%20Order%20Traversal/ZigZagLevelOrder.java",
    "Url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
    "Week": 11,
    "Category": "Binary Tree",
    "Problem": "Binary Tree Zigzag Level Order Traversal",
    "Summary": "This solution performs a zigzag level order traversal of a binary tree and returns the result as a list of lists of integers. It uses a queue to traverse the tree level by level, and a boolean variable zigzag to keep track of whether to insert the node value at the beginning or end of the list. At each level, it creates a new linked list, adds the node values in zigzag order, and adds the linked list to the final result. Finally, it returns the final result.",
    "Type": "Medium"
  },
  {
    "Id": 123,
    "Solution": "https://github.com/vivekchand/grind169-solutions/blob/main/362.%20Design%20Hit%20Counter/HitCounter.java",
    "Url": "https://leetcode.com/problems/design-hit-counter/",
    "Week": 11,
    "Category": "Queue",
    "Problem": "Design Hit Counter",
    "Summary": "This solution uses a queue to store the timestamps of the hits. When a new hit is recorded, it is added to the end of the queue. When the number of hits in the past 5 minutes is requested, all the hits that are older than 5 minutes are removed from the front of the queue. The number of hits in the queue is returned. The solution has a time complexity of O(n), where n is the number of hits recorded, and a space complexity of O(n).",
    "Type": "Medium"
  }
]