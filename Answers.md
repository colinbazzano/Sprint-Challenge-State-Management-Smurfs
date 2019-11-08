1. What problem does the context API help solve?

Context API is a great way to simplify state management. A problem that context API solves is when your code has many components that require a single piece of data, but are nested deeply in a component tree. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Actions are a part of the reducer. Actions have a type property and that type is what communicates to the reducer what specific action is to be run in the app. 

Reducers: Reducers are functions that take two arguments, current state and action. Reducers return a new, updated state object based on both arguments.

Store: Store is from Redux, and is created by importing createStore from Redux. The store will hold you state information and creates a global state you can then use in your application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

In simpliest terms, Application State is global, and Component State is local. Larger applications benefit greatly from global state, using something like Redux, whereas smaller applications may not need all the extra bells and whistles of Redux and that's when a local state may prove to be more efficient. Though I could certainly use local state today, I will be using Redux to practice my skills with writing Redux.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a Redux middleware library, that allows Redux to perform async operations. Thunk itself is a term for a function that is returned by another function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Though it may be a beast to understand, I like Redux. I sort of can't believe I'm saying that, though I can see it's clear benefits and I'm sure with enough practice, I'll finally be able to wrap my head around it! 
