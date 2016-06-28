(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('widgetId1', function() {
    return {
      template: '<h1>this is a template</h1>'
    };
  });
