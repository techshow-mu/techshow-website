# TechShow Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Summary

This is the website behind [TechShow Mauritius Podcast](https://techshow-mu.github.io/techshow-website/). It is a single-page application built with Angular.

## How can I contribute ?

---

### Docker Support

Building the image:

```
$ docker build -t techshow:dev .
```

Starting a container:

```
$ docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --name techshow --rm techshow:dev
```

Executing commands inside the container:

```
$ docker exec -it techshow [COMMAND]
$ docker exec -it techshow ng test --watch=false
```

NOTE:

```
$ docker exec -it foo ng e2e --port 4202  # DOES NOT WORK YET!!
```

Stopping the container:

```
$ docker container stop techshow

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


```
