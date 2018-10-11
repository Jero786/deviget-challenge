# Project Title

Interview challenger at Deviget

#### Tech Stack selected

* Next: Server rendering for performance, SEO reason, Code splitting, etc.
* Enzyme, Jest & Chai: Unit Testing for quality.
* Redux: The reactive programming allow us to build more predictible, scalable & Solid web application.
* immutablejs: For performance reason allowing perform shallow equality and avoid uneeded rendering. (only for Container Component)
* lodash: For cross browsing suppport, performance and reliable way to handler data. (only for dump component)
* Sass: It's very usefull to use pre-procesor to write a more readeable css and easy to use it.
* BEM/SMACSS: using block element modifier and with some things of SMACSS is a really clean way to style components. Also it's a really a performance way to style component instead use neested selectors. (you don't care any more about not pass to 3 nested level)

### Missing points

* I couldn't implement with real Reddit API because it's needed to use OAuth2, and it will take more time to implement it. So, I decide to mock the JSON and use that mock for this first version of the example.
* I couldn't implement pagination for time reason too.

------------

### Prerequisites

`Node 8+`

### Installing

```
$ npm install -g eslint jest now
$ npm install
```
**NOTE**:
In case that use `nvm` you will need to set by default  Node+6 (eg: `nvm alias default v10.8.0`)

## Running unit tests
```
$ npm run test
```
## Running unit tests in watch mode
```
$ npm run test:watch
```
## In order to configure pre-commit that will execute prettier-eslint & unit-test before commit
```
$ npm install --save-dev husky prettier-eslint
```
## Deployment

```
now
```

## Authors

* **Jeronimo Carrizo** - *Initial work* - (https://github.com/Jero786)

## License

This project is licensed under the MIT License
