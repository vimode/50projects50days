# Progress Steps

[Demo](https://50projects50days-psi.vercel.app/progress-steps)

A progress bar component with proceeds in steps using 'Next' and 'Prev' button. 

### Experience 

The premise of the challenge is, when pressed 'Next' fill the next circle and the line before that with the blue color and also keep the previous circle filled. The prev and next button enale and disable appropriately. 
My logic - Add or remove class `active` to the next circle and the previous line when the appropriate button is pressed. I did not want to setup a index for each click and then based on that index fill the items and needed a more efficient method. Using `forEach' for each circle simply fills all the cirles and lines together but I was certain there was a way to index each time the function is triggered without keeping a seperate index. MDN for the rescue!

MDN - [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```forEach((element, index) => { ... } )
element - The current element being processed in the array.
index - The index of element in the array
```

##### Pending tasks
- Add screenshot
- Add notes if required. 