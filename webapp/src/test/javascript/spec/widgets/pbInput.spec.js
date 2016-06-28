describe('pbInput', function () {

  var $compile, scope;

 beforeEach(module('bonitasoft.ui.services'));
  beforeEach(module('bonitasoft.ui.widgets'));

  beforeEach(inject(function (_$compile_, $rootScope) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    scope.properties = {
      isBound: function() {
        return false;
      },
      labelWidth: 4,
      label: 'foobar'
    };
  }));

  describe('label', function() {

    it('should be on top by default if displayed', function () {
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      var label = element.find('label');
      expect(element.find('.form-horizontal').length).toBe(0);
      expect(label.text().trim()).toBe('foobar');
    });

    it('should be on the left of the input', function () {
      scope.properties = angular.extend( scope.properties, {
        label: 'barbaz',
        labelPosition: 'left'
      });

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      expect(element.find('.form-horizontal').length).toBe(1);
      var label = element.find('label');
      expect(label.text().trim()).toBe('barbaz');
    });

    it('should not be there when label is hidden', function () {
      scope.properties.labelHidden = true;
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      expect(element.find('label').length).toBe(0);
    });
  });

  describe('input', function() {

    it('should adapt its width to label size when on the left', function () {
      scope.properties = angular.extend( scope.properties, {
        labelHidden: false,
        labelPosition: 'left',
        labelWidth: 4
      });

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      var input = element.find('input');

      expect(input.parent().hasClass('col-xs-8')).toBeTruthy();
    });

    it('should be wrapped in full width div', function () {

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      var input = element.find('input');
      expect(input.parent().hasClass('col-xs-12')).toBeTruthy();
    });

    it('should update value property on change', function () {
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      var input = element.find('input');
      input.val('barfoo');
      input.triggerHandler('input');

      expect(scope.properties.value).toBe('barfoo');
    });

    it('should be either read only nor required by default', function () {
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      var input = element.find('input');
      expect(input.attr('readonly')).toBeUndefined();
    });

    it('should be read only when requested', function () {
      scope.properties.readOnly = true;

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      expect(element.find('input').attr('readonly')).toBe('readonly');
    });

    it('should be required when requested', function () {
      scope.properties.required = true;

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      expect(element.find('input').attr('required')).toBe('required');
    });

    it('should validate minlength', function () {
      scope.properties.minLength = 5;
      scope.properties.value = 'foo';

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();
      expect(element.find('input').attr('class')).toMatch('ng-invalid-minlength');

      scope.properties.value = 'foofoo';
      scope.$apply();
      expect(element.find('input').attr('class')).not.toMatch('ng-invalid-minlength');
    });

    it('should validate maxlength', function () {
      scope.properties.maxLength = 5;
      scope.properties.value = 'foofoo';

      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();
      expect(element.find('input').attr('class')).toMatch('ng-invalid-maxlength');

      scope.properties.value = 'foo';
      scope.$apply();
      expect(element.find('input').attr('class')).not.toMatch('ng-invalid-maxlength');
    });

    it('should validate email', function () {
      scope.properties.type = 'email';
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.$apply();

      element.find('input').val('barfoo');
      element.find('input').triggerHandler('input');

      expect(element.find('input').attr('class')).toMatch('ng-invalid-email');

      scope.properties.value = 'foo@bar.com';
      scope.$apply();

      expect(element.find('input').attr('class')).not.toMatch('ng-invalid-email');
    });

    it('should validate min value', function () {
      scope.properties.type = 'number';
      scope.properties.min = 1;
      scope.properties.min = 1;
      var element = $compile('<pb-input></pb-input>')(scope);
      scope.properties.value = 0;
      scope.$apply();

      expect(element.find('input').attr('class')).toMatch('ng-invalid-min');

      scope.properties.value = 3;
      scope.$apply();
      expect(element.find('input').attr('class')).not.toMatch('ng-invalid-min');
    });

  });

});
