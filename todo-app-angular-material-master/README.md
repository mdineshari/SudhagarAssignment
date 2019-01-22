
# TodoAppAngularMaterials
This is a simple to-do application written in Angular 5.

This app utilizes the [Angular Matierlal] (https://material.angular.io/) components.

This is a TODO application written in Angular 5.  The TODOs created are not persistent and lost on browser refresh/reload. 

The following additional components are user:

* [Angular2Moment] (https://github.com/urish/angular2-moment)
* [ng-pick-datetime] (https://www.npmjs.com/package/ng-pick-datetime)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Known Issues

'ng test' Karma is currently showing 9 failures. 


    Failed: Template parse errors:
    Can't bind to 'ngModel' since it isn't a known property of 'textarea'. ("
        <h4>New Task</h4>
        <mat-form-field class="todo-full-width">
          <textarea matInput [ERROR ->][(ngModel)]="todoText" [ngModelOptions]="{standalone: true}"
                    placeholder="Task Name""): ng:///DynamicTestModule/TodoInputComponent.html@4:25
    Can't bind to 'ngModelOptions' since it isn't a known property of 'textarea'. ("/h4>
        <mat-form-field class="todo-full-width">
          <textarea matInput [(ngModel)]="todoText" [ERROR ->][ngModelOptions]="{standalone: true}"
                    placeholder="Task Name"></textarea>
        </mat"): ng:///DynamicTestModule/TodoInputComponent.html@4:48
    'mat-form-field' is not a known element:
    1. If 'mat-form-field' is an Angular component, then verify that it is part of this module.
    2. If 'mat-form-field' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("
      <form class="todo-form">
        <h4>New Task</h4>
        [ERROR ->]<mat-form-field class="todo-full-width">
          <textarea matInput [(ngModel)]="todoText" [ngModelOpt"): ng:///DynamicTestModule/TodoInputComponent.html@3:4
    Can't bind to 'ngModel' since it isn't a known property of 'input'. ("
        <div class="input-wrapper">
          <div><h4>Date/Time</h4></div>
          <input matInput [ERROR ->][(ngModel)]="todoDate" [ngModelOptions]="{standalone: true}"
                 [owlDateTimeTrigger]="dtPi"): ng:///DynamicTestModule/TodoInputComponent.html@9:22
    Can't bind to 'ngModelOptions' since it isn't a known property of 'input'. (""input-wrapper">
          <div><h4>Date/Time</h4></div>
          <input matInput [(ngModel)]="todoDate" [ERROR ->][ngModelOptions]="{standalone: true}"
                 [owlDateTimeTrigger]="dtPicker1" [owlDateTime]="d"): ng:///DynamicTestModule/TodoInputComponent.html@9:45
    Can't bind to 'owlDateTimeTrigger' since it isn't a known property of 'input'. (">
          <input matInput [(ngModel)]="todoDate" [ngModelOptions]="{standalone: true}"
                 [ERROR ->][owlDateTimeTrigger]="dtPicker1" [owlDateTime]="dtPicker1">
          <owl-date-time #dtPicker1></owl-da"): ng:///DynamicTestModule/TodoInputComponent.html@10:13
    Can't bind to 'owlDateTime' since it isn't a known property of 'input'. ("l)]="todoDate" [ngModelOptions]="{standalone: true}"
                 [owlDateTimeTrigger]="dtPicker1" [ERROR ->][owlDateTime]="dtPicker1">
          <owl-date-time #dtPicker1></owl-date-time>
        </div>
    "): ng:///DynamicTestModule/TodoInputComponent.html@10:46
    'owl-date-time' is not a known element:
    1. If 'owl-date-time' is an Angular component, then verify that it is part of this module.
    2. If 'owl-date-time' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("standalone: true}"
                 [owlDateTimeTrigger]="dtPicker1" [owlDateTime]="dtPicker1">
          [ERROR ->]<owl-date-time #dtPicker1></owl-date-time>
        </div>
        <div class="clearfix"></div>
    "): ng:///DynamicTestModule/TodoInputComponent.html@11:6
    'mat-card' is not a known element:
    1. If 'mat-card' is an Angular component, then verify that it is part of this module.
    2. If 'mat-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("[ERROR ->]<mat-card *ngIf="showMe" class="todo-card">
      <form class="todo-form">
        <h4>New Task</h4>
    "): ng:///DynamicTestModule/TodoInputComponent.html@0:0



