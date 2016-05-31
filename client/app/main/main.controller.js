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
    description: 'One of the longest running projects I\'ve been a part of, the Nordstrom Energy-Savings Program has spanned many years and the entire fleet of Nordstrom Stores.  I helped originate the project as a designer, and upon completion I was managing the project with oversight from Nordstom\'s special projects division. The link provided gives a snapshot of the project in the North West Region of the US.',
    url: 'https://www.bpa.gov/EE/Utility/marketing/casestudies/Nordstrom_casestudy.pdf',
    image: 'app/main/img/nordstrom-chinook-centre-head.jpg'
  }, {
    name: 'Ernesto Neto\'s Anthropodino',
    description: 'A massive sculpture, installed at the Wade Thompson Drill Hall in the Park Avenue Armory.  I worked on the Lighting Design team, assisting Pat Dignan, and managing the lighting install. Seeing something like this is rare, being able to work on it is extraordinary.',
    url: 'http://www.armoryonpark.org/photo_gallery/slideshow/ernesto_neto_in_the_wade_thompson_drill_hall',
    image: 'app/main/img/anthropodino-head.jpg'
  }, {
    name: 'David Byrne\'s Playing the Building',
    description: 'A beautifully, seamingly simplistic idea, David Byrne toured this installation to a few locations, and I had the pleasure of working with the NYC install team at the Battery Maritime Building. Visitors were invited to play a small organ at the center of a large empty room, which intern, manipulated the stucture into sound.',
    url: 'http://www.npr.org/templates/story/story.php?storyId=91106423',
    image: 'app/main/img/playing-the-building-head.jpg'
  }, {
    name: 'The Plain of Heaven',
    description: 'There is an under-appreciated type of curative endeavor, epitomized by this project.  Artists of many disciplines install their work in an abandoned space in an attempt to revitalize a neighborhood, or draw attention to a public project.  This show in NYC’s Meat Packing District, in tandem with the High Line park project, was a massive success with huge impact to the area.  I ran the lighting crew and assisted the lighting designer Pat Dignan.',
    url: 'http://creativetime.org/projects/the-plain-of-heaven/',
    image: 'app/main/img/plain-of-heaven-head.jpg'
  },{
    name: 'La Mama',
    description: 'The storied experimental theatre on West 4th ST, NYC was one of my first full-time design jobs, although there was a lot more to the job than just design.  La Mama has multiple spaces, typically running shows for three week engagements.  We’d load in a new show on a Monday, and have it ready to open in 2-3 days.  Although my specialty was lighting, I and everyone else worked on a wide swath of skills and tasks.  Carpentry, Sound, Painting, loading in and out, tech rehearsal, stage management, and whatever else needs to be done to get a show running successfully.',
    url: 'http://lamama.org',
    image: 'app/main/img/la-mama-head.jpg'
  }
])

.controller('MainController', function (PROJECTS, PAGES, DESIGN) {
  var self = this;

  self.linkedin = 'https://www.linkedin.com/in/christopher-mehmed-8a161545';
  self.github = 'https://github.com/ChildeRowland?tab=repositories';

  self.pages = PAGES;
  self.projects = PROJECTS;
  self.designEx = DESIGN;

  self.page = self.pages[0];

  self.firstVist = true;

  self.render = {
    designView: function () {
      return self.page === 'design';
    },
    codeView: function () {
      return self.page === 'code'
    },
    aboutView: function () {
      return self.page === 'about'
    }
  };

  self.pager = function (page) {
    self.page = page;

    if (self.firstVist) {
      self.firstVist = false;
    }
  }

  self.stringList = function (array) {
    return array.join(' / ');
  };

});

