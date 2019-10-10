# Metasix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

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

##Explicação

Minha solução para o desafio foi feita em Angular.
Pensei em simular um dicionário, representado pela classe "AnimalDict", em que a chave seria uma característica de um animal, e o valor, seria um array formado por dois animais, onde um se identifica com a característica, e o outro não. Além disso, cada animal pode, ou não apontar para uma nova característica. Se o animal apontar para uma próxima característica, outra pergunta será feita, com base na característica, se não, o programa perguntará se o próprio animal é o animal pensado pelo usuário.

## Instruções

Digitar no CMD, npm i, para instalar as dependências e digitar ng serve, para rodar localmente (localhost:4200)
