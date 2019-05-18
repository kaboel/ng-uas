# NgUas
A College Final Project...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Prerequisites & Setup

- **[Node.js](https://nodejs.org/en/)**
- **[AngularCLI](https://angular.io)**
- **[Firebase](https://firebase.google.com/)**

Navigate to project directory then run `npm install` to install dependencies.
Create a file called <b>environment.ts</b> inside [src/environments](https://github.com/kaboel/ng-uas/tree/master/src/environments) folder, refer to <b>environment.example.ts</b> for reference,
edit this section :
````typescript
...
firebase: {
    apiKey: '#',
    authDomain: '#',
    databaseURL: '#',
    projectId: '#',
    storageBucket: '#',
    messagingSenderId: '#',
    appId: '#'
}
...
````
please refer to your firebase app config.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
