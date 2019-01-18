[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. 
PropTypes is a method by which the developer can check the type (number, string, boolean, etc.) of the data being passed through the various components. Passing the wrong type of data will throw an error. 
[ ] Describe a life-cycle event in React? 
A life-cycle event is a set of code that automatically triggers upon a change in a React component's life-cycle. This could happen when the component is first rendered, when the component updates, or when the component is unmounted.
[ ] Explain the details of a Higher Order Component? 
A HOC is a function which receives another component as a perameter. The function returns a new component, typically with some added functionality. 
[ ] What are three different ways to style components in React? Explain some of the benefits of each.
Option 1: Style with normal CSS. Pros: It's standard and any developer worth his salt will understand what you are doing. Cons: You have a lot of files for each component.
Option 2: Use a CSS preprocessor. Props: Allows the use of CSS mixins and variables, plus more semantic syntax. Cons: Lots of files. More dependencies to install.
Option 3: Use styled components. Pros: Everything is in a .js file. Cons: Instead of using traditional HTML tags, you have to name your own tags, which could be confusing for new developers. 