'use strict';

angular.module('portfolioAppApp')

.value('PAGES', [ 'code', 'design' ])

.value('PROJECTS', [
    {
      name: 'Project Monologues',
      description: 'A resource for actors to search and study monologues.  Anyone can browse, with some features reserved for users.  Curators check recently added materials for accuracy and consistency.  Fullstack MEAN application.',
      tools: ['AngularJS', 'NodeJS', 'ExpressJS', 'Mongoose', 'MongoDB', 'uiRouter', 'uiBootstrap', 'grunt', 'jasmine'],
      url: 'https://cm-project-monologue.herokuapp.com',
      repo: 'https://github.com/ChildeRowland/ProjectMonologueFullstack.git'
    }, {
      name: 'Reminder Application',
      description: 'Fullstack application, with a SQL database. Although the \'todo\' style app has become almost obligitory for junior level developers, I\'ve enjoyed working with the code.  I\'m still working through the front end, but check out the github repo to see the the backend in action.',
      tools: ['AngularJS', 'NodeJS', 'ExpressJS', 'Sequelize', 'SQLite3', 'Postgres', 'ngResource', 'bcrypt'],
      repo: 'https://github.com/ChildeRowland/minder-list-app.git'
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

.value('DESIGN', [
  {
    name: 'Nordstrom Energy-Savings Retrofit',
    description: '',
    url: 'https://www.bpa.gov/EE/Utility/marketing/casestudies/Nordstrom_casestudy.pdf'
  }, {
    name: 'David Byrne\'s Playing the Building',
    description: '',
    url: 'http://www.npr.org/templates/story/story.php?storyId=91106423'
  }
])

.controller('MainController', function (PROJECTS, PAGES, DESIGN) {
  var self = this;

  self.linkedin = 'https://www.linkedin.com/in/christopher-mehmed-8a161545';
  self.github = 'https://github.com/ChildeRowland?tab=repositories';

  self.pages = PAGES;
  self.projects = PROJECTS;
  self.designEx = DESIGN;

  self.stringList = function (array) {
    return array.join(' / ');
  };

});

