# Test unitaire :

- C'est mécanisme utilisé pour tester chaque fonctionnalité dans votre application (Component)

## La bibliothèque Enzyme :

C'est une biblio pour tester les composants : il manipule le DOM (rendre le composant et chercher des éléments)

Pour installer Enzyme :

npm i --save-dev enzyme

npm i --save-dev enzyme-adapter-react-16 --force

Enzyme dispose de plusieurs fonctions :

- shallow :
  const mycomponent = shallow(`<App/>);`
  mycomponent.find(....)
- mount
- render

Utilier enzyme dans le fichier App.test.js

import Enzyme from 'enzyme'; // exposer directement shallow, render, mout

import Adapter from 'enzyme-adapter-react-16';

Enzyme.config({ adpter : new Adapter() });

import App from '.....';

describe('Groupe1', ()=>{

it('Test 1', ()=> {

const myApp = shallow(`<App/>`)

const buttons = myApp.find('button')

});

it('Test 2', ()=> {

});

});

describe('Groupe 3', ()=>{

test('Test 1', ()=> {

});

});

## Le framework Jest

- Permet d'éxécuter le test unitaire : describe(), it(), test(), expect() ....

## React Testing Library

import {render, screen, ....} from '@testing-library/react';

## Créer un fichier pour le test unitaire

- Extension : App.test.js

## Les étapes des test :

it('test 1', ()=>{

// 1- Génération

// 2 - Action

// 3 - Assertion

});

## Lancer le test unitaire :

npm run test

npm test
