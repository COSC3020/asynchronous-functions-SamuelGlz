[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file

I used the recommended async library to guide me.
https://caolan.github.io/async/v3/docs.html#map
I was not able to set up automatic testing because the return of my function would always lead to a promise instead of a value. I was able to get the function to print its result to the console but I couldnt get it to return to a value. I tried asking Chatgpt for help returning the value, and I ended up using this part of the suggestion in the end of codejs:

```
asynchFun([0], 0).then(result => {
        console.log(result);
    })
```

I tried implementing this into a test but I was not able to get it to work.


The worst case time complexity is $\Theta$(n)

This is because the map and reduce functions will run each value of the list asynchrounously. They both would take $\Theta(n)$, so the time complexity is $\Theta(n+n)$ = $\Theta(2n)$, which asymptotically is $\Theta(n)$