# SWAPI PROJECT !

## How to use

Install it and run:

```bash
npm install
npm run dev
```

if you want to access, the deploy is in localhost:3000

## Run Jest tests

```bash
npm run test
```

## Run Lint

```bash
npm run lint
```

## Run Storybook

```bash
npm run storybook
```

## Libraries

### Redux
It is a webapp state manager

### Storybook
It is a library to check all the components and their states renders, this allows to see clearly if there are similar components or repeated, and in the other hand if it is necessary design checks.

### Next JS
It is a library to create SSR pages, it should be the SEO solution on web pages with react. In the other hand, this lib can separate the server to the client and this allows to charge the base html from the server.

### PropTypes
A nice way to know the type of props that the component needs

### Jest
I used jest to test the components (Unit testing)

### Eslint
This linter is recomended for react but you can use another or change the rules

### Material-UI
One of the most popular UI in react and react-native, its a cool library but i always prefer to remove external libraries and use your own design.

### Redux Devtools Extension
This is awesome library, you can check step by step with the devtools all the states of our application

### Styled-components
It is a library to use css in JS, its a nice lib because it can access to components props and use logic into the css, its faster than SASS and doesen't need pre-compilers.

### Rechart
A simple library of charts recomended

## Next Steps

### Replace Redux to useReducer and useContext HOOK
It could be a great improvement in order to clean the packages and remove an external library, also this hook it would be nice to combine with useContext.

### Replace Rechart to D3
Rechart is a standard chart library, it would be nice to use something more custom like D3, also the performance would be interesting to apply in this case.

### Remove Material UI
Its better if you dont need external libs for your own design always. Also would be more flexible, faster, custom, probably less lines of code, etc. 

### Use Typescript
In this case Typescript is more efficent than proptypes because you can define all the props type and the function types into the component.

### Performance Improvements
Out of code, you can add some configs with react-addons-perf or webpack, etc.

### Use GraphQL
This lib would be nice to use in this type of things. Because you can set the parameters that you need, such a contract with the backend part, including types.