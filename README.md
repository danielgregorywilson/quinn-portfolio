# Set up
run `npm install`
Install the Angular CLI if you don't have it

# Deploy
`ng build --configuration production`
Navigate to https://s3.console.aws.amazon.com/s3/buckets/quinnriverrose.com
Under the 'Objects' tab is the list of files
Drag the contents of dist/portfolio3 *EXCEPT ASSETS* to the window to upload the build
Then make an invalidation for '/*' here to reset the CDN cache: https://console.aws.amazon.com/cloudfront/v3/home?region=us-west-2#/distributions/E17XT7M57G45TV/invalidations

# Portfolio3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

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
