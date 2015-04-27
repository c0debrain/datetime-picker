Package.describe({
  name: 'ryanswapp:datetime-picker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple package for adding a generic datetime picker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ryanswapp/datetime-picker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery@1.11.3_2', 'client');
  api.addFiles('datetime-picker.css', 'client');
  api.addFiles('datetime-picker.js', 'client');
});
