(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('pbDatePicker', function() {
    return {
      controllerAs: 'ctrl',
      controller: function PbDatePickerCtrl($scope, $log, widgetNameFactory, $element) {

  'use strict';

  this.name = widgetNameFactory.getName('pbDatepicker');

  this.open = function () {
    angular.element($element).find('input').triggerHandler('click');
  };

  if (!$scope.properties.isBound('value')) {
    $log.error('the pbDatepicker property named "value" need to be bound to a variable');
  }


}
,
      template: '<div ng-class="{\n    \'form-horizontal\': properties.labelPosition === \'left\' && !properties.labelHidden,\n    \'row\': properties.labelPosition === \'top\' && !properties.labelHidden || properties.labelHidden\n    }">\n    <div class="form-group">\n        <label\n            ng-if="!properties.labelHidden"\n            ng-class="{ \'control-label--required\': properties.required }"\n            class="control-label col-xs-{{ !properties.labelHidden && properties.labelPosition === \'left\' ? properties.labelWidth : 12 }}">\n            {{ properties.label | uiTranslate }}\n        </label>\n\n        <div\n            class="col-xs-{{ 12 - (!properties.labelHidden && properties.labelPosition === \'left\' ? properties.labelWidth : 0) }}">\n            <p class="input-group">\n                <input class="form-control"\n                       name="{{ctrl.name}}"\n                       type="text"\n                       placeholder="{{ properties.placeholder | uiTranslate }}"\n                       ng-model="properties.value"\n                       ng-readonly="properties.readOnly"\n                       ng-required="properties.required"\n                       bs-datepicker\n                       data-autoclose="1"\n                       data-timezone="UTC"\n                       date-format="{{properties.dateFormat | uiTranslate}}"\n                       data-trigger="click"\n                       onkeydown="return false">\n\n                <span class="input-group-btn">\n                    <button type="button" class="btn btn-default"\n                            ng-click="ctrl.open()"\n                            ng-disabled="properties.readOnly">\n                        <i class="glyphicon glyphicon-calendar"></i>\n                    </button>\n                </span>\n            </p>\n            <div ng-messages="$form[ctrl.name].$dirty && $form[ctrl.name].$error "\n                 ng-messages-include="forms-generic-errors.html" role="alert"></div>\n        </div>\n    </div>\n</div>\n'
    };
  });
