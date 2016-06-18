Package.describe({
  name: 'cinn:logged-user',
  version: '0.0.2',
  summary: 'Logged user helper for meteor apps',
  git: 'https://github.com/cinn-labs/meteor-logged-user',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.2.4');

  api.export('Tenancy');

  api.use('ecmascript');
  api.use('meteor-base');
  api.use('accounts-base');

  api.addFiles('logged-user.client.js', 'client');
  api.addFiles('logged-user.server.js', 'server');
});
