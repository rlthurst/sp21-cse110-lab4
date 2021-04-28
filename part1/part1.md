## Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. The result variable does not exist outside the scope of the if statement, causing line 13 to return an error since result is not defined.
5. Attempting to change the const result variable causes an error, preventing line 9 from being printed.
6. The result variable does not exist outside the scope of the if statement, causing line 13 to return an error since result is not defined.

## Part 1b
1. 3; Variable i has function scope, when line 12 runs, i equals the last defined value from the for loop.
2. 150; Variable discountedPrice has function scope, when line 13 runs, discountedPrice equals the last defined value from the for loop.
3. 150; Variable finalPrice has function scope, when line 14 runs, finalPrice equals the last defined value from the for loop.
4. 50,100,150; Array discounted has function scope, when the function returns, discounted is populated with values from the for loop.
5. Error; At line 12, variable i is not defined since it is declared in the for loop block, resulting in an error.
6. Error; At line 13, variable discountedPrice is not defined since it is declared in the for loop block, resulting in an error.
7. 150; Variable finalPrice has block scope within the function, when line 14 runs, finalPrice equals the last defined value from the loop.
8. 50,100,150; Array discounted has block scope within the function, when the function returns, discounted is populated with values from the for loop.
9.  Error; At line 11, variable i is not defined since it is declared in the for loop block, resulting in an error.
10. 3; Variable length has block scope within the function, when line 12 runs, length is defined within the scope.
11. 50,100,150; Array discounted has block scope within the function, when the program returns, discounted is populated with values from the for loop. An error is not thrown when populating the discounted array because the variable is not being redefined, the object itself is being populated.
12. 
	A. student.name
	B. student['Grad Year']
	C. student['greeting']()
	D. student['Favorite Teacher'].name
	E. student.courseLoad[0]
13. 
	A. '32'; String conversion with '+' operator and string
	B. 1; Numeric conversion due to using mathematic operator '-'
	C. 3; Numeric conversion converting null to 0
	D. '3null'; String conversion converting null to 'null'
	E. 4; Numeric conversion converting true to 1
	F. 0; Numeric conversion converting false to 0 and null to 0
	G. '3undefined'; String conversion converting undefined to 'undefined'
	H. NaN; Numeric conversion converting '3' to 3 and undefined to NaN
14. 
	A. true; Numeric conversion '2' => 2, 2>1 is true
	B. false; Numeric conversion '2' => 2, '12' => 12, 2<12 is false
	C. true; Numeric conversion '2' => 2, 2 equals 2 is true
	D. false; No type conversion, 2 does not equal '2'
	E. false; Numeric conversion, true => 1, 1 does not equal 2
	F. true; Boolean conversion, Boolean(2) => true, true equals true without type conversion
15. == operator performs type conversion before checking equality of values. The strict equality operator does not perform type conversion before checking equality.
16. 
17. newArr = [2, 4, 6]; The value doSomething is passed into callback as a string. The function interprets line 4 to newArr.push(doSomething(array[i])); When the compiler evaluates line 4 it calls the doSomething function as expected.
18. 
19. 1432
