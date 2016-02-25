'use strict';

angular.module('portfolioAppApp')

.value('PROJECTS', [
    {
      name: 'Project Monologues',
      description: 'An actors\' resource to search, add, and save monologues.  Anyone can browse, with some features reserved for users.  Curators check recently added materials for accuracy and consistency.',
      tools: ['AngularJS', 'NodeJS', 'ExpressJS', 'Mongoose', 'MongoDB', 'uiRouter', 'uiBootstrap', 'grunt', 'jasmine'],
      url: 'http://protected-escarpment-86335.herokuapp.com',
      repo: 'https://github.com/ChildeRowland/ProjectMonologueFullstack.git'
    }, {
      name: 'Simon Workshop',
      description: 'Exercise replicating the Milton Bradly game Simon',
      tools: ['AngularJS', 'Bootstrap'],
      url: 'http://mysterious-gorge-35073.herokuapp.com',
      repo: 'https://github.com/ChildeRowland/simonApp.git'
    }, {
      name: 'Weather Getter',
      description: 'Single page app, using the Open Weather Api to get temperature by city.',
      tools: ['AngularJS', 'ngRoute', 'ngResource'],
      repo: 'https://github.com/ChildeRowland/weatherSPA.git'
    }
  ])

.controller('MainController', function (PROJECTS) {
  var self = this;

  self.linkedin = 'https://www.linkedin.com/in/christopher-mehmed-8a161545';

  self.projects = PROJECTS;

  self.stringList = function (array) {
    return array.join(' / ');
  };

});

