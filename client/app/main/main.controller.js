'use strict';

angular.module('portfolioAppApp')

.value('PROJECTS', [
    {
      name: 'Project Monologues',
      description: 'A resource for actors to search and study monologues.  Anyone can browse, with some features reserved for users.  Curators check recently added materials for accuracy and consistency.',
      tools: ['AngularJS', 'NodeJS', 'ExpressJS', 'Mongoose', 'MongoDB', 'uiRouter', 'uiBootstrap', 'grunt', 'jasmine'],
      url: 'https://cm-project-monologue.herokuapp.com',
      repo: 'https://github.com/ChildeRowland/ProjectMonologueFullstack.git'
    }, {
      name: 'Simon Workshop',
      description: 'Exercise replicating the Milton Bradly game Simon.',
      tools: ['AngularJS', 'Bootstrap'],
      url: 'https://cm-simon-exercise.herokuapp.com',
      repo: 'https://github.com/ChildeRowland/simonApp.git'
    }, {
      name: 'Weather Getter',
      description: 'Single page app, using the Open Weather Api to get temperature by city.  Also refactored with a commed line interface.  User can get weather information by specifying city, or allow ipinfo.io to set location via IP address.',
      tools: ['AngularJS', 'ngRoute', 'ngResource', 'yargs', 'OpenWeatherApi' ],
      multiRepos: ['https://github.com/ChildeRowland/weatherSPA.git', 'https://github.com/ChildeRowland/command-line-weather.git']
    }
  ])

.controller('MainController', function (PROJECTS) {
  var self = this;

  self.linkedin = 'https://www.linkedin.com/in/christopher-mehmed-8a161545';
  self.github = 'https://github.com/ChildeRowland?tab=repositories';

  self.projects = PROJECTS;

  self.stringList = function (array) {
    return array.join(' / ');
  };

});

