(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/asset-popup.html',
    '<form name=addAsset action={{vm.assetSavingAction}} novalidate ng-submit="vm.saveExternalAsset(vm.newAsset, $event)" ng-upload=vm.onComplete(content)> <div class=modal-header> <h3 class=modal-title ng-if=vm.isNewAsset translate>Add a new asset</h3> <h3 class=modal-title ng-if=!vm.isNewAsset><span translate>Edit asset</span><strong> {{vm.asset.name}}</strong></h3> </div> <div class=modal-body> <div class=form-group> <label class="control-label control-label--required" for=type translate>Type</label> <select name=type ng-model=vm.newAsset.type class=form-control ng-options="type.key as type.value for type in vm.assetTypes" ng-change=vm.updateSavingAction(vm.newAsset.type)></select> </div> <ng-include src=vm.templates[vm.newAsset.type]></ng-include> </div> <div class=modal-footer> <button class="btn btn-primary" ng-disabled="!addAsset.$valid || (vm.isExternalAsset(vm.newAsset) && vm.isExisting(vm.newAsset))"> {{ vm.isNewAsset ? \'Add\': \'Save\' | translate }} </button> <button class="btn btn-link" type=button ng-click=vm.cancel() translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/asset-preview-popup.html',
    '<div> <div class=modal-header> <h3 class=modal-title translate>{{asset.name}} content</h3> </div> <div class=modal-body> <div class="container-fluid text-center"> <iframe ng-src={{url}} width=100% height=98% class=asset-preview-iframe></iframe> </div> </div> <div class=modal-footer> <button class="btn btn-link" type=button ng-click=cancel() translate>Cancel</button> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/generic-asset-form.html',
    '<div class=form-group> <label class="control-label control-label--required" for=source translate>Source</label> <select id=source name=source class=form-control ng-model=vm.newAsset.external ng-disabled=!vm.isNewAsset ng-options="v.key as v.value for (k, v) in vm.assetSources"></select> </div> <div class=form-group ng-if=vm.isExternalAsset(vm.newAsset)> <label class="control-label control-label--required" for=name> <span translate>URL</span> </label> <input type=text name=url ng-model=vm.newAsset.name class=form-control autofocus placeholder=http://.... required ng-pattern=vm.urlPattern> <div class=text-danger ng-if="addAsset.url.$dirty && addAsset.url.$error.pattern"> <i class="fa fa-warning">&nbsp;</i><translate>Invalid URL: it must only contain alphanumeric character or #!:.?+=&%@-/</translate> </div> <div class=text-danger ng-if="addAsset.$dirty && vm.isExisting(vm.newAsset)"> <i class="fa fa-warning">&nbsp;</i><span ng-bind-html=vm.getWarningMessage(vm.newAsset)></span> </div> </div> <div class=form-group ng-if=!vm.isExternalAsset(vm.newAsset)> <label class="control-label control-label--required" for=file> <span translate>File</span> </label> <div class="input-group file-upload"> <input id=file type=text readonly disabled placeholder="{{\'Select your file\' | translate}}" value={{vm.newAsset.name}} class=form-control> <span class=input-group-btn> <span class=btn ng-class="{\'btn-default disabled\':$isUploading, \'btn-primary\':!$isUploading}"> <input class=file-upload-input ng-class="{\'file-upload-input--disabled\':$isUploading}" name=file type=file ng-model=vm.newAsset.name required file-input-change> <i class=fa ng-class="{\'fa fa-spinner fa-pulse\':$isUploading, \'fa-folder\':!$isUploading}"> </i></span> </span> </div> <div class=text-warning ng-if=vm.isExisting(vm.newAsset)> <i class="fa fa-warning">&nbsp;</i><span ng-bind-html=vm.getWarningMessage(vm.newAsset)></span> <br><translate>Click <em>Add</em> to override.</translate> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/help-popup.html',
    '<div class=modal-header> <button type=button class=close ng-click=$dismiss()><span aria-hidden=true>&times;</span></button> <h3 class=modal-title translate>Help</h3> </div> <div class=modal-body> <uib-tabset class=tabs-left> <uib-tab heading="{{ \'General\' | translate }}"> <p translate> Assets enable you to add web resources to pages and forms. Available asset types are <strong>JavaScript</strong>, <strong>CSS</strong>, <strong>Image</strong> and (in Subscription editions) <strong>Localization</strong>. Assets can be <strong>Local</strong> (file stored into the page artifact) or External (URL). The Localization asset is always local. </p> <p translate> A local asset name must not contain special characters or spaces. An external asset name must be a standard URL. </p> <p translate ng-if=!isPage> To use the same asset in several pages, you can add it to a custom widget and use this custom widget in your application pages or forms. When you add a custom widget with assets to a page, those assets are automatically linked to the page. </p> </uib-tab> <uib-tab heading="{{ \'Asset use\' | translate }}" ng-if=isPage> <p translate> Add JavaScript assets for custom scripts. They will be loaded and made available at page level. You can use them in variables of type JavaScript expression. In the value field of the variable, simply call the function and pass the required parameters. </p> <p translate> Add CSS assets at page level and use them to edit the CSS classes property of any widget. (UI Designer integrates default Bootstrap style) </p> <p translate> To manage multiple version of dependencies, make sure only one version of an asset is active inside a page. </p> <p translate> To load an image for any custom widget, add image assets at page level. Access it with <code>asset/img/[image name]</code>. </p> <p translate> To use an image asset in the image widget, set the <code>Source type</code> property to <i>Asset</i>, and then enter the image name in the <code>Asset name</code> input field. </p> <p> <translate>To use a localization asset, replace the default localization.json file with a file of the same format containing all the keys in the page and the translations into the target languages. The localization asset is at page level. The format of the file must be:</translate> <pre><code>{\n' +
    '    "fr-FR": {\n' +
    '        "Title": "Titre",\n' +
    '        "Default label": "Libellé par défaut",\n' +
    '        ...\n' +
    '    },\n' +
    '    "es-ES": {\n' +
    '        "Title": "Título",\n' +
    '        "Default label": "Etiqueta por defecto",\n' +
    '        ...\n' +
    '    }\n' +
    '    ...\n' +
    '}</code></pre> <translate>See the default localization asset for an example.</translate> </p> </uib-tab> <uib-tab heading="{{ \'Asset use\' | translate }}" ng-if=!isPage> <p translate> In a JavaScript asset, you can specify a dependency on an Angular module. First add the JavaScript asset, and then add the module name in the dedicated section. You can find the the available modules on <a href="http://ngmodules.org/">http://ngmodules.org/</a>. </p> <p translate> To load a local image asset in a custom widget, you need to reference it in the template inside a <code>&lt;img&gt;</code> tag with a relative path as follows: <br><code ng-non-bindable>&lt;img src="widgets/[custom widget id]/assets/img/[image name]"&gt;</code> </p> </uib-tab> <uib-tab heading="{{ \'Asset list\' | translate }}" ng-if=isPage> <p translate> The list contains both page assets and the assets of the custom widgets used in this page. </p> <p translate> In the list, you can delete page assets only, view local assets, and edit external assets of a page. </p> <p translate> You can’t manually change the order of assets in a page. </p> <p translate> At runtime, custom widget assets are loaded in alphabetical order of the custom widgets. For each custom widget, the assets are loaded in the order they are listed. Then page assets are loaded. JavaScript and CSS assets are loaded in the page header. </p> <p translate> You cannot have more than one localization asset. When you upload a new asset file, it overwrites the existing one. </p> </uib-tab> <uib-tab heading="{{ \'Asset list\' | translate }}" ng-if=!isPage> <p translate> In this list, you can use the arrows to reorder assets, view local assets, edit external assets, and delete any. </p> <p translate> At runtime, assets of a custom widget are loaded in the order defined. </p> </uib-tab> <uib-tab heading="{{ \'Custom services\' | translate }}"> <p> <translate>To extend a page or form with custom AngularJS services (such as filters, constants, or factories), use the <code>bonitasoft.ui.extensions</code> module.</translate> <br><button ng-click="extensionsExamplesCollapsed = !extensionsExamplesCollapsed" type=button class="btn btn-link" translate>Example: relative time filter</button> </p> <section> <div class=well uib-collapse=!extensionsExamplesCollapsed> <div> <h4 translate>Relative time filter</h4> <p translate> This filter uses the <a href="http://momentjs.com/">moment.js</a> library to transform the display of a relative time. For example, it transforms \'01/01/2011\' to \'4 years ago\'. </p> <p> <ul> <li translate>Import the moment.js library as an external asset.</li> <li> <p translate>Create a JavaScript file named <code>date-ago-filter.js</code> that updates the <code>bonitasoft.ui.extensions</code> module with the filter:</p> <pre><code ng-non-bindable>angular.module(\'bonitasoft.ui.extensions\')\n' +
    '  .filter(\'dateAgo\', [\'$window\', function ($window) {\n' +
    '    return function dateAgo(input) {\n' +
    '      var compar = new Date(input);\n' +
    '      return $window.moment(compar).fromNow();\n' +
    '    };\n' +
    '}]);</code></pre></li> <li translate>Import this JavaScript file as a local page asset.</li> <li translate>Create a JSON variable named <code>updateDate</code> to hold a timestamp as a number</li> <li translate>To display the date in a widget property evaluated as an expression, use the <code>dateAgo</code> filter on the <code>updateDate</code> variable as follows: <code>updateDate | dateAgo</code></li> </ul> </p> </div> </div> </section> </uib-tab> </uib-tabset> </div> <div class=modal-footer> <button class="btn btn-link" ng-click=$dismiss() translate>Close</button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/malformed-json-error-message.html',
    '<p> <strong translate>Malformed json file</strong> <div translate>Asset has not been imported</div> <div translate>Error at line <code>{{ infos.location.line }}</code>, column <code>{{ infos.location.column }}</code></div> </p> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/page-assets.html',
    '<div class=DataHeader> <div class=DataHeader-action> <button class="btn btn-default btnAsset--create" ng-click=vm.openAssetPopup() translate>Add a new asset</button> <button class="btn btn-default btn-asset--help" ng-click=vm.openHelp() title="{{\'Open help\' | translate}}"> <i class="fa fa-question-circle"></i> </button> </div> <div class=DataHeader-filter> <label class=sr-only translate> filter: </label> <div class=search-filter> <label class=checkbox-inline ng-repeat="(key, filter) in vm.filters"> <input type=checkbox ng-model=filter.value> {{filter.label}} </label> </div> </div> </div> <table class="table table-condensed table-ui-designer table-striped table-text-ellipsis"> <thead> <th class=col-xs-1 translate>Active</th> <th class=col-xs-6 translate>Name</th> <th class=col-xs-2 translate>Widget</th> <th class=col-xs-1 translate>Type</th> <th class=col-xs-2>&nbsp;</th> </thead> <tbody> <tr ng-class="{\'text-muted\':!asset.active}" ng-repeat="asset in vm.component.assets | orderBy:[\'componentId\',\'order\'] | assetFilter:vm.filters as results"> <td><input type=checkbox ng-model=asset.active ng-click=vm.deactivateAsset(asset)></td> <td>{{asset.name}}</td> <td>{{asset.componentId}}<span ng-if=vm.isPageAsset(asset) translate>Page level</span></td> <td>{{asset.type | assetType}}</td> <td class=text-right> <div class="btn-group link-group btn-group-sm btn-group-bonita-asset"> <button file-download class="btn btn-bonita-asset" href={{vm.getAssetUrl(asset)}} title="{{\'Download asset\' | translate }}" ng-if=!vm.isExternal(asset)> <i class="fa fa-alias-import"></i> </button> <button class="btn btn-bonita-asset" ng-click=vm.openAssetPreviewPopup(asset) title="{{ \'View asset content\' | translate }}" ng-if=!vm.isExternal(asset)> <i class="fa fa-search"></i> </button> <button class="btn btn-bonita-asset" ng-click=vm.openAssetPopup(asset) title="{{ \'Update asset\' | translate }}" ng-if="vm.isPageAsset(asset) && vm.isExternal(asset)"> <i class="fa fa-pencil"></i> </button> <button class="btn btn-bonita-asset" ng-click=vm.delete(asset) title="{{ \'Delete asset\' | translate }}" ng-if=vm.isPageAsset(asset)> <i class="fa fa-trash"></i> </button> </div> </td> </tr> <tr ng-if="results.length===0"> <td colspan=5 translate>No asset</td> </tr> </tbody> </table> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/assets/widget-assets.html',
    '<table class="table table-striped"> <thead> <tr> <th class=col-xs-8 colspan=2> <h4 class=CustomEditor-section translate>Assets</h4> </th> <th class="col-xs-4 Property-actions" colspan=2> <button class="btn btn-default btn-data--help" ng-click="vm.openHelp(\'widget\')" title="{{\'Open help\' | translate}}"><i class="fa fa-question-circle"></i></button> <button id=addasset title="Add a new asset" class="btn btn-bonita-primary" ng-click=vm.openAssetPopup()> <i class="fa fa-plus"></i> <span translate>Add</span> </button> </th> </tr> <tr> <th class=col-xs-1>&nbsp;</th> <th class=col-xs-7 translate>Name</th> <th class=col-xs-1 translate>Type</th> <th class=col-xs-3>&nbsp;</th> </tr> </thead> <tbody> <tr ng-repeat="asset in vm.component.assets | orderBy:\'order\' as results"> <td> <a ng-click=vm.decrementOrderAsset(asset) ng-if=!$first><i class="fa fa-arrow-up asset-ordering-action clickable"></i></a> <a ng-click=vm.incrementOrderAsset(asset) ng-if=!$last><i class="fa fa-arrow-down asset-ordering-action clickable"></i></a> </td> <td>{{asset.name}}</td> <td>{{asset.type | assetType}}</td> <td class="col-xs-2 Property-actions"> <button file-download class="btn btn-bonita-default" href={{vm.getAssetUrl(asset)}} title="{{\'Download asset\' | translate }}" ng-if=!vm.isExternal(asset)> <i class="fa fa-alias-import"></i> </button> <button class="btn btn-bonita-default" title="{{ \'View asset content\' | translate }}" ng-if=!vm.isExternal(asset) ng-click=vm.openAssetPreviewPopup(asset)><i class="fa fa-search"></i></button> <button class="btn btn-bonita-default" ng-click=vm.openAssetPopup(asset) title="{{ \'Update asset\' | translate }}" ng-if=vm.isExternal(asset)> <i class="fa fa-pencil"></i> </button> <button class="btn btn-bonita-default" ng-click=vm.delete(asset) title="{{ \'Delete asset\' | translate }}"> <i class="fa fa-trash"></i> </button> </td> </tr> <tr ng-if="results.length===0"> <td colspan=4>No asset</td> </tr> </tbody> </table> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/custom-widget/create-property.html',
    '<div class=modal-header> <h3 class=modal-title ng-if=!paramToUpdate translate>Create new property</h3> <h3 class=modal-title ng-if=paramToUpdate><span translate>Edit property</span> <i>{{ currentParam.name }}</i></h3> </div> <form class=CustomWidgetProperty name=propertyForm ng-submit=ok()> <div class=modal-body> <div class=form-group> <label for=name class="control-label control-label--required" translate>Name</label> &nbsp;<small class=text-muted translate>(used in your template and controller)</small> <input id=name class=form-control name=name ng-model=currentParam.name ng-pattern="\'[a-zA-Z0-9]*$\'" required autofocus> <span ng-if=propertyForm.name.$error.pattern class=text-danger translate>Property names must start with a letter and contain only alphanumeric characters</span> </div> <div class=form-group> <label for=label class="control-label control-label--required" translate>Label</label> &nbsp;<small class=text-muted translate>(displayed in editor\'s property panel)</small> <input id=label class=form-control name=label ng-model=currentParam.label required> </div> <div class=form-group> <label for=help class=control-label translate>Tooltip <i class="fa fa-info-circle" uib-tooltip="{{ \'The tooltip will be display as such, close to the property label.\' | translate}}"></i> </label> <textarea id=help class="EditWidgetPopup-help form-control" name=help ng-model=currentParam.help placeholder="{{ \'Describes the property\' | translate}}">\n' +
    '        </textarea></div> <div class=form-group> <label for=caption class=control-label translate>Caption</label> <small class="help-block EditWidgetPopup-captionMarginTop">{{\'The caption will be displayed as such below the property label.\' | translate}}</small> <input id=caption class=form-control name=caption ng-model=currentParam.caption placeholder="{{ \'Can be used to define the expected input format\' | translate}}"> </div> <div class=form-group> <label for=bond class="control-label control-label--required" translate>Treat value as</label> <div id=bond class="btn-group CustomWidgetProperty--fullWidth" uib-dropdown> <button id=bondButton type=button class="btn btn-default CustomWidgetProperty--textLeft CustomWidgetProperty--fullWidth" uib-dropdown-toggle> {{bonds[currentParam.bond].name | translate}} <span ng-show="bond !== \'constant\'">-</span> <i class="ui-icon ui-{{currentParam.bond}}"> &nbsp;</i><span class="fa fa-caret-down CustomWidgetProperty-dropdownCaret"></span> </button> <ul class="dropdown-menu CustomWidgetProperty--fullWidth" role=menu aria-labelledby=bondButton> <li ng-repeat="(bond, bondDetails) in bonds" ng-click=updateBond(bond) required role=menuitem><a>{{bondDetails.name | translate}} <span ng-show="bond !== \'constant\'">-</span> <i class="ui-icon ui-{{bond}}"></i></a></li> </ul> </div> <div class=CustomWidgetProperty-treatAsDescription> <small ng-click="bondHelpToggled = !bondHelpToggled" class=clickable> <span ng-if=bondHelpToggled class="fa fa-caret-down"></span><span ng-if=!bondHelpToggled class="fa fa-caret-right"></span> <u>Description</u></small> <div class="col-md-12 row" uib-collapse=!bondHelpToggled> <div><ng-include src=bonds[currentParam.bond].template></ng-include></div> </div> </div> </div> <div class=form-group ng-if=isTypeSelectable()> <label for=type class="control-label control-label--required" translate>Type</label>  <div id=type class="btn-group CustomWidgetProperty--fullWidth" uib-dropdown> <button id=typeButton type=button class="btn btn-default CustomWidgetProperty--textLeft CustomWidgetProperty--fullWidth" uib-dropdown-toggle>{{currentParam.type | translate}} <span class="fa fa-caret-down CustomWidgetProperty-dropdownCaret"></span></button> <ul class="dropdown-menu CustomWidgetProperty--fullWidth" role=menu aria-labelledby=typeButton> <li ng-repeat="type in types" ng-click="currentParam.defaultValue = null" required role=menuitem><a ng-click="currentParam.type = type">{{type | translate}}</a></li> </ul> </div> </div> <div class=form-group ng-if=isTypeChoicable()> <label for=choices class="control-label control-label--required" translate>Choices (comma separated)</label> <input id=choices class=form-control name=choices ng-model=currentParam.choiceValues ng-list required> </div> <div class=form-group ng-if="currentParam.bond !== \'variable\'"> <div ng-switch=currentParam.type> <label for=default class=control-label translate>Default</label> <input id=default class=form-control name=default ng-model=currentParam.defaultValue ng-switch-default> <input id=default type=number class=form-control name=default ng-model=currentParam.defaultValue ng-switch-when=integer> <select id=default class=form-control name=default ng-init="currentParam.defaultValue = true" ng-model=currentParam.defaultValue ng-options="key for key in [true, false]" ng-switch-when=boolean> </select><input id=default type=text class=form-control name=default ng-list ng-model=currentParam.defaultValue ng-switch-when=collection> <select id=default class=form-control name=default ng-model=currentParam.defaultValue ng-switch-when=choice ng-options="choice for choice in currentParam.choiceValues"></select> </div> </div> </div>  <div class=clearfix></div> <div class=modal-footer> <button type=submit class="btn btn-bonita-default" ng-disabled=propertyForm.$invalid ng-click=ok()>{{ (paramToUpdate ? \'Save\' : \'Create\')|translate }}</button> <button type=button class="btn btn-link" ng-click=cancel() translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/custom-widget/custom-widget-editor.html',
    '<div class=EditorHeader role=navigation confirm-on-exit confirm-data=widget> <div class=EditorHeader-menu> <a class=EditorHeader-back ng-click=back() uib-tooltip="{{ \'Back\' | translate }}" tooltip-placement=right tooltip-popup-delay=300> <i class="fa fa-chevron-left"></i> </a> <a ui-sref=designer.home class=EditorHeader-homeNav uib-tooltip="{{ \'Home page\' | translate }}" tooltip-placement=right tooltip-popup-delay=300> <span class=EditorHeader-icon> <i class="ui-icon ui-designer"></i> </span> <strong class=EditorHeader-brand translate> Custom widget editor </strong> </a> <h3 class="EditorHeader-name EditorHeader-name--custom"> <identicon name={{widget.id}} size=30 foreground-color="[203, 213, 225, 255]" background-color=[0,0,0,0]></identicon> {{widget.name}} </h3> <div class=btn-group uib-dropdown> <button id=save type=button class="btn btn-bonita-primary" ng-click=save() translate>Save</button> <button type=button class="btn btn-bonita-primary uib-dropdown-toggle" uib-dropdown-toggle> <span class="fa fa-caret-down"></span> <span class=sr-only>Save</span> </button> <ul class=dropdown-menu role=menu> <li><a id=saveAs class=clickable ng-click=saveAs(widget) translate>Save as ...</a></li> </ul> </div> <button type=button id=export class="btn btn-bonita-primary" ng-click=saveAndExport() title="{{\'Export\'|translate}}"> <i class="ui-icon ui-export"></i> </button> </div> <div class=EditorHeader-help> <button class="btn btn-bonita-help" ng-click=openHelp() title="{{\'Open help\' | translate}}"><i class="fa fa-question-circle"></i></button> </div> </div> <div class="container-fluid CustomEditor"> <div class=row> <div class=col-xs-7> <form id=widget-form name=widgetForm> <div> <h4 class=CustomEditor-section> <translate>Description</translate> <i class="fa fa-info-circle CustomEditor-helper" tooltip-placement=bottom uib-tooltip="{{\'This description will be displayed as a tooltip in the palette\' | translate }}" tooltip-append-to-body=true></i> </h4> <textarea class="form-control textarea--widget" ng-attr-placeholder="{{ \'Widget description\' | translate }}" ng-model=widget.description></textarea> </div> <div> <h4 class=CustomEditor-section translate>Template</h4> <ace-editor class=ace-editor--widget mode=html ng-model=widget.template id=template></ace-editor> </div> <div> <h4 class=CustomEditor-section translate>Controller</h4> <ace-editor class=ace-editor--widget mode=javascript ng-model=widget.controller id=controller></ace-editor> </div> </form> </div> <div class=col-xs-5> <div ui-view=asset></div> <div class=form-group> <h4 class=CustomEditor-section> <translate>Required angular modules</translate> <i class="fa fa-info-circle CustomEditor-helper" uib-tooltip="{{\'Extra angular modules needed by this custom widget (comma separated)\' | translate }}" tooltip-append-to-body=true></i> </h4> <input type=text class=form-control id=requiredModules ng-model=widget.requiredModules ng-list> </div> <table class="table table-striped"> <thead> <th class=col-xs-10> <h4 class=CustomEditor-section translate>Properties</h4> </th> <th class="col-xs-2 Property-actions"> <button id=create title="Create a new property" class="btn btn-bonita-primary" ng-click=createOrUpdate()> <i class="fa fa-plus"></i> <span translate>Create</span> </button> </th> </thead> <tbody> <tr ng-repeat="property in widget.properties"> <td class="col-xs-10 PropertyDescription"> <div class=PropertyName><strong>{{ property.name }}</strong></div> <div><small translate>Label</small>: {{ property.label }}</div> <div><small translate>Treat as </small><span> {{ bonds[property.bond].name | translate }}</span></div> <div><span ng-if=isTypeSelectable(property.bond)><small translate>Type</small>: {{property.type}}</span></div> <div ng-if="property.type === \'choice\'"><small translate>Choices</small>: {{ property.choiceValues.join(\', \') }}</div> <div ng-if="property.bond !== \'variable\'"><small translate>Default value</small>: {{ property.defaultValue }}</div> </td> <td class="col-xs-2 Property-actions"> <button class="btn btn-bonita-default" title="Update property" ng-click=createOrUpdate(property)><i class="fa fa-pencil"></i></button> <button class="btn btn-bonita-default" title="Delete property" ng-click=deleteParam(property)><i class="fa fa-trash"></i></button> </td> </tr> </tbody> </table> </div> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/custom-widget/help-popup.html',
    '<div class=modal-header> <button type=button class=close ng-click=$dismiss()><span aria-hidden=true>&times;</span></button> <h3 class=modal-title translate>Help</h3> </div> <div class=modal-body> <uib-tabset class=tabs-left> <uib-tab id=help-general heading="{{ \'General\' | translate }}"> <p translate>If the standard widgets do not meet your needs, you can create a custom widget to match exactly what you want to. After creation, a custom widget is available in the palette for designing pages, forms or fragments.</p> <p translate>Custom widget implementation is based on the AngularJS framework.</p> <p translate>For more information, see the AngularJS guide on <a href=https://docs.angularjs.org/guide/templates>templates</a> and <a href=https://docs.angularjs.org/guide/controller>controllers</a>.</p> <p translate>For the moment, you cannot implement custom widget containers.</p> <p translate>Custom widgets are not clearly visible on the whiteboard but you can see them with the preview.</p> </uib-tab> <uib-tab id=help-template heading="{{ \'Template\' | translate }}"> <p translate>The custom widget HTML template is defined here.</p> <p translate>You can use standard HTML tags and AngularJS built-in directives, scope and interpolation system.</p> <p translate>Custom widget properties defined on the right can be used as variables in a templates with properties.newProperty.</p> <p translate>Functions exposed in the controller can be used with ctrl.newFunction().</p> <p translate>You can use the <i>environment</i> property injected in the scope when inside the whiteboard editor. It allows to create a mockup display for the whiteboard as the real use data will not be available.</p> </uib-tab> <uib-tab id=help-controller heading="{{ \'Controller\' | translate }}"> <p translate>The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template.</p> <p translate>Custom widget properties defined on the right can be used as variables in a controller with $scope.properties.</p> <p translate>To use AngularJS standard services, you must declare them in the main function arguments.</p> <p translate>You can leave the controller empty if you do not need it.</p> </uib-tab> <uid-l10n-help-tab></uid-l10n-help-tab> </uib-tabset> </div> <div class=modal-footer> <button class="btn btn-link" ng-click=$dismiss() translate>Close</button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/custom-widget/save-as-popup.html',
    '<div class=modal-header> <h3 class=modal-title translate>Save {{ctrl.widget.name}} as...</h3> </div> <form class=form name=newWidget> <div class=modal-body id=modal-save-widget-as> <div class=form-group> <input name=name ng-model=ctrl.newName artifact-name-validation=bottom-left class=form-control id=widget-name placeholder="Widget Name" required> </div> </div> <div class=modal-footer id=modal-delete-widget-controls> <button class="btn btn-primary" ng-click=ctrl.ok() ng-disabled="!newWidget.name.$dirty || newWidget.$invalid || ctrl.newName == ctrl.widget.name" translate>Save</button> <button class="btn btn-link" ng-click="$dismiss(\'cancel\')" translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/editor.html',
    '<header ui-view=header confirm-on-exit confirm-data=page></header> <div class=content-wrapper>  <div class=Palette ng-class="{\'Palette--closed\': isPaletteClosed, \'Palette--narrow\': isPaletteNarrow}" editor-palette on-resize="resizePaletteHandler(isClosed, isNarrow)"> </div> <div id=editor-container ng-class="{\'\': !sectionOpened}"> <div class=workspace> <container container=page editor=editor id=editor ng-click="editor.selectComponent(null, $event)" component-highlighter=component-element--hover data-is-editor-container=true bo-dropzone bo-drop-success="appendComponent($event, $data)"></container> <div class="alert alert-editor-hint" ng-if="page.rows.length === 1 && page.rows[0].length === 0"> <i class="fa fa-rotate-90 fa-share"></i> <h4 class=hint-title translate>This page is empty.</h4> <translate>To add content, drag and drop components from the palette to the whiteboard above.</translate> </div> </div> <div id=data-sidebar class=BottomPanel splitter-container> <div class=BottomPanel-toggleBar> <div class="BottomPanel-toggle clickable" splitter-toggle=#data-sidebar-splitter ng-class="{ \'BottomPanel-toggle--active\': splitterContainer.isActive( \'designer.\' + mode) && splitterContainer.isOpen() }" ng-click="splitterContainer.toggle( \'designer.\' + mode)"> <span translate>Variables</span> <i class=fa ng-if="splitterContainer.isActive( \'designer.\' + mode) || !splitterContainer.isOpen()" ng-class="{\'fa-angle-down\':splitterContainer.isOpen(), \'fa-angle-up\':!splitterContainer.isOpen()}"> </i> </div> <div class="BottomPanel-toggle clickable" splitter-toggle=#data-sidebar-splitter ng-class="{ \'BottomPanel-toggle--active\': splitterContainer.isActive(\'designer.page.asset\') && splitterContainer.isOpen() }" ng-click="splitterContainer.toggle(\'designer.page.asset\')" ng-if="mode===\'page\'"> <span translate>Assets</span> <i class=fa ng-if="splitterContainer.isActive(\'designer.page.asset\') || !splitterContainer.isOpen()" ng-class="{\'fa-angle-down\':splitterContainer.isOpen(), \'fa-angle-up\':!splitterContainer.isOpen()}"> </i> </div> </div> <div id=data-sidebar-splitter splitter-horizontal default-state=designer.page pane-top=#editor pane-bottom=#data-sidebar pane-bottom-max=600 pane-bottom-min=250> </div> <div class=BottomPanel-content ui-view=data></div> </div> <div splitter-toggle=#widget-properties-splitter title="{{\'Toggle properties panel\' | translate}}" target-state=designer.page id=toggle-properties class="clickable toggle"> <i class="fa toggle-right"></i> </div> </div> <div id=widget-properties class=PropertyPanel> <div id=widget-properties-splitter splitter-vertical=right pane-left=#editor-container pane-right=#widget-properties pane-right-max=500 pane-right-min=280></div> <div class=PropertyPanel-popover ng-include="\'js/editor/properties-panel/properties-panel.html\'"></div> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/help-popup.html',
    '<div class=modal-header> <button type=button class=close ng-click=$dismiss()><span aria-hidden=true>&times;</span></button> <h3 class=modal-title translate>Help</h3> </div> <div class=modal-body> <uib-tabset class=tabs-left> <uib-tab heading="{{ \'Overview\' | translate }}"> <p translate> Use the UI Designer to create or edit web artifacts: <b>application pages</b> composing business applications, <b>process forms</b> linked to process instantiation or human tasks execution, as well as <b>application layouts</b>, applied to all pages of a business application. </p> <p translate>Artifact creation:</p> <ul> <li translate>Create an <b>application page</b> directly in the UI Designer</li> <li translate>Start creating a <b>process form</b> in Bonita BPM Studio: from the appropriate pool or human task, create a contract and launch the UI Designer. It will auto-generate a dedicated form to edit. </li> <li translate>Start creating an <b>application layout</b> by importing the default layout, available in the Bonita BPM Portal resources, and edit it. </li> </ul> <p translate> An artifact designed with the UI Designer can be exported to be shared with teammates (import in the UI Designer) or used in business applications (import in Bonita BPM Portal). </p> <p translate> There is a set of <b>default widgets</b> for displaying information to and for gathering information from the end users. You can also create <b>custom widgets</b>. </p> <p class=CalloutSubscription> <span class=CalloutSubscription--title translate>Subscription edition</span> <translate>Create a fragment to reuse the same group of widgets with the same behavior in several pages or forms. </translate> </p> <p translate> The UI Designer generates <b>standard html application code, based on AngularJS</b>. Export pages if you want to further customize them in a different favorite web development environment. </p> </uib-tab> <uib-tab heading="{{ \'Integration with Bonita BPM platform\' | translate }}"> <p translate> <b>To use a page in a business application</b>, export it from the UI Designer, import it into Bonita BPM Portal resources, and from the relevant application, add it to the list of pages and to a navigation menu. </p> <p translate> <b>To use a form in a process</b>, map it in the studio to the relevant process or human task. It will be automatically packaged in the .bar archive ready to deploy in the portal.</p> <p class=CalloutSubscription> <span class=CalloutSubscription--title translate>Subscription edition</span> <span translate>To update a form during production, export the form from the UI Designer, import it into the relevant process in the portal, and then map it to the relevant task or process start event.</span> </p> <p translate> <b>To use a layout in a business application</b>, export it from the UI Designer, import it into the portal as a resource and map it as the layout of the relevant application. </p> </uib-tab> </uib-tabset> </div> <div class=modal-footer> <button class="btn btn-link" ng-click=$dismiss() translate>Close</button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/home.html',
    '<header class=HomeHeader> <div class=HomeHeader-logo> <img src=img/logo.png> </div> <h1 class=HomeHeader-title translate>UI Designer</h1> <div class=HomeHeader-help> <button class="btn btn-bonita-help" ng-click=openHelp() title="{{\'Open help\' | translate}}"><i class="fa fa-question-circle"></i></button> </div> </header> <div class="container container--Home"> <div class="row Home-toolbar"> <div class=Home-buttons> <uid-create-artifact artifacts=artifacts.all></uid-create-artifact> <uid-import-artifact></uid-import-artifact> </div> <form class=Home-search role=search> <search value=search placeholder="{{ \'Search on name\' | translate }}"></search> </form> </div> <div class="row row--Home"> <section class="col-xs-5 Favorite-section"> <legend class="CreateArtifact-label CreateArtifact-label--primary" translate>Favorites</legend> <artifact-list artifacts="artifacts.all | filter:{name: search, favorite: \'true\'} | orderBy:\'-lastUpdate\'" refresh-all=refreshAll></artifact-list> </section> <section class="col-xs-7 Artifact-section"> <uib-tabset> <uib-tab ng-repeat="type in ::types" active=active> <uib-tab-heading class="tab-{{:: type.id}}"> {{:: type.name | translate }} <span class="badge ArtifactSection-badge" ng-class="{\'ArtifactSection-badge--hasResults\': search && artifacts[type.id].length}"> {{ artifacts[type.id].length }} </span> </uib-tab-heading> <artifact-list ng-if=active artifacts="artifacts[type.id] | orderBy:\'-lastUpdate\'" refresh-all=refreshAll></artifact-list> </uib-tab> </uib-tabset> </section> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/preview/preview.html',
    '<div class=Preview> <div class=Preview-header> <span class=Preview-title translate>Preview - {{pageName}}</span> <div class=navbar-right> <language-picker on-change=refreshIframe() class=navbar-text></language-picker> <resolutions-bar id=resolutions class="btn-group btn-group-lg navbar-text"></resolutions-bar> </div> </div> <iframe preview-localized-iframe class=Preview-viewport ng-src={{iframe.src}} width={{iframeWidth()}}></iframe> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/directives/alerts.html',
    '<div class=ui-alert-wrapper ng-show="alerts.length > 0"> <div class="ui-alert ui-alert-{{alert.type}}" ng-repeat="alert in alerts"> <button type=button class=close ng-click=remove($index) aria-label=Close><span aria-hidden=true>&times;</span></button> <h4>{{ alert.title || alert.type | translate }}</h4> <p alert-content=alert></p> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/directives/artifact-name-validation.html',
    '<input uib-tooltip="{{ name.errorMessage() }}" tooltip-class=tooltip-danger tooltip-is-open=name.errorMessage() tooltip-placement="{{ ::name.placement }}" tooltip-trigger=outsideClick ng-maxlength="{{ ::name.maxlength }}" ng-pattern="\'[a-zA-Z0-9]*\'"> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/data-panel/data-popup.html',
    '<form name=addData role=form novalidate ng-submit=save(newData)> <div class=modal-header> <h3 class=modal-title ng-if=isNewData translate>Create a new variable</h3> <h3 class=modal-title ng-if=!isNewData><span translate>Edit variable</span> <strong>{{newData.$$name}}</strong></h3> </div> <div class=modal-body> <div class=form-group ng-if=isNewData ng-class="{\'has-error\': !isDataNameUnique(newData.$$name)}"> <label class="control-label control-label--required" for=name> <span translate>Name</span> <span ng-show=!isDataNameUnique(newData.$$name) translate> \'{{newData.$$name}}\' already exists</span> </label> <input type=text class=form-control autofocus placeholder="{{\'Name\' | translate}}" name=name ng-model=newData.$$name ng-trim=false ng-pattern="/^[a-zA-Z][\\w]*$/" required> <p class=text-danger ng-show="addData.name.$dirty && addData.name.$error.pattern" translate>Variable names must start with a letter and contain only alphanumeric characters</p> </div> <exposable-data model=newData.exposed ng-if=exposableData></exposable-data> <div ng-if=!newData.exposed> <div class=form-group> <label class=control-label for=type translate>Type</label> <select name=type class=form-control ng-model=newData.type ng-change=updateValue(newData.type) ng-options="dataType.type as getLabel(dataType.type) group by dataType.group for dataType in dataTypes"></select> </div> <div ng-switch=newData.type class="form-group form-group--data">  <label ng-switch-default class=control-label for=value translate>Value</label> <input ng-switch-default type=text class=form-control placeholder="{{\'Value\' | translate }}" id=value name=value ng-model=newData.value>  <label ng-switch-when=urlparameter class=control-label for=value translate>URL parameter name</label> <input ng-switch-when=urlparameter type=text class=form-control placeholder="{{\'name\' | translate}}" id=value name=value ng-model=newData.value> <p class=help-block ng-switch-when=urlparameter translate> <span class=tip>Tip:</span> URL parameters are located after a <em>?</em> in the page URL. </p>  <label ng-switch-when=url class=control-label for=value translate>API URL</label> <input ng-switch-when=url autofocus type=text class=form-control placeholder=../API id=value name=value ng-model=newData.value required valid-url> <div class=help-block ng-switch-when=url translate> <p><span class=tip>Tip:</span> You can use data in the URL, by using the syntax <em ng-non-bindable>{{dataName}}</em></p> <p><span class=tip>Tip:</span> You can extend our REST API capabilities by creating <em>REST API extensions</em> in the Studio <i>Development</i> menu and use them here</p> </div> <section ng-switch-when=url> <button ng-click="examplesCollapsed = !examplesCollapsed" type=button class="btn btn-link" translate>See examples</button> <div class=well uib-collapse=examplesCollapsed> <div class=form-group> <select class=form-control ng-options="example as example.description group by example.category for example in apiExamples" ng-model=example></select> </div> <div> <p>{{ example.before }}</p> <p ng-bind-html=example.url></p> <p>{{ example.more }}</p> </div> <div ng-if=example.alternative> <p>{{ example.alternative.before }}</p> <p ng-bind-html=example.alternative.url></p> <p>{{ example.alternative.more }}</p> </div> </div> </section>  <label ng-switch-when=json class=control-label for=value translate>Value</label> <ace-editor class=ace-editor--data ng-switch-when=json autofocus mode=json ng-model=newData.value ng-model-options="{debounce: 300}" name=object required valid-json id=value></ace-editor> <p class=help-block ng-switch-when=json translate> <span class=tip>Tip:</span> Array syntax: ["val1", "val2"], Object syntax: {"key": "value"} </p> <section ng-switch-when=json> <button ng-click="examplesCollapsed = !examplesCollapsed" type=button class="btn btn-link" translate>See examples</button> <div uib-collapse=examplesCollapsed> <p translate> supportTicket is an object composed of a <em>subject</em>, <em>severity</em> level, user <em>environment</em>, reporter’s <em>contact</em> (<em>name</em> and <em>job title</em>), and an <em>URL</em> providing more details on the contact. </p> <pre>{\n' +
    '      "subject": "I have an issue",\n' +
    '      "severity": 2,\n' +
    '      "environment": ["Linux","PostgreSQL 9.3","Java 1.8","AngularJS 1.3"],\n' +
    '      "contact":{\n' +
    '          "name":"John Doe",\n' +
    '          "jobTitle":"FrontEnd developer",\n' +
    '           "contactDetailsURL":"http://jsonplaceholder.typicode.com/users/1"\n' +
    '      }\n' +
    '  }</pre> <p class="alert alert-info"> <span class="glyphicon glyphicon glyphicon-info-sign" aria-hidden=true></span> <span translate>JSON specifications can be found on the </span> <a href="http://www.w3.org/TR/json-ld/" title="{{\'view W3C\\\'s Json specification\'|translate}}" translate>W3C website</a> </p> </div> </section>  <label ng-switch-when=expression class=control-label for=value translate>Value</label> <ace-editor class=ace-editor--data ng-switch-when=expression autofocus mode=javascript auto-completion={{pageData}} ng-model=newData.value ng-model-options="{debounce: 300}" name=expression id=value></ace-editor> <p class=help-block ng-switch-when=expression translate> <span class=tip>Tip:</span> Hit <span class=key>$</span> key to access data, use ctrl-space to trigger autocomplete. </p> <section ng-switch-when=expression> <button ng-click="examplesCollapsed = !examplesCollapsed" type=button class="btn btn-link" translate>See examples</button> <div uib-collapse=examplesCollapsed> <p class="alert alert-default"> <span class="glyphicon glyphicon-info-sign" aria-hidden=true></span> <span translate>This example uses the JSON example provided if you select the type JSON.<br> It looks for the string ‘Linux’ in the array <code>environment</code> of JSON object <code>supportTicket</code></span> </p> <pre>return $data.supportTicket.environment.some(function(env){\n' +
    '     return env.indexOf("Linux") != -1;\n' +
    '  });</pre> </div> </section> </div> </div> </div> <div class=modal-footer> <button class="btn btn-bonita-default" ng-if=isNewData ng-disabled="!addData.$valid || !isDataNameUnique(newData.$$name)" translate>Save </button> <button class="btn btn-bonita-default" ng-if=!isNewData ng-disabled=!addData.$valid translate>Save</button> <button class="btn btn-link" type=button ng-click=cancel() translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/data-panel/data.html',
    '<div class=DataHeader> <div class=DataHeader-action> <button class="btn btn-default" ng-click=openDataPopup() translate>Create a new variable</button> <button class="btn btn-default btn-data--help" ng-click=openHelp() title="{{\'Open help\' | translate}}"><i class="fa fa-question-circle"></i></button> </div> <div class=DataHeader-filter> <label class=sr-only translate> filter: </label> <search value=searchedData placeholder="{{ \'Search\' | translate }}"></search> </div> </div> <table class="table table-condensed table-ui-designer table-striped table-text-ellipsis"> <thead> <th translate>Name</th> <th ng-if=exposableData translate>Exposed</th> <th translate>Value</th> <th translate>Type</th> <th></th> </thead> <tbody> <tr ng-repeat="(key, data) in pageData as results track by key"> <td class=col-xs-2>{{key}}</td> <td class=col-xs-1 ng-if=exposableData> <i class=fa ng-class="{\'fa-check\': data.exposed}"></i> </td> <td class=col-xs-5> {{data.value}} </td> <td class=col-xs-1>{{getLabel(data.type)}}</td> <td class=col-xs-1> <div class="btn-group link-group btn-group-sm pull-right"> <button class="btn update-data" ng-click=openDataPopup(key) title="{{ \'Edit variable\' | translate }}"> <i class="fa fa-pencil"></i> </button> <button class="btn delete-data" ng-click=delete(key) title="{{ \'Delete variable\' | translate }}"> <i class="fa fa-trash"></i> </button> </div> </td> </tr> <tr ng-if="keys(results).length===0"> <td colspan="{{exposableData ? 5 : 4}}" translate>No variable</td> </tr> </tbody> </table> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/data-panel/help-popup.html',
    '<div class=modal-header> <button type=button class=close ng-click=$dismiss()><span aria-hidden=true>&times;</span></button> <h3 class=modal-title translate>Help</h3> </div> <div class=modal-body> <uib-tabset class=tabs-left> <uib-tab heading="{{ \'General\' | translate }}"> <p translate> In the scope of a page, form, or layout, a variable can be used to handle business data, or can contain structural information that determines how page elements behave. </p> <p translate>Create a variable here. Using the variable in a widget property depends on the property value type, described in the page editor general help, in the <i>Properties</i> section.</p> <p translate>Available variables types are string and JSON (static), and External API, JavaScript expression, and URL parameter (dynamic).</p> <p translate>You can extend our REST API capacities by creating <em>REST API extensions</em> in the Studio <i>Development</i> menu and use them as External API variables in the UI Designer.</p> </uib-tab> <uib-tab heading="{{ \'Living data\' | translate }}"> <p translate>Variables can be bound to input fields to create conditional behavior between widget properties.</p> <p translate>A binding is dynamic, so every time data changes, all variables are re-evaluated and the UI is updated. In consequence:</p> <ul> <li translate>A variable initialized with a JavaScript expression is executed when the page is loaded. Then, when one of its dependencies changes, its value is updated. Dependencies are created using <code>$data.XXX</code>. </li> <li translate>A variable initialized with an External API is reloaded every time the URL value changes.</li> </ul> </uib-tab> <uib-tab heading="{{ \'Default variables\' | translate }}"> <p translate> When you generate a form from a contract in the Studio, the form contains a Submit button and some default variables: <code>formInput</code>, <code>formOutput</code>, <code>taskId</code>, and <code>context</code> </p> <p translate> <code>formInput</code> is a JSON object. <br>Its structure is defined by the contract inputs and the attributes are initialized with default values. It could be used to set initial values for form fields. <br>You can set the values in <code>formInput</code> either by editing the default values with constants (useful for test and debug) or with values from an object in an external source that has the same model (such as with a BDM external API). <br>You can also set the initial values of a form from some other source without using <code>formInput</code>. However, you will then have to edit <code>formOutput</code> manually. </p> <p translate> <code>formOutput</code> is a JavaScript expression returning an object. <br>Its structure matches the contract requirements and is filled with <code>formInput</code> by default. Its goal is to aggregate the fields from the form and to submit them to the task or process to fulfil the contract. On Submit, values entered or modified by the end-user and aggregated in the <code>formOutput</code> object (as defined by the <i>Data sent on click</i> property of the Submit button) are submitted to the process or task </p> <p translate> <code>taskId</code> is a URL Parameter. <br>It is the id of the current BPM task. You can use it as a BPM API parameter. </p> <p><code>context</code> is an External API. <br>It provides references to all business variables and documents in the process instance. To retrieve a business variable instance, create an External API variable with value <span ng-non-bindable>../{{context.myBusinessData_ref.link}}</span> </p> <p> To retrieve a document instance, create an External API variable with value <span ng-non-bindable>../API/{{context.documentData_ref.url}}</span> </p> <p> To allow your user to download a document add a link widget with its url property bound to<span ng-non-bindable>\'../API/\' + context.documentData_ref.url</span> </p> </uib-tab> </uib-tabset> </div> <div class=modal-footer> <button class="btn btn-link" ng-click=$dismiss() translate>Close</button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/header/header.html',
    '<div class=EditorHeader role=navigation> <div class=EditorHeader-menu> <a class=EditorHeader-back ng-click=vm.back() uib-tooltip="{{ \'Back\' | translate }}" tooltip-placement=right tooltip-popup-delay=300> <i class="fa fa-chevron-left"></i> </a> <a ui-sref=designer.home class=EditorHeader-homeNav uib-tooltip="{{ \'Home page\' | translate }}" tooltip-placement=right tooltip-popup-delay=300> <span class=EditorHeader-icon> <i class="ui-icon ui-designer"></i> </span> <strong class=EditorHeader-brand translate> <span>{{ vm.mode }}</span> editor </strong> </a> <form name=formName class="form-inline EditorHeader-form" autocomplete=off> <input type=text name=name artifact-name-validation=bottom class="form-control EditorHeader-name" id=pageName placeholder="{{ \'Enter \' + vm.mode + \' name\' | translate }}" ng-model=vm.page.name ng-trim=false required> <div class=btn-group uib-dropdown> <button id=save type=button class="btn btn-bonita-primary" ng-disabled=!formName.$valid ng-click=vm.save(vm.page) translate> Save </button> <button type=button class="btn btn-bonita-primary uib-dropdown-toggle" ng-disabled=!formName.$valid uib-dropdown-toggle> <span class="fa fa-caret-down"></span> <span class=sr-only translate>Save</span> </button> <ul class=dropdown-menu role=menu> <li><a id=saveAs class=clickable ng-click=vm.saveAs(vm.page) ng-disabled=!formName.$valid translate>Save as ...</a></li> </ul> </div> <button type=button id=export class="btn btn-bonita-primary" ng-disabled=!formName.$valid ng-click=vm.saveAndExport(vm.page) title="{{ \'Export\' | translate }}"> <i class="ui-icon ui-export"></i> </button> </form> <button class="btn btn-bonita-primary" id=preview title="{{ \'Preview\' | translate }}" ng-click=vm.save(vm.page) ng-disabled=!formName.$valid open-preview={{vm.mode}}> <i class="fa fa-play"></i> <span translate>Preview</span> </button> </div> <div class=EditorHeader-resolutions> <div resolutions-bar id=resolutions class=btn-group></div> </div> <div class=EditorHeader-help> <button class="btn btn-bonita-help" ng-click=vm.openHelp() title="{{\'Open help\' | translate}}"><i class="fa fa-question-circle"></i></button> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/header/help-popup.html',
    '<div class=modal-header> <button type=button class=close ng-click=cancel()><span aria-hidden=true>&times;</span></button> <h3 class=modal-title translate>Help</h3> </div> <div class=modal-body> <uib-tabset class=tabs-left> <uib-tab heading="{{ \'Editor organization\' | translate }}"> <p translate>Use the palette on the left to drag and drop containers and widgets in the whiteboard.</p> <p translate>Once you select an element, edit its properties in the properties panel on the right.</p> <p translate>Create variables in the Variables panel at the bottom, and use them to edit the widget properties.</p> <p ng-if=pageEdition translate>Add images, CSS or JavaScript resources to your pages in the Assets panel at the bottom.</p> </uib-tab> <uib-tab heading="{{ \'Rows\' | translate }}"> <p> <translate>The whiteboard is organized in <b>rows</b> that you can move up and down, or delete. </translate> <ul> <li translate>Drag and drop widgets or containers in rows</li> <li translate>When you delete a row, the following rows move up</li> <li translate>Within a row, when you delete a widget or a container, the following elements move to the left </li> </ul> </p> </uib-tab> <uib-tab heading="{{ \'Widgets\' | translate }}"> <p translate>Use <b>widgets</b> from the palette on the left to <b>display information to</b> and <b>gather information from</b> the end users.</p> <p translate>Configure widgets using the <b>properties panel</b> on the right.</p> <p translate>You can also create <b>custom widgets</b> from the home page.</p> </uib-tab> <uib-tab heading="{{ \'Containers\' | translate }}"> <p translate> You can group widgets into a container to define the arrangement of widgets in a form or a page. A container can contain other containers. </p> <p> <translate>Each type or container has sepcific behaviors</translate> <ul> <li translate>Repeat content for the plain container</li> <li translate>Multiple content for tabs container</li> <li translate>Access to $form capabilities for form container</li> </ul> </p> <p class=CalloutSubscription> <span class=CalloutSubscription--title translate>Subscription edition</span> <translate>You can save the content of a plain container as a reusable fragment.</translate> </p> </uib-tab> <uib-tab heading="{{ \'Variables\' | translate }}"> <p translate> In the scope of a page, form, or layout, a variable can be used to handle business data, or can contain structural information that determines how page elements behave. </p> <p translate> Create a variable in the bottom panel. Using a variable in a widget property depends on the property value type, described in the next section. </p> <p class=CalloutSubscription> <span class=CalloutSubscription--title translate>Subscription edition</span> <translate> In the fragment editor, you can set the scope of a variable to <i>specific to this fragment</i> or to <i>exposed to the page</i>. </translate> </p> </uib-tab> <uib-tab heading="{{ \'Properties\' | translate }}"> <ng-include src="\'js/editor/help/property-bond-help.html\'"> </ng-include></uib-tab> <uib-tab heading="{{ \'Localization\' | translate }}"> <h4 translate>Subscription edition</h4> <p translate>UI designer includes a mechanism to add translations for page elements, to support multi-language pages. The text displayed in the preview and at runtime adapts to the locale or browser language automatically.</p> <p translate>You can translate all the text displayed on a page or form: the labels, the placeholders, the available values of a list, but also the date format of the DatePicker widget. The base language is en_US. The phrases in English are used as the keys to the translated phrases. This means that in the Page editor whiteboard, any default text that is created is in English. The rest of the UI designer, including properties, is in the language of your Bonita BPM Studio. When you preview a page that has translated keys, the language of your browser is used.</p> <p translate>Each page has a localization asset that contains the keys and the translations for all phrases and all languages that the page supports. The asset is a file, localization.json. Each language is identified by the ISO 639 language attribute (for example, fr-FR, es-ES). Open the default localization.json asset to see how this file must be formatted. You can modify the default asset for your page, or import a new asset to replace the default one.</p> <p translate>In production, if the user is logged in to Bonita BPM, pages are displayed in the Portal language selected by the user, or in the default Portal language.</p> </uib-tab> <uid-responsive-help-tab></uid-responsive-help-tab> </uib-tabset> </div> <div class=modal-footer> <button class="btn btn-link" ng-click=cancel() translate>Close</button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/header/save-as-popup.html',
    '<div class=modal-header> <h3 class=modal-title translate>Save {{ctrl.page.name}} as...</h3> </div> <form class=form name=newPage> <div class=modal-body id=modal-save-page-as> <div class=form-group> <input name=name ng-model=ctrl.newName artifact-name-validation=bottom-left class=form-control id=page-name placeholder="{{ \'Page Name\' | translate }}" required> </div> </div> <div class=modal-footer id=modal-delete-page-controls> <button class="btn btn-primary" ng-click=ctrl.ok() ng-disabled="!newPage.name.$dirty || newPage.$invalid || ctrl.newName == ctrl.page.name" translate>Save</button> <button class="btn btn-link" ng-click="$dismiss(\'cancel\')" translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/bidirectional-bond-help.html',
    '<translate>Use a bidirectional field to specify a read-write binding between the property value and a variable. </translate> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/constant-bond-help.html',
    '<translate>A property that requires a constant value is presented in the Properties panel as a radio button set, drop-down list, or number selector (for the Width property). Select the required value. </translate> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/description-bond-help.html',
    '<translate> A property value is constant, dynamic, a bidirectional bond, or an interpolation. </translate> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/dynamic-bond-help.html',
    '<translate> Use a dynamic value field to specify a constant (the default) or an expression. Click the expression icon fx to switch from constant to expression. Click the constant icon X to switch from expression to constant. An expression can include a variable to make the property value dynamic, or can simply be the name of a variable. You can apply a filter to a variable value using a pipe. The binding to the variable is a read. If you want to write to the variable, use a bidirectional bond. Examples:</translate> <ul> <li translate>Define a condition for widget visibility, <em>userAge &gt; 18</em></li> <li translate>Define table headers as the value of a variable: <em>myArrayVariable</em></li> <li translate>Apply a filter to the value of a variable: <em>selectedUser | json</em></li> </ul> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/interpolation-bond-help.html',
    '<translate>Use an interpolation field to enter text to display in the widget. The text can include variables that are interpreted using AngularJS interpolation. When the page is displayed, the variables are replaced by the interpolated values. Specify a variable as a simple expression enclosed in double braces, using the same format as for a dynamic value field. Example: I\'m sorry, <em ng-non-bindable>{{ user.name | uppercase }}</em>. I\'m afraid I can\'t do that. </translate> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/help/property-bond-help.html',
    '<p><ng-include src="\'js/editor/help/description-bond-help.html\'"></ng-include></p> <dl class=Guidance-definitionList> <dt translate>Constant</dt> <dd><ng-include src="\'js/editor/help/constant-bond-help.html\'"></ng-include></dd> <dt><translate>Dynamic value</translate> - <i class="ui-icon ui-expression"></i></dt> <dd><ng-include src="\'js/editor/help/dynamic-bond-help.html\'"> </ng-include></dd> <dt><translate>Bidirectional bond</translate> - <i class="fa fa-link"></i></dt> <dd><ng-include src="\'js/editor/help/bidirectional-bond-help.html\'"></ng-include></dd> <dt><translate>Interpolation</translate> - <i class="fa fa-paragraph"></i></dt> <dd><ng-include src="\'js/editor/help/interpolation-bond-help.html\'"></ng-include></dd> </dl> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/palette/editor-palette.html',
    '<section class=Palette-sections> <button class=Palette-section ng-class="{\'Palette-section--active\': palette.isActiveSection(section)}" ng-repeat="section in palette.sections track by $index | orderBy:\'order\'" ng-click=palette.toggleSection(section) aria-label="{{section.name | translate}}" uib-tooltip="{{section.name | translate}}" tooltip-placement=right tooltip-popup-delay=500 tooltip-append-to-body=true> <i class=ui-icon ng-class=palette.getIconClassName(section)></i> </button> </section> <div class=Palette-widgets ng-class="{\'Palette-widgets--narrow\': palette.isNarrow()}" ng-if="palette.currentSection !== undefined"> <div palette-widget class="PaletteItem text-center" ng-repeat="widget in palette.currentSection.widgets | orderBy:\'component.order\'" widget=widget> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/palette/palette-widget.html',
    '<div uib-tooltip="{{ widget.component.description | translate }}" tooltip-popup-delay=1000 tooltip-append-to-body=true tooltip-placement=right tooltip-is-open=tooltipIsOpen ng-mousedown="tooltipIsOpen = !tooltipIsOpen"> <div id="{{ widget.component.id }}" bo-draggable-data=widget bo-draggable> <img class=PaletteItem-icon ng-if=widget.component.icon ng-src={{iconData}}> <identicon ng-if=!widget.component.icon name={{widget.component.id}} size=30 background-color=[0,0,0,0]></identicon> <h5 class=PaletteItem-label>{{ widget.component.name }}</h5> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/component-properties-template.html',
    '<div class=form-group> <label for=width> <translate>Width</translate> <i class="fa fa-info-circle" tooltip-placement=top uib-tooltip="{{ \'Specify the number of columns of the element. All elements can take up to 12 columns.\' | translate }}" tooltip-append-to-body=true></i> </label> <div class="inner-addon left-addon"> <i class="fa fa-{{ resolution().icon }} bold text-normal"></i> <input ng-model=currentComponent.dimension[resolution().key] type=number class="form-control property--width input-sm" id=width min=1 max=12> <div class=editor-field-icon-label translate translate-n=currentComponent.dimension[resolution().key] translate-plural=columns>column</div> </div> </div> <property-field ng-repeat="property in currentComponent.$$widget.properties" property=property property-value=currentComponent.propertyValues[property.name] properties=currentComponent.propertyValues page-data=page.data></property-field> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/container-properties-template.html',
    '<div ng-include="\'js/editor/properties-panel/component-properties-template.html\'"></div> <div ng-include="\'js/editor/properties-panel/container-repeat-content-tip.html\'"></div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/container-repeat-content-tip.html',
    '<div class=ContainerProperties-RepeatContentTip> <span class=tip>Tip: </span><translate>To use the collection data in the widgets of this container, there are contextual variables that you can bind to the widget properties:</translate> <ul> <li><translate><strong>$index</strong>: the index of the current iteration of the collection (counting from zero)</translate></li> <li><translate><strong>$item</strong>: the element of the current iteration</translate></li> <li><translate><strong>$collection</strong>: the current collection</translate></li> </ul> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/properties-panel.html',
    '<div class=PropertyPanel-inner ng-show=currentComponent> <h3 class=PropertyPanel-title>{{ currentComponent.$$widget.name }}</h3> <div class=PropertyPanel-content> <div class=row> <div class=col-xs-12 ng-if=currentComponent.$$widget.custom> <button class="btn btn-bonita-property" id=edit-custom-widget ng-disabled=!canBeSaved(page) ng-click=saveAndEditCustomWidget(currentComponent.$$widget.id) translate>Edit the custom widget </button> </div> </div> <div ng-include=currentComponent.$$propertiesTemplateUrl></div> </div> </div> <div class=PropertyPanel-inner ng-show=!currentComponent> <div class=PropertyPanel-content> <h4 class=PropertyPanel-hint translate>Select an element on the whiteboard, then set its properties here</h4> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/property-field.html',
    '<div class=form-group ng-if=isDisplayed() data-property="{{ property.name }}"> <div class=property-label> <label><i ng-if=property.icon class=PropertyPanel-PropertyIcon ng-class=property.icon.className></i> {{ property.label | translate }} <i class="fa fa-info-circle" ng-if=property.help uib-tooltip="{{property.help | translate}}" tooltip-append-to-body=true></i></label> <small class=help-block ng-bind-html="property.caption | translate"></small> </div> <ng-include src=propertyField.getBondTemplate(property)></ng-include> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/tab-properties-template.html',
    '<div class=form-group> <label for=tab-title-input translate>Title</label> <input ng-model=currentComponent.title name=tab-title-input class=form-control id=tab-title-input> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/component-mover.html',
    '<section class=component-caption> {{component.$$widget.name}} <button ng-if=moveLeftVisible() ng-click=moveLeft() class="fa fa-arrow-circle-left btn-caption move-left" title="Move the component to the left"></button> <button ng-if=moveRightVisible() ng-click=moveRight() class="fa fa-arrow-circle-right btn-caption move-right" title="Move the component to the right"></button> <button ng-click=onDelete() class="fa fa-times-circle btn-caption" title="Delete the component"></button> </section> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/component-template.html',
    '<component id="{{ component.$$id }}" class=component-element component=component editor=editor component-index=$index row=row container=container ng-click="editor.selectComponent(component, $event)" ng-class="{\'component-element--selected\': editor.isCurrentComponent(component)}" resizable=true> </component> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/component.html',
    '<div class=widget-wrapper> <component-mover class=component-mover component=component on-delete=editor.removeCurrentComponent() ng-if=editor.isCurrentComponent(component)></component-mover> <div class=widget-content></div> <drop-zone editor=editor row=row container=container component-index=componentIndex></drop-zone> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/container-template.html',
    '<container id="{{ component.$$id }}" class=container-element container=component editor=editor ng-click="editor.selectComponent(component, $event)" ng-class="{\'component-element--selected\': editor.isCurrentComponent(component)}"> </container> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/container.html',
    '<div class=widget-wrapper> <i ng-if=isRepeated(container) class="fa fa-list-ul Component-marker" title="{{ \'Repeated container\' | translate }}"></i> <component-mover component=container on-delete=editor.removeCurrentComponent() ng-if=editor.isCurrentComponent(container)></component-mover> <div ng-repeat="row in container.rows" ng-init="rowIndex = $index"> <div ng-if="$first && !isEmpty(container)" class="row dropRow" bo-dropzone bo-drop-success="dropBeforeRow($data, $event, $index, container.rows)"></div> <div class="row row-builder" ng-class="{\'row-element\':moveRowUpVisible(row) || moveRowDownVisible(row) || container.rows.length > 1, \'row-separator\': !$last}"> <div class="component-caption component-caption--row" ng-if="moveRowUpVisible(row) || moveRowDownVisible(row) || container.rows.length > 1"> <translate>Row</translate> <button class="fa fa-arrow-circle-up btn-caption move-row-up" title="{{ \'Move the row up\' | translate }}" ng-click="moveRowUp(row, $event)" ng-if=moveRowUpVisible(row)></button> <button class="fa fa-arrow-circle-down btn-caption move-row-down" title="{{ \'Move the row down\' | translate }}" ng-click="moveRowDown(row, $event)" ng-if=moveRowDownVisible(row)></button> <button class="fa fa-times-circle btn-caption" title="Delete the row" ng-click=removeRow(row) ng-if="container.rows.length > 1"></button> </div> <div ng-repeat="component in row" class=component ng-class=editor.componentClasses(component) bo-draggable bo-draggable-data=component bo-drop-item="dropItem($data, row, rowIndex)"> <div ng-include=component.$$templateUrl></div> </div> <div ng-if="editor.rowSize(row) < 12" bo-dropzone bo-drop-success="dropAtEndOfTheRow($data, $event, row)" data-col="{{12 - editor.rowSize(row)}}" class="widget-placeholder drop-container col-xs-{{12 - editor.rowSize(row)}}"> </div> </div> <div ng-if=!isEmpty(container) class="row dropRow" ng-class="{ \'dropRow--last\': $last }" bo-dropzone bo-drop-success="dropAfterRow($data, $event, $index, container.rows)"></div> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/form-container-template.html',
    '<form-container id="{{ component.$$id }}" class=form-element form-container=component editor=editor ng-click="editor.selectComponent(component, $event)" ng-class="{\'component-element--selected\': editor.isCurrentComponent(component)}"> </form-container> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/form-container.html',
    '<div class=widget-wrapper> <component-mover component=formContainer on-delete=editor.removeCurrentComponent() ng-if=editor.isCurrentComponent(formContainer)></component-mover> <form name="form-{{ id }}"> <container container=formContainer.container editor=editor></container> </form> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/tabs-container-template.html',
    '<tabs-container id="{{ component.$$id }}" class=container-element tabs-container=component editor=editor ng-click="editor.selectComponent(component, $event)" ng-class="{\'component-element--selected\': editor.isCurrentComponent(component)}"> </tabs-container> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/whiteboard/tabs-container.html',
    '<div class=widget-wrapper> <component-mover component=tabsContainer on-delete=editor.removeCurrentComponent() ng-if=editor.isCurrentComponent(tabsContainer)></component-mover> <ul class="nav nav-tabs" role=tablist> <li class=tab-element ng-repeat="tab in tabsContainer.tabs" ng-class="{\'active\': isOpened(tab), \'current-tab\': editor.isCurrentComponent(tab)}"> <a class=clickable ng-click="openTab(tab, $event)"> <button ng-click=moveTabLeft(tab) ng-if=moveTabLeftVisible(tab) class="fa fa-arrow-circle-left move-tab-left btn-tab"></button> <button ng-click=moveTabRight(tab) ng-if=moveTabRightVisible(tab) class="fa fa-arrow-circle-right move-tab-right btn-tab"></button> <span class=tab-title>{{ tab.title }}</span> <button title="{{ \'Remove tab\' | translate }}" ng-click=removeTab(tab) ng-if=isRemoveTabVisible(tab) class="fa fa-times-circle btn-tab"></button> </a> </li> <li class=tab-element> <a class=clickable ng-click=addTab($event) title="{{ \'Add a new tab\' | translate }}"> <i class="fa fa-plus"></i> </a> </li> </ul> <div ng-repeat="tab in tabsContainer.tabs" ng-show=isOpened(tab)> <container container=tab.container component=tabsContainer editor=editor></container> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/artifact-list/alert-deletion-notpossible-popup.html',
    '<div id=cannot-delete-popup> <div class=modal-header> <h3 class=modal-title> <span translate>Deletion is not possible</span> </h3> </div> <div class=modal-body> <span translate>The {{ artifact.type }} cannot be deleted because it is used in:</span> <ul> <li ng-repeat="(key, value) in artifact.usedBy"> <translate translate-n=artifact.usedBy[key].length translate-plural="{{ key }}s">{{ key }}</translate>: <span style="margin-left: 2px" class=badge ng-repeat="usedBy in artifact.usedBy[key]">{{ usedBy.name }}</span> </li> </ul> </div> <div class=modal-footer> <button class="btn btn-primary" ng-click=cancel() translate>Close</button> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/artifact-list/artifact-list.html',
    '<p class=Artifact-empty ng-if="artifactList.all.length === 0" translate> No artifact found. </p> <ul class=ArtifactList ng-if=artifactList.all.length> <li class="ArtifactList-item ArtifactList-item--primary ArtifactList-{{:: artifact.type }}" id="{{:: artifact.id }}" ng-repeat="artifact in artifactList.all track by artifact.id"> <div class=Artifact-info ng-switch=artifactList.isInEditionMode($index)> <a ng-switch-default ng-href="{{:: artifact.editionUrl }}" class="Artifact-link Artifact-link--primary"> <span ng-if=artifact.icon class=Artifact-icon><identicon name={{artifact.id}} size=25 foreground-color="[198, 199, 228, 255]" background-color=[0,0,0,0]></identicon></span> <i ng-if=!artifact.icon class="ui-icon ui-{{:: artifact.type }}s Artifact-icon" title="{{:: artifact.type }}"></i> <span title="{{:: artifact.name }}" class=Artifact-text> <span class=Artifact-name>{{:: artifact.name }}</span> <span class=Artifact-metadata>{{:: artifactList.translateKeys(\'Last Update:\') }} {{:: artifact.lastUpdate | date:\'short\' }}</span> </span> </a> <form name=renameArtifact class=Artifact-form ng-switch-when=true ng-submit=artifactList.renameItem(artifact) ng-init="artifact.newName = artifact.name"> <input name=name artifact-name-validation data-autofocus id="page-name-input-{{:: $index }}" ng-model=artifact.newName ng-blur="renameArtifact.$valid && artifactList.renameItem(artifact)" class=form-control required> </form> </div> <div class=Artifact-actions> <button class="Artifact-button Artifact-button--primary Artifact-rename" ng-click=artifactList.toggleItemEdition($index) type=button title="{{:: artifactList.translateKeys(\'Rename\') }}" ng-if=":: artifactList.getRepository(artifact.type).rename"> <i class="fa fa-pencil"></i> </button> <favorite-button artifact-repository=::artifactList.getRepository(artifact.type) artifact=":: artifact"></favorite-button> <button file-download class="Artifact-button Artifact-button--primary Artifact-export" href="{{:: artifactList.getRepository(artifact.type).exportUrl(artifact) }}" title="{{:: artifactList.translateKeys(\'Export\') }}"> <i class="ui-icon ui-export"></i> </button> <button class="Artifact-button Artifact-button--primary Artifact-delete" type=button ng-click=artifactList.deleteArtifact(artifact) title="{{:: artifactList.translateKeys(\'Delete\') }}"> <i class="fa fa-trash"></i> </button> </div> </li> </ul> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/artifact-list/confirm-deletion-popup.html',
    '<div id=confirm-delete-popup> <div class=modal-header> <h3 class=modal-title translate>Confirm deletion</h3> </div> <div class=modal-body translate> Are you sure you want to delete the {{ artifact.type }} <b>{{ artifact.name }}</b>? </div> <div class=modal-footer> <button class="btn btn-primary" ng-click=ok() translate>Delete</button> <button class="btn btn-link" ng-click=cancel() translate>Cancel</button> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/artifact-list/favorite-button.html',
    '<span ng-switch=vm.isFavorite()> <button ng-switch-when=true class="Artifact-button Artifact-favoriteButton Artifact-favoriteButton--checked" ng-click=vm.toggleFavorite() type=button title="{{:: \'Unmark as favorite\' | translate }}"> <i class="fa FavoriteButton-icon"></i> </button> <button ng-switch-default class="Artifact-button Artifact-favoriteButton" ng-click=vm.toggleFavorite() type=button title="{{:: \'Mark as favorite\' | translate }}"> <i class="fa FavoriteButton-icon"></i> </button> </span> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/create/create-popover.html',
    '<form class=NewArtifact name=newArtifactForm ng-submit="createCtrl.create(createCtrl.type, createCtrl.name)"> <div class=modal-header> <h3 class=modal-title translate>Create new artifact</h3> </div> <div class=modal-body> <div class="form-group NewArtifact-type"> <label for=type tranlate>Type</label> <div class=radio ng-repeat="type in createCtrl.types"> <label><input type=radio name=type id=type-{{type.key}} ng-model=createCtrl.type ng-value=type>{{type.value | translate}} <i ng-if=type.tooltip class="fa fa-info-circle" uib-tooltip={{type.tooltip}} tooltip-placement=top></i> </label> </div> </div> <div class=form-group> <label for=name translate>Name</label> <input id=name name=name type=text class=form-control required autofocus placeholder="{{ createCtrl.type.value + \' name\' | translate }}" ng-model=createCtrl.name ui-validate="{alreadyExists : \'!createCtrl.isNameUniqueIfRelevantForType($value, createCtrl.type)\'}" ui-validate-watch="\'createCtrl.type\'" artifact-name-validation artifact-name-validation-messages="{ alreadyExists: \'A {{ createCtrl.type.value.toLowerCase() }} with this name already exists\' }"> </div> </div> <div class=modal-footer> <button type=submit class="btn btn-primary" ng-disabled=newArtifactForm.$invalid translate>Create</button> <button type=button class="btn btn-link" ng-click=createCtrl.close() translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/create/home-create.html',
    '<button type=button class="btn btn-bonita-primary HomeCreate" title="{{\'Create a new UI Designer artifact\' | translate}}" uib-popover-template="\'js/home/create/create-popover.html\'" popover-trigger=outsideClick popover-placement=bottom-left popover-is-open=createCtrl.isOpen popover-class=HomeCreate-popover> <i class="fa fa-plus"></i> <translate>Create</translate> </button> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/home-import.html',
    '<button type=button class="btn btn-bonita-default HomeImport" title="{{\'Import a UI Designer artifact\' | translate}}" uib-popover-template="\'js/home/import/import-popover.html\'" popover-trigger=outsideClick popover-placement=bottom-left popover-is-open=import.isOpen popover-class=HomeImport-popover> <i class="ui-icon ui-import"></i> <translate>Import</translate> </button> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/import-error-message.html',
    '<p> {{ cause }} </p> <p> <div>{{ consequence }}</div> <div>{{ additionalInfos }}</div> </p> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/import-popover.html',
    '<form action="{{ import.url }}" name=uploadForm ng-upload=import.onComplete(content)> <div class=modal-header> <h3 class=modal-title>{{ import.popupTitle | translate }}</h3> </div> <div class=modal-body> <div class="input-group file-upload"> <input type=text readonly disabled placeholder="{{\'Select your .zip file\' | translate}}" value={{import.filename}} class=form-control> <span class=input-group-btn> <span class=btn ng-class="{\'btn-default disabled\':$isUploading, \'btn-primary\':!$isUploading}"> <input class=file-upload-input ng-class="{\'file-upload-input--disabled\':$isUploading}" name=file type=file accept=application/zip ng-model=import.filename required file-input-change> <i class=fa ng-class="{\'fa fa-spinner fa-pulse\':$isUploading, \'fa-folder\':!$isUploading}"> </i></span> </span> </div> </div> <div class=modal-footer> <button type=submit class="btn btn-primary" ng-disabled="uploadForm.$invalid || $isUploading" translate>Import</button> <button type=button class="btn btn-link" ng-click=import.close() translate>Cancel</button> </div> </form> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/import-report-item-list.html',
    '<ul> <li ng-if=displayPage class=ImportReport-page> <span class=text-muted> <i class="ui-icon ui-pages"></i> <translate class=ImportReport-type>{{ type }}</translate> </span> {{ pageName }} </li> <li ng-repeat="(artifactType, artifacts) in dependencies"> <span class=text-muted> <i class="ui-icon ui-{{artifactType}}s"></i> <translate translate-n=artifacts.length translate-plural="{{ artifactType }}s" class=ImportReport-type>{{ artifactType }} </translate> </span> {{ joinOnNames(artifacts) }} </li> </ul> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/import-report-popup.html',
    '<div class=ImportReport> <div class=modal-header> <h3 class=modal-title><i class="fa fa-exclamation-triangle text-warning"></i><translate>Import {{ ::importReport.name }}</translate></h3> </div> <div class=modal-body ng-if=importReport.hasDependencies()> <translate>The imported zip file contains elements with the same name as some existing elements. These existing elements will be overwritten:</translate> <import-report-item-list page-name=importReport.name type=importReport.type display-page=importReport.report.overridden dependencies=importReport.report.dependencies.overridden></import-report-item-list> <div ng-if="!importReport.report.overridden || importReport.report.dependencies.added"> <p> <translate>The zip file also contains new elements.</translate> <span ng-click="showDetails = !showDetails" class="clickable ImportReport--smallAndUnderlined"><span ng-if=showDetails class="fa fa-caret-down"></span><span ng-if=!showDetails class="fa fa-caret-right"></span><translate>Details</translate></span> </p> <div uib-collapse=!showDetails> <import-report-item-list page-name=importReport.name type=importReport.type display-page=!importReport.report.overridden dependencies=importReport.report.dependencies.added></import-report-item-list> </div> </div> <p translate>Do you want to import this zip file?</p> </div> <div class=modal-body ng-if=!importReport.hasDependencies()> <p translate>A {{ ::importReport.type }} named <strong>{{ ::importReport.name }}</strong> already exists.<br>Click <em>Import</em> to overwrite.</p> </div> <div class=modal-footer> <button type=button class="btn btn-primary" ng-click=importReport.forceImport() translate>Import</button> <button type=button class="btn btn-link" ng-click="$dismiss(\'cancel\')" translate>Cancel</button> </div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/home/import/import-success-message.html',
    '<div class=ImportReport ng-controller="ImportSuccessMessageController as import"> <p><span class=ImportReport-type>{{ type | translate }}</span> <strong>{{ element.name }}</strong> <translate>successfully imported.</translate> </p> <section class=ImportReport-added ng-if=dependencies.added> <translate>Added artifacts</translate>: <import-report-item-list page-name=element.name type=type display-page=!overridden dependencies=dependencies.added></import-report-item-list> </section> <section class=ImportReport-overridden ng-if=dependencies.overridden> <translate>Overridden artifacts</translate>: <import-report-item-list page-name=element.name type=type display-page=overridden dependencies=dependencies.overridden></import-report-item-list> </section> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/common/directives/search/search.html',
    '<div class=Search> <i class="Search-icon fa fa-search" aria-hidden=true></i> <input class="form-control Search-input" name=search ng-model=search.value ng-model-options="{ debounce: 200 }" placeholder="{{ search.placeholder }}" type=search> <button type=button ng-if=search.isClearButtonVisible() ng-click=search.clearValue() class=Search-clearButton title="{{ \'Clear search\' | translate }}" aria-label="{{ \'Clear search\' | translate }}"> <i aria-hidden=true class="fa fa-times"></i> </button> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/bond/constant.html',
    '<ng-include src=propertyField.getFieldTemplate(property) include-replace></ng-include> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/bond/expression.html',
    '<div class="input-group input-group-sm" ng-class="{ \'linked\': propertyField.isExpression() }"> <ng-include src=propertyField.getFieldTemplate(property) include-replace ng-if=!propertyField.isExpression()></ng-include> <input id="property-{{ property.label.toLowerCase() }}" ng-model=propertyValue.value type=text class="form-control PropertyPanel-expression" ng-if=propertyField.isExpression() uib-typeahead="key for key in getDataNames() | filter:$viewValue.trim()" placeholder="{{ \'expression or variable\' | translate }}"> <span class=input-group-btn> <button class="btn btn-bonita-property" type=button ng-click=propertyField.toggleExpressionEditor()> <i ng-if=!propertyField.isExpression() class="ui-icon ui-expression" title="{{ \'Click to bind to an expression\' | translate }}"></i> <i ng-if=propertyField.isExpression() class="fa fa-times" title="{{ \'Click to bind to a constant\' | translate }}"></i> </button> </span> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/bond/interpolation.html',
    '<div class="input-group input-group-sm"> <ng-include src=propertyField.getFieldTemplate(property) include-replace></ng-include> <div class=input-group-addon title="{{ \'Text, optionally including variables in simple expressions for interpolation using [[ variableName ]]\' | translate | mustachify:\'[[\':\']]\' }}"><i class="fa fa-paragraph"></i></div> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/bond/variable.html',
    '<div class="input-group input-group-sm linked"> <input name=paramValue ng-model=propertyValue.value type=text uib-typeahead="key for key in getDataNames() | filter:$viewValue.trim()" autofocus=linked class=form-control> <span class=input-group-btn title="{{ \'Variable in read-write binding with the property value\' | translate }}"> <button class="btn btn-bonita-property" type=button disabled><i class="fa fa-link"></i></button> </span> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/boolean.html',
    '<div> <label class=radio-inline> <input ng-model=propertyValue.value type=radio ng-value=false> <span translate>no</span> </label> <label class=radio-inline> <input ng-model=propertyValue.value type=radio ng-value=true> <span translate>yes</span> </label> </div> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/choice-grouped.html',
    '<select ng-model=propertyValue.value ng-options="choiceValue.value as choiceValue.label | translate group by choiceValue.group | translate for choiceValue in property.choiceValues" class=form-control></select> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/choice.html',
    '<select ng-model=propertyValue.value ng-options="choiceValue as choiceValue | translate for choiceValue in property.choiceValues" class=form-control></select> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/collection.html',
    '<input ng-model=propertyValue.value ng-list class=form-control> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/float.html',
    '<input ng-model=propertyValue.value type=number class=form-control> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/html.html',
    '<textarea id="property-{{ property.label.toLowerCase() }}" ng-model=propertyValue.value class="form-control PropertyPanel-PropertyInput">\n' +
    '</textarea> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/integer.html',
    '<input min={{property.constraints.min}} max={{property.constraints.max}} ng-model=propertyValue.value type=number class=form-control> ');
}]);
})();

(function(module) {
try {
  module = angular.module('bonitasoft.designer.templates');
} catch (e) {
  module = angular.module('bonitasoft.designer.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('js/editor/properties-panel/field/text.html',
    '<input id="property-{{ property.label.toLowerCase() }}" ng-model=propertyValue.value type=text class=form-control> ');
}]);
})();

'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer', ['app.route', 'bonitasoft.designer.preview', 'bonitasoft.designer.home', 'bonitasoft.designer.custom-widget', 'bonitasoft.designer.common.repositories', 'bonitasoft.designer.common.services', 'bonitasoft.designer.common.directives', 'bonitasoft.designer.common.filters', 'bonitasoft.designer.editor', 'bonitasoft.designer.templates', 'bonitasoft.designer.assets', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ui.ace', 'org.bonitasoft.dragAndDrop', 'gettext', 'ngUpload', 'angularMoment']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.assets', ['bonitasoft.designer.common.directives', 'gettext', 'ui.bootstrap']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.directives', ['ngSanitize', 'bonitasoft.designer.common.services', 'bonitasoft.designer.templates', 'ui.ace', 'ui.router', 'gettext', 'ui.bootstrap']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.filters', []);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.repositories', []);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.services', ['gettext', 'dn.sha']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.custom-widget', ['bonitasoft.designer.common.repositories', 'bonitasoft.designer.common.services', 'ui.bootstrap', 'gettext', 'ui.router']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor', ['bonitasoft.designer.editor.common', 'bonitasoft.designer.editor.data-panel', 'bonitasoft.designer.editor.palette', 'bonitasoft.designer.editor.properties-panel', 'bonitasoft.designer.editor.header', 'bonitasoft.designer.editor.whiteboard', 'bonitasoft.designer.assets', 'gettext']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.common', ['gettext']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.data-panel', ['bonitasoft.designer.common.repositories', 'bonitasoft.designer.common.directives', 'gettext', 'ui.bootstrap']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.header', ['bonitasoft.designer.common.services', 'bonitasoft.designer.common.repositories', 'gettext', 'ui.bootstrap', 'ui.router']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.palette', ['bonitasoft.designer.templates', 'bonitasoft.designer.editor.common', 'gettext']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.properties-panel', ['bonitasoft.designer.templates', 'bonitasoft.designer.editor.common', 'bonitasoft.designer.common.filters', 'gettext']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.whiteboard', ['bonitasoft.designer.templates', 'bonitasoft.designer.editor.common', 'bonitasoft.designer.common.services', 'gettext', 'RecursionHelper', 'ui.router']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.home', ['bonitasoft.designer.common.repositories', 'bonitasoft.designer.common.directives', 'bonitasoft.designer.home.import', 'bonitasoft.designer.templates', 'ui.bootstrap', 'ui.router', 'ui.validate']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.home.import', ['bonitasoft.designer.common.repositories', 'bonitasoft.designer.common.services', 'bonitasoft.designer.templates', 'gettext']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.preview', ['bonitasoft.designer.common.services', 'ui.router']);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  // configure ace base paths

  configureModule.$inject = ['$compileProvider', 'boDraggableItemProvider', '$uibTooltipProvider', '$stateProvider', '$urlRouterProvider', 'appStates', '$uibModalProvider'];
  ace.config.set('basePath', 'js');
  ace.config.set('modePath', 'js');
  ace.config.set('themePath', 'js');
  ace.config.set('workerPath', 'js');

  var isIE9 = window.navigator.userAgent.indexOf('MSIE 9') > -1;

  angular.module('uidesigner', ['bonitasoft.designer']).value('isIE9', isIE9).config(configureModule).run(['$rootScope', '$uibModalStack', function ($rootScope, $uibModalStack) {

    // Close modals on location changes
    $rootScope.$on('$locationChangeStart', function () {
      return $uibModalStack.dismissAll();
    });
  }]);

  /* @ngInject */
  function configureModule($compileProvider, boDraggableItemProvider, $uibTooltipProvider, $stateProvider, $urlRouterProvider, appStates, $uibModalProvider) {

    /**
     * For the build, gulp replaces '%debugMode%' by false. For the dev no need to replace, it's eval to true.
     * {@link https://docs.angularjs.org/guide/production}
     */
    $compileProvider.debugInfoEnabled('%debugMode%');

    boDraggableItemProvider.cloneOnDrop(false);
    boDraggableItemProvider.activeBodyClassName(true);

    /* create custom trigger for popover */
    $uibTooltipProvider.setTriggers({
      'show-tooltip': 'hide-tooltip'
    });

    /* set default url */
    $urlRouterProvider.otherwise('/en/home');

    /* create ui-router states */
    Object.keys(appStates).forEach(function (stateName) {
      $stateProvider.state(stateName, appStates[stateName]);
    });

    angular.extend($uibModalProvider.options, {
      backdrop: 'static',
      //BS-14199 : change modal appearance animation for IE not to put cursor anywhere during animation
      windowClass: 'modal fade in'
    });
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  AssetPopupCtrl.$inject = ['$scope', '$uibModalInstance', 'alerts', 'assetsService', 'artifactRepo', 'asset', 'assets', 'mode', 'artifact', 'gettextCatalog'];
  angular.module('bonitasoft.designer.assets').controller('AssetPopupCtrl', AssetPopupCtrl);

  function AssetPopupCtrl($scope, $uibModalInstance, alerts, assetsService, artifactRepo, asset, assets, mode, artifact, gettextCatalog) {

    var urlPrefixForLocalAsset = 'rest/' + mode + 's/' + artifact.id + '/assets/';

    var vm = this;
    vm.asset = asset;
    vm.isNewAsset = asset === undefined;

    //All datas (type, sources) are defined in the assets service.
    vm.assetTypes = assetsService.getAssetTypesByMode(mode);
    vm.assetSources = assetsService.getSources();
    vm.templates = assetsService.getFormTemplates();

    //Asset is converted in another object for the html form
    vm.newAsset = assetsService.assetToForm(asset);

    vm.cancel = $uibModalInstance.dismiss;
    vm.isExternalAsset = assetsService.isExternal;
    vm.onComplete = onComplete;
    vm.saveExternalAsset = saveExternalAsset;
    vm.updateSavingAction = updateSavingAction;
    vm.assetSavingAction = urlPrefixForLocalAsset + 'js';
    vm.isExisting = isExisting;
    vm.getWarningMessage = getWarningMessage;

    //pattern support relative URL
    vm.urlPattern = /^[\w#!:.?+=&%@\-\/]+$/;

    // When source change, we reset name to avoid collision,
    // expecially with `assetsService.isExternalAsset` which is not accurate until asset have type returned by backend
    $scope.$watch(function () {
      return vm.newAsset.external;
    }, function (old, newValue) {
      return old !== newValue && delete vm.newAsset.name;
    });

    /**
     * An external asset is saved by a $http call
     */
    function saveExternalAsset(formAsset, $event) {
      if (assetsService.isExternal(formAsset)) {
        artifactRepo.createAsset(artifact.id, assetsService.formToAsset(formAsset)).then($uibModalInstance.close);
        $event.preventDefault(); //preventing native form action execution
      }
      // else nothing to do, form will be submitted as standard multipart/form-data form
    }

    function hasError(response) {
      return response && response.type && response.message;
    }

    /**
     * A local asset (file) is saved by the submit of the html form
     */
    function onComplete(response) {
      //Even if a problem occurs in the backend a response is sent with a message
      //If the message has a type and a message this an error
      if (hasError(response)) {
        if (response.type === 'MalformedJsonException') {
          alerts.addError({
            contentUrl: 'js/assets/malformed-json-error-message.html',
            context: response
          }, 12000);
        } else {
          alerts.addError(response.message);
        }
        vm.cancel();
      }
      $uibModalInstance.close(response);
    }

    /**
     * The form action target is not the same according to the asset type : css, js or img
     */
    function updateSavingAction(type) {
      vm.assetSavingAction = urlPrefixForLocalAsset + type;
    }

    function isExisting(asset) {
      function hasSameTypeAndName(asset, item) {
        return asset.type === item.type && item.name === asset.name;
      }

      function onScope(mode, asset) {
        return !angular.isDefined(asset.scope) || // when scope is not defined, it's the same of current artifact
        asset.scope === mode;
      }

      return asset && (assets || []).filter(onScope.bind(null, mode)).some(hasSameTypeAndName.bind(null, asset));
    }

    function getWarningMessage(asset) {
      var display = {
        name: asset.name,
        type: assetsService.getType(asset.type).value
      };
      if (asset.type === 'img') {
        return gettextCatalog.getString('An {{type}} asset named <em>{{ name }}</em> is already added to assets.', display);
      }
      return gettextCatalog.getString('A {{type}} asset named <em>{{ name }}</em> is already added to assets.', display);
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  angular.module('bonitasoft.designer.assets').controller('AssetPreviewPopupCtrl', ['$scope', '$uibModalInstance', 'asset', 'component', 'mode', 'assetsService', function ($scope, $uibModalInstance, asset, component, mode, assetsService) {

    'use strict';

    $scope.url = getUrl();
    $scope.asset = asset;

    $scope.cancel = function () {
      $uibModalInstance.dismiss();
    };

    function getUrl() {
      return assetsService.getAssetUrl(asset, mode, component) + '?format=text';
    }
  }]);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  angular.module('bonitasoft.designer.assets').filter('assetType', ['assetsService', function (assetsService) {

    'use strict';

    var types = assetsService.getTypes();

    return function (key) {
      return types.reduce(function (acc, type) {
        return type.key === key ? type.value : acc;
      }, '');
    };
  }]);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  AssetCtrl.$inject = ['$uibModal', 'artifact', 'artifactRepo', 'mode', 'assetsService'];
  angular.module('bonitasoft.designer.assets').controller('AssetCtrl', AssetCtrl);

  function AssetCtrl($uibModal, artifact, artifactRepo, mode, assetsService) {

    var vm = this;
    vm.component = artifact;
    vm.component.assets = vm.component.assets || [];
    vm.filters = assetsService.getFilters();
    vm.isExternal = assetsService.isExternal;
    vm.isPageAsset = assetsService.isPageAsset;
    vm.deactivateAsset = deactivateAsset;
    vm.incrementOrderAsset = incrementOrderAsset;
    vm.decrementOrderAsset = decrementOrderAsset;
    vm.delete = deleteAsset;
    vm.openAssetPreviewPopup = openAssetPreviewPopup;
    vm.getAssetUrl = getAssetUrl;
    vm.openAssetPopup = openAddUpdateAssetPopup;
    vm.openHelp = openHelp;

    function incrementOrderAsset(asset) {
      return artifactRepo.incrementOrderAsset(vm.component.id, asset).then(refreshComponentAssets);
    }

    function decrementOrderAsset(asset) {
      return artifactRepo.decrementOrderAsset(vm.component.id, asset).then(refreshComponentAssets);
    }

    function refreshComponentAssets() {
      artifactRepo.loadAssets(vm.component).then(function (response) {
        vm.component.assets = response;
      });
    }

    function deactivateAsset(asset) {
      return artifactRepo.desactivateAsset(vm.component.id, asset).then(updateInactiveAssetsList);
    }

    function updateInactiveAssetsList() {
      var inactiveAssets = vm.component.assets.filter(function (asset) {
        return !asset.active;
      }).map(function (asset) {
        return asset.id;
      });
      vm.component.inactiveAssets = inactiveAssets.length ? inactiveAssets : undefined;
    }

    function deleteAsset(asset) {
      artifactRepo.deleteAsset(vm.component.id, asset).then(function () {
        vm.component.assets = vm.component.assets.filter(function (actual) {
          return actual.id !== asset.id;
        });
      });
    }

    function openAssetPreviewPopup(asset) {
      $uibModal.open({
        templateUrl: 'js/assets/asset-preview-popup.html',
        controller: 'AssetPreviewPopupCtrl',
        resolve: {
          asset: function () {
            return asset;
          },
          component: function () {
            return vm.component;
          },
          mode: function () {
            return mode;
          }
        }
      });
    }

    function getAssetUrl(asset) {
      return assetsService.getAssetUrl(asset, mode, vm.component);
    }

    function openAddUpdateAssetPopup(asset) {
      var modalInstance = $uibModal.open({
        templateUrl: 'js/assets/asset-popup.html',
        controller: 'AssetPopupCtrl',
        controllerAs: 'vm',
        resolve: {
          asset: function () {
            return asset;
          },
          assets: function () {
            return vm.component.assets;
          },
          mode: function () {
            return mode;
          },
          artifact: function () {
            return artifact;
          },
          artifactRepo: function () {
            return artifactRepo;
          }
        }
      });
      modalInstance.result.then(updateList);
    }

    function updateList(asset) {
      var replaced = false;
      vm.component.assets = vm.component.assets.map(function (item) {
        if (item.id === asset.id) {
          replaced = true;
          return asset;
        }
        return item;
      });
      if (!replaced) {
        vm.component.assets.push(asset);
      }
    }

    function openHelp(elm) {
      $uibModal.open({
        templateUrl: 'js/assets/help-popup.html',
        size: 'lg',
        controller: ['$scope', function ($scope) {
          'ngInject';

          $scope.isPage = elm !== 'widget';
        }]
      });
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  /**
   * Filters the assets table in editor by type
   */
  angular.module('bonitasoft.designer.assets').filter('assetFilter', function () {

    'use strict';

    return function (assets, filters) {
      if (!assets || !filters) {
        return assets;
      }
      return assets.filter(function (asset) {
        return filters[asset.type].value;
      });
    };
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  angular.module('bonitasoft.designer.assets').provider('assetsService', assetsServiceProvider);

  function assetsServiceProvider() {

    assetsService.$inject = ['gettextCatalog'];
    var types = [{ key: 'js', value: 'JavaScript', filter: true, widget: true, template: 'js/assets/generic-asset-form.html' }, { key: 'css', value: 'CSS', filter: true, widget: true, template: 'js/assets/generic-asset-form.html' }, { key: 'img', value: 'Image', filter: true, widget: true, template: 'js/assets/generic-asset-form.html' }];

    return {
      registerType: function (type) {
        return types.push(type);
      },
      $get: assetsService
    };

    function assetsService(gettextCatalog) {

      var sources = {
        external: { key: true, value: gettextCatalog.getString('External') },
        local: { key: false, value: gettextCatalog.getString('Local') }
      };

      return {
        isExternal: isExternal,
        isPageAsset: isPageAsset,
        getSources: function () {
          return sources;
        },
        getTypes: function () {
          return types;
        },
        getFilters: createFilters,
        assetToForm: assetToForm,
        formToAsset: formToAsset,
        getAssetTypesByMode: getAssetTypesByMode,
        getAssetUrl: getAssetUrl,
        getFormTemplates: createFormAssetTemplates,
        addWidgetAssetsToPage: addWidgetAssetsToPage,
        removeAssetsFromPage: removeAssetsFromPage,
        getType: getType
      };

      /**
       * Convert asset object in object for the html form
       */
      function assetToForm(asset) {
        if (!asset) {
          return {
            type: types[0].key,
            external: true
          };
        }
        //An asset is identified by name and type. If user choose to change them we need to delete
        //the old asset and we need the old name and type
        return {
          id: asset.id,
          name: asset.name,
          type: asset.type,
          external: isExternal(asset),
          order: asset.order,
          oldname: asset.name,
          oldtype: asset.type
        };
      }

      /**
       * Convert html form asset in business object which can be sent to the backend
       */
      function formToAsset(formAsset) {
        var asset = {
          id: formAsset.id,
          type: formAsset.type,
          order: formAsset.order
        };
        if (formAsset.external) {
          asset.name = formAsset.name;
          asset.external = true;
        }
        return asset;
      }

      /**
       * External asset are URL
       */
      function isExternal(asset) {
        return asset.external;
      }

      /**
       * Page asset
       */
      function isPageAsset(asset) {
        return !asset.componentId;
      }

      function createFilters() {
        return types.map(function transformToFilter(type) {
          return {
            key: type.key,
            value: {
              label: type.value,
              value: type.filter
            }
          };
        }).reduce(function createObject(filters, filter) {
          filters[filter.key] = filter.value;
          return filters;
        }, {});
      }

      function getAssetTypesByMode(mode) {
        if (mode === 'widget') {
          return types.filter(function filterWidgetOnly(type) {
            return type.widget;
          });
        }
        return types;
      }

      function createFormAssetTemplates() {
        return types.map(function transformToTemplate(type) {
          return {
            key: type.key,
            value: type.template
          };
        }).reduce(function createObject(templates, template) {
          templates[template.key] = template.value;
          return templates;
        }, {});
      }

      function addWidgetAssetsToPage(widget, page) {
        page.assets = (widget && widget.$$widget.assets || []).filter(function (asset) {
          return notIn(asset, page.assets);
        }).map(function (asset) {
          // these operations should be done on backend side. to be deleted while backend side is homogeneous
          asset.componentId = asset.componentId || widget.id;
          asset.scope = asset.scope || 'widget';
          return asset;
        }).concat(page.assets);
      }

      function notIn(asset, array) {
        return !array.some(function (item) {
          return item.id === asset.id;
        });
      }

      function removeAssetsFromPage(widget, page) {
        page.assets = page.assets.filter(function (asset) {
          return asset.componentId !== widget.id;
        });
      }

      function getAssetUrl(asset, mode, component) {
        //Url depends on the nature of component
        //In custom widget editor, component is a widget
        if (mode === 'widget') {
          return 'rest/widgets/' + component.id + '/assets/' + asset.type + '/' + asset.name;
        }
        //In page editor widget id is stored in asset.componentId if the asset scope is WIDGET
        else if (asset.scope === 'widget') {
            return 'rest/widgets/' + asset.componentId + '/assets/' + asset.type + '/' + asset.name;
          }
        //The last case is to see a page asset
        return 'rest/pages/' + component.id + '/assets/' + asset.type + '/' + asset.name;
      }

      function getType(key) {
        return types.filter(function (type) {
          return type.key === key;
        })[0];
      }
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Wrap ace directive according to page builder needs
 */
angular.module('bonitasoft.designer.common.directives').directive('aceEditor', ['aceDataCompleter', function (aceDataCompleter) {

  'use strict';

  var langTools = ace.require('ace/ext/language_tools');

  return {
    restrict: 'E',
    replace: true,
    scope: {
      mode: '@',
      autoCompletion: '@'
    },
    template: '<div ui-ace="{ mode: \'{{mode}}\', showGutter: true, onLoad: loaded }"></div>',
    controller: ['$scope', '$parse', '$attrs', function ($scope, $parse, $attrs) {
      var ctrl = this;

      $scope.loaded = function (editor) {
        if (!editor) {
          return;
        }
        editor.$blockScrolling = Infinity;
        if ($attrs.autoCompletion) {
          var dataCompleter = aceDataCompleter($scope.$eval($scope.autoCompletion));
          langTools.setCompleters([dataCompleter, langTools.keyWordCompleter]);
          editor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
          });
        }

        ctrl.editor = editor;

        editor.setShowPrintMargin(false);

        // used by e2e tests to clear the editor
        editor.commands.addCommand({
          name: 'deleteAll',
          bindKey: { win: 'Ctrl-Alt-Shift-D', mac: 'Ctrl-Alt-Shift-D' },
          exec: function (editor) {
            editor.setValue('');
          },
          readOnly: false
        });
      };

      $scope.$on('$destroy', function () {
        if (ctrl.editor.completer) {
          ctrl.editor.completer.detach();
        }
        ctrl.editor.destroy();
      });
    }]
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  alertContent.$inject = ['$compile', '$templateCache'];
  angular.module('bonitasoft.designer.common.directives').directive('alertContent', alertContent);

  /**
   * Directive that display alert content
   * alert should be an object with following attributes
   *  - content: html content displayed in alert
   *  or
   *  - contentUrl: url of template that will be used to be displayed in alert
   *  - context: context for interpolation (will extends directive scope)
   */
  function alertContent($compile, $templateCache) {
    return function (scope, element, attrs) {
      scope.$watch(function (scope) {
        return scope.$eval(attrs.alertContent);
      }, function (alert) {
        if (alert.contentUrl) {
          alert.content = $templateCache.get(alert.contentUrl);
        }
        element.html(alert.content);
        $compile(element.contents())(angular.extend(scope, alert.context));
      });
    };
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Element directive used to display alerts of the alerts service.
 * Usage:
 *     <alerts></alerts>
 */
angular.module('bonitasoft.designer.common.directives').directive('alerts', function () {

  'use strict';

  return {
    restrict: 'E',
    controller: ['$scope', 'alerts', function ($scope, alerts) {
      $scope.alerts = alerts.alerts;

      $scope.remove = function (index) {
        alerts.remove(index);
      };
    }],
    templateUrl: 'js/common/directives/alerts.html'
  };
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var ArtifactNameValidationController = function () {
    ArtifactNameValidationController.$inject = ['gettextCatalog'];
    function ArtifactNameValidationController(gettextCatalog) {
      _classCallCheck(this, ArtifactNameValidationController);

      this.maxlength = 240;
      this.validators = {
        pattern: gettextCatalog.getString('Name must contains only alphanumeric characters with no space'),
        maxlength: gettextCatalog.getString('Name must be less than {{maxlength}} characters long', this)
      };
    }

    _createClass(ArtifactNameValidationController, [{
      key: 'errorMessage',
      value: function errorMessage() {
        var _this = this;

        return this.form && Object.keys(this.form.$error).reduce(function (acc, val) {
          return acc || _this.validators[val] || acc;
        }, '');
      }
    }]);

    return ArtifactNameValidationController;
  }();

  /**
   * Perform basic validation on UI Designer artifact's name field
   * Display a tooltip in case of erred/too long names
   *
   * @example <input artifact-name-validation="bottom-right" ng-model="artifact.name">
   *
   * @param artifact-name-validation {string} tooltip placement (top-left by default)
   */


  function artifactNameValidationDirective() {
    return {
      scope: {},
      require: ['^form', 'artifactNameValidation'],
      controller: ArtifactNameValidationController,
      controllerAs: 'name',
      templateUrl: 'js/common/directives/artifact-name-validation.html',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var ctrl = ctrls[1];
        ctrl.form = ctrls[0];
        ctrl.placement = attrs.artifactNameValidation || 'top-left';
      }
    };
  }

  /**
   * Add extra validation message to an artifact-name-validation directive
   *
   * @example <input ng-minlength="20" artifact-name-validation artifact-name-validation-messages="{ minlength: 'Field should have at least 20 characters'}" ng-model="artifact.name">
   *
   * @param artifact-name-validation-messages {object} denotes a validation error key while a value should be a validation message
   */
  function artifactNameValidationMessagesDirective() {
    return {
      require: 'artifactNameValidation',
      link: function (scope, element, attrs, ctrl) {
        attrs.$observe('artifactNameValidationMessages', function (value) {
          return angular.extend(ctrl.validators, scope.$eval(value));
        });
      }
    };
  }

  angular.module('bonitasoft.designer.common.directives').directive('artifactNameValidation', artifactNameValidationDirective).directive('artifactNameValidationMessages', artifactNameValidationMessagesDirective);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.common.directives').directive('autofocus', ['$timeout', function ($timeout) {

  'use strict';

  // Because autofocus does not work as expected with angular :/

  return {
    restrict: 'A',
    require: '?aceEditor',
    link: function (scope, element, attr, ctrl) {
      var input = element.get(0);
      if (attr.autofocus) {
        // If the previous state was false and new one is true focus dat input
        scope.$watch(attr.autofocus, function (newVal, oldVal) {
          if (!oldVal && newVal) {
            // To be trigger after the watch...
            $timeout(function () {
              input.focus();
              if (input.type === 'text' && input.value.length > 0) {
                input.select();
              }
            });
          }
        });
      }

      // If you do not depend of a property to watch as the defautl autofocus works only once with angular
      if (!attr.autofocus) {

        $timeout(function () {
          if (ctrl) {
            ctrl.editor.focus();
          } else {
            input.focus();
            if (input.type === 'text' && input.value.length > 0) {
              input.select();
            }
          }
        });
      }
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.common.directives').directive('confirmOnExit', ['$rootScope', '$stateParams', '$state', '$injector', '$window', 'gettextCatalog', function ($rootScope, $stateParams, $state, $injector, $window, gettextCatalog) {

  'use strict';

  var message = gettextCatalog.getString('You have unsaved changes. Do you really want to leave ?');

  return {
    scope: {
      'confirmData': '='
    },
    link: function ($scope) {
      // get the service from resolve parameter
      if (!$state.current.resolve || !$state.current.resolve.artifactRepo) {
        return;
      }

      var repository = $injector.get($state.current.resolve.artifactRepo[0]);
      var stateName = $state.current.name;
      repository.initLastSavedState($scope.confirmData);
      var onRouteChangeOff = $rootScope.$on('$stateChangeStart', routeChangeHandler);

      $window.onbeforeunload = function () {
        if (repository.needSave($scope.confirmData)) {
          return message;
        }
      };

      function routeChangeHandler(event, newState) {
        if (newState.name.indexOf(stateName) !== -1) {
          // we don't care about internal state change
          return;
        }
        if (repository.needSave($scope.confirmData) && !window.confirm(message)) {
          event.preventDefault();
        }
      }

      // remove route event listener
      $scope.$on('$destroy', function () {
        $window.onbeforeunload = undefined;
        onRouteChangeOff();
      });
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Listen to an input file and assign the selected file to a scope variable
 */
angular.module('bonitasoft.designer.home').directive('fileDownload', ['$document', '$http', function ($document, $http) {
  'use strict';

  $document.find('body').append('<iframe class="ExportArtifact" src=""></iframe>');
  var iframe = $document[0].querySelector('.ExportArtifact');

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        //We need to intercept error when we change the iframe src
        $http.get(attrs.href).success(function () {
          iframe.setAttribute('src', attrs.href);
        });
      });
      scope.$on('$destroy', function () {
        return element.off('click');
      });
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Listen to an input file and assign the selected file to a scope variable
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.directives').directive('fileInputChange', fileInputChange);

  function fileInputChange() {

    return {
      require: 'ngModel',
      link: function (scope, elem, attr, ngModel) {

        function update(event) {
          var filename = '';
          if (event.target.files && event.target.files.length > 0) {
            filename = event.target.files[0].name;
          } else {
            filename = event.target.value.match(/([^\\|\/]*)$/)[0];
          }

          scope.$apply(function () {
            ngModel.$setViewValue(filename);
            ngModel.$render();
          });
        }

        elem.on('change', update);

        scope.$on('$destroy', function () {
          elem.off('change', update);
        });
      }
    };
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  var IdenticonDirective = function () {
    function IdenticonDirective() {
      _classCallCheck(this, IdenticonDirective);

      this.restrict = 'E';
      this.template = '<img width={{ctrl.size}} height={{ctrl.size}} ng-src="data:image/png;base64,{{ctrl.data}}"/>';
      this.bindToController = { name: '@', size: '@', backgroundColor: '=', foregroundColor: '=' };
      this.scope = true;
      this.controllerAs = 'ctrl';
    }

    _createClass(IdenticonDirective, [{
      key: 'controller',
      value: ['$scope', '$sha', '$window', function controller($scope, $sha, $window) {
        'ngInject';

        var _this = this;

        $scope.$watchGroup([function () {
          return _this.name;
        }, function () {
          return _this.size;
        }], function () {
          _this.data = new $window.Identicon({
            'hash': 'bfa9e803ac1996bf71fe537e853fe67d4cfc19f3',
            size: Number(_this.size) || 40,
            bg: angular.isArray(_this.backgroundColor) && _this.backgroundColor.length > 1 ? _this.backgroundColor : [64, 72, 83],
            fg: angular.isArray(_this.foregroundColor) && _this.foregroundColor.length > 1 ? _this.foregroundColor : [255, 255, 255]
          }).toString();
        });
      }]
    }]);

    return IdenticonDirective;
  }();

  angular.module('bonitasoft.designer.common.directives').directive('identicon', function () {
    return new IdenticonDirective();
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

angular.module('bonitasoft.designer.common.directives').directive('includeReplace', function () {
  return {
    require: 'ngInclude',
    link: function (scope, element) {
      element.replaceWith(element.children());
    }
  };
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var SearchController = function () {
    function SearchController() {
      _classCallCheck(this, SearchController);
    }

    _createClass(SearchController, [{
      key: 'clearValue',
      value: function clearValue() {
        this.value = '';
      }
    }, {
      key: 'isClearButtonVisible',
      value: function isClearButtonVisible() {
        return (this.value || '').trim().length > 0;
      }
    }]);

    return SearchController;
  }();

  angular.module('bonitasoft.designer.common.directives').directive('search', function () {
    return {
      scope: { value: '=', placeholder: '@' },
      bindToController: true,
      controllerAs: 'search',
      controller: SearchController,
      templateUrl: 'js/common/directives/search/search.html'
    };
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * A wrapper container to ease communitation between splitter-toggle and
 * splitter-horizontal
 */

angular.module('bonitasoft.designer.common.directives').controller('SplitterContainerCtrl', ['$scope', '$state', function ($scope, $state) {
  var splitter;
  var isOpen = true;

  this.isActive = function (stateName) {
    return $state.current.name === stateName;
  };

  this.isOpen = function () {
    return isOpen;
  };

  this.register = function (controller) {
    splitter = controller;
  };

  this.toggle = function (stateName) {
    if (!isOpen) {
      splitter.openBottom();
      isOpen = true;
    } else if ($state.current.name === stateName) {
      splitter.closeBottom();
      isOpen = false;
    }

    $state.go(stateName, undefined, { location: false });
  };

  $scope.$on('$destroy', function () {
    splitter = undefined;
  });
}]).directive('splitterContainer', function () {
  return {
    controller: 'SplitterContainerCtrl',
    controllerAs: 'splitterContainer'
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Horizontal splitter based on an absolute positioning
 * Allow to resize, close, open two panes
 *
 * Panes should be passed via attributes pane-top and pane-bottom by css selectors
 */
angular.module('bonitasoft.designer.common.directives').directive('splitterHorizontal', ['$document', function ($document) {

  return {
    scope: {
      paneTop: '@',
      paneBottom: '@',
      paneBottomMax: '@',
      paneBottomMin: '@'
    },
    require: '?^splitterContainer',
    template: '<div class="BottomPanel-splitter"></div>',
    controller: ['$scope', function ($scope) {
      this.topElem = $($scope.paneTop);
      this.bottomElem = $($scope.paneBottom);

      /**
       * Compute new absolute y positioning according to min and max size
       * @param {number} bottom bottom bound of the bottom pane
       * @param {number} pointerY  current pointer y position
       * @returns {number}
       */
      function computeY(bottom, pointerY) {
        var y = bottom - pointerY;
        if (y > $scope.paneBottomMax) {
          y = $scope.paneBottomMax;
        }
        if (y < $scope.paneBottomMin) {
          y = $scope.paneBottomMin;
        }
        return y;
      }

      /**
       * Resize the two panes
       * @param {number} pointerY  current pointer y position
       */
      this.resize = function (pointerY) {
        var y = computeY(this.bottomElem[0].getBoundingClientRect().bottom, pointerY);
        this.topElem.css({ bottom: y + 'px' });
        this.bottomElem.css({ height: y + 'px' });
      };

      /**
       * Close the bottom pane
       */
      this.closeBottom = function () {
        this.topElem.css({ bottom: 0 });
        this.bottomElem.addClass('splitter-pane-closed');
      };

      /**
       * Open the bottom pane
       */
      this.openBottom = function () {
        this.bottomElem.removeClass('splitter-pane-closed');
        this.topElem.css({ bottom: this.bottomElem[0].getBoundingClientRect().height + 'px' });
      };
    }],
    link: function ($scope, $element, $attrs, splitter) {
      var paneTop = $($attrs.paneTop);
      var paneBottom = $($attrs.paneBottom);
      var controller = $element.controller('splitterHorizontal');

      if (splitter) {
        splitter.register(controller);
      }

      paneTop.addClass('splitter-pane splitter-pane-top');
      paneBottom.addClass('splitter-pane splitter-pane-bottom');

      $element.find('.BottomPanel-splitter').on('mousedown', function (event) {
        event.preventDefault();

        // delegate event to document beacause when moving mouse we go out of the splitter
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      // unbind events
      function mouseup() {
        paneTop.removeClass('splitter-onmove');
        paneBottom.removeClass('splitter-onmove');
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }

      function mousemove(event) {
        paneTop.addClass('splitter-onmove');
        paneBottom.addClass('splitter-onmove');
        controller.resize(event.pageY);
      }
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * add click event to element to trigger event to toggle a sidebar
 */
angular.module('bonitasoft.designer.common.directives').directive('splitterToggle', function () {

  /**
   * Get event name according to target splitter type
   * @param {Element} splitter  targetted splitter
   * @returns {string}  the corresponding event name to trigger
   */
  function getEventName(splitter) {
    if (splitter.hasAttribute('splitter-horizontal')) {
      return 'splitter:toggle:bottom';
    } else if (splitter.hasAttribute('splitter-vertical')) {
      return splitter.getAttribute('splitter-vertical') === 'left' ? 'splitter:toggle:left' : 'splitter:toggle:right';
    } else {
      throw 'splitterToggle can only be applied to splitterHorizontal and splitterVertical';
    }
  }

  return {
    link: function ($scope, $element, $attrs) {
      var eventName = getEventName(document.querySelector($attrs.splitterToggle));
      $element.on('click', function () {
        angular.element($attrs.splitterToggle).trigger(eventName, $attrs.targetState);
        $scope.$digest();
      });
    }
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Vertical splitter based on an absolute positioning
 * Allow to resize, close, open two panes
 *
 * Panes should be passed via attributes pane-left and pane-right by css selectors
 */
angular.module('bonitasoft.designer.common.directives').directive('splitterVertical', ['$document', function ($document) {

  return {
    scope: {
      paneLeft: '@',
      paneRight: '@',
      paneRightMax: '@',
      paneRightMin: '@'
    },
    transclude: true,
    template: '<div class="splitter splitter-vertical"></div><ng-transclude></ng-transclude>',
    controller: ['$scope', '$window', function ($scope, $window) {
      this.displayed = true;
      this.xPosition = undefined;

      this.leftElem = $($scope.paneLeft);
      this.rightElem = $($scope.paneRight);

      /**
       * Close the right pane
       */
      this.closeRight = function () {
        var rightBounds = this.rightElem[0].getBoundingClientRect();
        this.xPosition = rightBounds.right - rightBounds.left;

        this.rightElem.addClass('splitter-pane-closed');
        this.leftElem.css({ right: 0 }).addClass('splitter-closed-right');
      };

      /**
       * Open the right pane
       */
      this.openRight = function () {
        this.leftElem.css({ right: this.xPosition + 'px' }).removeClass('splitter-closed-right');
        this.rightElem.removeClass('splitter-pane-closed');
      };

      /**
       * Close the left pane
       */
      this.closeLeft = function () {
        var leftBounds = this.leftElem[0].getBoundingClientRect();
        this.xPosition = leftBounds.right;

        this.rightElem.css({ left: 0 }).addClass('splitter-closed-left');
        this.leftElem.addClass('splitter-pane-closed');
      };

      /**
       * Open the left pane
       */
      this.openLeft = function () {
        this.rightElem.css({ left: this.xPosition + 'px' }).removeClass('splitter-closed-left');
        this.leftElem.removeClass('splitter-pane-closed');
      };

      this.toggleRight = function () {
        if (this.displayed) {
          this.closeRight();
        } else {
          this.openRight();
        }
        this.displayed = !this.displayed;
      };

      this.toggleLeft = function () {
        if (this.displayed) {
          this.closeLeft();
        } else {
          this.openLeft();
        }

        this.displayed = !this.displayed;
      };

      /**
       * Compute new absolute x positioning according to min and max size
       * @param {number} pointerX  current pointer x position
       * @returns {number}
       */
      function computeX(pointerX) {
        var x = pointerX;
        if ($window.innerWidth - x > $scope.paneRightMax) {
          x = $window.innerWidth - $scope.paneRightMax;
        }
        if ($window.innerWidth - x < $scope.paneRightMin) {
          x = $window.innerWidth - $scope.paneRightMin;
        }
        return x;
      }

      /**
       * Resize the two panes
       * @param {number} pointerX  current pointer x position
       */
      this.resize = function (pointerX) {
        this.xPosition = computeX(pointerX);
        this.rightElem.css({ left: this.xPosition + 'px' });
        this.leftElem.css({ right: $window.innerWidth - this.xPosition + 'px' });
      };
    }],
    link: function ($scope, $element, $attrs, $ctrl) {

      var paneLeft = $($attrs.paneLeft);
      var paneRight = $($attrs.paneRight);

      paneLeft.addClass('splitter-pane splitter-pane-left');
      paneRight.addClass('splitter-pane splitter-pane-right');

      $element.find('.splitter').on('mousedown', function (event) {
        event.preventDefault();

        // delegate event to document beacause when moving mouse we go out of the splitter
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      $element.on('splitter:toggle:right', function (event) {
        event.preventDefault();
        $ctrl.toggleRight();
      });

      $element.on('splitter:toggle:left', function (event) {
        event.preventDefault();
        $ctrl.toggleLeft();
      });

      function mousemove(event) {
        paneLeft.addClass('splitter-onmove');
        paneRight.addClass('splitter-onmove');
        $ctrl.resize(event.pageX);
      }

      // unbind events
      function mouseup() {
        paneLeft.removeClass('splitter-onmove');
        paneRight.removeClass('splitter-onmove');
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Wrap ace directive according to page builder needs
 */

angular.module('bonitasoft.designer.common.directives').directive('tooltipToggle', ['$timeout', function ($timeout) {
  'use strict';

  return {
    name: 'tooltipToggle',
    link: function (scope, element, attr) {
      attr.tooltipTrigger = 'show-tooltip';

      scope.$watch(attr.tooltipToggle, function (value) {
        if (value) {
          // tooltip provider will call scope.$apply, so need to get out of this digest cycle first
          $timeout(function () {
            element.triggerHandler('show-tooltip');
          });
        } else {
          $timeout(function () {
            element.triggerHandler('hide-tooltip');
          });
        }
      });
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.filters').filter('mustachify', function () {
    return mustachifyFilter;
  });

  function mustachifyFilter(input) {
    var openBracket = arguments.length <= 1 || arguments[1] === undefined ? '[[' : arguments[1];
    var closeBracket = arguments.length <= 2 || arguments[2] === undefined ? ']]' : arguments[2];

    return input.replace(regexp(openBracket), '{{').replace(regexp(closeBracket), '}}');
  }

  function regexp(char) {
    // escape regexp special chars
    function escapeRegexp(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    return new RegExp(escapeRegexp(char), 'g');
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  importRepo.$inject = ['$http'];
  angular.module('bonitasoft.designer.common.repositories').service('importRepo', importRepo);

  function importRepo($http) {
    return {
      forceImport: forceImport,
      cancelImport: cancelImport
    };

    function forceImport(uuid) {
      return $http.post('import/' + uuid + '/force').then(function (response) {
        return response.data;
      });
    }

    function cancelImport(uuid) {
      return $http.post('import/' + uuid + '/cancel').then(function (response) {
        return response.data;
      });
    }
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  pageRepository.$inject = ['Repository'];
  angular.module('bonitasoft.designer.common.repositories').factory('pageRepo', pageRepository).factory('formRepo', pageRepository).factory('layoutRepo', pageRepository);

  function pageRepository(Repository) {
    var PageRepository = function (_Repository) {
      _inherits(PageRepository, _Repository);

      function PageRepository() {
        _classCallCheck(this, PageRepository);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PageRepository).call(this, 'page', 'rest/pages'));
      }
      /**
       * Renames a page and returns a promise
       * @param id - the page's id
       * @param newName - the page's new name
       */


      _createClass(PageRepository, [{
        key: 'rename',
        value: function rename(id, newName) {
          return this.$http.put(this.baseUrl + '/' + id + '/name', newName);
        }

        /**
         * Creates a new asset
         * @param id - the page's id
         * @param asset
         */

      }, {
        key: 'createAsset',
        value: function createAsset(id, asset) {
          return this.$http.post(this.baseUrl + '/' + id + '/assets', asset).then(function (response) {
            return response.data;
          });
        }
      }, {
        key: 'desactivateAsset',
        value: function desactivateAsset(pageId, asset) {
          return this.$http.put(this.baseUrl + '/' + pageId + '/assets/' + asset.id + '?active=' + asset.active, asset);
        }

        /**
         * Loads assets used by the page and by the widgets
         * Returns a promise
         * @param page
         */

      }, {
        key: 'loadAssets',
        value: function loadAssets(page) {
          return this.$http.get(this.baseUrl + '/' + page.id + '/assets').then(function (response) {
            return response.data;
          });
        }

        /**
         * Delete an asset
         * Returns a promise
         */

      }, {
        key: 'deleteAsset',
        value: function deleteAsset(id, asset) {
          return this.$http.delete(this.baseUrl + '/' + id + '/assets/' + asset.id);
        }
      }]);

      return PageRepository;
    }(Repository);

    return new PageRepository();
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  repositoriesService.$inject = ['$injector'];
  angular.module('bonitasoft.designer.common.repositories').factory('repositories', repositoriesService);

  function repositoriesService($injector) {
    return {
      get: function (type) {
        return $injector.get(type + 'Repo');
      }
    };
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  repositoryService.$inject = ['$http'];
  angular.module('bonitasoft.designer.common.repositories').factory('Repository', repositoryService);

  function repositoryService($http) {
    var Repository = function () {
      function Repository(type, baseUrl) {
        _classCallCheck(this, Repository);

        this.type = type;
        this.baseUrl = baseUrl;
        this.lastSavedState = {};
        this.$http = $http;
      }

      _createClass(Repository, [{
        key: 'save',
        value: function save(artifact) {
          var _this = this;

          return this.$http.put(this.baseUrl + '/' + artifact.id, artifact).success(function () {
            _this.lastSavedState = artifact;
          });
        }

        /**
         * Initialise lastSavedState to track update from editor
         * @param  {Object} artifact  the current artifact being edited
         */

      }, {
        key: 'initLastSavedState',
        value: function initLastSavedState(artifact) {
          this.lastSavedState = angular.copy(artifact);
        }

        /**
         * Utility function to track if a artifact being updated, need to be saved
         * @param  {Object} artifact the artifact being updated
         * @return {Boolean}
         */

      }, {
        key: 'needSave',
        value: function needSave(artifact) {
          return !angular.equals(artifact, this.lastSavedState);
        }
      }, {
        key: 'delete',
        value: function _delete(id) {
          return this.$http.delete(this.baseUrl + '/' + id);
        }
      }, {
        key: 'create',
        value: function create(artifact, sourceArtifactId) {
          return this.$http.post(this.baseUrl + (sourceArtifactId ? '?duplicata=' + sourceArtifactId : ''), artifact).then(function (response) {
            return response.data;
          });
        }
      }, {
        key: 'load',
        value: function load(id) {
          return this.$http.get(this.baseUrl + '/' + id);
        }
      }, {
        key: 'all',
        value: function all() {
          return this.$http.get(this.baseUrl).then(function (response) {
            return response.data;
          });
        }

        /**
         * Return export url of a artifact
         * @param artifact - the artifact to be exported
         */

      }, {
        key: 'exportUrl',
        value: function exportUrl(artifact) {
          return 'export/' + this.type + '/' + artifact.id;
        }
      }, {
        key: 'markAsFavorite',
        value: function markAsFavorite(artifactId) {
          return this.$http.put(this.baseUrl + '/' + artifactId + '/favorite', true);
        }
      }, {
        key: 'unmarkAsFavorite',
        value: function unmarkAsFavorite(artifactId) {
          return this.$http.put(this.baseUrl + '/' + artifactId + '/favorite', false);
        }
      }]);

      return Repository;
    }();

    return Repository;
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  widgetRepository.$inject = ['Repository'];
  angular.module('bonitasoft.designer.common.repositories').factory('widgetRepo', widgetRepository);

  function widgetRepository(Repository) {
    var WidgetRepository = function (_Repository) {
      _inherits(WidgetRepository, _Repository);

      function WidgetRepository() {
        _classCallCheck(this, WidgetRepository);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetRepository).call(this, 'widget', 'rest/widgets'));
      }
      /**
       * Returns all the custom widgets by fetching all of them and filtering the custom ones.
       * @returns {*}
       */


      _createClass(WidgetRepository, [{
        key: 'customs',
        value: function customs() {
          return this.$http.get(this.baseUrl + '?view=light').then(function (response) {
            return response.data.filter(function (widget) {
              return widget.custom;
            });
          }).then(function (widgets) {
            return widgets.map(function (widget) {
              widget.icon = true;
              widget.type = 'widget';
              return widget;
            });
          });
        }

        /**
         * Loads assets used by the widgets and by the widgets
         * Returns a promise
         * @param widget
         */

      }, {
        key: 'loadAssets',
        value: function loadAssets(widget) {
          return this.load(widget.id).then(function (response) {
            return response.data.assets;
          });
        }
      }, {
        key: 'createAsset',
        value: function createAsset(id, asset) {
          return this.$http.post(this.baseUrl + '/' + id + '/assets', asset).then(function (response) {
            return response.data;
          });
        }
      }, {
        key: 'deleteAsset',
        value: function deleteAsset(id, asset) {
          return this.$http.delete(this.baseUrl + '/' + id + '/assets/' + asset.id);
        }
      }, {
        key: 'incrementOrderAsset',
        value: function incrementOrderAsset(widgetId, asset) {
          return this.$http.put(this.baseUrl + '/' + widgetId + '/assets/' + asset.id + '?increment=true', asset);
        }
      }, {
        key: 'decrementOrderAsset',
        value: function decrementOrderAsset(widgetId, asset) {
          return this.$http.put(this.baseUrl + '/' + widgetId + '/assets/' + asset.id + '?decrement=true', asset);
        }
      }, {
        key: 'addProperty',
        value: function addProperty(widgetId, property) {
          return this.$http.post(this.baseUrl + '/' + widgetId + '/properties', property);
        }
      }, {
        key: 'updateProperty',
        value: function updateProperty(widgetId, propertyName, propertyUpdated) {
          return this.$http.put(this.baseUrl + '/' + widgetId + '/properties/' + propertyName, propertyUpdated);
        }
      }, {
        key: 'deleteProperty',
        value: function deleteProperty(widgetId, propertyName) {
          return this.$http.delete(this.baseUrl + '/' + widgetId + '/properties/' + propertyName);
        }
      }]);

      return WidgetRepository;
    }(Repository);

    return new WidgetRepository();
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.common.services').service('aceDataCompleter', function () {
  return function (data) {
    return {
      getCompletions: function (editor, session, pos, prefix, callback) {

        function getPrefixedKeys(key) {
          return '$data.' + key;
        }

        function filterKeys(match, key) {
          return key.indexOf(match) === 0;
        }

        var completions = Object.keys(data).map(getPrefixedKeys).filter(filterKeys.bind(null, prefix)).map(function (data) {
          return {
            name: data,
            value: data,
            score: 2, // increase score to show suggestion on top of the list
            meta: 'data' // the suggestion's category
          };
        });
        callback(null, completions);
      }
    };
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  alertsService.$inject = ['$interval', 'gettext'];
  angular.module('bonitasoft.designer.common.services').factory('alerts', alertsService);

  function alertsService($interval, gettext) {

    var alerts = [];
    var defaultDelay = 8000;

    return {
      alerts: alerts,
      remove: remove,
      addError: addAlert.bind(null, gettext('error')),
      addSuccess: addAlert.bind(null, gettext('success')),
      addWarning: addAlert.bind(null, gettext('warning'))
    };

    /**
     * Adds an alert and removes it a few seconds later
     * @param error
     */
    function add(alert, delay) {
      alerts.push(alert);
      // we use $interval here instead of $timeout to be testable with protractor.
      // Protractor is waiting for $timeout to be over so for alert with delay > ptor timeout, test will fail. Moreover this slow down our test suite
      // Protractor is not waiting for $interval to be over so we make an interval being executed one time
      // see https://github.com/angular/protractor/issues/169
      $interval(function () {
        remove(0);
      }, delay || defaultDelay, 1);
    }

    /**
     * Removes the alert at the given index
     * @param index
     */
    function remove(index) {
      alerts.splice(index, 1);
    }

    /**
     * An alert could be a message or an object
     * @param alert
     */
    function getAlert(alert, type) {
      if (typeof alert === 'string') {
        return { type: type, content: alert };
      } else {
        alert.type = type;
        return alert;
      }
    }

    function addAlert(type, alert, delay) {
      var a = getAlert(alert, type);
      add(a, delay);
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.common.services').factory('arrays', function () {

  'use strict';

  /**
   * Moves an item in an array to the left
   * > If the array is empty we add the element
   * @param  {Object} element
   * @param  {Array} array
   * @param {Boolean} right move to the right
   * @return {void}
   */

  function moveTo(element, array, right) {
    var index = array.indexOf(element);
    var newIndex = index !== 0 ? index - 1 : 0;

    if (right) {
      newIndex = index !== -1 ? index + 1 : 1;
    }

    // We already have the item and it's the only one, do nothing
    if (!index && array.length === 1) {
      return;
    }

    // Remove an item only if the length is > 1
    if (array.length > 1) {
      array.splice(index, 1);
    }

    array.splice(newIndex, 0, element);
  }

  /**
   * Moves an item to the left in and array.
   * It will also add it if the array is empty
   * @param  {Object} element Item to move
   * @param  {Array} array
   * @return {void}
   */
  function moveLeft(element, array) {
    moveTo(element, array, false);
  }

  /**
   * Moves an item in an array to the right
   * @param  {Object} element
   * @param  {Array} array
   * @return {void}
   */
  function moveRight(element, array) {
    moveTo(element, array, true);
  }

  /**
   * Moves an item in an Array to a custom position
   * @param  {Object} element
   * @param  {Number} position
   * @param  {Array} array
   * @return {void}
   */
  function moveAtPosition(element, position, array) {
    var index = array.indexOf(element);

    array.splice(index, 1);
    array.splice(position, 0, element);
  }

  function moveLeftPossible(element, array) {
    return array.indexOf(element) > 0;
  }

  function moveRightPossible(element, array) {
    return array.indexOf(element) < array.length - 1;
  }

  /**
   * Delete all the occurrences of one element in an array. If the array contains objects you have to pass as argument
   * a function which compare 2 elements.
   * @see arrays.spec.js
   * @param {Object} element to delete
   * @param {Array} array
   * @param {Function} equalityTester to test equality between 2 elements. Not necessary for primitives
   * @returns {Array}
   */
  function remove(element, array, equalityTester) {

    var length = array.length;
    if (length > 0) {
      for (var i = length - 1; i >= 0; i--) {
        if (equalityTester) {
          if (equalityTester(array[i], element)) {
            array.splice(i, 1);
          }
        } else if (array[i] === element) {
          array.splice(i, 1);
        }
      }
    }
    return array;
  }

  function removeFirst(element, array) {
    var idx = array.indexOf(element);
    if (idx > -1) {
      array.splice(idx, 1);
    }
    return array;
  }

  /**
   * Inserts the element in the current row at the position provided, or at the end if incorrect.
   * @param element - the element to insert
   * @param position - the index where to insert, will default to the end if incorrect
   * @param array
   */
  function insertAtPosition(element, position, array) {
    if (position >= 0) {
      array.splice(position, 0, element);
    } else {
      array.push(element);
    }
  }

  return {
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveAtPosition: moveAtPosition,
    moveLeftPossible: moveLeftPossible,
    moveRightPossible: moveRightPossible,
    remove: remove,
    removeFirst: removeFirst,
    insertAtPosition: insertAtPosition
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.common.services').factory('clock', function () {

  'use strict';

  return {
    /**
     * Returns the current time (Date.now()). Useful as it can be mocked in tests.
     */
    now: Date.now
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * http response interceptor which extracts the error message from an error http response and adds it to the alerts
 * service
 */
angular.module('bonitasoft.designer.common.services').factory('errorInterceptor', ['$q', 'alerts', function ($q, alerts) {

  'use strict';

  return {
    responseError: function (rejection) {
      if (rejection.headers('Content-Type') && rejection.headers('Content-Type').indexOf('application/json') === 0 && angular.isDefined(rejection.data.message)) {
        alerts.addError(rejection.data.message);
      } else {
        alerts.addError('Unexpected server error');
      }
      return $q.reject(rejection);
    }
  };
}]).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('errorInterceptor');
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  var BrowserHistoryService = function () {
    function BrowserHistoryService($window) {
      _classCallCheck(this, BrowserHistoryService);

      this.$window = $window;
    }

    _createClass(BrowserHistoryService, [{
      key: 'back',
      value: function back(fallback) {
        if (fallback && this.$window.history.length === 1) {
          fallback();
        } else {
          this.$window.history.back();
        }
      }
    }]);

    return BrowserHistoryService;
  }();

  angular.module('bonitasoft.designer.common.services').factory('browserHistoryService', ['$window', function ($window) {
    return new BrowserHistoryService($window);
  }]);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';
  /**
   * This modules wrap the keymaster library (available in window.key)
   * into an angular service
   */

  angular.module('bonitasoft.designer.common.services').service('keymaster', ['$window', function ($window) {
    // key is library name taht handle keyboard shortcuts
    return $window.key;
  }]);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.common.services').service('resolutions', resolutionsService);

  function resolutionsService() {

    var defaultResolution = { key: 'xs', icon: 'laptop', width: '100%' },
        currentResolution = defaultResolution;

    var resolutions = [defaultResolution];

    var defaultDimension = {
      xs: 12
    };

    return {
      registerResolutions: registerResolutions,
      setDefaultResolution: setDefaultResolution,
      setDefaultDimension: setDefaultDimension,
      all: all,
      get: get,
      selected: selected,
      select: select,
      getDefaultResolution: getDefaultResolution,
      getDefaultDimension: getDefaultDimension
    };

    function registerResolutions(newResolutions) {
      resolutions = newResolutions;
    }

    function setDefaultResolution(resolutionKey) {
      defaultResolution = get(resolutionKey);
      currentResolution = defaultResolution;
    }

    function setDefaultDimension(dimension) {
      defaultDimension = dimension || defaultDimension;
    }

    /**
     * Returns the default dimension object
     * @returns {Object}
     */
    function getDefaultDimension() {
      return angular.copy(defaultDimension);
    }

    /**
     * Returns the default resolution
     * @returns {Object}
     */
    function getDefaultResolution() {
      return defaultResolution;
    }

    /**
     * Returns all resolutions ordered by size
     * @returns {Array}
     */
    function all() {
      return resolutions;
    }

    /**
     * Return the selected resolution from the URL param
     * @return {Object}
     */
    function selected() {
      return currentResolution;
    }

    /**
     * select a resolution
     * @param key key of the resolution to be selected
     */
    function select(key) {
      currentResolution = get(key);
      return currentResolution;
    }

    /**
     * Returns a resolution by its key or the default resolution if a resolution is not found.
     * @param {String} resolutionKey - the resolution key to look for
     * @returns {Object}
     */
    function get(resolutionKey) {
      return resolutions.filter(function (resolution) {
        return resolution.key === resolutionKey;
      }).pop() || defaultResolution;
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  angular.module('bonitasoft.designer.common.services').service('utils', function () {

    /**
     * clamp a value between a min and a max value
     * @param  {number} min
     * @param  {number} value
     * @param  {number} max
     * @return {number}       the clamp value
     */
    this.clamp = function clam(min, value, max) {
      return value < min ? min : value > max ? max : value;
    };
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  CustomWidgetEditorCtrl.$inject = ['$scope', 'artifact', 'artifactRepo', 'alerts', '$uibModal', '$window', 'keymaster', 'gettextCatalog', '$stateParams', '$state', 'BONDS', 'browserHistoryService'];
  angular.module('bonitasoft.designer.custom-widget').controller('CustomWidgetEditorCtrl', CustomWidgetEditorCtrl);

  function CustomWidgetEditorCtrl($scope, artifact, artifactRepo, alerts, $uibModal, $window, keymaster, gettextCatalog, $stateParams, $state, BONDS, browserHistoryService) {

    $scope.widget = artifact;
    $scope.bonds = BONDS;

    var saveSuccessMsg = gettextCatalog.getString('Custom widget [ {{name}} ] successfully saved', { name: $scope.widget.name });
    var widgetRepo = artifactRepo;

    keymaster('ctrl+s', function () {
      $scope.$apply(function () {
        $scope.save();
      });
      // prevent default browser action
      return false;
    });

    $scope.isTypeSelectable = function (propertyBond) {
      return propertyBond !== 'variable' && propertyBond !== 'interpolation';
    };

    $scope.back = function () {
      return browserHistoryService.back(function () {
        return $state.go('designer.home');
      });
    };

    /**
     * Updates the property
     * @param paramName the name of the property to update
     * @param param - the property to update
     */
    $scope.updateParam = function (paramName, param) {
      widgetRepo.updateProperty($scope.widget.id, paramName, param).then(function (response) {
        $scope.widget.properties = response.data;
      });
    };

    /**
     * Adds a new property
     * @param param - the param to add
     */
    $scope.addParam = function (param) {
      widgetRepo.addProperty($scope.widget.id, param).then(function (response) {
        $scope.widget.properties = response.data;
      });
    };

    /**
     * Deletes an existing property, by dropping it from the collection
     * @param paramIndex - the index of the property to drop
     */
    $scope.deleteParam = function (param) {
      widgetRepo.deleteProperty($scope.widget.id, param.name).then(function (response) {
        $scope.widget.properties = response.data;
      });
    };

    /**
     * Saves a widget and gives it an id based on its name (Awesome Widget -> awesome-widget)
     */
    $scope.save = function () {
      widgetRepo.save($scope.widget).then(function () {
        alerts.addSuccess(saveSuccessMsg, 2000);
      });
    };

    $scope.saveAndExport = function () {
      widgetRepo.save($scope.widget).then(function () {
        $window.location = widgetRepo.exportUrl($scope.widget);
      });
    };

    $scope.saveAs = function (widget) {
      var modalInstance = $uibModal.open({
        templateUrl: 'js/custom-widget/save-as-popup.html',
        controller: 'saveWidgetAsPopUpCtrl',
        controllerAs: 'ctrl',
        resolve: {
          widget: function () {
            return widget;
          }
        }
      });

      modalInstance.result.then(saveAs).then(reload);

      function reload(widget) {
        $stateParams.id = widget.id;
        $state.go($state.current, $stateParams, {
          reload: true
        });
      }

      function saveAs(data) {
        return widgetRepo.create(data, widget.id);
      }
    };

    $scope.createOrUpdate = function (param) {

      var modalInstance = $uibModal.open({
        templateUrl: 'js/custom-widget/create-property.html',
        controller: 'PropertyEditorPopupCtrl',
        resolve: {
          param: function () {
            return param;
          }
        }
      });

      modalInstance.result.then(function (result) {
        if (result.paramToUpdate) {
          $scope.updateParam(result.paramToUpdate.name, result.param);
        } else {
          $scope.addParam(result.param);
        }
      });
    };

    $scope.openHelp = function () {
      $uibModal.open({
        templateUrl: 'js/custom-widget/help-popup.html',
        size: 'lg'
      });
    };
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.custom-widget').value('BONDS', {
  'variable': {
    type: 'text',
    name: 'Bidirectional bond',
    template: 'js/editor/help/bidirectional-bond-help.html'
  },
  'expression': {
    name: 'Dynamic value',
    template: 'js/editor/help/dynamic-bond-help.html'
  },
  'interpolation': {
    type: 'text',
    name: 'Interpolation',
    template: 'js/editor/help/interpolation-bond-help.html'
  },
  'constant': {
    name: 'Constant',
    template: 'js/editor/help/constant-bond-help.html'
  }
}).controller('PropertyEditorPopupCtrl', ['$scope', 'param', '$uibModalInstance', 'BONDS', function ($scope, param, $uibModalInstance, BONDS) {

  'use strict';

  $scope.paramToUpdate = param;

  /**
   * All types available for the properties
   * @type {Array}
   */
  $scope.types = ['text', 'choice', 'html', 'integer', 'boolean', 'collection'];
  /**
   * All bonds available for the properties
   * @type {Array}
   */
  $scope.bonds = BONDS;

  $scope.isTypeChoicable = function () {
    return $scope.currentParam.type === 'choice' && ($scope.currentParam.bond === 'constant' || $scope.currentParam.bond === 'expression');
  };

  $scope.isTypeSelectable = function () {
    return $scope.currentParam.bond === 'constant' || $scope.currentParam.bond === 'expression';
  };

  // default type is text
  $scope.currentParam = $scope.paramToUpdate ? angular.copy(param) : {
    type: 'text',
    bond: $scope.paramToUpdate && $scope.paramToUpdate.bond || 'expression'
  };

  $scope.updateBond = function (bond) {
    if (bond && $scope.bonds[bond] && $scope.bonds[bond].type) {
      $scope.currentParam.type = $scope.bonds[bond].type;
    }
    $scope.currentParam.bond = bond;
  };

  $scope.ok = function () {
    if ($scope.selectedBond === 'variable') {
      $scope.currentParam.defaultValue = null;
    }
    $uibModalInstance.close({
      param: $scope.currentParam,
      paramToUpdate: $scope.paramToUpdate
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var _$uibModalInstance = void 0;

  var saveWidgetAsPopUpCtrl = function () {
    saveWidgetAsPopUpCtrl.$inject = ['$uibModalInstance', 'widget'];
    function saveWidgetAsPopUpCtrl($uibModalInstance, widget) {
      _classCallCheck(this, saveWidgetAsPopUpCtrl);

      this.widget = widget;
      this.newName = widget.name;
      _$uibModalInstance = $uibModalInstance;
    }

    _createClass(saveWidgetAsPopUpCtrl, [{
      key: 'ok',
      value: function ok() {
        var widget = angular.copy(this.widget); // copy widget to avoid side effects in case of creation error
        widget.name = this.newName;
        _$uibModalInstance.close(widget);
      }
    }]);

    return saveWidgetAsPopUpCtrl;
  }();

  angular.module('bonitasoft.designer.custom-widget').controller('saveWidgetAsPopUpCtrl', saveWidgetAsPopUpCtrl);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.common').factory('components', componentsService);

  function componentsService() {

    var componentsMap = {};

    return {
      reset: reset,
      register: register,
      init: init,
      get: get
    };

    function register(items) {
      componentsMap = items.reduce(function (components, item) {
        components[item.component.id] = item;
        return components;
      }, componentsMap);
    }

    function init(component, parentRow) {
      // container have no id, only a type
      var id = component.id || component.type;

      if (!componentsMap.hasOwnProperty(id)) {
        throw new Error('Component ' + id + ' has not been registered');
      }
      var fnInit = componentsMap[id].init;
      fnInit(component, parentRow);
    }

    function reset() {
      componentsMap = {};
    }

    function get() {
      return componentsMap;
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  propertiesService.$inject = ['gettext'];
  angular.module('bonitasoft.designer.editor.common').factory('properties', propertiesService);

  function propertiesService(gettext) {

    var commonProperties = [{
      label: gettext('CSS classes'),
      caption: gettext('Space-separated list'),
      name: 'cssClasses',
      type: 'string',
      defaultValue: '',
      bond: 'expression',
      help: gettext('Any accessible CSS classes. By default UI Designer comes with Bootstrap http://getbootstrap.com/css/#helper-classes')
    }, {
      label: gettext('Hidden'),
      name: gettext('hidden'),
      type: 'boolean',
      defaultValue: false,
      bond: 'expression'
    }];

    return {
      computeValues: computeValues,
      computeValue: computeValue,
      addCommonPropertiesTo: addCommonPropertiesTo,
      isBound: isBound
    };

    function computeValues(properties) {
      return (properties || []).reduce(function (props, property) {
        props[property.name] = computeValue(property);
        return props;
      }, {});
    }

    function computeValue(property) {
      return {
        type: property.bond === 'expression' ? 'constant' : property.bond,
        value: property.defaultValue
      };
    }

    function addCommonPropertiesTo(component) {
      component.properties = commonProperties.concat(component.properties || []);
      return component;
    }

    function isBound(propertyValue) {
      return propertyValue.type === 'expression' || propertyValue.type === 'variable';
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  containerDefinitionFactory.$inject = ['gettext'];
  angular.module('bonitasoft.designer.editor').factory('containerDefinitionFactory', containerDefinitionFactory);

  function containerDefinitionFactory(gettext) {

    return {
      createTabsContainerWidget: createTabsContainerWidget,
      createContainerWidget: createContainerWidget,
      createFormContainerWidget: createFormContainerWidget
    };

    // using gettext to add key to catalog that will be later translated in a template
    function createContainerWidget() {
      return {
        container: true,
        custom: false,
        id: 'container',
        type: 'container',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><path fill="#fff" d="M50,6.7V3.8h-1v2.9H50z M50,11.4V8.6h-1v2.9H50z M50,16.2v-2.9h-1v2.9H50z M49,20h1v-1.9h-1v1V20zM44.1,20h2.9v-1h-2.9V20z M39.2,20h2.9v-1h-2.9V20z M34.3,20h2.9v-1h-2.9V20z M29.4,20h2.9v-1h-2.9V20z M24.5,20h2.9v-1h-2.9V20zM19.6,20h2.9v-1h-2.9V20z M14.7,20h2.9v-1h-2.9V20z M9.8,20h2.9v-1H9.8V20z M4.9,20h2.9v-1H4.9V20z M0,18.1V20h2.9v-1H1v-1H0zM0,13.3v2.9h1v-2.9H0z M0,8.6v2.9h1V8.6H0z M0,3.8v2.9h1V3.8H0z M2.9,0H0v1.9h1V1h2V0z M7.8,0H4.9v1h2.9V0z M12.7,0H9.8v1h2.9V0zM17.6,0h-2.9v1h2.9V0z M22.5,0h-2.9v1h2.9V0z M27.5,0h-2.9v1h2.9V0z M32.4,0h-2.9v1h2.9V0z M37.3,0h-2.9v1h2.9V0z M42.2,0h-2.9v1h2.9V0z M47.1,0h-2.9v1h2.9V0z M50,0h-1v1v1h1V0z"/></svg>',
        name: 'Container',
        description: gettext('Group of widgets used to define the arrangement of the page elements. Its content can be repeated over an array'),
        order: -2,
        properties: [{
          name: 'repeatedCollection',
          label: gettext('Collection'),
          help: gettext('Number of array elements defines the number of times the container structure is repeated. Array data is available to widgets in the container'),
          caption: gettext('Repeat container content. Variable of type array'),
          icon: {
            className: 'fa fa-list-ul'
          },
          type: 'string',
          bond: 'variable'
        }]
      };
    }

    function createTabsContainerWidget() {
      return {
        container: true,
        custom: false,
        id: 'tabsContainer',
        type: 'tabsContainer',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><path fill="#fff" d="M50,11.4V8.6h-1v2.9H50z M50,16.2v-2.9h-1v2.9H50z M49,20h1v-1.9h-1v1V20z M44.1,20h2.9v-1h-2.9V20zM39.2,20h2.9v-1h-2.9V20z M34.3,20h2.9v-1h-2.9V20z M29.4,20h2.9v-1h-2.9V20z M24.5,20h2.9v-1h-2.9V20z M19.6,20h2.9v-1h-2.9V20zM14.7,20h2.9v-1h-2.9V20z M9.8,20h2.9v-1H9.8V20z M4.9,20h2.9v-1H4.9V20z M0,18.1V20h2.9v-1H1v-1H0z M0,13.3v2.9h1v-2.9H0zM0,8.6v2.9h1V8.6H0z M0,1v5.7h1V1H0z M15.7,0H1v1h14.7V0z M16.7,1h-1v4.8h2v-1h-1V1z M22.5,4.8h-2.9v1h2.9V4.8z M27.5,4.8h-2.9v1h2.9V4.8z M32.4,4.8h-2.9v1h2.9V4.8z M37.3,4.8h-2.9v1h2.9V4.8z M42.2,4.8h-2.9v1h2.9V4.8z M47.1,4.8h-2.9v1h2.9V4.8z M50,4.8h-1v1v1h1V4.8z"/><path fill="#CBD5E1" d="M34.3,1h-1v3.8h1V1z M18.6,1h14.7V0H18.6V1z M18.6,4.8V1h-1v3.8H18.6z"/></svg>',
        order: -1,
        name: 'Tabs container',
        description: gettext('Multiple groups of widgets, each group in a tab')
      };
    }

    function createFormContainerWidget() {
      return {
        container: true,
        custom: false,
        id: 'formContainer',
        type: 'formContainer',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"><path fill="#fff" d="M5 19h3v1H5v-1zm5-18h3V0h-3v1zM5 1h3V0H5v1zm5 19h3v-1h-3v1zm5 0h3v-1h-3v1zm5 0h3v-1h-3v1zM15 1h3V0h-3v1zM1 9H0v2h1V9zM0 2h1V1h2V0H0v2zm23-2h-3v1h3V0zM1 4H0v3h1V4zm0 14H0v2h3v-1H1v-1zm0-5H0v3h1v-3zM27 0h-2v1h2V0zm22 19v1h1v-1.9h-1v.9zm-24 1h2v-1h-2v1zM44 1h3V0h-3v1zm5 15h1v-3h-1v3zm0-16v2h1V0h-1zm0 7h1V4h-1v3zm0 4h1V9h-1v2zm-5 9h3v-1h-3v1zM39 1h3V0h-3v1zM29 1h3V0h-3v1zm0 19h3v-1h-3v1zm5 0h3v-1h-3v1zm0-19h3V0h-3v1zm5 19h3v-1h-3v1zm-9-6H18v4h12v-4z"/><path fill="#CBD5E1" d="M45 2v4H18V2h27zM18 12h27V8H18v4zm4 5h4v-2h-4v2zM7 5h9V3H7v2zm-2 6h7V9H5v2zm8 0h3V9h-3v2z"/></svg>',
        name: 'Form container',
        order: 0,
        description: gettext('Container used for a form. Eases validation')
      };
    }
  }
})();
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.data-panel').factory('apiExamples', ['gettextCatalog', function (gettextCatalog) {

  var examples = {
    'System API': [{
      description: gettextCatalog.getString('Get current logged user'),
      url: '../API/system/session/1',
      more: gettextCatalog.getString('User id could then be obtained by using {{youVar.user_id}}')
    }],
    'BPM API': [{
      description: gettextCatalog.getString('Get a human task by its identifier'),
      url: '../API/bpm/humanTask/<strong>{{taskId}}</strong>',
      more: gettextCatalog.getString('Case identifier could then be retrieved by {{myVar.rootCaseId}}')
    }, {
      description: gettextCatalog.getString('List of human task in ready state for current user (pending + assigned)'),
      url: '../API/bpm/humanTask?c=10&p=0&f=state=ready&f=user_id=<strong>{{userId}}</strong>&f=caseId=<strong>{{caseId}}</strong>'
    }, {
      description: gettextCatalog.getString('List of cases open for a process definition id'),
      url: '../API/bpm/case?p=0&c=10&f=processDefinitionId=<strong>{{myProcessDefinitionId}}</strong>'
    }, {
      description: gettextCatalog.getString('All process data of a case: Search for a list of case variables'),
      url: '../API/bpm/caseVariable?p=0&c=10&f=case_id=<strong>{{caseId}}</strong>'
    }, {
      description: gettextCatalog.getString('Search a list of cases based on search indexes'),
      url: '../API/bpm/case?p=0&c=10&s=<strong>{{searchIndexValueSearched}}</strong>'
    }, {
      description: gettextCatalog.getString('Get a case by its identifier'),
      url: '../API/bpm/case/<strong>{{caseId}}</strong>'
    }],
    'Identity API': [{
      description: gettextCatalog.getString('Get professional details of a user'),
      url: '../API/identity/user/<strong>{{userId}}</strong>?d=professional_data'
    }],
    'Customuserinfo API': [{
      description: gettextCatalog.getString('Get custom information of a user'),
      url: '../API/customuserinfo/user?p=0&c=10&f=userId=<strong>{{userId}}</strong>'
    }],
    'BDM API': [{
      description: gettextCatalog.getString('Get all business variables defined in a case'),
      url: '../API/bdm/businessDataReference?f=caseId=<strong>{{caseId}}</strong>&p=0&c=10',
      more: gettextCatalog.getString('In a process form, if you have defined business variables in your process, use the context variable to retrieve them (e.g. context.businessVariableName_ref).')
    }, {
      description: gettextCatalog.getString('Get a named business variable reference defined in a case'),
      url: '../API/bdm/businessDataReference/<strong>{{caseId}}</strong>/<strong>{{businessVariableName}}</strong>',
      alternative: {
        before: gettextCatalog.getString('In a process form, if you have defined business variables in your process, use the link to the variable to retrieve using the context variable:'),
        url: '../<strong>{{context.businessVariableName_ref.link}}</strong>',
        more: gettextCatalog.getString('Where businessVariableName is the name of the business variable defined at pool level.')
      }
    }, {
      description: gettextCatalog.getString('Call a business data (custom) query'),
      url: '../API/bdm/businessData/<strong>{{businessDataType}}</strong>?q=<strong>{{queryName}}</strong>&p=0&c=10&f=<strong>{{filter}}</strong>',
      more: gettextCatalog.getString('Where businessDataType = com.company.model.MyData, queryName = name of the BDM query, filter = "myParam=myValue"')
    }]
  };

  function flatten(arrayOfArray) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arrayOfArray));
  }

  var transformExamplesToFlatList = function () {
    return flatten(Object.keys(examples).map(function (category) {
      return examples[category].map(function (api) {
        api.category = category;
        return api;
      });
    }));
  };

  return {
    get: transformExamplesToFlatList
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.data-panel').controller('DataPopupController', ['$scope', 'dataTypeService', '$uibModalInstance', 'mode', 'pageData', 'data', 'apiExamples', function ($scope, dataTypeService, $uibModalInstance, mode, pageData, data, apiExamples) {

  'use strict';

  $scope.apiExamples = apiExamples.get();
  $scope.example = $scope.apiExamples[0];
  $scope.examplesCollapsed = true;

  $scope.dataTypes = dataTypeService.getDataTypes();
  $scope.getLabel = dataTypeService.getDataLabel;

  $scope.pageData = pageData;
  $scope.isNewData = data === undefined;
  $scope.newData = data || dataTypeService.createData();
  $scope.exposableData = mode !== 'page';

  $scope.isDataNameUnique = function (dataName) {
    return !dataName || !pageData[dataName];
  };

  $scope.updateValue = function (dataType) {
    $scope.newData.value = dataTypeService.getDataDefaultValue(dataType);
  };

  $scope.save = function (data) {
    $uibModalInstance.close(data);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.data-panel').service('dataTypeService', ['gettext', function (gettext) {

  function compareType(type, item) {
    return type === item.type;
  }

  function getLabel(acc, item) {
    return item.label;
  }

  function getDefaultValue(acc, item) {
    return item.defaultValue;
  }
  var dataTypes = [{ label: gettext('String'), type: 'constant', group: ' ', defaultValue: '' }, { label: gettext('JSON'), type: 'json', group: ' ', defaultValue: '{}' }, { label: gettext('External API'), type: 'url', group: '--', defaultValue: '' }, { label: gettext('Javascript expression'), type: 'expression', group: '--', defaultValue: 'return "hello";' }, { label: gettext('URL parameter'), type: 'urlparameter', group: '--', defaultValue: '' }];

  this.getDataTypes = function () {
    return dataTypes;
  };

  this.getDataLabel = function (type) {
    return dataTypes.filter(compareType.bind(null, type)).reduce(getLabel, undefined);
  };

  this.getDataDefaultValue = function (type) {
    return dataTypes.filter(compareType.bind(null, type)).reduce(getDefaultValue, undefined);
  };

  this.createData = function () {
    return {
      type: 'constant',
      exposed: false
    };
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.data-panel').controller('DataCtrl', ['$scope', 'dataTypeService', '$location', '$uibModal', 'artifact', 'mode', function ($scope, dataTypeService, $location, $uibModal, artifact, mode) {

  'use strict';

  $scope.searchedData = '';
  $scope.page = artifact;
  $scope.pageData = artifact.data;
  $scope.getLabel = dataTypeService.getDataLabel;
  $scope.exposableData = mode !== 'page';
  $scope.keys = Object.keys;

  $scope.delete = function (dataName) {
    delete $scope.page.data[dataName];
    $scope.filterPageData();
  };

  $scope.save = function (data) {
    $scope.page.data[data.$$name] = {
      exposed: data.exposed,
      type: data.type,
      value: data.value
    };
    $scope.filterPageData();
  };

  $scope.filterPageData = function () {
    function matchData(pattern, key, data) {
      return key.indexOf(pattern.trim()) !== -1 || angular.toJson(data || {}).indexOf(pattern.trim()) !== -1;
    }

    $scope.pageData = Object.keys($scope.page.data).reduce(function (data, key) {
      if (matchData($scope.searchedData, key, artifact.data[key].value)) {
        data[key] = artifact.data[key];
      }
      return data;
    }, {});
  };

  $scope.$watch('searchedData', function () {
    $scope.filterPageData();
  });

  $scope.openDataPopup = function (key) {
    var modalInstance = $uibModal.open({
      templateUrl: 'js/editor/data-panel/data-popup.html',
      controller: 'DataPopupController',
      resolve: {
        mode: function () {
          return mode;
        },
        pageData: function () {
          return artifact.data;
        },
        data: function () {
          return key && angular.extend({}, artifact.data[key], { $$name: key });
        }
      }
    });

    modalInstance.result.then($scope.save);
  };

  $scope.openHelp = function () {
    return $uibModal.open({ templateUrl: 'js/editor/data-panel/help-popup.html', size: 'lg' });
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * directive used to validate that a page control contains valid JSON.
 * Usage: <textarea ng-model="some.property" valid-json></textarea>
 */
angular.module('bonitasoft.designer.editor.data-panel').directive('validJson', function () {

  'use strict';

  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.validJson = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        try {
          var val = angular.fromJson(viewValue);
          return angular.isObject(val) || angular.isArray(val);
        } catch (error) {
          return false;
        }
      };
    }
  };
});
'use strict';

(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor').run(['whiteboardService', 'editorService', function (whiteboardService, editorService) {

    whiteboardService.registerOnWidgetAddFunction(editorService.addWidgetAssetsToPage);
    whiteboardService.registerOnWidgetRemoveFunction(editorService.removeAssetsFromPage);
  }]);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * The editor controller. It handles the palette, the resolution changes, the selections, and provides
 * common functions to the directives used inside the page.
 */

angular.module('bonitasoft.designer.editor').controller('EditorCtrl', ['$scope', '$state', '$stateParams', '$window', 'artifactRepo', 'resolutions', 'artifact', 'mode', 'arrays', 'componentUtils', 'keymaster', '$uibModal', 'utils', 'whiteboardService', function ($scope, $state, $stateParams, $window, artifactRepo, resolutions, artifact, mode, arrays, componentUtils, keymaster, $uibModal, utils, whiteboardService) {

  'use strict';

  /**
   * Names the current browsing context
   */

  $window.name = 'editor';

  /**
   * The editor mode
   */
  $scope.mode = mode || 'page';
  /**
   * The root container of the editor, always present. If there is no page loaded, then we build an empty one.
   * It initially contains a single row, and may not contain less than a row. The counters are used by e2e tests.
   */
  $scope.page = artifact;

  $scope.resolution = function () {
    return resolutions.selected();
  };

  /**
   * Adding DEL keyboard shortcut
   */
  keymaster('del', function () {
    if (!$scope.currentComponent) {
      return;
    }

    $scope.$apply(function () {
      $scope.removeCurrentComponent();
    });
  });

  keymaster('right', function () {
    moveSelection(+1);
  });

  keymaster('left', function () {
    moveSelection(-1);
  });

  keymaster('ctrl+s', function () {
    $scope.$apply(function () {
      $scope.save();
    });
    // prevent default browser action
    return false;
  });

  function moveSelection(offset) {
    var components = componentUtils.getVisibleComponents($scope.page);
    var index = components.indexOf($scope.currentComponent) + offset;

    index = utils.clamp(0, index, components.length - 1);

    $scope.$apply(function () {
      $scope.selectComponent(components[index]);
    });
  }

  $scope.$on('$destroy', function () {
    keymaster.unbind('del');
    keymaster.unbind('right');
    keymaster.unbind('left');
  });

  /**
   * Returns the CSS classes that must be set on a component in the editor to reflect its width and the currently
   * selected resolution. It returns an array containing the columnClass of the component, as well as
   * component-selected if the current selection is the given component.
   * Note that this function is called for a component of type 'widget' or of type 'container'.
   */
  $scope.componentClasses = function (component) {
    var result = [componentUtils.column.className(component)];

    return result;
  };

  /**
   * Function called when we want the current selection to be a row of a container. Selecting a row of a container
   * allows displaying the palette, in order to add a widget or container component to the selected row, to delete
   * or move the selected row, or to add a new row before or after the selected row.
   * Selecting a row automatically unselects the previously selected row or component or tab.
   * @param container the container directly containing the row to select
   * @param row the row to select
   * @param event the event, used to prevent the click to propagate to parent elements
   */
  $scope.selectRow = function (container, row, event) {

    $scope.currentComponent = null;
    $scope.currentContainerRow = {
      row: row,
      container: container
    };
    if (event) {
      event.stopPropagation();
    }
  };

  /**
   * Drag and drop an item, it means re-attach this item
   * @param  {Object} element Widget already configured
   * @return {void}
   */
  $scope.dropElement = function (element) {
    $scope.currentComponent = element;
    element.$$parentContainerRow = $scope.currentContainerRow;
    $scope.currentContainerRow.row.push(element);
    componentUtils.column.computeSizeItemInRow($scope.currentContainerRow.row);
  };

  /**
   * move a component to a specific position inside the current active row
   * @param  {int}    componentIndex new index for component
   * @param  {Object} component      a component
   */
  $scope.moveAtPosition = function (componentIndex, component) {
    arrays.moveAtPosition(component, componentIndex, $scope.currentContainerRow.row);
    $scope.selectComponent(component);
  };

  /**
   * Function called when we want the current selection to be a widget component or a container component. Selecting
   * a widget component allows displaying the editor for this widget component, and the controls used to move the
   * component. Selecting a container allows displaying the container editor and the controls used to move the
   * container.
   * Selecting a component automatically unselects the previously selected row or component or tab.
   * @param component the component to select
   * @param event the event, used to prevent the click to propagate to parent elements
   */
  $scope.selectComponent = function (component, event) {

    $scope.currentContainerRow = null;
    $scope.currentComponent = component;
    if (event) {
      event.stopPropagation();
    }
  };

  $scope.deselectComponent = function () {

    $scope.currentContainerRow = null;
    $scope.currentComponent = null;
    if (event) {
      event.stopPropagation();
    }
  };

  /**
   * Function used to create a widget component for the given widget and add it to the currently selected container
   * row. A row must be selected before calling this function. Note that the created component keeps a reference to
   * its parent container row, in order to know how to move itself inside this row.
   * @param dragData {type: String, widget: Object}
   * @param index index of the element
   */
  $scope.addComponent = function (dragData, index) {
    var newComponent = dragData.create($scope.currentContainerRow);
    arrays.insertAtPosition(newComponent, index, $scope.currentContainerRow.row);
    componentUtils.column.computeSizeItemInRow($scope.currentContainerRow.row);
    $scope.selectComponent(newComponent);
    newComponent.triggerAdded();
  };

  function removeRow(container, row) {
    var rows = container.rows;
    if (rows.length > 1) {
      var rowIndex = rows.indexOf(row);
      rows.splice(rowIndex, 1);
      whiteboardService.triggerRowRemoved(row);
    }
  }

  /**
   * Removes the currently selected row from its container. A row must be selected before calling this function,
   * and it should not be the only one in its container, because a container must always contain at least one row.
   */
  $scope.removeCurrentRow = function () {
    removeRow($scope.currentContainerRow.container, $scope.currentContainerRow.row);
    $scope.currentContainerRow = null;
  };

  /**
   * Removes the currently selected component (widget or container) from its parent row. A component must be selected
   * before calling this function.
   * If a destinationRow is given, it means the component is moved so current row may not have to be deleted
   */
  $scope.removeCurrentComponent = function (item, destinationRow) {
    var component = $scope.currentComponent || item;
    var currentRow = component.$$parentContainerRow.row;
    var componentIndex = currentRow.indexOf(component);
    currentRow.splice(componentIndex, 1);
    if (currentRow.length === 0 && destinationRow !== currentRow) {
      removeRow(component.$$parentContainerRow.container, currentRow);
    }
    if (!destinationRow) {
      component.triggerRemoved();
    }
    $scope.currentComponent = null;
  };

  /**
   * Tells if the given row is the currently selected one.
   */
  $scope.isCurrentRow = function (row) {
    return !!$scope.currentContainerRow && $scope.currentContainerRow.row === row;
  };

  /**
   * Tells if the given component (widget or container) is the currently selected one.
   */
  $scope.isCurrentComponent = function (component) {
    return !!$scope.currentComponent && $scope.currentComponent === component;
  };

  /**
   * Computes the size of a row by summing its components size.
   * @param row the row to measure
   * @returns {number} the size
   */
  $scope.rowSize = function (row) {
    var size = 0;
    angular.forEach(row, function (component) {
      size += componentUtils.column.width(component);
    });
    return size;
  };

  $scope.saveAndEditCustomWidget = function (widgetId) {
    artifactRepo.save($scope.page).then(function () {
      $state.go('designer.widget', {
        id: widgetId
      });
    });
  };

  $scope.save = function () {
    return artifactRepo.save($scope.page);
  };

  $scope.canBeSaved = function (page) {
    return !!page.name;
  };

  /**
   * Create a nex row at the bottom and add a component
   * @param  {Object} data  a component descriptor to add
   */
  $scope.appendComponent = function (event, data) {
    // we prevent from dropping existing widget
    if (data.$$widget) {
      return;
    }
    if (!componentUtils.isEmpty($scope.page)) {
      $scope.page.rows.push([]);
    }
    var lastRow = $scope.page.rows[$scope.page.rows.length - 1];
    $scope.addComponentToRow(data, $scope.page, lastRow, 0);
  };

  /**
   * Add a component to a row in a container
   * @param {Object} data      Component descriptor
   * @param {Object} container Container that hold the row
   * @param {Array} row        the row where append the component
   * @param {int} index        the index at where we insert the component
   */
  $scope.addComponentToRow = function (data, container, row, index) {

    $scope.editor.selectRow(container, row);
    $scope.addComponent(data, index);
  };

  $scope.resizePaletteHandler = function (isClosed, isNarrow) {
    $scope.isPaletteClosed = isClosed;
    $scope.isPaletteNarrow = isNarrow;
  };

  /**
   * Object containing methods helpful for the component and container directives of the editor, and which is passed
   * as an attribute of these directives.
   */
  $scope.editor = {
    addComponentToRow: $scope.addComponentToRow,
    selectRow: $scope.selectRow,
    selectComponent: $scope.selectComponent,
    deselectComponent: $scope.deselectComponent,
    dropElement: $scope.dropElement,
    componentClasses: $scope.componentClasses,
    removeCurrentRow: $scope.removeCurrentRow,
    removeCurrentComponent: $scope.removeCurrentComponent,
    rowSize: $scope.rowSize,
    isCurrentRow: $scope.isCurrentRow,
    isCurrentComponent: $scope.isCurrentComponent,
    moveAtPosition: $scope.moveAtPosition,
    changeComponentWidth: $scope.changeComponentWidth,
    getComponentWidth: $scope.getComponentWidth,
    page: $scope.page
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  editorService.$inject = ['$q', 'widgetRepo', 'components', 'whiteboardComponentWrapper', 'pageElementFactory', 'containerDefinitionFactory', 'properties', 'alerts', 'gettext', 'whiteboardService', 'assetsService'];
  angular.module('bonitasoft.designer.editor').service('editorService', editorService);

  function editorService($q, widgetRepo, components, whiteboardComponentWrapper, pageElementFactory, containerDefinitionFactory, properties, alerts, gettext, whiteboardService, assetsService) {

    var paletteItems = {};
    var page;

    return {
      addPalette: addPalette,
      initialize: initialize,
      addWidgetAssetsToPage: addWidgetAssetsToPage,
      removeAssetsFromPage: removeAssetsFromPage
    };

    function addPalette(key, repository) {
      paletteItems[key] = repository;
    }

    function initialize(repo, id) {
      return widgetRepo.all().then(initializePalette).then(function () {
        var promises = Object.keys(paletteItems).reduce(function (promises, key) {
          return promises.concat(paletteItems[key](id));
        }, []);
        return $q.all(promises);
      }).then(function () {
        return repo.load(id);
      }).catch(function (error) {
        alerts.addError(error.message);
        return $q.reject(error);
      }).then(function (response) {
        whiteboardService.reset();
        page = response.data;
        whiteboardComponentWrapper.wrapPage(page);
        return page;
      });
    }

    function initializePalette(widgets) {
      function filterCustoms(val, item) {
        return item.custom === val;
      }

      var coreWidgets = widgets.filter(filterCustoms.bind(null, false)).map(paletteWrapper.bind(null, gettext('widgets'), 1));

      var customWidgets = widgets.filter(filterCustoms.bind(null, true)).map(paletteWrapper.bind(null, gettext('custom widgets'), 2));

      // reset the components map
      components.reset();
      components.register(getPaletteContainers());
      components.register(coreWidgets);
      components.register(customWidgets);
    }

    function paletteWrapper(name, order, component) {
      var extended = properties.addCommonPropertiesTo(component);
      return {
        component: extended,
        sectionName: name,
        sectionOrder: order,
        init: whiteboardComponentWrapper.wrapWidget.bind(null, extended),
        create: createWidget.bind(null, extended)
      };
    }

    function getPaletteContainers() {
      var container = properties.addCommonPropertiesTo(containerDefinitionFactory.createContainerWidget());
      var tabsContainer = properties.addCommonPropertiesTo(containerDefinitionFactory.createTabsContainerWidget());
      var formContainer = properties.addCommonPropertiesTo(containerDefinitionFactory.createFormContainerWidget());
      return [{
        sectionName: gettext('widgets'),
        sectionOrder: 1,
        component: container,
        init: whiteboardComponentWrapper.wrapContainer.bind(null, container),
        create: createContainer.bind(null, container)
      }, {
        sectionName: gettext('widgets'),
        sectionOrder: 1,
        component: tabsContainer,
        init: whiteboardComponentWrapper.wrapTabsContainer.bind(null, tabsContainer),
        create: createTabsContainer.bind(null, tabsContainer)
      }, {
        sectionName: gettext('widgets'),
        sectionOrder: 1,
        component: formContainer,
        init: whiteboardComponentWrapper.wrapFormContainer.bind(null, formContainer),
        create: createFormContainer.bind(null, formContainer)
      }];
    }

    function createWidget(widget, parentRow) {
      var element = pageElementFactory.createWidgetElement(widget);
      return whiteboardComponentWrapper.wrapWidget(widget, element, parentRow);
    }

    function createContainer(container, parentRow) {
      var element = pageElementFactory.createContainerElement(container);
      return whiteboardComponentWrapper.wrapContainer(container, element, parentRow);
    }

    function createTabsContainer(tabsContainer, parentRow) {
      var element = pageElementFactory.createTabsContainerElement(tabsContainer);
      return whiteboardComponentWrapper.wrapTabsContainer(tabsContainer, element, parentRow);
    }

    function createFormContainer(formContainer, parentRow) {
      var element = pageElementFactory.createFormContainerElement(formContainer);
      return whiteboardComponentWrapper.wrapFormContainer(formContainer, element, parentRow);
    }

    function addWidgetAssetsToPage(widget) {
      assetsService.addWidgetAssetsToPage(widget, page);
    }

    function removeAssetsFromPage(widget) {
      if (!whiteboardService.contains(widget)) {
        assetsService.removeAssetsFromPage(widget, page);
      }
    }
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var EditorHeaderCtrl = function () {
    EditorHeaderCtrl.$inject = ['mode', 'artifact', 'artifactRepo', '$uibModal', '$stateParams', '$state', '$window', 'browserHistoryService'];
    function EditorHeaderCtrl(mode, artifact, artifactRepo, $uibModal, $stateParams, $state, $window, browserHistoryService) {
      'ngInject';

      _classCallCheck(this, EditorHeaderCtrl);

      this.mode = mode;
      this.page = artifact;
      this.artifactRepo = artifactRepo;
      this.$uibModal = $uibModal;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$window = $window;
      this.browserHistoryService = browserHistoryService;
    }

    _createClass(EditorHeaderCtrl, [{
      key: 'back',
      value: function back() {
        var _this = this;

        this.browserHistoryService.back(function () {
          return _this.$state.go('designer.home');
        });
      }
    }, {
      key: 'save',
      value: function save(page) {
        return this.artifactRepo.save(page);
      }
    }, {
      key: 'saveAs',
      value: function saveAs(page) {
        var _this2 = this;

        var modalInstance = this.$uibModal.open({
          templateUrl: 'js/editor/header/save-as-popup.html',
          controller: 'SaveAsPopUpController',
          controllerAs: 'ctrl',
          resolve: {
            page: function () {
              return page;
            }
          }
        });

        modalInstance.result.then(function (data) {
          return _this2.artifactRepo.create(data, page.id);
        }).then(function (data) {
          _this2.$stateParams.id = data.id;
          _this2.$state.go('designer.' + page.type, _this2.$stateParams, {
            reload: true
          });
        });
      }
    }, {
      key: 'saveAndExport',
      value: function saveAndExport(page) {
        var _this3 = this;

        this.artifactRepo.save(page).then(function () {
          return _this3.$window.location = _this3.artifactRepo.exportUrl(page);
        });
      }
    }, {
      key: 'openHelp',
      value: function openHelp() {
        var _this4 = this;

        this.$uibModal.open({
          templateUrl: 'js/editor/header/help-popup.html',
          size: 'lg',
          resolve: {
            pageEdition: function () {
              return _this4.mode === 'page';
            }
          },
          controller: ['$scope', '$uibModalInstance', 'pageEdition', function ($scope, $uibModalInstance, pageEdition) {
            'ngInject';

            $scope.pageEdition = pageEdition;
            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }]
        });
      }
    }]);

    return EditorHeaderCtrl;
  }();

  angular.module('bonitasoft.designer.editor.header').controller('EditorHeaderCtrl', EditorHeaderCtrl);
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  'use strict';

  var SaveAsPopUpController = function () {
    SaveAsPopUpController.$inject = ['$uibModalInstance', 'page'];
    function SaveAsPopUpController($uibModalInstance, page) {
      _classCallCheck(this, SaveAsPopUpController);

      this.$uibModalInstance = $uibModalInstance;
      this.page = page;
      this.newName = page.name;
    }

    _createClass(SaveAsPopUpController, [{
      key: 'ok',
      value: function ok() {
        var page = angular.copy(this.page); // copy page to avoid side effects in case of creation error
        page.name = this.newName;
        this.$uibModalInstance.close(page);
      }
    }]);

    return SaveAsPopUpController;
  }();

  angular.module('bonitasoft.designer.editor.header').controller('SaveAsPopUpController', SaveAsPopUpController);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  EditorPaletteCtrl.$inject = ['$scope', 'paletteService'];
  angular.module('bonitasoft.designer.editor.palette').controller('EditorPaletteCtrl', EditorPaletteCtrl).directive('editorPalette', editorPaletteDirective);

  /**
   * Element directive displaying a widget in the palette, with just its label for now.
   */
  function editorPaletteDirective() {
    return {
      restrict: 'A',
      scope: {
        onResize: '&'
      },
      controller: 'EditorPaletteCtrl',
      controllerAs: 'palette',
      templateUrl: 'js/editor/palette/editor-palette.html'
    };
  }

  function EditorPaletteCtrl($scope, paletteService) {

    var palette = this;

    /**
     * The palette contains all the widgets that can be added to the page.
     */
    this.sections = paletteService.getSections();
    this.currentSection = this.sections[0];
    this.toggleSection = toggleSection;
    this.isActiveSection = isActiveSection;
    this.isNarrow = isNarrow;
    this.isClosed = isClosed;
    this.getIconClassName = getIconClassName;

    resize();

    function toggleSection(section) {
      palette.currentSection = palette.currentSection === section ? undefined : section;
      resize();
    }

    function isActiveSection(section) {
      return palette.currentSection === section;
    }

    function resize() {
      $scope.onResize({
        isClosed: isClosed(),
        isNarrow: isNarrow()
      });
    }

    function isNarrow() {
      return !!(palette.currentSection && palette.currentSection.widgets.length < 10);
    }

    function isClosed() {
      return palette.currentSection === undefined;
    }

    function getIconClassName(section) {
      return 'ui-' + section.name.replace(/ /g, ''); // remove white spaces
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.palette').directive('paletteWidget', paletteWidget);

  /**
   * Element directive displaying a widget in the palette, with just its label for now.
   */
  function paletteWidget() {
    return {
      restrict: 'EA',
      scope: {
        widget: '='
      },
      templateUrl: 'js/editor/palette/palette-widget.html',
      link: function (scope) {
        scope.$watch('widget.component.icon', function (icon) {
          var blankIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20"></svg>';
          scope.iconData = 'data:image/svg+xml,' + encodeURIComponent(icon || blankIcon);
        });
      }
    };
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  paletteService.$inject = ['components'];
  angular.module('bonitasoft.designer.editor.palette').service('paletteService', paletteService);

  /**
   * Components Service manage ui-designer components
   * handle registration and initialisation.
   *
   * Create a new scope with a properties object derived from user entered propertyValues.
   * This allow to bind propertyValues to widget properties and keep a WYSWYG approach in editor while editing widget properties
   */
  function paletteService(components) {

    return {
      getSections: getSections
    };

    function getSections() {
      var componentsMap = components.get();
      var sections = Object.keys(componentsMap).reduce(function (sections, item) {
        var sectionName = componentsMap[item].sectionName;
        sections[sectionName] = sections[sectionName] || {
          name: sectionName,
          order: componentsMap[item].sectionOrder,
          widgets: []
        };

        sections[sectionName].widgets = sections[sectionName].widgets.concat(componentsMap[item]);
        return sections;
      }, {});

      return Object.keys(sections).map(function (key) {
        return sections[key];
      });
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Controller of the componentMover directive
 */
angular.module('bonitasoft.designer.editor.properties-panel').controller('PropertyFieldDirectiveCtrl', ['$scope', 'properties', function ($scope, properties) {

  'use strict';

  $scope.propertyValue = $scope.propertyValue || properties.computeValue($scope.property);

  $scope.isDisplayed = function () {

    // If there is no expression we will always display the option
    if (!$scope.property.showFor) {
      return true;
    }
    return $scope.$eval($scope.property.showFor);
  };

  $scope.getDataNames = function () {
    return Object.keys($scope.pageData);
  };

  var valuesMemory = {};
  this.toggleExpressionEditor = function () {
    valuesMemory.constant = valuesMemory.constant || $scope.property.defaultValue;
    valuesMemory[$scope.propertyValue.type] = $scope.propertyValue.value;
    $scope.propertyValue.type = $scope.propertyValue.type === 'expression' ? 'constant' : 'expression';
    $scope.propertyValue.value = valuesMemory[$scope.propertyValue.type];
  };

  this.isExpression = function () {
    return $scope.propertyValue.type === 'expression';
  };

  // should be shared with widget editor
  var supportedTypes = ['boolean', 'choice', 'collection', 'float', 'html', 'integer'];

  this.getFieldTemplate = function (property) {
    var type = supportedTypes.indexOf(property.type) >= 0 ? property.type : 'text';

    if (type === 'choice' && angular.isObject(property.choiceValues[0])) {
      type = 'choice-grouped';
    }

    return 'js/editor/properties-panel/field/' + type + '.html';
  };

  this.getBondTemplate = function (property) {
    return 'js/editor/properties-panel/bond/' + property.bond + '.html';
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.properties-panel').directive('propertyField', function () {

  'use strict';

  return {
    restrict: 'E',
    scope: {
      property: '=',
      propertyValue: '=',
      properties: '=',
      pageData: '='
    },
    templateUrl: 'js/editor/properties-panel/property-field.html',
    controller: 'PropertyFieldDirectiveCtrl',
    controllerAs: 'propertyField'
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  angular.module('bonitasoft.designer.editor.whiteboard').directive('componentHighlighter', function () {
    return {
      restrict: 'A',
      link: function ($scope, elem, attrs) {
        var cssClassName = attrs.componentHighlighter;
        var node;

        function onMouseOver(event) {
          var currentNode = event.target;
          while (currentNode.parentNode) {
            if (/\w-element/.test(currentNode.className)) {
              if (node === currentNode) {
                return;
              }
              if (node) {
                node.className = node.className.replace(cssClassName, '').trim();
              }
              currentNode.className += ' ' + cssClassName;
              node = currentNode;
              return;
            }
            currentNode = currentNode.parentNode;
          }
        }

        function onMouseLeave() {
          if (node) {
            node.className = node.className.replace(cssClassName, '');
            node = null;
          }
        }

        var wrapper = angular.element(elem[0].querySelector('.widget-wrapper'));

        elem.on('mouseover', onMouseOver);
        wrapper.on('mouseleave', onMouseLeave);
      }
    };
  });
})();
'use strict';

(function () {

  'use strict';

  angular.module('bonitasoft.designer.editor.whiteboard').service('componentId', componentIdService);

  function componentIdService() {

    var counters = {};
    return {
      getNextId: getNextId
    };

    function getNextId(type) {
      if (counters.hasOwnProperty(type)) {
        counters[type] += 1;
      } else {
        counters[type] = 0;
      }
      return type + '-' + counters[type];
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Controller of the componentMover directive
 */
angular.module('bonitasoft.designer.editor.whiteboard').controller('ComponentMoverDirectiveCtrl', ['$scope', 'arrays', function ($scope, arrays) {
  var componentRow = function () {
    return $scope.component.$$parentContainerRow.row;
  };

  function hasParent() {
    return $scope.component && $scope.component.hasOwnProperty('$$parentContainerRow');
  }

  $scope.moveLeftVisible = function () {
    return hasParent() && arrays.moveLeftPossible($scope.component, componentRow());
  };

  $scope.moveRightVisible = function () {
    return hasParent() && arrays.moveRightPossible($scope.component, componentRow());
  };

  $scope.moveLeft = function () {
    arrays.moveLeft($scope.component, componentRow());
  };

  $scope.moveRight = function () {
    arrays.moveRight($scope.component, componentRow());
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('componentMover', function () {

  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      component: '=',
      onDelete: '&'
    },
    templateUrl: 'js/editor/whiteboard/component-mover.html',
    controller: 'ComponentMoverDirectiveCtrl'
  };
});
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Softwœare Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Initialises a scope for component directive
 *
 * Create a new scope with a properties object derived from user entered propertyValues.
 * This allow to bind propertyValues to widget properties and keep a WYSWYG approach in editor while editing widget properties
 */
angular.module('bonitasoft.designer.editor.whiteboard').factory('componentScopeBuilder', ['dataFilter', function (dataFilter) {

  'use strict';

  var build = function (scope) {
    var componentScope = scope.$new(true);

    componentScope.environment = {};
    componentScope.environment.editor = {
      pageId: scope.editor && scope.editor.page && scope.editor.page.id
    };
    componentScope.environment.component = scope.component.$$widget;

    // Keep in sync propertyValues and injected properties in widget
    componentScope.properties = {};
    angular.forEach(scope.component.propertyValues, function (value, key) {
      scope.$watch('component.propertyValues["' + key + '"].value', function () {
        // we extract the corresponding property descriptor from widget (using filter)
        // in order to get its type  (using map)
        var propertyType = scope.component.$$widget.properties.filter(function (param) {
          return param.name === key;
        }).map(function (param) {
          return param.type;
        }).pop() || 'text';

        componentScope.properties[key] = dataFilter(scope.component.propertyValues[key], propertyType);
      });
    });

    // utility function, available in widget's template, to iterate over a range
    componentScope.range = function (size) {
      return new Array(size);
    };

    return componentScope;
  };

  return {
    build: build
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  componentUtilsService.$inject = ['resolutions'];
  angular.module('bonitasoft.designer.editor.whiteboard').service('componentUtils', componentUtilsService);

  function componentUtilsService(resolutions) {

    var service = {
      isEmpty: isEmpty,
      isChildOf: isChildOf,
      isMovable: isMovable,
      getVisibleComponents: getVisibleComponents,
      isContainer: isContainer,
      column: {
        width: columnWidth,
        className: columnClass,
        computeSizeItemInRow: distributeComponentSize
      },
      width: {
        get: getWidth,
        set: setWidth
      }
    };

    return service;

    /**
     * Return the rows of a tab element
     * @param  {Object} element a tab object
     * @return {array}          the rows inside the tab
     */
    function getTabRows(tab) {
      return tab.container && tab.container.rows || [];
    }

    /**
     * Concat item with a given array
     * use for flatten an array using reduce
     * @param  {Array} result array to  concat with
     * @param  {Object} item  item to concat
     * @return {Array}        array with result and item merged
     */
    function flattenReducer(result, item) {
      return result.concat(item);
    }

    /**
     * Check if a component is a container
     * @param  {Object}  component
     * @return {Boolean}           true if component is a container
     */
    function isContainer(component) {
      return (/container/i.test(component.type)
      );
    }

    /**
     * return an flat array of the visible components in a container
     * @param  {Object} container
     * @return {Array}            a flat array of child components
     */
    function getVisibleComponents(container) {
      // get the rows of the container
      var rows = container.rows || container.$$openedTab && container.$$openedTab.container.rows;

      return rows.reduce(flattenReducer, []).reduce(function (components, item) {
        components = components.concat(item);
        if (isContainer(item)) {
          return components.concat(getVisibleComponents(item));
        }
        return components;
      }, []);
    }

    /**
     * Check if an id belongs to a container
     * @param  {String}  id  the widget identifier to check
     * @param  {Object}  container the tabContainer|container|widget to check
     * @return {Boolean}
     */
    function isChildOf(id, container) {
      if (container.$$id === id) {
        return true;
      }
      // We normalize container and tabs container into an array of rows
      // For tabs, we merge rows of each tabs container
      var rows = container.rows || (container.tabs || []).map(getTabRows).reduce(flattenReducer, []);

      if (rows.length === 0) {
        return false;
      }
      // we reduce rows into an array of widget and iterate over it
      // using some to stop when we found the widget
      return rows.reduce(flattenReducer, []).some(function (widget) {
        return isChildOf(id, widget);
      });
    }

    /**
     * Check if we can move this container into another one
     * @param  {Object}  data Component to move
     * @param  {Object}  item Current component
     * @return {Boolean}
     */
    function isMovable(data, item) {
      var isTheChild = service.isChildOf(item.$$id, data);

      if (!isTheChild || data.type === 'component') {
        return !(item.$$id === data.$$id || item === data);
      }

      return false;
    }

    /**
     * Returns the CSS column width that must be used by a component in the editor to reflect its width and the currently
     * selected resolution.
     */
    function columnWidth(component) {
      var property,
          resolutionsArr = resolutions.all(),
          index = resolutionsArr.indexOf(resolutions.selected());

      for (var i = index; i >= 0; i--) {
        property = resolutionsArr[i].key;
        if (component.dimension[property]) {
          return component.dimension[property];
        }
      }

      return 12;
    }

    function columnClass(component) {
      return 'col-xs-' + columnWidth(component);
    }

    /**
     * distribute the column size for each component in a row
     * only if row is full
     * @param  {Object} row a container row containing components
     */
    function distributeComponentSize(row) {
      var index = resolutions.all().indexOf(resolutions.getDefaultResolution());
      var dimensions = resolutions.all().slice(index).map(function (item) {
        return item.key;
      });
      var colSize = Math.floor(12 / row.length);
      var lastColSize = 12 % row.length;

      dimensions.forEach(function (dimension) {
        var rowSize = row.slice(0, -1).reduce(function (colsize, component) {
          return colsize + component.dimension[dimension];
        }, 0);
        var lastComponent = row[row.length - 1];
        if (rowSize < 12) {
          // last component will fill remaining space
          lastComponent.dimension[dimension] = 12 - rowSize;
          return;
        } else {
          //we iterate over the component to resize  them
          row.forEach(function (component) {
            component.dimension[dimension] = colSize;
          });

          // We stop if all column size are equal and there rest is 0
          if (lastColSize === 0) {
            return;
          }

          // we distribute the rest of number-of-components / 12 to
          // columns starting from the end
          row.slice(-lastColSize).forEach(function (component) {
            component.dimension[dimension] += 1;
          });
        }
      });
    }

    function getWidth(component) {
      if (!component) {
        return 1;
      }

      return component.dimension[resolutions.selected().key];
    }

    function setWidth(component, width) {
      component.dimension[resolutions.selected().key] = width;
    }

    function isEmpty(container) {
      return !(container.rows || []).some(function (row) {
        return row.length > 0;
      });
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Component is an element directive allowing to display a widget component in the page editor.
 * It wraps the widget in a div containing also an overlay that will be displayed whenever the user
 * enter the div with his mouse, and hidden when he left.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('component', ['$compile', 'componentScopeBuilder', function ($compile, componentScopeBuilder) {

  'use strict';

  return {
    restrict: 'E',
    scope: {
      component: '=',
      editor: '=',
      componentIndex: '=',
      container: '=',
      row: '=',
      resizable: '='
    },
    link: function (scope, element) {
      var componentScope = componentScopeBuilder.build(scope);

      if (scope.component.$$widget) {
        // insert the html template in the div with class widget-content
        var div = angular.element(element.get(0).querySelector('.widget-content'));
        var widgetDomElement = $compile(scope.component.$$widget.template)(componentScope);
        div.append(widgetDomElement);
      }
    },
    templateUrl: 'js/editor/whiteboard/component.html'
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Controller of the container directive
 */
angular.module('bonitasoft.designer.editor.whiteboard').controller('ContainerDirectiveCtrl', ['$scope', '$rootScope', 'arrays', 'componentUtils', function ($scope, $rootScope, arrays, componentUtils) {

  'use strict';

  $scope.resizable = true;

  $scope.moveRowUp = function (row, event) {
    arrays.moveLeft(row, $scope.container.rows);
    event.stopPropagation();
  };

  $scope.moveRowDown = function (row, event) {
    arrays.moveRight(row, $scope.container.rows);
    event.stopPropagation();
  };

  $scope.moveRowUpVisible = function (row) {
    return arrays.moveLeftPossible(row, $scope.container.rows);
  };

  $scope.moveRowDownVisible = function (row) {
    return arrays.moveRightPossible(row, $scope.container.rows);
  };

  /**
   * When I drop an item already configured I want to remove it from its current row in order to attach it in another one.
   * @param  {Object} data Widget configuration
   * @param  {Array} row  current row
   * @return {void}
   */
  $scope.dropItem = function (data, row) {

    // You cannot drop a container inside itself, nor in its children
    if (!componentUtils.isMovable(data, $scope.component || $scope.container)) {
      return;
    }

    $scope.editor.selectRow($scope.container, row);
    $scope.editor.removeCurrentComponent(data, row);
  };

  $scope.removeRow = function (row) {
    $scope.editor.selectRow($scope.container, row);
    $scope.editor.removeCurrentRow();
  };

  $scope.dropAtEndOfTheRow = function (data, event, row) {

    row = row || [];
    // If you are trying to dragAndDrop a widget already defined
    if (data.$$widget) {

      if (!componentUtils.isMovable(data, $scope.component || $scope.container)) {
        return;
      }
      $scope.editor.selectRow($scope.container, row);
      $scope.editor.dropElement(data);
      return;
    }

    $scope.editor.addComponentToRow(data, $scope.container, row);
  };

  $scope.dropBeforeRow = function (data, event, rowIndex, rows) {
    var currentComponent = $scope.component || $scope.container;
    // Do not add a row if the container is not movable
    if (currentComponent.id || componentUtils.isMovable(data, currentComponent)) {
      rows.splice(rowIndex, 0, []);
    }
    $scope.dropAtEndOfTheRow(data, event, rows[rowIndex]);
  };

  $scope.dropAfterRow = function (data, event, rowIndex, rows) {
    var currentComponent = $scope.component || $scope.container;

    // Do not add a row if the container is not movable
    if (currentComponent.id || componentUtils.isMovable(data, currentComponent)) {
      rowIndex = rowIndex + 1;
      rows.splice(rowIndex, 0, []);
    }
    $scope.dropAtEndOfTheRow(data, event, rows[rowIndex]);
  };

  $scope.isEmpty = function (container) {
    return componentUtils.isEmpty(container);
  };

  $scope.isRepeated = function (container) {
    return container && container.propertyValues && container.propertyValues.repeatedCollection && container.propertyValues.repeatedCollection.value;
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Container is an element directive allowing to display a container in the page editor. The container is either
 * the top-lever one, or a sub-container contained in a parent container cell.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('container', ['RecursionHelper', function (RecursionHelper) {

  'use strict';

  return {
    restrict: 'E',
    scope: {
      id: '@',
      container: '=',
      editor: '=',
      component: '='
    },
    templateUrl: 'js/editor/whiteboard/container.html',
    controller: 'ContainerDirectiveCtrl',
    compile: function (element) {
      return RecursionHelper.compile(element, function () {});
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  dataFilter.$inject = ['properties'];
  angular.module('bonitasoft.designer.editor.whiteboard').filter('data', dataFilter);

  /**
   * Filter a data value to print data:{{data.value}} when data type is data
   * Just a reminder to the user in the editor that he has linked a field to a data
   */
  function dataFilter(properties) {

    return function (propertyValue, propertyType) {
      if (!propertyValue || !propertyValue.value) {
        return '';
      } else if (properties.isBound(propertyValue)) {
        var value = 'data:' + propertyValue.value;

        // In case of collection property type, we force the property to Array
        // so it plays well with editor render
        if (propertyType === 'collection') {
          return [value];
        }

        return value;
      } else {
        return propertyValue.value;
      }
    };
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('dropZone', ['componentUtils', function (componentUtils) {

  'use strict';

  return {
    template: '<div class="dropZone" bo-dropzone bo-drop-success="dropBefore($data)"></div>' + '<div class="dropZone dropZone--right" bo-dropzone bo-drop-success="dropAfter($data)"></div>',

    link: function (scope) {

      /**
       * Move an item inside a row
       * Test suite (we cannot test it right now)
       * [1,2,3]
       *
       * // Do not modify array
       * 1 dropBefore 1 =  1,2,3
       * 1 dropAfter 1 = 1,2,3
       * 1 dropBefore 2 = 1,2,3
       * 2 dropBefore 2 = 1,2,3
       * 2 dropAfter 2 = 1,2,3
       * 2 dropBefore 3 = 1,2,3
       * 2 dropAfter 1 = 1,2,3
       * 3 dropBefore 3 = 1,2,3
       * 3 dropAfter 3 = 1,2,3
       * 3 dropAfter 2 = 1,2,3
       *
       * // Modify order
       * 1 dropAfter 2 = 2,1,3
       * 1 dropBefore 3 = 2,1,3
       * 1 dropAfter 3 = 2,3,1
       * 2 dropBefore 1 = 2,1,3
       * 2 dropAfter 3 = 1,3,2
       * 3 dropBefore 1 = 3,1,2
       * 3 dropAfter 1 = 1,3,2
       * 3 dropBefore 2 = 1,3,2
        *
       * @param  {Object} data
       * @param  {Boolean} before is it a dropZone before ?
       * @return {void}
       */
      function movePosition(data, before) {

        var isWidgetNotAlreadyInTheRow = -1 === scope.row.indexOf(data),
            componentIndex = scope.componentIndex;

        // You cannot drop a container inside itself, nor in its children
        if (notAllowedToMoveContainer(data)) {
          return;
        }

        // Increment index for dropZone after for the first item only
        if (!componentIndex && !before) {
          componentIndex++;
        }

        if (isWidgetNotAlreadyInTheRow) {

          // Remove the old widget
          scope.editor.selectRow(scope.container, data.$$parentContainerRow.row);
          scope.editor.removeCurrentComponent(data);

          // Push the widget to another place
          scope.editor.selectRow(scope.container, scope.row);
          scope.editor.dropElement(data);

          if (scope.componentIndex && !before) {
            componentIndex++;
          }
        } else {

          var length = scope.row.length,
              indexItem = scope.row.indexOf(data);

          // Do nothing for current item
          if (indexItem === scope.componentIndex) {
            return;
          }

          // Drag and drop first item on its before dropZone
          if (before && indexItem === 0 && scope.componentIndex !== length - 1) {
            return;
          }

          // Take an item and drag it to the before next to it
          if (indexItem + 1 === scope.componentIndex && before) {
            return;
          }

          // Take an item and drag it to the after's element next to it
          if (indexItem - 1 === scope.componentIndex && !before) {
            return;
          }

          scope.editor.selectRow(scope.container, scope.row);

          // For the last item onDropBefore it should move left
          if (before && scope.componentIndex === length - 1) {
            componentIndex--;
          }
        }

        scope.editor.moveAtPosition(componentIndex, data);
      }

      /**
       * You cannot move a container into another one for:
       * - It's a container and it's the $scope.container too
       * - It's a container and it's the child of another one
       * @param  {Object} data Item to move
       * @return {Boolean}
       */
      function notAllowedToMoveContainer(data) {
        return !componentUtils.isMovable(data, scope.component);
      }

      /**
       * Drop an item to a custom position in a row
       * @param  {Object} data - Item to push in the row
       * @param  {Number} index - Position of the item
       * @return {void}
       */
      function dropAtPosition(data, index) {
        index = typeof index === 'undefined' ? scope.componentIndex : index;
        scope.editor.addComponentToRow(data, scope.container, scope.row, index);
      }

      scope.dropBefore = function (data) {

        // If you are trying to dragAndDrop a widget already defined
        if (data.$$widget) {
          return movePosition(data, true);
        }
        dropAtPosition(data);
      };

      scope.dropAfter = function (data) {
        if (data.$$widget) {
          return movePosition(data);
        }
        dropAtPosition(data, scope.componentIndex + 1);
      };
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('formContainer', function () {

  'use strict';

  return {
    restrict: 'E',
    scope: {
      id: '@',
      formContainer: '=',
      editor: '='
    },
    templateUrl: 'js/editor/whiteboard/form-container.html'
  };
});
'use strict';

(function () {

  'use strict';

  pageElementFactory.$inject = ['resolutions', 'properties'];
  angular.module('bonitasoft.designer.editor.whiteboard').service('pageElementFactory', pageElementFactory);

  function pageElementFactory(resolutions, properties) {

    return {
      createWidgetElement: createWidgetElement,
      createContainerElement: createContainerElement,
      createTabsContainerElement: createTabsContainerElement,
      createFormContainerElement: createFormContainerElement,
      createTabElement: createTabElement
    };

    function createElement(type, definition) {
      return {
        type: type,
        dimension: resolutions.getDefaultDimension(),
        propertyValues: properties.computeValues(definition.properties)
      };
    }

    /**
     * Create a new page element from a widget definition
     * @param  {Object} widget    Widget configuration
     * @param  {Array} parentRow  parent row container
     * @return {Object}           New component to add to the whiteboard
     */
    function createWidgetElement(widget) {
      var element = createElement(getType(widget), widget);
      return angular.extend(element, {
        id: widget.id
      });
    }

    function getType(component) {
      // for now, page widget elements have type 'component'
      return !component.type || component.type === 'widget' ? 'component' : component.type;
    }

    function createContainerElement(container) {
      var element = createElement('container', container);
      return angular.extend(element, {
        rows: [[]]
      });
    }

    function createTabsContainerElement(tabsContainer) {
      var element = createElement('tabsContainer', tabsContainer);
      return angular.extend(element, {
        tabs: ['Tab 1', 'Tab 2'].map(createTabElement)
      });
    }

    /**
     * Creates a new tab for the given tabs container, with the given title
     */
    function createTabElement(title) {
      return {
        title: title,
        container: {
          type: 'container',
          rows: [[]]
        }
      };
    }

    function createFormContainerElement(formContainer) {
      var element = createElement('formContainer', formContainer);
      return angular.extend(element, {
        container: {
          type: 'container',
          rows: [[]]
        }
      });
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Controller of the tabsContainer directive
 */
angular.module('bonitasoft.designer.editor.whiteboard').controller('TabsContainerDirectiveCtrl', ['$scope', 'arrays', 'whiteboardComponentWrapper', 'pageElementFactory', function ($scope, arrays, whiteboardComponentWrapper, pageElementFactory) {

  'use strict';

  $scope.openTab = function (tab, event) {
    $scope.tabsContainer.$$openedTab = tab;
    $scope.editor.selectComponent(tab, event);
  };

  $scope.isOpened = function (tab) {
    return $scope.tabsContainer.$$openedTab === tab;
  };

  $scope.tabsContainer.$$openedTab = $scope.tabsContainer.tabs[0];

  $scope.moveTabLeftVisible = function (tab) {
    return $scope.editor.isCurrentComponent(tab) && arrays.moveLeftPossible(tab, $scope.tabsContainer.tabs);
  };

  $scope.moveTabRightVisible = function (tab) {
    return $scope.editor.isCurrentComponent(tab) && arrays.moveRightPossible(tab, $scope.tabsContainer.tabs);
  };

  $scope.moveTabLeft = function (tab) {
    arrays.moveLeft(tab, $scope.tabsContainer.tabs);
  };

  $scope.moveTabRight = function (tab) {
    arrays.moveRight(tab, $scope.tabsContainer.tabs);
  };

  $scope.addTab = function (event) {
    var tabs = $scope.tabsContainer.tabs;
    var newTab = pageElementFactory.createTabElement('Tab ' + (tabs.length + 1));
    whiteboardComponentWrapper.wrapTab(newTab, $scope.tabsContainer);
    tabs.push(newTab);
    $scope.openTab(newTab, event);
  };

  $scope.isRemoveTabVisible = function (tab) {
    return $scope.editor.isCurrentComponent(tab) && $scope.tabsContainer.tabs.length > 1;
  };

  $scope.removeTab = function (tab, event) {
    var tabs = $scope.tabsContainer.tabs;
    var index = tabs.indexOf(tab);
    index = index >= tabs.length ? tabs.length - 1 : index;
    var previousTabIndex = index === 0 ? 0 : index - 1;
    tabs.splice(index, 1);
    $scope.openTab(tabs[previousTabIndex], event);
    tab.triggerRemoved();
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Element directive allowing to display a tabs container in the page editor.
 */
angular.module('bonitasoft.designer.editor.whiteboard').directive('tabsContainer', function () {

  'use strict';

  return {
    restrict: 'E',
    scope: {
      tabsContainer: '=',
      editor: '='
    },
    controller: 'TabsContainerDirectiveCtrl',
    templateUrl: 'js/editor/whiteboard/tabs-container.html'
  };
});
'use strict';

(function () {
  'use strict';

  angular.module('bonitasoft.designer.editor.whiteboard')

  // Disable widget internationalization whenever we are in the whiteboard
  .filter('uiTranslate', function () {
    return function (value) {
      return value;
    };
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  whiteboardComponentWrapper.$inject = ['whiteboardService', 'components', 'componentId'];
  angular.module('bonitasoft.designer.editor.whiteboard').service('whiteboardComponentWrapper', whiteboardComponentWrapper);

  function whiteboardComponentWrapper(whiteboardService, components, componentId) {

    var service = {
      wrapPage: wrapPage,
      wrapWidget: wrapWidget,
      wrapContainer: wrapContainer,
      wrapTabsContainer: wrapTabsContainer,
      wrapTab: wrapTab,
      wrapFormContainer: wrapFormContainer
    };
    return service;

    /**
     * @internal
     * Initializes a row coming from the server.
     */
    function wrapRow(container, row) {
      var parentContainerRow = {
        container: container,
        row: row
      };
      angular.forEach(row, function (component) {
        components.init(component, parentContainerRow);
      });
    }

    function wrapPage(page) {
      page.rows.forEach(wrapRow.bind(null, page));
    }

    /**
     * Initialize (mutate) a component to be used in whiteboard
     * component can come from a page definition or from createWidget
     * @param  {Object} widget    Widget configuration
     * @param  {Object} element      Widget instance
     * @param  {Object} parentRow parent row container
     */
    function wrapWidget(widget, element, parentRow) {
      // The $$ prefix makes sure the attribute is not serialized to JSON
      // $$id is only used by e2e tests
      // $$widget is a direct reference to the widget identified by widgetId. Only widgetId needs to be serialized
      // $$templateUrl is  used in container.html to display the component
      // $$parentContainerRow is a backward reference to the containing container and row, which is only useful in the
      // editor, but must not and can not be serialized (cyclic reference)
      var w = angular.extend(element, {
        $$id: componentId.getNextId('component'),
        $$widget: angular.copy(widget), // make sure to render all properties every time we select a component
        $$templateUrl: 'js/editor/whiteboard/component-template.html',
        $$propertiesTemplateUrl: 'js/editor/properties-panel/component-properties-template.html',
        $$parentContainerRow: parentRow,
        triggerRemoved: whiteboardService.onRemoveWidget.bind(null, element),
        triggerAdded: whiteboardService.onAddWidget.bind(null, element)
      });
      whiteboardService.triggerInitWidget(w);
      return w;
    }

    function wrapContainer(container, element, parentRow) {
      var component = angular.extend(element, {
        $$id: componentId.getNextId('container'),
        $$widget: angular.copy(container),
        $$templateUrl: 'js/editor/whiteboard/container-template.html',
        $$propertiesTemplateUrl: 'js/editor/properties-panel/container-properties-template.html',
        $$parentContainerRow: parentRow,
        triggerRemoved: whiteboardService.onRemoveContainer.bind(null, element),
        triggerAdded: angular.noop
      });

      component.rows.forEach(wrapRow.bind(null, element));
      return component;
    }

    function wrapTabsContainer(tabContainer, element, parentRow) {
      var component = angular.extend(element, {
        $$id: componentId.getNextId('tabsContainer'),
        $$widget: angular.copy(tabContainer),
        $$templateUrl: 'js/editor/whiteboard/tabs-container-template.html',
        $$propertiesTemplateUrl: 'js/editor/properties-panel/component-properties-template.html',
        $$parentContainerRow: parentRow,
        triggerRemoved: whiteboardService.onRemoveTabsContainer.bind(null, element),
        triggerAdded: angular.noop
      });

      element.tabs.forEach(function (tab) {
        service.wrapTab(tab, element);
        service.wrapContainer({}, tab.container);
      });

      return component;
    }

    function wrapTab(tab, tabsContainer) {
      angular.extend(tab, {
        $$parentTabsContainer: tabsContainer,
        $$widget: {
          name: 'Tab'
        },
        $$propertiesTemplateUrl: 'js/editor/properties-panel/tab-properties-template.html',
        triggerRemoved: whiteboardService.onRemoveTab.bind(null, tab),
        triggerAdded: angular.noop
      });
    }

    function wrapFormContainer(formContainer, element, parentRow) {
      var component = angular.extend(element, {
        $$id: componentId.getNextId('formContainer'),
        $$widget: angular.copy(formContainer),
        $$templateUrl: 'js/editor/whiteboard/form-container-template.html',
        $$propertiesTemplateUrl: 'js/editor/properties-panel/component-properties-template.html',
        $$parentContainerRow: parentRow,
        triggerRemoved: whiteboardService.onRemoveFormContainer.bind(null, element),
        triggerAdded: angular.noop
      });

      service.wrapContainer({}, element.container);
      return component;
    }
  }
})();
'use strict';

(function () {

  'use strict';

  whiteboardService.$inject = ['$timeout', 'arrays'];
  angular.module('bonitasoft.designer.editor.whiteboard').service('whiteboardService', whiteboardService);

  function whiteboardService($timeout, arrays) {
    var onWidgetRemoveFunctions = [];
    var onWidgetAddFunctions = [];

    var widgetIds = [];

    return {
      registerOnWidgetRemoveFunction: registerOnWidgetRemoveFunction,
      registerOnWidgetAddFunction: registerOnWidgetAddFunction,
      triggerRowRemoved: onRemoveRow,
      triggerInitWidget: onInitWidget,
      onAddWidget: onAddWidget,
      onRemoveWidget: onRemoveWidget,
      onRemoveContainer: onRemoveContainer,
      onRemoveTabsContainer: onRemoveTabsContainer,
      onRemoveTab: onRemoveTab,
      onRemoveFormContainer: onRemoveFormContainer,
      contains: contains,
      reset: reset
    };

    function reset() {
      widgetIds = [];
    }

    function contains(widget) {
      return widgetIds.indexOf(widget.id) > -1;
    }

    function registerOnWidgetRemoveFunction(fn) {
      onWidgetRemoveFunctions.push(fn);
    }

    function registerOnWidgetAddFunction(fn) {
      onWidgetAddFunctions.push(fn);
    }

    function onRemoveWidget(widget) {
      arrays.removeFirst(widget.id, widgetIds);
      executeFunctionsForComponent(onWidgetRemoveFunctions, widget);
    }

    function onAddWidget(widget) {
      executeFunctionsForComponent(onWidgetAddFunctions, widget);
    }

    function onInitWidget(widget) {
      widgetIds.push(widget.id);
    }

    /**
     * Execute each function of functions array for component.
     * Functions are executed in $timeout to be non blocking for UI
     */
    function executeFunctionsForComponent(functions, component) {
      functions.forEach(function (fn) {
        $timeout(fn.bind(null, component), 0);
      });
    }

    function onRemoveRow(row) {
      angular.forEach(row, function (component) {
        component.triggerRemoved();
      });
    }

    function onRemoveContainer(container) {
      container.rows.forEach(onRemoveRow);
    }

    function onRemoveTabsContainer(tabsContainer) {
      tabsContainer.tabs.forEach(onRemoveTab);
    }

    function onRemoveTab(tab) {
      onRemoveContainer(tab.container);
    }

    function onRemoveFormContainer(formContainer) {
      onRemoveContainer(formContainer.container);
    }
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Factories to create new artifacts.
 * TODO: should be moved to backend side
 */
(function () {
  'use strict';

  var ArtifactFactories = function () {
    function ArtifactFactories(gettext) {
      var _this = this;

      _classCallCheck(this, ArtifactFactories);

      this.factories = {
        page: {
          key: 'page',
          state: 'page',
          value: gettext('Application page'),
          filterName: gettext('Pages'),
          create: function (name) {
            return _this.createPage(name, 'page');
          }
        },
        form: {
          key: 'form',
          state: 'page',
          value: gettext('Process form'),
          tooltip: gettext('You should start process form design in the studio: from the appropriate pool or human task, create a contract and launch the UI Designer. It will auto-generate a dedicated form to edit.'),
          filterName: gettext('Forms'),
          create: function (name) {
            return _this.createPage(name, 'form');
          }
        },
        layout: {
          key: 'layout',
          state: 'page',
          value: gettext('Application layout'),
          filterName: gettext('Layouts'),
          create: function (name) {
            return _this.createPage(name, 'layout');
          }
        },
        widget: {
          key: 'widget',
          state: 'widget',
          value: gettext('Custom widget'),
          filterName: gettext('Custom widgets'),
          create: function (name) {
            return _this.createWidget(name);
          },
          hasUniqueName: true
        }
      };
    }

    _createClass(ArtifactFactories, [{
      key: 'getFactory',
      value: function getFactory(type) {
        return this.factories[type];
      }
    }, {
      key: 'getFactories',
      value: function getFactories() {
        return this.factories;
      }
    }, {
      key: 'createPage',
      value: function createPage(name, type) {
        return { type: type, name: name, rows: [[]] };
      }
    }, {
      key: 'createWidget',
      value: function createWidget(name) {
        var template = '<!-- The custom widget template is defined here\n   - You can use standard HTML tags and AngularJS built-in directives, scope and interpolation system\n   - Custom widget properties defined on the right can be used as variables in a templates with properties.newProperty\n   - Functions exposed in the controller can be used with ctrl.newFunction()\n   - You can use the \'environment\' property injected in the scope when inside the Editor whiteboard. It allows to define a mockup\n     of the Custom Widget to be displayed in the whiteboard only. By default the widget is represented by an auto-generated icon\n     and its name (See the <span> below).\n-->\n \n<span ng-if="environment"><identicon name="{{environment.component.id}}" size="30" background-color="[255,255,255, 0]" foreground-color="[51,51,51]"></identicon> {{environment.component.name}}</span>\n\n<div style="color: {{ properties.color }}; background-color: {{ backgroudColor }}" ng-click="ctrl.toggleBackgroundColor()">\n    Value is:  <i>{{ properties.value }}</i>. Click me to toggle background color\n</div>';
        var controller = '/**\n * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template\n * \n * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties\n * To use AngularJS standard services, you must declare them in the main function arguments.\n * \n * You can leave the controller empty if you do not need it.\n */\nfunction ($scope) {\n    var white = \'white\';\n    \n    // add a new variable in AngularJS scope. It\'ll be usable in the template directly with {{ backgroudColor }} \n    $scope.backgroudColor = white;\n    \n    // define a function to be used in template with ctrl.toggleBackgroundColor()\n    this.toggleBackgroundColor = function() {\n        if ($scope.backgroudColor === white) {\n           // use the custom widget property backgroudColor with $scope.properties.backgroudColor\n            $scope.backgroudColor = $scope.properties.background;\n        } else {\n            $scope.backgroudColor = white;\n        }\n    };\n}';

        return {
          name: name,
          type: 'widget',
          template: template,
          controller: controller,
          custom: true,
          properties: [{
            label: 'Value',
            name: 'value',
            type: 'text',
            defaultValue: 'This is the initial value'
          }, {
            label: 'Color',
            name: 'color',
            type: 'choice',
            defaultValue: 'RebeccaPurple',
            choiceValues: ['RebeccaPurple', 'Chartreuse', 'Tomato', 'DeepSkyBlue']
          }, {
            label: 'Background color on click',
            name: 'background',
            type: 'choice',
            defaultValue: 'Yellow',
            choiceValues: ['Yellow', 'LightGray']
          }]
        };
      }
    }]);

    return ArtifactFactories;
  }();

  angular.module('bonitasoft.designer.home').factory('artifactFactories', ['gettext', function (gettext) {
    return new ArtifactFactories(gettext);
  }]);
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  var ArtifactListController = function () {
    ArtifactListController.$inject = ['$uibModal', '$timeout', 'repositories', 'gettextCatalog'];
    function ArtifactListController($uibModal, $timeout, repositories, gettextCatalog) {
      _classCallCheck(this, ArtifactListController);

      this.$uibModal = $uibModal;
      this.$timeout = $timeout;
      this.getRepository = function (type) {
        return repositories.get(type);
      };
      this.gettextCatalog = gettextCatalog;
    }

    _createClass(ArtifactListController, [{
      key: 'translateKeys',
      value: function translateKeys(key) {
        return {
          'Delete': this.gettextCatalog.getString('Delete'),
          'Export': this.gettextCatalog.getString('Export'),
          'Rename': this.gettextCatalog.getString('Rename'),
          'Last Update:': this.gettextCatalog.getString('Last Update:')
        }[key] || key;
      }
    }, {
      key: 'deleteArtifact',
      value: function deleteArtifact(artifact) {
        var _this = this;

        var template = !angular.isDefined(artifact.usedBy) ? 'js/home/artifact-list/confirm-deletion-popup.html' : 'js/home/artifact-list/alert-deletion-notpossible-popup.html';
        var modalInstance = this.$uibModal.open({
          templateUrl: template,
          windowClass: 'modal-centered',
          controller: 'DeletionPopUpController',
          resolve: {
            artifact: function () {
              return artifact;
            },
            type: function () {
              return artifact.type;
            }
          }
        });

        modalInstance.result.then(function (id) {
          return _this.getRepository(artifact.type).delete(id);
        }).then(this.refreshAll);
      }

      /**
       * Toggles the name edition, to allow editing the name
       * or cancel the edition, and just display it
       *
       * @param {Object} artifact - the item to rename
       */

    }, {
      key: 'toggleItemEdition',
      value: function toggleItemEdition(index) {
        this.editionIndex = this.editionIndex ? undefined : index;
      }
    }, {
      key: 'isInEditionMode',
      value: function isInEditionMode(index) {
        return this.editionIndex === index;
      }

      /**
       * Renames an item with a new name, only if the name has changed.
       * If it doesn't, than no http call is made, we just toggle the edition
       *
       * @param {Object} artifact - the item to rename
       */

    }, {
      key: 'renameItem',
      value: function renameItem(artifact) {
        var _this2 = this;

        if (artifact.newName !== artifact.name) {
          this.getRepository(artifact.type).rename(artifact.id, artifact.newName).catch(function () {
            return artifact.newName = artifact.name;
          }).finally(function () {
            return artifact.name = artifact.newName;
          });
        }

        /**
         * We need to defer the action of hidding the page because of the click event
         * When you click it will trigger:
         *   1. onBlur -> hide input
         *   2. click -> toggle input -> display input
         * So with a defferd action, the input is hidden on blur even if we click on da edit button
         */
        this.$timeout(function () {
          return _this2.editionIndex = undefined;
        }, 100);
      }
    }]);

    return ArtifactListController;
  }();

  angular.module('bonitasoft.designer.home').directive('artifactList', function () {
    return {
      controller: ArtifactListController,
      controllerAs: 'artifactList',
      scope: true,
      bindToController: {
        all: '=*artifacts',
        refreshAll: '='
      },
      templateUrl: 'js/home/artifact-list/artifact-list.html'
    };
  });
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.home').controller('DeletionPopUpController', ['$scope', '$uibModalInstance', 'artifact', 'type', function ($scope, $uibModalInstance, artifact, type) {

  'use strict';

  /**
   * artifact is the element to be deleted. Could be a page or a widget. Should have an id
   */

  $scope.artifact = artifact;
  $scope.artifact.type = type;

  $scope.ok = function () {
    $uibModalInstance.close($scope.artifact.id);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

(function () {

  'use strict';

  angular.module('bonitasoft.designer.home').directive('favoriteButton', favoriteButton);

  function favoriteButton() {
    return {
      scope: {
        artifact: '=',
        repository: '=artifactRepository'
      },
      controller: FavoriteButtonCtrl,
      controllerAs: 'vm',
      bindToController: true,
      replace: true,
      templateUrl: 'js/home/artifact-list/favorite-button.html'
    };
  }

  function FavoriteButtonCtrl() {
    var vm = this;

    vm.toggleFavorite = function () {
      if (vm.artifact.favorite) {
        vm.repository.unmarkAsFavorite(vm.artifact.id);
      } else {
        vm.repository.markAsFavorite(vm.artifact.id);
      }
      vm.artifact.favorite = !vm.artifact.favorite;
    };

    vm.isFavorite = function () {
      return vm.artifact.favorite;
    };
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  var ArtifactStore = function () {
    ArtifactStore.$inject = ['$q', 'pageRepo', 'widgetRepo'];
    function ArtifactStore($q, pageRepo, widgetRepo) {
      _classCallCheck(this, ArtifactStore);

      this.$q = $q;
      this.repositories = [pageRepo, {
        all: function () {
          return widgetRepo.customs();
        }
      }];
    }

    _createClass(ArtifactStore, [{
      key: 'load',
      value: function load() {
        return this.$q.all(this.repositories.map(function (repository) {
          return repository.all();
        })).then(function (artifacts) {
          var _ref;

          return (_ref = []).concat.apply(_ref, _toConsumableArray(artifacts));
        });
      }
    }, {
      key: 'registerRepository',
      value: function registerRepository(repository) {
        this.repositories.push(repository);
      }
    }]);

    return ArtifactStore;
  }();

  angular.module('bonitasoft.designer.home').service('artifactStore', ArtifactStore);
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  var CreateArtifactCtrl = function () {
    CreateArtifactCtrl.$inject = ['$scope', 'repositories', '$state', 'artifactFactories'];
    function CreateArtifactCtrl($scope, repositories, $state, artifactFactories) {
      _classCallCheck(this, CreateArtifactCtrl);

      this.repositories = repositories;
      this.$state = $state;
      this.$scope = $scope;
      this.types = artifactFactories.getFactories();
      this.type = this.types.page;
    }

    _createClass(CreateArtifactCtrl, [{
      key: 'close',
      value: function close() {
        this.isOpen = false;
      }
    }, {
      key: 'isNameUniqueIfRelevantForType',
      value: function isNameUniqueIfRelevantForType(name, type) {
        return type.hasUniqueName && (this.artifacts || []).filter(function (item) {
          return item.type === type.key;
        }).some(function (item) {
          return item.name === name;
        });
      }
    }, {
      key: 'create',
      value: function create(type, name) {
        var _this = this;

        this.repositories.get(type.key).create(type.create(name)).then(function (data) {
          return _this.$state.go('designer.' + type.key, {
            id: data.id
          });
        });
      }
    }]);

    return CreateArtifactCtrl;
  }();

  angular.module('bonitasoft.designer.home').directive('uidCreateArtifact', function () {
    return {
      scope: true,
      require: '^HomeCtrl',
      templateUrl: 'js/home/create/home-create.html',
      controller: CreateArtifactCtrl,
      bindToController: {
        artifacts: '='
      },
      controllerAs: 'createCtrl'
    };
  });
})();
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * The home page controller, listing the existing pages, widgets
 */
(function () {
  'use strict';

  var HomeCtrl = function HomeCtrl($scope, $uibModal, artifactStore, artifactFactories, $filter, $state) {
    _classCallCheck(this, HomeCtrl);

    $scope.artifacts = {};

    /**
     * When something is deleted, we need to refresh every collection,
     * because we can maybe delete a component we couldn't previously
     * example :
     *   custom widget <hello> was used in page <person>, so we could not delete it.
     *   if <hello> is deleted, now we can delete <person>
     * @returns {Promise}
     */
    $scope.refreshAll = function () {
      return artifactStore.load().then(function (artifacts) {
        return $scope.artifacts.all = artifacts;
      }).then(function (artifacts) {
        return artifacts.map(function (artifact) {
          artifact.editionUrl = $state.href('designer.' + artifact.type, { id: artifact.id });
          return artifact;
        });
      }).then(filterArtifacts);
    };

    $scope.openHelp = function () {
      return $uibModal.open({ templateUrl: 'js/home/help-popup.html', size: 'lg' });
    };

    var factories = artifactFactories.getFactories();
    $scope.types = Object.keys(factories).map(function (key) {
      return {
        id: key,
        name: factories[key].filterName
      };
    });

    $scope.search = '';
    $scope.$watch('search', function () {
      return filterArtifacts($scope.artifacts.all);
    });
    $scope.refreshAll();

    function filterArtifacts(artifacts) {
      $scope.types.forEach(function (type) {
        return $scope.artifacts[type.id] = $filter('filter')(artifacts || [], {
          name: $scope.search,
          type: type.id
        });
      });
    }
  };
  HomeCtrl.$inject = ['$scope', '$uibModal', 'artifactStore', 'artifactFactories', '$filter', '$state'];

  angular.module('bonitasoft.designer.home').controller('HomeCtrl', HomeCtrl);
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  var ImportArtifactCtrl = function () {
    ImportArtifactCtrl.$inject = ['$uibModal', '$scope', 'importArtifactService'];
    function ImportArtifactCtrl($uibModal, $scope, importArtifactService) {
      _classCallCheck(this, ImportArtifactCtrl);

      this.$uibModal = $uibModal;
      this.$scope = $scope;
      this.importArtifactService = importArtifactService;

      this.type = 'artifact';
      this.url = 'import/artifact';
      this.filename = '';
      this.popupTitle = 'Import a UI Designer artifact';
    }

    _createClass(ImportArtifactCtrl, [{
      key: 'close',
      value: function close() {
        this.isOpen = false;
        this.filename = '';
      }
    }, {
      key: 'onComplete',
      value: function onComplete(response) {
        var _this = this;

        var importPromise = this.importArtifactService.manageImportResponse(this.type, true, response);

        importPromise.finally(function () {
          return _this.close();
        });
        importPromise.then(function (importReport) {
          return !!importReport && _this.manageImportReport(importReport);
        }).then(this.$scope.refreshAll);
      }
    }, {
      key: 'manageImportReport',
      value: function manageImportReport(importReport) {
        return this.$uibModal.open({
          templateUrl: 'js/home/import/import-report-popup.html',
          controller: 'ImportReportPopupController',
          controllerAs: 'importReport',
          resolve: {
            importReport: function () {
              return importReport;
            }
          }
        }).result;
      }
    }]);

    return ImportArtifactCtrl;
  }();

  angular.module('bonitasoft.designer.home').directive('uidImportArtifact', function () {
    return {
      scope: true,
      templateUrl: 'js/home/import/home-import.html',
      controller: ImportArtifactCtrl,
      controllerAs: 'import'
    };
  });
})();
'use strict';

(function () {

  'use strict';

  importErrorMessagesService.$inject = ['gettextCatalog', 'gettext'];
  angular.module('bonitasoft.designer.home.import').service('importErrorMessagesService', importErrorMessagesService);

  function importErrorMessagesService(gettextCatalog, gettext) {

    var ERRORS = {
      'SERVER_ERROR': {
        cause: gettext('A server error occurred.'),
        additionalInfos: gettext('Check the log files')
      },
      'PAGE_NOT_FOUND': {
        cause: gettext('Incorrect zip structure.'),
        additionalInfos: gettext('Check that the zip archive contains the file {{ infos.modelfile }}.')
      },
      'MODEL_NOT_FOUND': {
        cause: gettext('Incorrect zip structure.'),
        additionalInfos: gettext('Check that the zip archive contains one of following files {{ infos.modelfiles }}.')
      },
      'UNEXPECTED_ZIP_STRUCTURE': {
        cause: gettext('Incorrect zip structure.'),
        additionalInfos: gettext('Check that the zip file structure matches a standard UI Designer export.')
      },
      'CANNOT_OPEN_ZIP': {
        cause: gettext('Corrupted zip archive.')
      },
      'JSON_STRUCTURE': {
        cause: gettext('Invalid {{ infos.modelfile }} json file structure'),
        additionalInfos: gettext('Check that the json file structure matches a standard UI Designer export.')
      }
    };

    return {
      getErrorContext: getErrorContext
    };

    function getErrorContext(error, artifactType) {
      var errorInfos = ERRORS[error.type] || { cause: error.message };
      var errorContext = { consequence: getConsequence(artifactType) };
      Object.keys(errorInfos).forEach(function (name) {
        return errorContext[name] = gettextCatalog.getString(errorInfos[name], error);
      });
      return errorContext;
    }

    /**
     * Need multiple keys to manage gender translations
     */
    function getConsequence(artifactType) {
      artifactType = artifactType || gettext('artifact');
      if (artifactType === 'page') {
        return gettext('The page has not been imported.');
      }

      if (artifactType === 'widget') {
        return gettext('The widget has not been imported.');
      }

      return gettextCatalog.getString('The {{ artifactType }} has not been imported.', { artifactType: gettextCatalog.getString(artifactType) });
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {
  'use strict';

  angular.module('bonitasoft.designer.home.import').directive('importReportItemList', importReportItemList);

  function importReportItemList() {
    return {
      templateUrl: 'js/home/import/import-report-item-list.html',
      scope: {
        pageName: '=',
        type: '=',
        displayPage: '=',
        dependencies: '='
      },
      controller: ['$scope', function ($scope) {
        $scope.joinOnNames = function (artifacts) {
          return artifacts && artifacts.map(function (item) {
            return item.name;
          }).join(', ');
        };
      }]
    };
  }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  var ImportReportPopupController = function () {
    ImportReportPopupController.$inject = ['$uibModalInstance', 'importReport', 'importArtifactService'];
    function ImportReportPopupController($uibModalInstance, importReport, importArtifactService) {
      _classCallCheck(this, ImportReportPopupController);

      this.$uibModalInstance = $uibModalInstance;
      this.importArtifactService = importArtifactService;
      this.report = importReport;
    }

    _createClass(ImportReportPopupController, [{
      key: 'joinOnNames',
      value: function joinOnNames(artifacts) {
        return artifacts.map(function (item) {
          return item.name;
        }).join(', ');
      }
    }, {
      key: 'forceImport',
      value: function forceImport() {
        this.importArtifactService.forceImport(this.report).then(this.$uibModalInstance.close, this.$uibModalInstance.dismiss);
      }
    }, {
      key: 'hasDependencies',
      value: function hasDependencies() {
        return this.report.dependencies && this.report.dependencies.added || this.report.dependencies.overridden;
      }
    }, {
      key: 'type',
      get: function () {
        return this.report.element.type || 'widget'; // to be removed when widget has type
      }
    }, {
      key: 'name',
      get: function () {
        return this.report.element.name;
      }
    }]);

    return ImportReportPopupController;
  }();

  angular.module('bonitasoft.designer.home.import').controller('ImportReportPopupController', ImportReportPopupController);
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  ImportSuccessMessageController.$inject = ['$scope', 'gettextCatalog'];
  angular.module('bonitasoft.designer.home.import').controller('ImportSuccessMessageController', ImportSuccessMessageController);

  function ImportSuccessMessageController($scope, gettextCatalog) {

    var vm = this;

    vm.joinOnNames = joinOnNames;
    vm.getState = getState;

    function joinOnNames(artifacts) {
      return artifacts.map(function (item) {
        return item.name;
      }).join(', ');
    }

    function getState() {
      if ($scope.overridden) {
        return gettextCatalog.getString('overridden');
      }
      return gettextCatalog.getString('added');
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  importArtifactService.$inject = ['alerts', 'gettextCatalog', '$q', 'importRepo', 'importErrorMessagesService'];
  angular.module('bonitasoft.designer.home.import').service('importArtifactService', importArtifactService);

  function importArtifactService(alerts, gettextCatalog, $q, importRepo, importErrorMessagesService) {

    var service = {
      forceImport: forceImport,
      isErrorResponse: isErrorResponse,
      manageImportResponse: manageImportResponse,
      doesImportOverrideExistingContent: doesImportOverrideExistingContent
    };
    return service;

    function isErrorResponse(response) {
      return response && response.type && response.message;
    }

    function manageImportResponse(type, checkForOverrides, response) {
      var deferred = $q.defer();
      //Even if a problem occurs in the backend a response is sent with a message
      //If the message has a type and a message this is an error
      if (service.isErrorResponse(response)) {

        alerts.addError({
          title: gettextCatalog.getString('Import error'),
          contentUrl: 'js/home/import/import-error-message.html',
          context: importErrorMessagesService.getErrorContext(response, type)
        });
        deferred.reject();
      } else {
        var importReportContext = angular.extend(response, {
          type: response.element.type || 'widget' // TODO remove this when widget has type
        });
        if (!checkForOverrides || service.doesImportOverrideExistingContent(response)) {
          //
          alerts.addSuccess({
            title: gettextCatalog.getString('Successful import'),
            contentUrl: 'js/home/import/import-success-message.html',
            context: importReportContext
          }, 15000);
          deferred.resolve();
        } else {
          deferred.resolve(importReportContext);
        }
      }
      return deferred.promise;
    }

    function doesImportOverrideExistingContent(report) {
      return !(report.overridden || report.dependencies && report.dependencies.overridden);
    }

    function forceImport(report) {
      var type = report.element.type || 'widget'; // TODO inline this when widget has type
      return importRepo.forceImport(report.uuid).then(service.manageImportResponse.bind(service, type, false));
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('bonitasoft.designer.preview').directive('openPreview', ['$window', '$state', 'resolutions', function ($window, $state, resolutions) {

  'use strict';

  /**
   * Open a popup with the preview of your page
   * You can set a custom width|height
   *    - popup-width="1024" // default
   *    - popup-height="768" // default
   */

  return {
    link: function (scope, el, attr) {

      // With IE10 we need to set a size and resizable
      var params = 'width=pWidth,height=pHeight,resizable=1,scrollbars=1';
      var paramsPopup = params.replace(/pWidth/, attr.popupWidth || 1024).replace(/pHeight/, attr.popupHeight || 768);

      var stateName = 'designer.' + (attr.openPreview || 'page') + '.preview';

      function clickHandler() {
        $window.open($state.href(stateName, {
          resolution: resolutions.selected().key
        }), '_blank', paramsPopup);
      }

      el.on('click', clickHandler);

      // remove click handler on destroy
      scope.$on('$destroy', function () {
        el.off('click', clickHandler);
      });
    }
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  PreviewCtrl.$inject = ['$scope', '$sce', 'iframeParameters', 'resolutions', 'webSocket', 'clock', 'artifactRepo'];
  angular.module('bonitasoft.designer.preview').controller('PreviewCtrl', PreviewCtrl);

  /**
   * The preview controller. It handles the loading of the page model, the resolution changes and provides
   * common functions to the directives used inside the page.
   */
  function PreviewCtrl($scope, $sce, iframeParameters, resolutions, webSocket, clock, artifactRepo) {

    $scope.iframe = {};
    $scope.refreshIframe = refreshIframe;
    $scope.buildIframeSrc = buildIframeSrc;
    $scope.iframeWidth = iframeWidth;

    artifactRepo.load(iframeParameters.id).then(function (response) {
      $scope.pageName = response.data.name;
    });

    refreshIframe();
    webSocket.listen('/previewableUpdates', function (id) {
      if (id === iframeParameters.id) {
        refreshIframe();
      }
    });

    /**
     * The iframe source has to be a trusted url for Angular, hence the use of the $sce service.
     * We have to prefix the url with `index.html` for Firefox, or it will not display the iframe.
     */
    function buildIframeSrc() {
      return $sce.trustAsResourceUrl(iframeParameters.url + '/' + iframeParameters.id + '/?time=' + clock.now());
    }

    function iframeWidth() {
      return resolutions.selected().width;
    }

    function refreshIframe() {
      $scope.iframe.src = buildIframeSrc();
    }
  }
})();
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/* global SockJS */
/* global Stomp */
angular.module('bonitasoft.designer.preview').factory('webSocket', ['$rootScope', '$log', function ($rootScope, $log) {

  'use strict';

  /**
   * Connects to a topic and calls the callback every time a message is received.
   * @param topic - the topic to connect to
   * @param callback - the callback that will be call when a message is received, with the message body
   */

  var listen = function (topic, callback) {
    var socket = new SockJS('websockets');
    var client = Stomp.over(socket);

    var subscribeCallback = function (message) {
      $rootScope.$apply(function () {
        callback(message.body);
      });
    };

    var subscribe = function () {
      client.subscribe(topic, subscribeCallback);
    };

    var error = function () {
      $log.error('error connecting to notifications web socket for topic ' + topic);
    };

    client.connect('', subscribe, error);
  };

  return {
    listen: listen
  };
}]);
'use strict';

/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function () {

  'use strict';

  angular.module('app.route', ['tmh.dynamicLocale']).config(['tmhDynamicLocaleProvider', function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('locales/angular-locale_{{locale}}.js');
  }]).constant('appStates', {
    'designer': {
      abstract: true,
      url: '/:lang',
      template: '<ui-view></ui-view>',
      resolve: { /* @ngInject */
        language: ['$stateParams', 'gettextCatalog', 'tmhDynamicLocale', function ($stateParams, gettextCatalog, tmhDynamicLocale) {
          var languages = {
            'en': { lang: 'en' },
            'fr': { lang: 'fr', file: 'lang-template-fr-FR.json' },
            'es': { lang: 'es-ES', file: 'lang-template-es-ES.json' },
            'es-ES': { lang: 'es-ES', file: 'lang-template-es-ES.json' },
            'ja': { lang: 'ja', file: 'lang-template-ja-JP.json' }
          };
          // narrow down which language is used or use en
          var language = languages[Object.keys(languages).reduce(function (previous, current) {
            return $stateParams.lang === current ? current : previous;
          })];
          gettextCatalog.setCurrentLanguage(language.lang);
          if (language !== languages.en) {
            tmhDynamicLocale.set(language.lang);
            return gettextCatalog.loadRemote('i18n/' + language.file);
          }
        }]
      }
    },
    'designer.home': {
      url: '/home',
      views: {
        '@designer': {
          controller: 'HomeCtrl',
          templateUrl: 'js/home/home.html'
        }
      }
    },
    'designer.layout': {
      url: '/layouts/:id',
      /* @ngInject */
      controller: ['$state', '$stateParams', function ($state, $stateParams) {
        return $state.go('designer.page', $stateParams, { location: false });
      }]
    },
    'designer.form': {
      url: '/forms/:id',
      /* @ngInject */
      controller: ['$state', '$stateParams', function ($state, $stateParams) {
        return $state.go('designer.page', $stateParams, { location: false });
      }]
    },
    'designer.page': {
      url: '/pages/:id',
      resolve: {
        /* @ngInject */
        artifact: ['editorService', 'pageRepo', '$stateParams', function (editorService, pageRepo, $stateParams) {
          return editorService.initialize(pageRepo, $stateParams.id);
        }],
        /* @ngInject */
        artifactRepo: ['pageRepo', function (pageRepo) {
          return pageRepo;
        }],
        /* @ngInject */
        mode: function () {
          return 'page';
        }
      },
      views: {
        // main view (ui-view in index.html)
        '@designer': {
          controller: 'EditorCtrl',
          templateUrl: 'js/editor/editor.html'
        },
        //  sub view named in editor.html
        'data@designer.page': {
          controller: 'DataCtrl',
          templateUrl: 'js/editor/data-panel/data.html'
        },
        'header@designer.page': {
          controller: 'EditorHeaderCtrl',
          controllerAs: 'vm',
          templateUrl: 'js/editor/header/header.html'
        }
      }
    },
    'designer.page.asset': {
      views: {
        //  sub view named in editor.html
        'data@designer.page': {
          controller: 'AssetCtrl',
          controllerAs: 'vm',
          templateUrl: 'js/assets/page-assets.html'
        }
      }
    },
    'designer.page.preview': {
      url: '/preview',
      views: {
        '@designer': {
          controller: 'PreviewCtrl',
          templateUrl: 'js/preview/preview.html'
        }
      },
      resolve: {
        /* @ngInject */
        iframeParameters: ['$stateParams', function ($stateParams) {
          return {
            url: 'preview/page',
            id: $stateParams.id
          };
        }],
        // injects the correct repo
        /* @ngInject */
        artifactRepo: ['pageRepo', function (pageRepo) {
          return pageRepo;
        }]
      }
    },
    'designer.widget': {
      url: '/widget/:id',
      resolve: {
        /* @ngInject */
        artifact: ['widgetRepo', '$stateParams', function (widgetRepo, $stateParams) {
          return widgetRepo.load($stateParams.id).then(function (response) {
            return response.data;
          });
        }],
        /* @ngInject */
        artifactRepo: ['widgetRepo', function (widgetRepo) {
          return widgetRepo;
        }],
        /* @ngInject */
        mode: function () {
          return 'widget';
        }
      },
      views: {
        // main view (ui-view in index.html)
        '@designer': {
          controller: 'CustomWidgetEditorCtrl',
          templateUrl: 'js/custom-widget/custom-widget-editor.html'
        },
        //  sub view named in editor.html
        'asset@designer.widget': {
          controller: 'AssetCtrl',
          controllerAs: 'vm',
          templateUrl: 'js/assets/widget-assets.html'
        }
      }
    }
  });
})();