(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('pbLabel', function() {
    return {
      template: '<div class="text-{{ propertyValues.alignment }}"><label>{{ propertyValues.text }}</label></div>'
    };
  });
