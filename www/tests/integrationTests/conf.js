exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['homeView.tests.js',
          'createNewUserView.tests.js',
          'activityView.tests.js'

  ]
};
