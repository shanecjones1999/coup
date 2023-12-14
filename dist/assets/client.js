'use strict';



;define("client/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("client/adapters/application", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = ApplicationAdapter;
});
;define("client/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "client/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("client/application/route", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationRoute = _exports.default = (_class = class ApplicationRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
    }
    async beforeModel() {
      await this.session.setup();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/authenticators/custom-token", ["exports", "ember-simple-auth/authenticators/base", "client/config/environment"], function (_exports, _base, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/authenticators/base",0,"client/config/environment"eaimeta@70e063a35619d71f
  class CustomTokenAuthenticator extends _base.default {
    async restore(data) {
      if (data && data.token) {
        return data;
      }
      return {
        token: null
      };
    }
    async authenticate(user) {
      try {
        const response = await fetch(`${_environment.default.API_HOST}/api/signin`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        return {
          token: data.token
        };
      } catch (error) {
        return error;
      }
    }
  }
  _exports.default = CustomTokenAuthenticator;
});
;define("client/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("client/components/-dynamic-element-alt", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElementAlt extends _component.default {}
  _exports.default = DynamicElementAlt;
});
;define("client/components/-dynamic-element", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElement extends _component.default {}
  _exports.default = DynamicElement;
});
;define("client/components/actions-selector/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  class ActionsSelector extends _component.default {}
  _exports.default = ActionsSelector;
});
;define("client/components/actions-selector/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="actions-selector">
      {{#each @actions as |action|}}
          <BsButton disabled={{gt action.cost @coins}} {{on 'click' (fn @initiateAction action)}}>{{action.name}}</BsButton>
      {{/each}}
  </div>
  */
  {
    "id": "LQLMcmEo",
    "block": "[[[10,0],[14,0,\"actions-selector\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"        \"],[8,[39,2],[[16,\"disabled\",[28,[37,3],[[30,2,[\"cost\"]],[30,3]],null]],[4,[38,4],[\"click\",[28,[37,5],[[30,4],[30,2]],null]],null]],null,[[\"default\"],[[[[1,[30,2,[\"name\"]]]],[]]]]],[1,\"\\n\"]],[2]],null],[13]],[\"@actions\",\"action\",\"@coins\",\"@initiateAction\"],false,[\"each\",\"-track-array\",\"bs-button\",\"gt\",\"on\",\"fn\"]]",
    "moduleName": "client/components/actions-selector/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/block-state/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let BlockState = _exports.default = (_dec = (0, _object.computed)('args.{blockState,playerId}'), (_class = class BlockState extends _component.default {
    get isTarget() {
      return this.args.blockState.targetId == this.args.playerId || this.args.blockState.actionId == 2 && this.args.playerId != this.args.blockState.sourceId;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "isTarget", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "isTarget"), _class.prototype)), _class));
});
;define("client/components/block-state/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="block-state">
      {{#if this.isTarget}}
          {{#if (eq @blockState.actionId 2)}}
              <p>Player is attemping to foreign aid.</p>
          {{else if (eq @blockState.actionId 5)}}
              <p>Player is attempting to assassinate you.</p>
          {{else if (eq @blockState.actionId 7)}}
              <p>Player is attempting to steal from you.</p>
          {{else}}
              <p>Unknown action id: {{@blockState.actionId}}</p>
          {{/if}}
          {{#each @blockState.blockCards as |blockCard|}}
                  <BsButton {{on 'click' (fn @blockAction blockCard.typeId)}}>Block as {{blockCard.name}}</BsButton>
          {{/each}}
              <BsButton {{on 'click' @pass}}>Pass</BsButton>
      {{else}}
          Waiting for other players.
      {{/if}}
  </div>
  */
  {
    "id": "8f5YIXTI",
    "block": "[[[10,0],[14,0,\"block-state\"],[12],[1,\"\\n\"],[41,[30,0,[\"isTarget\"]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],2],null],[[[1,\"            \"],[10,2],[12],[1,\"Player is attemping to foreign aid.\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],5],null],[[[1,\"            \"],[10,2],[12],[1,\"Player is attempting to assassinate you.\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],7],null],[[[1,\"            \"],[10,2],[12],[1,\"Player is attempting to steal from you.\"],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,2],[12],[1,\"Unknown action id: \"],[1,[30,1,[\"actionId\"]]],[13],[1,\"\\n        \"]],[]]]],[]]]],[]]],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"blockCards\"]]],null]],null],null,[[[1,\"                \"],[8,[39,4],[[4,[38,5],[\"click\",[28,[37,6],[[30,3],[30,2,[\"typeId\"]]],null]],null]],null,[[\"default\"],[[[[1,\"Block as \"],[1,[30,2,[\"name\"]]]],[]]]]],[1,\"\\n\"]],[2]],null],[1,\"            \"],[8,[39,4],[[4,[38,5],[\"click\",[30,4]],null]],null,[[\"default\"],[[[[1,\"Pass\"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"        Waiting for other players.\\n\"]],[]]],[13]],[\"@blockState\",\"blockCard\",\"@blockAction\",\"@pass\"],false,[\"if\",\"eq\",\"each\",\"-track-array\",\"bs-button\",\"on\",\"fn\"]]",
    "moduleName": "client/components/block-state/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion"eaimeta@70e063a35619d71f
});
;define("client/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item"eaimeta@70e063a35619d71f
});
;define("client/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item/body"eaimeta@70e063a35619d71f
});
;define("client/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item/title"eaimeta@70e063a35619d71f
});
;define("client/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-alert"eaimeta@70e063a35619d71f
});
;define("client/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button-group"eaimeta@70e063a35619d71f
});
;define("client/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button-group/button"eaimeta@70e063a35619d71f
});
;define("client/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button"eaimeta@70e063a35619d71f
});
;define("client/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-carousel"eaimeta@70e063a35619d71f
});
;define("client/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-carousel/slide"eaimeta@70e063a35619d71f
});
;define("client/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-collapse"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/button"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu/divider"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu/item"eaimeta@70e063a35619d71f
});
;define("client/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/toggle"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/checkbox"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/input"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/radio"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control/switch", ["exports", "ember-bootstrap/components/bs-form/element/control/switch"], function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _switch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/switch"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/textarea"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/errors"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/feedback-icon"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/help-text"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/label"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/horizontal"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/inline"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/inline/checkbox"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/vertical"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"eaimeta@70e063a35619d71f
});
;define("client/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/legend"eaimeta@70e063a35619d71f
});
;define("client/components/bs-link-to", ["exports", "ember-bootstrap/components/bs-link-to"], function (_exports, _bsLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsLinkTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-link-to"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal-simple"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/body"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/dialog"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/footer"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header/close"eaimeta@70e063a35619d71f
});
;define("client/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header/title"eaimeta@70e063a35619d71f
});
;define("client/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-nav"eaimeta@70e063a35619d71f
});
;define("client/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-nav/item"eaimeta@70e063a35619d71f
});
;define("client/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar"eaimeta@70e063a35619d71f
});
;define("client/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/content"eaimeta@70e063a35619d71f
});
;define("client/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/link-to"eaimeta@70e063a35619d71f
});
;define("client/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/nav"eaimeta@70e063a35619d71f
});
;define("client/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/toggle"eaimeta@70e063a35619d71f
});
;define("client/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-popover"eaimeta@70e063a35619d71f
});
;define("client/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-popover/element"eaimeta@70e063a35619d71f
});
;define("client/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-progress"eaimeta@70e063a35619d71f
});
;define("client/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-progress/bar"eaimeta@70e063a35619d71f
});
;define("client/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tab"eaimeta@70e063a35619d71f
});
;define("client/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tab/pane"eaimeta@70e063a35619d71f
});
;define("client/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tooltip"eaimeta@70e063a35619d71f
});
;define("client/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tooltip/element"eaimeta@70e063a35619d71f
});
;define("client/components/card/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let Card = _exports.default = (_dec = (0, _object.computed)('args.card.name'), (_class = class Card extends _component.default {
    get cardClass() {
      return this.args.card.name.toLowerCase();
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "cardClass", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "cardClass"), _class.prototype)), _class));
});
;define("client/components/card/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <span class="card-wrapper {{this.cardClass}} {{if (and @card.revealed @self) 'revealed'}}">
      <span class="card-name">{{@card.name}}
      {{#if (and @card.revealed @self)}}
          <span class="revealed-text">(Revealed)</span>
      {{/if}}
      </span>
  </span>
  */
  {
    "id": "PMx+0kuv",
    "block": "[[[10,1],[15,0,[29,[\"card-wrapper \",[30,0,[\"cardClass\"]],\" \",[52,[28,[37,1],[[30,1,[\"revealed\"]],[30,2]],null],\"revealed\"]]]],[12],[1,\"\\n    \"],[10,1],[14,0,\"card-name\"],[12],[1,[30,1,[\"name\"]]],[1,\"\\n\"],[41,[28,[37,1],[[30,1,[\"revealed\"]],[30,2]],null],[[[1,\"        \"],[10,1],[14,0,\"revealed-text\"],[12],[1,\"(Revealed)\"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"@card\",\"@self\"],false,[\"if\",\"and\"]]",
    "moduleName": "client/components/card/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/challenge-state/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let ChallengeState = _exports.default = (_dec = (0, _object.computed)('args.{challengeState,playerId}'), (_class = class ChallengeState extends _component.default {
    get isSource() {
      return this.args.challengeState.sourceId == this.args.playerId;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "isSource", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "isSource"), _class.prototype)), _class));
});
;define("client/components/challenge-state/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="challenge-state">
      {{#if this.isSource}}
          <p>Waiting for other players.</p>
      {{else}}
          {{#if (eq @challengeState.actionId 2)}}
              <p>{{@challengeState.sourceName}} is attemping to block foreign aid {{@challengeState.targetName}}.</p>
          {{else if (eq @challengeState.actionId 4)}}
              <p>{{@challengeState.sourceName}} is attemping to tax.</p>
          {{else if (eq @challengeState.actionId 5)}}
              <p>{{@challengeState.sourceName}} is attemping to assassinate {{@challengeState.targetName}}.</p>
          {{else if (eq @challengeState.actionId 6)}}
              <p>{{@challengeState.sourceName}} is attemping to exchange.</p>
          {{else if (eq @challengeState.actionId 7)}}
              <p>{{@challengeState.sourceName}} is attemping to steal from {{@challengeState.targetName}}.</p>
          {{/if}}
          <BsButton {{on 'click' @challenge}}>Challenge</BsButton>
          <BsButton {{on 'click' @pass}}>Pass</BsButton>
      {{/if}}
      <p>Card claimed: {{@challengeState.cardClaimed.name}}</p>
  </div>
  */
  {
    "id": "CzIL4pQl",
    "block": "[[[10,0],[14,0,\"challenge-state\"],[12],[1,\"\\n\"],[41,[30,0,[\"isSource\"]],[[[1,\"        \"],[10,2],[12],[1,\"Waiting for other players.\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],2],null],[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"sourceName\"]]],[1,\" is attemping to block foreign aid \"],[1,[30,1,[\"targetName\"]]],[1,\".\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],4],null],[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"sourceName\"]]],[1,\" is attemping to tax.\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],5],null],[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"sourceName\"]]],[1,\" is attemping to assassinate \"],[1,[30,1,[\"targetName\"]]],[1,\".\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],6],null],[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"sourceName\"]]],[1,\" is attemping to exchange.\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,1,[\"actionId\"]],7],null],[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"sourceName\"]]],[1,\" is attemping to steal from \"],[1,[30,1,[\"targetName\"]]],[1,\".\"],[13],[1,\"\\n        \"]],[]],null]],[]]]],[]]]],[]]]],[]]],[1,\"        \"],[8,[39,2],[[4,[38,3],[\"click\",[30,2]],null]],null,[[\"default\"],[[[[1,\"Challenge\"]],[]]]]],[1,\"\\n        \"],[8,[39,2],[[4,[38,3],[\"click\",[30,3]],null]],null,[[\"default\"],[[[[1,\"Pass\"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"    \"],[10,2],[12],[1,\"Card claimed: \"],[1,[30,1,[\"cardClaimed\",\"name\"]]],[13],[1,\"\\n\"],[13]],[\"@challengeState\",\"@challenge\",\"@pass\"],false,[\"if\",\"eq\",\"bs-button\",\"on\"]]",
    "moduleName": "client/components/challenge-state/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/chat/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let Chat = _exports.default = (_class = class Chat extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "message", _descriptor, this);
    }
    submit() {
      this.args.sendMessage(this.message);
      (0, _object.set)(this, 'message', '');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "message", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class);
});
;define("client/components/chat/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <Log @messages={{@messages}} @isChat={{true}}/>
  <BsForm @model={{this}} @onSubmit={{this.submit}} as |form|>
      <form.element @label="Chat" @property="message" as |el|>
          <el.control placeholder="Message" class="border-info" />
      </form.element>
      <form.submitButton>Submit</form.submitButton>
  </BsForm>
  */
  {
    "id": "hgAxMhq3",
    "block": "[[[8,[39,0],null,[[\"@messages\",\"@isChat\"],[[30,1],true]],null],[1,\"\\n\"],[8,[39,1],null,[[\"@model\",\"@onSubmit\"],[[30,0],[30,0,[\"submit\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[8,[30,2,[\"element\"]],null,[[\"@label\",\"@property\"],[\"Chat\",\"message\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,3,[\"control\"]],[[24,\"placeholder\",\"Message\"],[24,0,\"border-info\"]],null,null],[1,\"\\n    \"]],[3]]]]],[1,\"\\n    \"],[8,[30,2,[\"submitButton\"]],null,null,[[\"default\"],[[[[1,\"Submit\"]],[]]]]],[1,\"\\n\"]],[2]]]]]],[\"@messages\",\"form\",\"el\"],false,[\"log\",\"bs-form\"]]",
    "moduleName": "client/components/chat/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/create-game/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let CreateGame = _exports.default = (_class = class CreateGame extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _defineProperty(this, "maxPlayers", 5);
      _defineProperty(this, "minPlayers", 2);
      _defineProperty(this, "maxTurnLength", 60);
      _defineProperty(this, "minTurnLength", 15);
      _defineProperty(this, "turnLengthStep", 5);
      _initializerDefineProperty(this, "enableTimer", _descriptor4, this);
      _initializerDefineProperty(this, "turnLength", _descriptor5, this);
      _initializerDefineProperty(this, "numPlayers", _descriptor6, this);
      _initializerDefineProperty(this, "gameName", _descriptor7, this);
      _initializerDefineProperty(this, "showAlert", _descriptor8, this);
      _initializerDefineProperty(this, "alertMessage", _descriptor9, this);
    }
    async submit() {
      const token = this.session.data.authenticated.token;
      const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json' // Adjust the content type as needed
      };

      const response = await fetch(`${_environment.default.API_HOST}/api/createGame`, {
        headers: headers,
        method: 'POST',
        credentials: 'include',
        // Include cookies and authentication
        body: JSON.stringify({
          'name': this.gameName,
          'numPlayers': this.numPlayers,
          'enableTurnTimer': this.enableTimer,
          'turnLength': this.turnLength
        })
      });
      const data = await response.json();
      if (!response.ok) {
        this.alertMessage = data;
        (0, _object.set)(this, 'showAlert', true);
      } else {
        console.log(data);
        this.router.transitionTo('game', data);
      }

      // Send request to create the game
      // Get the game Id back in the request
      // Transition to the game route

      // If request is bad, raise the error
    }

    handleNumPlayersChange(event) {
      this.numPlayers = event.target.value;
    }
    handleTurnLengthChange(event) {
      this.turnLength = event.target.value;
    }
    onDismiss() {
      this.showAlert = false;
    }
    onShow() {
      console.log('show');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "enableTimer", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "turnLength", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 30;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "numPlayers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 5;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "gameName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "showAlert", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "alertMessage", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleNumPlayersChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleNumPlayersChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTurnLengthChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTurnLengthChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onDismiss", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onDismiss"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onShow", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onShow"), _class.prototype)), _class);
});
;define("client/components/create-game/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="create-game">
      <InlineAlert @type="danger" @message={{this.alertMessage}} @visible={{this.showAlert}} @onDismiss={{this.onDismiss}}/>
      <BsForm
          @formLayout="vertical"
          @model={{this}}
          @onSubmit={{this.submit}}
          as |form|
      >
          <form.element @label="Game name" @property="gameName" as |el|>
              <el.control/>
          </form.element>
          <form.element @label="Number of players ({{this.numPlayers}})" @property="numPlayers" as |el|>
              <input class="form-control" type="range" id={{el.id}} min={{this.minPlayers}} max={{this.maxPlayers}} 
                  value={{this.numPlayers}}
                  {{on "input" this.handleNumPlayersChange}}
              />
          </form.element>
          <form.element @controlType="switch" @label="Enable turn timer" @property="enableTimer" />
          {{#if this.enableTimer}}
              <form.element @label="Turn length ({{this.turnLength}} seconds)" @property="turnLength" as |el|>
                  <input class="form-control" type="range" id={{el.id}} min={{this.minTurnLength}} max={{this.maxTurnLength}} step={{this.turnLengthStep}} 
                      value={{this.turnLength}}
                      {{on "input" this.handleTurnLengthChange}}
                  />
              </form.element>
          {{/if}}
          <form.submitButton>Create Game</form.submitButton>
      </BsForm>
  </div>
  */
  {
    "id": "l0f7KAuz",
    "block": "[[[10,0],[14,0,\"create-game\"],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@type\",\"@message\",\"@visible\",\"@onDismiss\"],[\"danger\",[30,0,[\"alertMessage\"]],[30,0,[\"showAlert\"]],[30,0,[\"onDismiss\"]]]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@formLayout\",\"@model\",\"@onSubmit\"],[\"vertical\",[30,0],[30,0,[\"submit\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"element\"]],null,[[\"@label\",\"@property\"],[\"Game name\",\"gameName\"]],[[\"default\"],[[[[1,\"\\n            \"],[8,[30,2,[\"control\"]],null,null,null],[1,\"\\n        \"]],[2]]]]],[1,\"\\n        \"],[8,[30,1,[\"element\"]],null,[[\"@label\",\"@property\"],[[29,[\"Number of players (\",[30,0,[\"numPlayers\"]],\")\"]],\"numPlayers\"]],[[\"default\"],[[[[1,\"\\n            \"],[11,\"input\"],[24,0,\"form-control\"],[16,1,[30,3,[\"id\"]]],[16,\"min\",[30,0,[\"minPlayers\"]]],[16,\"max\",[30,0,[\"maxPlayers\"]]],[16,2,[30,0,[\"numPlayers\"]]],[24,4,\"range\"],[4,[38,2],[\"input\",[30,0,[\"handleNumPlayersChange\"]]],null],[12],[13],[1,\"\\n        \"]],[3]]]]],[1,\"\\n        \"],[8,[30,1,[\"element\"]],null,[[\"@controlType\",\"@label\",\"@property\"],[\"switch\",\"Enable turn timer\",\"enableTimer\"]],null],[1,\"\\n\"],[41,[30,0,[\"enableTimer\"]],[[[1,\"            \"],[8,[30,1,[\"element\"]],null,[[\"@label\",\"@property\"],[[29,[\"Turn length (\",[30,0,[\"turnLength\"]],\" seconds)\"]],\"turnLength\"]],[[\"default\"],[[[[1,\"\\n                \"],[11,\"input\"],[24,0,\"form-control\"],[16,1,[30,4,[\"id\"]]],[16,\"min\",[30,0,[\"minTurnLength\"]]],[16,\"max\",[30,0,[\"maxTurnLength\"]]],[16,\"step\",[30,0,[\"turnLengthStep\"]]],[16,2,[30,0,[\"turnLength\"]]],[24,4,\"range\"],[4,[38,2],[\"input\",[30,0,[\"handleTurnLengthChange\"]]],null],[12],[13],[1,\"\\n            \"]],[4]]]]],[1,\"\\n\"]],[]],null],[1,\"        \"],[8,[30,1,[\"submitButton\"]],null,null,[[\"default\"],[[[[1,\"Create Game\"]],[]]]]],[1,\"\\n    \"]],[1]]]]],[1,\"\\n\"],[13]],[\"form\",\"el\",\"el\",\"el\"],false,[\"inline-alert\",\"bs-form\",\"on\",\"if\"]]",
    "moduleName": "client/components/create-game/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/enter-game/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let EnterGame = _exports.default = (_class = class EnterGame extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    joinGame(id) {
      this.router.transitionTo('game', id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "joinGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "joinGame"), _class.prototype)), _class);
});
;define("client/components/enter-game/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="enter-game">
      <BsButton @type="primary" {{on "click" (fn this.joinGame @game.id)}}>{{@game.name}} ({{@game.numPlayers}}/{{@game.totalPlayers}})</BsButton>
  </div>
  */
  {
    "id": "/e6c71js",
    "block": "[[[10,0],[14,0,\"enter-game\"],[12],[1,\"\\n    \"],[8,[39,0],[[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"joinGame\"]],[30,1,[\"id\"]]],null]],null]],[[\"@type\"],[\"primary\"]],[[\"default\"],[[[[1,[30,1,[\"name\"]]],[1,\" (\"],[1,[30,1,[\"numPlayers\"]]],[1,\"/\"],[1,[30,1,[\"totalPlayers\"]]],[1,\")\"]],[]]]]],[1,\"\\n\"],[13]],[\"@game\"],false,[\"bs-button\",\"on\",\"fn\"]]",
    "moduleName": "client/components/enter-game/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/exchange-state/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment", "@ember/object/computed"], function (_exports, _component, _service, _object, _tracking, _environment, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let ChallengeState = _exports.default = (_dec = (0, _object.computed)('args.{exchangeState,playerId}'), _dec2 = (0, _object.computed)('args.totalExchangeCards'), _dec3 = (0, _object.computed)('args.selectedCardIds'), _dec4 = (0, _object.computed)('args.selectedCardIds', 'args.exchangeState'), (_class = class ChallengeState extends _component.default {
    get isSource() {
      return this.args.exchangeState.playerId == this.args.playerId;
    }
    get totalExchangeCards() {
      console.log(this.args.totalExchangeCards);
      return this.args.totalExchangeCards.filter(card => !card.revealed);
    }
    get selectedCards() {
      return this.args.selectedCardIds.length != this.args.exchangeState.expectedExchangeCount;
    }
    get remainingSelectCount() {
      return this.args.exchangeState.expectedExchangeCount - this.args.selectedCardIds.length;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "isSource", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "isSource"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalExchangeCards", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "totalExchangeCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectedCards", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "selectedCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remainingSelectCount", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "remainingSelectCount"), _class.prototype)), _class));
});
;define("client/components/exchange-state/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="exchange-state">
      {{#if this.isSource}}
          {{#if (gt this.remainingSelectCount 0)}}
              <p>Select {{this.remainingSelectCount}} card(s) to exchange.</p>
          {{/if}}
          {{#each this.totalExchangeCards as |card|}}
              <BsButton class='{{if card.isSelected 'selected'}}' {{on 'click' (fn @selectCard card)}}>{{card.name}}</BsButton>
          {{/each}}
          {{#unless this.selectedCards}}
          <div>
              <BsButton disabled={{this.selectedCards}} {{on 'click' @confirmExchange}}>Confirm Exchange</BsButton>
          </div>
          {{/unless}}
      {{else}}
          <p>Waiting for {{@playerId}} to exchange with the court deck.</p>
      {{/if}}
  </div>
  */
  {
    "id": "6D2Tbe+0",
    "block": "[[[10,0],[14,0,\"exchange-state\"],[12],[1,\"\\n\"],[41,[30,0,[\"isSource\"]],[[[41,[28,[37,1],[[30,0,[\"remainingSelectCount\"]],0],null],[[[1,\"            \"],[10,2],[12],[1,\"Select \"],[1,[30,0,[\"remainingSelectCount\"]]],[1,\" card(s) to exchange.\"],[13],[1,\"\\n\"]],[]],null],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"totalExchangeCards\"]]],null]],null],null,[[[1,\"            \"],[8,[39,4],[[16,0,[29,[[52,[30,1,[\"isSelected\"]],\"selected\"]]]],[4,[38,5],[\"click\",[28,[37,6],[[30,2],[30,1]],null]],null]],null,[[\"default\"],[[[[1,[30,1,[\"name\"]]]],[]]]]],[1,\"\\n\"]],[1]],null],[41,[51,[30,0,[\"selectedCards\"]]],[[[1,\"        \"],[10,0],[12],[1,\"\\n            \"],[8,[39,4],[[16,\"disabled\",[30,0,[\"selectedCards\"]]],[4,[38,5],[\"click\",[30,3]],null]],null,[[\"default\"],[[[[1,\"Confirm Exchange\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null]],[]],[[[1,\"        \"],[10,2],[12],[1,\"Waiting for \"],[1,[30,4]],[1,\" to exchange with the court deck.\"],[13],[1,\"\\n\"]],[]]],[13]],[\"card\",\"@selectCard\",\"@confirmExchange\",\"@playerId\"],false,[\"if\",\"gt\",\"each\",\"-track-array\",\"bs-button\",\"on\",\"fn\",\"unless\"]]",
    "moduleName": "client/components/exchange-state/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/game-history/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  class GameHistory extends _component.default {}
  _exports.default = GameHistory;
});
;define("client/components/game-history/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="game-history">
      <Log @messages={{@messages}} @isChat={{false}}/>
      <div>Game History</div>
  </div>
  */
  {
    "id": "egdpyQAH",
    "block": "[[[10,0],[14,0,\"game-history\"],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@messages\",\"@isChat\"],[[30,1],false]],null],[1,\"\\n    \"],[10,0],[12],[1,\"Game History\"],[13],[1,\"\\n\"],[13]],[\"@messages\"],false,[\"log\"]]",
    "moduleName": "client/components/game-history/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/game/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/object/computed"], function (_exports, _component, _service, _object, _tracking, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let Game = _exports.default = (_dec = (0, _computed.alias)('args.model'), _dec2 = (0, _object.computed)('model.gameState.playerData', 'model.playerId'), _dec3 = (0, _object.computed)('model.cards'), _dec4 = (0, _object.computed)('model.exchangeCards'), _dec5 = (0, _object.computed)('exchangeCards', 'cards', 'selectedCardIds'), _dec6 = (0, _object.computed)('model.gameState.playerData'), _dec7 = (0, _object.computed)('model.gameState.playerData', 'model.playerId'), _dec8 = (0, _object.computed)('model.gameState.started'), _dec9 = (0, _object.computed)('model.gameState.over'), _dec10 = (0, _computed.alias)('model.gameState.blockState'), _dec11 = (0, _object.computed)('blockState.active'), _dec12 = (0, _computed.alias)('model.gameState.challengeState'), _dec13 = (0, _object.computed)('challengeState.active'), _dec14 = (0, _computed.alias)('model.gameState.revealCardState'), _dec15 = (0, _object.computed)('revealCardState.active'), _dec16 = (0, _computed.alias)('model.gameState.loseInfluenceState'), _dec17 = (0, _object.computed)('loseInfluenceState.active'), _dec18 = (0, _computed.alias)('model.gameState.exchangeState'), _dec19 = (0, _object.computed)('blockState', 'revealCardState', 'loseInfluenceState', 'exchangeState', 'challengeState'), _dec20 = (0, _object.computed)('exchangeState.active'), _dec21 = (0, _computed.alias)('model.gameState.chatLog'), _dec22 = (0, _computed.alias)('model.gameState.gameLogs'), (_class = class Game extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "selectedCardIds", _descriptor4, this);
      _initializerDefineProperty(this, "model", _descriptor5, this);
      _initializerDefineProperty(this, "blockState", _descriptor6, this);
      _initializerDefineProperty(this, "challengeState", _descriptor7, this);
      _initializerDefineProperty(this, "revealCardState", _descriptor8, this);
      _initializerDefineProperty(this, "loseInfluenceState", _descriptor9, this);
      _initializerDefineProperty(this, "exchangeState", _descriptor10, this);
      _initializerDefineProperty(this, "chatLog", _descriptor11, this);
      _initializerDefineProperty(this, "gameHistory", _descriptor12, this);
      _initializerDefineProperty(this, "selectedPlayerId", _descriptor13, this);
      _defineProperty(this, "actions", [{
        name: 'Income',
        id: 1,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Foreign Aid',
        id: 2,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Coup',
        id: 3,
        cost: 7,
        requiresTarget: true
      }, {
        name: 'Tax',
        id: 4,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Assassinate',
        id: 5,
        cost: 3,
        requiresTarget: true
      }, {
        name: 'Exchange',
        id: 6,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Steal',
        id: 7,
        cost: 0,
        requiresTarget: true
      }]);
      _initializerDefineProperty(this, "canSelectPlayer", _descriptor14, this);
      _initializerDefineProperty(this, "selectedAction", _descriptor15, this);
    }
    get player() {
      return this.model.gameState.playerData.find(player => player.id == this.model.playerId);
    }
    get cards() {
      return this.model.cards;
    }
    get exchangeCards() {
      return this.model.exchangeCards;
    }
    get totalExchangeCards() {
      const exchangeCards = [...this.cards, ...this.exchangeCards];
      for (let i = 0; i < exchangeCards.length; i++) {
        const isSelected = this.selectedCardIds.includes(exchangeCards[i].id);
        (0, _object.set)(exchangeCards[i], 'isSelected', isSelected);
      }
      return exchangeCards;
    }
    get currentTurnPlayerId() {
      return this.model.gameState.playerData.find(player => player.isTurn)?.id ?? undefined;
    }
    get otherPlayers() {
      return this.model.gameState.playerData.filter(player => player.id != this.model.playerId);
    }
    get started() {
      return this.model.gameState.started;
    }
    get over() {
      return this.model.gameState.over;
    }
    get promptBlock() {
      return this.blockState.active;
    }
    get promptChallenge() {
      return this.challengeState.active;
    }
    get promptRevealCard() {
      return this.revealCardState.active;
    }
    get promptLoseInfluenceState() {
      return this.loseInfluenceState.active;
    }
    get inActiveState() {
      return this.blockState.active || this.challengeState.active || this.revealCardState.active || this.loseInfluenceState.active || this.exchangeState.active;
    }
    get promptExchangeState() {
      return this.exchangeState.active;
    }
    init() {
      super.init(...arguments);
      this.websocket.socket.on('leave_game', this.handleLeaveGame.bind(this));
      this.websocket.socket.on('game_state_update', this.handleGameStateUpdate.bind(this));
      this.websocket.socket.on('set_cards', this.handleSetCards.bind(this));
      this.websocket.socket.on('update_exchange_cards', this.handleUpdateExchangeCards.bind(this));
      this.websocket.socket.on('message_update', this.handleMessageUpdate.bind(this));
    }
    handleMessageUpdate(message) {
      const newChat = [...this.model.gameState.chatLog, message];
      (0, _object.set)(this.model.gameState, 'chatLog', newChat);
    }
    handleLeaveGame(id) {
      (0, _object.set)(this.model.gameState, 'playerData', this.playerData.filter(player => player.id != id));
    }
    handleGameStateUpdate(gameState) {
      (0, _object.set)(this.model, 'gameState', gameState);
    }
    handleSetCards(cards) {
      (0, _object.set)(this.model, 'cards', cards);
    }
    handleUpdateExchangeCards(cards) {
      (0, _object.set)(this.model, 'exchangeCards', cards);
    }
    startGame() {
      this.websocket.socket.emit('start_game', this.model.gameId);
    }
    block(blockCardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        blockCardId: blockCardId
      };
      this.websocket.socket.emit('block', data);
    }
    passBlock() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('pass_block', data);
    }
    challenge() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('challenge', data);
    }
    passChallenge() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('pass_challenge', data);
    }
    revealCard(cardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        cardId: cardId
      };
      this.websocket.socket.emit('reveal_card', data);
    }
    loseInfluence(cardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        cardId: cardId
      };
      this.websocket.socket.emit('lose_influence', data);
    }
    sendMessage(message) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        message: message
      };
      this.websocket.socket.emit('message', data);
    }
    initiateAction(action) {
      const sourceId = this.player.id;
      if (action.requiresTarget && !this.selectedPlayerId) {
        this.canSelectPlayer = true;
        this.selectedAction = action;
        return;
      }
      const targetId = action.requiresTarget ? this.selectedPlayerId : undefined;
      const data = {
        gameId: this.model.gameId,
        actionId: action.id,
        sourceId: sourceId,
        targetId: targetId
      };
      this.selectedPlayerId = undefined;
      this.selectedAction = undefined;
      this.canSelectPlayer = false;
      this.websocket.socket.emit('initiate_action', data);
    }
    selectCardToExchange(card) {
      const exchangeCount = this.exchangeState.expectedExchangeCount;
      if (this.selectedCardIds.find(c => c.id == card.id)) {
        return;
      }
      this.selectedCardIds.push(card.id);
      if (this.selectedCardIds.length > exchangeCount) {
        this.selectedCardIds.shift();
      }
      (0, _object.set)(this, 'selectedCardIds', this.selectedCardIds);
    }
    confirmExchange() {
      const data = {
        gameId: this.model.gameId,
        playerId: this.player.id,
        selectedCardIds: this.selectedCardIds
      };
      this.websocket.socket.emit('resolve_exchange_state', data);
      this.selectedCardIds = [];
    }
    selectPlayerId(id) {
      this.selectedPlayerId = id;
      this.initiateAction(this.selectedAction);
    }
    leaveGame() {
      this.router.transitionTo('games');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "selectedCardIds", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "model", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "player", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "player"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cards", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "cards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "exchangeCards", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "exchangeCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalExchangeCards", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "totalExchangeCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "currentTurnPlayerId", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "currentTurnPlayerId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "otherPlayers", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "otherPlayers"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "started", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "started"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "over", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "over"), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "blockState", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptBlock", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "promptBlock"), _class.prototype), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "challengeState", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptChallenge", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "promptChallenge"), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "revealCardState", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptRevealCard", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "promptRevealCard"), _class.prototype), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "loseInfluenceState", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptLoseInfluenceState", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "promptLoseInfluenceState"), _class.prototype), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "exchangeState", [_dec18], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "inActiveState", [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, "inActiveState"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "promptExchangeState", [_dec20], Object.getOwnPropertyDescriptor(_class.prototype, "promptExchangeState"), _class.prototype), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "chatLog", [_dec21], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "gameHistory", [_dec22], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "selectedPlayerId", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return undefined;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "startGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "block", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "block"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "passBlock", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "passBlock"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "challenge", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "challenge"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "passChallenge", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "passChallenge"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "revealCard", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "revealCard"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loseInfluence", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loseInfluence"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "canSelectPlayer", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "selectedAction", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return undefined;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initiateAction", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initiateAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectCardToExchange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectCardToExchange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "confirmExchange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "confirmExchange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectPlayerId", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectPlayerId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "leaveGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "leaveGame"), _class.prototype)), _class));
});
;define("client/components/game/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
      <Chat @sendMessage={{this.sendMessage}} @messages={{this.chatLog}}/>
      <GameHistory @messages={{this.gameHistory}} />
      <div>
          {{#if this.started}}
              <p>Game has started!</p>
          {{/if}}
          {{#if this.over}}
              <div>
                  <p>Game is OVER!</p>
                  <BsButton {{on 'click' this.leaveGame}}>Back to lobby</BsButton>
              </div>
          {{/if}}
              <BsButton type="button" {{on 'click' this.startGame}}>Start Game</BsButton>
      </div>
      <div>
          <h2>Game Data</h2>
          <p>Name: {{this.model.gameState.gameName}}</p>
          <div class="players">
              {{#each this.otherPlayers as |player|}}
                  <Player @playerData={{player}} @canSelectPlayer={{this.canSelectPlayer}} @cards={{player.cards}} @selectPlayerId={{this.selectPlayerId}} />            
              {{/each}}
          </div>
      </div>
      <div>
          {{#if this.promptBlock}}
              <BlockState
                  @blockState={{this.blockState}} 
                  @blockAction={{this.block}} 
                  @playerId={{this.player.id}}
                  @pass={{this.passBlock}}
              />
          {{/if}}
          {{#if this.promptChallenge}}
              <ChallengeState
                  @challengeState={{this.challengeState}}
                  @playerId={{this.player.id}}
                  @challenge={{this.challenge}}
                  @pass={{this.passChallenge}}
                  
              />
          {{/if}}
          {{#if this.promptRevealCard}}
              <RevealCardState
                  @revealCardState={{this.revealCardState}}
                  @cards={{this.cards}}
                  @revealCard={{this.revealCard}}
                  @playerId={{this.player.id}}
              />
          {{/if}}
          {{#if this.promptLoseInfluenceState}}
              <LoseInfluenceState
                  @loseInfluenceState={{this.loseInfluenceState}}
                  @cards={{this.cards}}
                  @playerId={{this.player.id}}
                  @loseInfluence={{this.loseInfluence}}
              />
          {{/if}}
          {{#if this.promptExchangeState}}
              <ExchangeState
                  @exchangeState={{this.exchangeState}}
                  @playerId={{this.player.id}}
                  @selectCard={{this.selectCardToExchange}}
                  @confirmExchange={{this.confirmExchange}}
                  @totalExchangeCards={{this.totalExchangeCards}}
                  @selectedCardIds={{this.selectedCardIds}}
              />
          {{/if}}
      </div>
      <div>
          <h2>You</h2>
          <div class="client-data">
              <Player 
                  @playerData={{this.player}} 
                  @cards={{this.cards}} 
                  @self={{true}} 
                  @loadId={{this.loadId}} 
                  @highlight={{false}}
              />
          </div>
      </div>
      <div>
  
          {{#if (and (eq this.model.playerId this.currentTurnPlayerId) (not this.inActiveState) (not this.over))}}
              <ActionsSelector @actions={{this.actions}} @initiateAction={{this.initiateAction}} @coins={{this.player.coins}}/>
          {{/if}}
      </div>
  </div>
  */
  {
    "id": "CxAM9+/R",
    "block": "[[[10,0],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@sendMessage\",\"@messages\"],[[30,0,[\"sendMessage\"]],[30,0,[\"chatLog\"]]]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@messages\"],[[30,0,[\"gameHistory\"]]]],null],[1,\"\\n    \"],[10,0],[12],[1,\"\\n\"],[41,[30,0,[\"started\"]],[[[1,\"            \"],[10,2],[12],[1,\"Game has started!\"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"over\"]],[[[1,\"            \"],[10,0],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Game is OVER!\"],[13],[1,\"\\n                \"],[8,[39,3],[[4,[38,4],[\"click\",[30,0,[\"leaveGame\"]]],null]],null,[[\"default\"],[[[[1,\"Back to lobby\"]],[]]]]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"            \"],[8,[39,3],[[24,4,\"button\"],[4,[38,4],[\"click\",[30,0,[\"startGame\"]]],null]],null,[[\"default\"],[[[[1,\"Start Game\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"Game Data\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Name: \"],[1,[30,0,[\"model\",\"gameState\",\"gameName\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"players\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"otherPlayers\"]]],null]],null],null,[[[1,\"                \"],[8,[39,7],null,[[\"@playerData\",\"@canSelectPlayer\",\"@cards\",\"@selectPlayerId\"],[[30,1],[30,0,[\"canSelectPlayer\"]],[30,1,[\"cards\"]],[30,0,[\"selectPlayerId\"]]]],null],[1,\"            \\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n\"],[41,[30,0,[\"promptBlock\"]],[[[1,\"            \"],[8,[39,8],null,[[\"@blockState\",\"@blockAction\",\"@playerId\",\"@pass\"],[[30,0,[\"blockState\"]],[30,0,[\"block\"]],[30,0,[\"player\",\"id\"]],[30,0,[\"passBlock\"]]]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"promptChallenge\"]],[[[1,\"            \"],[8,[39,9],null,[[\"@challengeState\",\"@playerId\",\"@challenge\",\"@pass\"],[[30,0,[\"challengeState\"]],[30,0,[\"player\",\"id\"]],[30,0,[\"challenge\"]],[30,0,[\"passChallenge\"]]]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"promptRevealCard\"]],[[[1,\"            \"],[8,[39,10],null,[[\"@revealCardState\",\"@cards\",\"@revealCard\",\"@playerId\"],[[30,0,[\"revealCardState\"]],[30,0,[\"cards\"]],[30,0,[\"revealCard\"]],[30,0,[\"player\",\"id\"]]]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"promptLoseInfluenceState\"]],[[[1,\"            \"],[8,[39,11],null,[[\"@loseInfluenceState\",\"@cards\",\"@playerId\",\"@loseInfluence\"],[[30,0,[\"loseInfluenceState\"]],[30,0,[\"cards\"]],[30,0,[\"player\",\"id\"]],[30,0,[\"loseInfluence\"]]]],null],[1,\"\\n\"]],[]],null],[41,[30,0,[\"promptExchangeState\"]],[[[1,\"            \"],[8,[39,12],null,[[\"@exchangeState\",\"@playerId\",\"@selectCard\",\"@confirmExchange\",\"@totalExchangeCards\",\"@selectedCardIds\"],[[30,0,[\"exchangeState\"]],[30,0,[\"player\",\"id\"]],[30,0,[\"selectCardToExchange\"]],[30,0,[\"confirmExchange\"]],[30,0,[\"totalExchangeCards\"]],[30,0,[\"selectedCardIds\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"You\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"client-data\"],[12],[1,\"\\n            \"],[8,[39,7],null,[[\"@playerData\",\"@cards\",\"@self\",\"@loadId\",\"@highlight\"],[[30,0,[\"player\"]],[30,0,[\"cards\"]],true,[30,0,[\"loadId\"]],false]],null],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n\\n\"],[41,[28,[37,13],[[28,[37,14],[[30,0,[\"model\",\"playerId\"]],[30,0,[\"currentTurnPlayerId\"]]],null],[28,[37,15],[[30,0,[\"inActiveState\"]]],null],[28,[37,15],[[30,0,[\"over\"]]],null]],null],[[[1,\"            \"],[8,[39,16],null,[[\"@actions\",\"@initiateAction\",\"@coins\"],[[30,0,[\"actions\"]],[30,0,[\"initiateAction\"]],[30,0,[\"player\",\"coins\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"player\"],false,[\"chat\",\"game-history\",\"if\",\"bs-button\",\"on\",\"each\",\"-track-array\",\"player\",\"block-state\",\"challenge-state\",\"reveal-card-state\",\"lose-influence-state\",\"exchange-state\",\"and\",\"eq\",\"not\",\"actions-selector\"]]",
    "moduleName": "client/components/game/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/inline-alert/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let InlineAlert = _exports.default = (_dec = (0, _object.computed)('args.visible'), (_class = class InlineAlert extends _component.default {
    get visible() {
      return this.args.visible;
    }
    dismissAlert() {
      this.args.onDismiss();
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "visible", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "visible"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dismissAlert", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "dismissAlert"), _class.prototype)), _class));
});
;define("client/components/inline-alert/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="inline-alert {{@type}} {{unless this.visible 'hide'}}">
      <div>{{@message}}</div>
      <button aria-label="Close" class="btn-close" type="button" {{on 'click' this.dismissAlert}}>
          {{!-- (fn (mut this.visible)) --}}
      </button>
  </div>
  */
  {
    "id": "Fm3R+1Us",
    "block": "[[[10,0],[15,0,[29,[\"inline-alert \",[30,1],\" \",[52,[51,[30,0,[\"visible\"]]],\"hide\"]]]],[12],[1,\"\\n    \"],[10,0],[12],[1,[30,2]],[13],[1,\"\\n    \"],[11,\"button\"],[24,\"aria-label\",\"Close\"],[24,0,\"btn-close\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"dismissAlert\"]]],null],[12],[1,\"\\n\"],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"@type\",\"@message\"],false,[\"unless\",\"on\"]]",
    "moduleName": "client/components/inline-alert/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/log/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  class Log extends _component.default {}
  _exports.default = Log;
});
;define("client/components/log/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="chat-container">
      <div class="chat-content">
          {{#each @messages as |chat|}}
              {{#if @isChat}}
                  <div class="chat-message">{{chat.name}}: {{chat.message}}</div>
              {{else}}
              <div class="chat-message">{{chat}}</div>
              {{/if}}
          {{/each}}
      </div>
  </div>
  */
  {
    "id": "HaryUY4s",
    "block": "[[[10,0],[14,0,\"chat-container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"chat-content\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[41,[30,3],[[[1,\"                \"],[10,0],[14,0,\"chat-message\"],[12],[1,[30,2,[\"name\"]]],[1,\": \"],[1,[30,2,[\"message\"]]],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,0],[14,0,\"chat-message\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]]]],[2]],null],[1,\"    \"],[13],[1,\"\\n\"],[13]],[\"@messages\",\"chat\",\"@isChat\"],false,[\"each\",\"-track-array\",\"if\"]]",
    "moduleName": "client/components/log/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/lose-influence-state/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let LoseInfluenceState = _exports.default = (_dec = (0, _object.computed)('args.{loseInfluenceState,playerId}'), (_class = class LoseInfluenceState extends _component.default {
    get isSource() {
      return this.args.loseInfluenceState.playerId == this.args.playerId;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "isSource", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "isSource"), _class.prototype)), _class));
});
;define("client/components/lose-influence-state/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="lose-influence-state">
      {{#if this.isSource}}
          <p>Select an influence to lose.</p>
          {{#each @cards as |card|}}
              {{#unless card.revealed}}
                  <BsButton {{on 'click' (fn @loseInfluence card.id)}}>Lose {{card.name}}</BsButton>
              {{/unless}}
          {{/each}}
      {{else}}
          <p>Waiting for other players.</p>
      {{/if}}
  </div>
  */
  {
    "id": "DVxpc0GQ",
    "block": "[[[10,0],[14,0,\"lose-influence-state\"],[12],[1,\"\\n\"],[41,[30,0,[\"isSource\"]],[[[1,\"        \"],[10,2],[12],[1,\"Select an influence to lose.\"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[41,[51,[30,2,[\"revealed\"]]],[[[1,\"                \"],[8,[39,4],[[4,[38,5],[\"click\",[28,[37,6],[[30,3],[30,2,[\"id\"]]],null]],null]],null,[[\"default\"],[[[[1,\"Lose \"],[1,[30,2,[\"name\"]]]],[]]]]],[1,\"\\n\"]],[]],null]],[2]],null]],[]],[[[1,\"        \"],[10,2],[12],[1,\"Waiting for other players.\"],[13],[1,\"\\n\"]],[]]],[13]],[\"@cards\",\"card\",\"@loseInfluence\"],false,[\"if\",\"each\",\"-track-array\",\"unless\",\"bs-button\",\"on\",\"fn\"]]",
    "moduleName": "client/components/lose-influence-state/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/nav-bar/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let NavBar = _exports.default = (_class = class NavBar extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
    }
    async invalidateSession() {
      await this.session.invalidate();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "invalidateSession", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "invalidateSession"), _class.prototype)), _class);
});
;define("client/components/nav-bar/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <BsNavbar @toggleBreakpoint={{'sm'}} as |navbar|>
    <div class="navbar-header">
      <navbar.toggle />
      <a class="navbar-brand" href="#">Coup</a>
    </div>
    <navbar.content>
      <navbar.nav as |nav|>
        <nav.item>
          <nav.linkTo @route="index">Home</nav.linkTo>
        </nav.item>
        {{#if this.session.isAuthenticated}}
          <nav.item>
              <button class="nav-link" type="button" {{on "click" this.invalidateSession}}>Sign Out</button>
          </nav.item>
        {{/if}}
      </navbar.nav>
    </navbar.content>
  </BsNavbar>
  */
  {
    "id": "K/JstTQf",
    "block": "[[[8,[39,0],null,[[\"@toggleBreakpoint\"],[\"sm\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"navbar-header\"],[12],[1,\"\\n    \"],[8,[30,1,[\"toggle\"]],null,null,null],[1,\"\\n    \"],[10,3],[14,0,\"navbar-brand\"],[14,6,\"#\"],[12],[1,\"Coup\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[30,1,[\"content\"]],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[30,1,[\"nav\"]],null,null,[[\"default\"],[[[[1,\"\\n      \"],[8,[30,2,[\"item\"]],null,null,[[\"default\"],[[[[1,\"\\n        \"],[8,[30,2,[\"linkTo\"]],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"],[41,[30,0,[\"session\",\"isAuthenticated\"]],[[[1,\"        \"],[8,[30,2,[\"item\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[11,\"button\"],[24,0,\"nav-link\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"invalidateSession\"]]],null],[12],[1,\"Sign Out\"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"    \"]],[2]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[1]]]]]],[\"navbar\",\"nav\"],false,[\"bs-navbar\",\"if\",\"on\"]]",
    "moduleName": "client/components/nav-bar/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/player/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let Player = _exports.default = (_dec = (0, _object.computed)('args.canSelectPlayer'), (_class = class Player extends _component.default {
    selectPlayer() {
      if (!this.selectable || this.args.playerData.lost) {
        console.log('You cannot select this player');
        return;
      }
      this.args.selectPlayerId(this.args.playerData.id);
    }
    get selectable() {
      return this.args.canSelectPlayer;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "selectPlayer", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectPlayer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectable", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "selectable"), _class.prototype)), _class));
});
;define("client/components/player/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <button type="button" 
      class="player-info {{if @playerData.isTurn "is-turn"}} {{if this.selectable "select"}} {{if @playerData.lost "lost"}}" 
      {{on 'click' this.selectPlayer}}
  >
      <span class="player-name">{{@playerData.name}}</span>
      <span class="player-cards">
          {{#each @cards as |card|}}
              <Card @card={{card}} @self={{@self}}/>
          {{/each}}
      </span>
      <span class="player-coins">{{@playerData.coins}} coins</span>
  </button>
  */
  {
    "id": "JgFlR/dR",
    "block": "[[[11,\"button\"],[16,0,[29,[\"player-info \",[52,[30,1,[\"isTurn\"]],\"is-turn\"],\" \",[52,[30,0,[\"selectable\"]],\"select\"],\" \",[52,[30,1,[\"lost\"]],\"lost\"]]]],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"selectPlayer\"]]],null],[12],[1,\"\\n    \"],[10,1],[14,0,\"player-name\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n    \"],[10,1],[14,0,\"player-cards\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,2]],null]],null],null,[[[1,\"            \"],[8,[39,4],null,[[\"@card\",\"@self\"],[[30,3],[30,4]]],null],[1,\"\\n\"]],[3]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,1],[14,0,\"player-coins\"],[12],[1,[30,1,[\"coins\"]]],[1,\" coins\"],[13],[1,\"\\n\"],[13]],[\"@playerData\",\"@cards\",\"card\",\"@self\"],false,[\"if\",\"on\",\"each\",\"-track-array\",\"card\"]]",
    "moduleName": "client/components/player/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/reveal-card-state/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "client/config/environment"], function (_exports, _component, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"client/config/environment",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  let RevealCardState = _exports.default = (_dec = (0, _object.computed)('args.{revealCardState,playerId}'), (_class = class RevealCardState extends _component.default {
    get isRevealingPlayer() {
      return this.args.revealCardState.revealerId == this.args.playerId;
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "isRevealingPlayer", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "isRevealingPlayer"), _class.prototype)), _class));
});
;define("client/components/reveal-card-state/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="reveal-card-state">
      {{#if this.isRevealingPlayer}}
          <p>You have been challenged.</p>
          {{#each @cards as |card|}}
              {{#unless card.revealed}}
                  <BsButton {{on 'click' (fn @revealCard card.id)}}>Reveal {{card.name}}</BsButton>
              {{/unless}}
          {{/each}}
      {{else}}
          <p>Waiting for {{@revealCardState.revealerId}} to reveal a card</p>
      {{/if}}
  </div>
  */
  {
    "id": "3P35UfiL",
    "block": "[[[10,0],[14,0,\"reveal-card-state\"],[12],[1,\"\\n\"],[41,[30,0,[\"isRevealingPlayer\"]],[[[1,\"        \"],[10,2],[12],[1,\"You have been challenged.\"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[41,[51,[30,2,[\"revealed\"]]],[[[1,\"                \"],[8,[39,4],[[4,[38,5],[\"click\",[28,[37,6],[[30,3],[30,2,[\"id\"]]],null]],null]],null,[[\"default\"],[[[[1,\"Reveal \"],[1,[30,2,[\"name\"]]]],[]]]]],[1,\"\\n\"]],[]],null]],[2]],null]],[]],[[[1,\"        \"],[10,2],[12],[1,\"Waiting for \"],[1,[30,4,[\"revealerId\"]]],[1,\" to reveal a card\"],[13],[1,\"\\n\"]],[]]],[13]],[\"@cards\",\"card\",\"@revealCard\",\"@revealCardState\"],false,[\"if\",\"each\",\"-track-array\",\"unless\",\"bs-button\",\"on\",\"fn\"]]",
    "moduleName": "client/components/reveal-card-state/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/talker/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  class Talker extends _component.default {}
  _exports.default = Talker;
});
;define("client/components/talker/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
      <button type="button">Click here!</button>
  </div>
  */
  {
    "id": "VS55qkz5",
    "block": "[[[10,0],[12],[1,\"\\n    \"],[10,\"button\"],[14,4,\"button\"],[12],[1,\"Click here!\"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "client/components/talker/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/timer/component", ["exports", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let Timer = _exports.default = (_class = class Timer extends _component.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "time", _descriptor, this);
      this.startTimer();
    }
    startTimer() {
      setInterval(() => {
        if (this.time && this.time > 0) {
          this.time -= 1;
        }
      }, 1000);
    }
    clt() {
      console.log(this.time);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "time", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.timeLeft;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "clt", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clt"), _class.prototype)), _class);
});
;define("client/components/timer/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <aside>
      <div class="countdown-timer">
          <p>Time remaining: {{this.time}} seconds</p>
      </div>
  </aside>
  */
  {
    "id": "uu1sSAv7",
    "block": "[[[10,\"aside\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"countdown-timer\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Time remaining: \"],[1,[30,0,[\"time\"]]],[1,\" seconds\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "client/components/timer/template.hbs",
    "isStrictMode": false
  });
});
;define("client/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("client/controllers/application", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f
  class ApplicationController extends _controller.default {}
  _exports.default = ApplicationController;
});
;define("client/controllers/create-game", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/object/computed"], function (_exports, _controller, _tracking, _object, _service, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/object",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f
  class CreateGameController extends _controller.default {}
  _exports.default = CreateGameController;
});
;define("client/controllers/game", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/object/computed"], function (_exports, _controller, _tracking, _object, _service, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/object",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let GameController = _exports.default = (_dec = (0, _object.computed)('model.gameState.playerData', 'model.playerId'), _dec2 = (0, _object.computed)('model.cards'), _dec3 = (0, _object.computed)('model.exchangeCards'), _dec4 = (0, _object.computed)('exchangeCards', 'cards', 'selectedCardIds'), _dec5 = (0, _object.computed)('model.gameState.playerData'), _dec6 = (0, _object.computed)('model.gameState.playerData', 'model.playerId'), _dec7 = (0, _object.computed)('model.gameState.started'), _dec8 = (0, _object.computed)('model.gameState.over'), _dec9 = (0, _computed.alias)('model.gameState.blockState'), _dec10 = (0, _object.computed)('blockState.active'), _dec11 = (0, _computed.alias)('model.gameState.challengeState'), _dec12 = (0, _object.computed)('challengeState.active'), _dec13 = (0, _computed.alias)('model.gameState.revealCardState'), _dec14 = (0, _object.computed)('revealCardState.active'), _dec15 = (0, _computed.alias)('model.gameState.loseInfluenceState'), _dec16 = (0, _object.computed)('loseInfluenceState.active'), _dec17 = (0, _computed.alias)('model.gameState.exchangeState'), _dec18 = (0, _object.computed)('blockState', 'revealCardState', 'loseInfluenceState', 'exchangeState', 'challengeState'), _dec19 = (0, _object.computed)('exchangeState.active'), _dec20 = (0, _computed.alias)('model.gameState.chatLog'), _dec21 = (0, _computed.alias)('model.gameState.gameLogs'), (_class = class GameController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "selectedCardIds", _descriptor4, this);
      _initializerDefineProperty(this, "blockState", _descriptor5, this);
      _initializerDefineProperty(this, "challengeState", _descriptor6, this);
      _initializerDefineProperty(this, "revealCardState", _descriptor7, this);
      _initializerDefineProperty(this, "loseInfluenceState", _descriptor8, this);
      _initializerDefineProperty(this, "exchangeState", _descriptor9, this);
      _initializerDefineProperty(this, "chatLog", _descriptor10, this);
      _initializerDefineProperty(this, "gameHistory", _descriptor11, this);
      _initializerDefineProperty(this, "selectedPlayerId", _descriptor12, this);
      _defineProperty(this, "actions", [{
        name: 'Income',
        id: 1,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Foreign Aid',
        id: 2,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Coup',
        id: 3,
        cost: 7,
        requiresTarget: true
      }, {
        name: 'Tax',
        id: 4,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Assassinate',
        id: 5,
        cost: 3,
        requiresTarget: true
      }, {
        name: 'Exchange',
        id: 6,
        cost: 0,
        requiresTarget: false
      }, {
        name: 'Steal',
        id: 7,
        cost: 0,
        requiresTarget: true
      }]);
      _initializerDefineProperty(this, "canSelectPlayer", _descriptor13, this);
      _initializerDefineProperty(this, "selectedAction", _descriptor14, this);
    }
    get player() {
      return this.model.gameState.playerData.find(player => player.id == this.model.playerId);
    }
    get cards() {
      return this.model.cards;
    }
    get exchangeCards() {
      return this.model.exchangeCards;
    }
    get totalExchangeCards() {
      const exchangeCards = [...this.cards, ...this.exchangeCards];
      for (let i = 0; i < exchangeCards.length; i++) {
        const isSelected = this.selectedCardIds.includes(exchangeCards[i].id);
        (0, _object.set)(exchangeCards[i], 'isSelected', isSelected);
      }
      return exchangeCards;
    }
    get currentTurnPlayerId() {
      return this.model.gameState.playerData.find(player => player.isTurn)?.id ?? undefined;
    }
    get otherPlayers() {
      return this.model.gameState.playerData.filter(player => player.id != this.model.playerId);
    }
    get started() {
      return this.model.gameState.started;
    }
    get over() {
      return this.model.gameState.over;
    }
    get promptBlock() {
      return this.blockState.active;
    }
    get promptChallenge() {
      return this.challengeState.active;
    }
    get promptRevealCard() {
      return this.revealCardState.active;
    }
    get promptLoseInfluenceState() {
      return this.loseInfluenceState.active;
    }
    get inActiveState() {
      return this.blockState.active || this.challengeState.active || this.revealCardState.active || this.loseInfluenceState.active || this.exchangeState.active;
    }
    get promptExchangeState() {
      return this.exchangeState.active;
    }
    init() {
      super.init(...arguments);
      this.websocket.socket.on('leave_game', this.handleLeaveGame.bind(this));
      this.websocket.socket.on('game_state_update', this.handleGameStateUpdate.bind(this));
      this.websocket.socket.on('set_cards', this.handleSetCards.bind(this));
      this.websocket.socket.on('update_exchange_cards', this.handleUpdateExchangeCards.bind(this));
      this.websocket.socket.on('message_update', this.handleMessageUpdate.bind(this));
    }
    handleMessageUpdate(message) {
      const newChat = [...this.model.gameState.chatLog, message];
      (0, _object.set)(this.model.gameState, 'chatLog', newChat);
    }
    handleLeaveGame(id) {
      (0, _object.set)(this.model.gameState, 'playerData', this.playerData.filter(player => player.id != id));
    }
    handleGameStateUpdate(gameState) {
      (0, _object.set)(this.model, 'gameState', gameState);
    }
    handleSetCards(cards) {
      (0, _object.set)(this.model, 'cards', cards);
    }
    handleUpdateExchangeCards(cards) {
      (0, _object.set)(this.model, 'exchangeCards', cards);
    }
    startGame() {
      this.websocket.socket.emit('start_game', this.model.gameId);
    }
    block(blockCardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        blockCardId: blockCardId
      };
      this.websocket.socket.emit('block', data);
    }
    passBlock() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('pass_block', data);
    }
    challenge() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('challenge', data);
    }
    passChallenge() {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId
      };
      this.websocket.socket.emit('pass_challenge', data);
    }
    revealCard(cardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        cardId: cardId
      };
      this.websocket.socket.emit('reveal_card', data);
    }
    loseInfluence(cardId) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        cardId: cardId
      };
      this.websocket.socket.emit('lose_influence', data);
    }
    sendMessage(message) {
      const playerId = this.player.id;
      const data = {
        gameId: this.model.gameId,
        playerId: playerId,
        message: message
      };
      this.websocket.socket.emit('message', data);
    }
    initiateAction(action) {
      const sourceId = this.player.id;
      if (action.requiresTarget && !this.selectedPlayerId) {
        this.canSelectPlayer = true;
        this.selectedAction = action;
        return;
      }
      const targetId = action.requiresTarget ? this.selectedPlayerId : undefined;
      const data = {
        gameId: this.model.gameId,
        actionId: action.id,
        sourceId: sourceId,
        targetId: targetId
      };
      this.selectedPlayerId = undefined;
      this.selectedAction = undefined;
      this.canSelectPlayer = false;
      this.websocket.socket.emit('initiate_action', data);
    }
    selectCardToExchange(card) {
      const exchangeCount = this.exchangeState.expectedExchangeCount;
      if (this.selectedCardIds.find(c => c.id == card.id)) {
        return;
      }
      this.selectedCardIds.push(card.id);
      if (this.selectedCardIds.length > exchangeCount) {
        this.selectedCardIds.shift();
      }
      (0, _object.set)(this, 'selectedCardIds', this.selectedCardIds);
    }
    confirmExchange() {
      const data = {
        gameId: this.model.gameId,
        playerId: this.player.id,
        selectedCardIds: this.selectedCardIds
      };
      this.websocket.socket.emit('resolve_exchange_state', data);
      this.selectedCardIds = [];
    }
    selectPlayerId(id) {
      this.selectedPlayerId = id;
      this.initiateAction(this.selectedAction);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "selectedCardIds", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "player", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "player"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cards", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "cards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "exchangeCards", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "exchangeCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalExchangeCards", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "totalExchangeCards"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "currentTurnPlayerId", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "currentTurnPlayerId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "otherPlayers", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "otherPlayers"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "started", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "started"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "over", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "over"), _class.prototype), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "blockState", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptBlock", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "promptBlock"), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "challengeState", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptChallenge", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "promptChallenge"), _class.prototype), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "revealCardState", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptRevealCard", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "promptRevealCard"), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "loseInfluenceState", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "promptLoseInfluenceState", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "promptLoseInfluenceState"), _class.prototype), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "exchangeState", [_dec17], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "inActiveState", [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, "inActiveState"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "promptExchangeState", [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, "promptExchangeState"), _class.prototype), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "chatLog", [_dec20], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "gameHistory", [_dec21], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "selectedPlayerId", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return undefined;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "startGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "block", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "block"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "passBlock", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "passBlock"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "challenge", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "challenge"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "passChallenge", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "passChallenge"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "revealCard", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "revealCard"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loseInfluence", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loseInfluence"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "canSelectPlayer", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "selectedAction", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return undefined;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initiateAction", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initiateAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectCardToExchange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectCardToExchange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "confirmExchange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "confirmExchange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectPlayerId", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectPlayerId"), _class.prototype)), _class));
});
;define("client/controllers/games", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _controller, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/object",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let GamesController = _exports.default = (_dec = (0, _object.computed)('selectedValue'), _dec2 = (0, _object.computed)('model.lobby'), _dec3 = (0, _object.computed)('model.games'), (_class = class GamesController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "selectedValue", _descriptor4, this);
      _initializerDefineProperty(this, "gameName", _descriptor5, this);
    }
    get showGames() {
      return this.selectedValue == 0;
    }
    get lobby() {
      return this.model.lobby;
    }
    get games() {
      return this.model.games;
    }
    init() {
      super.init(...arguments);
      this.websocket.socket.on('lobby_update', this.handleLobbyUpdate.bind(this));
      this.websocket.socket.on('game_start', this.handleGameStart.bind(this));
      this.websocket.socket.on('handle_update_games', this.handleUpdateGames.bind(this));
    }

    // TODO better logic here
    handleLobbyUpdate(updatedLobby) {
      if (this.model) {
        (0, _object.set)(this.model, 'lobby', updatedLobby);
      }
    }
    handleLeaveLobby(name) {
      console.log(name, 'has leaved!');
      this.lobby = this.lobby.filter(username => username != name);
    }
    handleUpdateGames(updatedGames) {
      (0, _object.set)(this.model, 'games', updatedGames);
    }
    handleGameStart(id) {
      const game = this.games.find(g => g.id == id);
      if (game) {
        (0, _object.set)(game, 'isStarted', true);
      }
    }
    createGame() {
      console.log(this.lobby);
      console.log(this.gameName);
    }
    joinGame(id) {
      this.router.transitionTo('game', id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "selectedValue", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showGames", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "showGames"), _class.prototype), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "gameName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "lobby", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "lobby"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "games", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "games"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "createGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "joinGame", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "joinGame"), _class.prototype)), _class));
});
;define("client/controllers/index", ["exports", "@ember/controller", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _controller, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let IndexController = _exports.default = (_class = class IndexController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
      _initializerDefineProperty(this, "session", _descriptor3, this);
      _initializerDefineProperty(this, "user", _descriptor4, this);
    }
    async enterLobby() {
      try {
        await this.session.authenticate('authenticator:custom-token', this.user);
        this.websocket.socket.emit('lobby_update');
        this.router.transitionTo('games');
      } catch (error) {
        console.error('Error adding user to lobby catch:', error);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "user", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        username: ''
      };
    }
  }), _applyDecoratedDescriptor(_class.prototype, "enterLobby", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "enterLobby"), _class.prototype)), _class);
});
;define("client/controllers/play", ["exports", "@ember/controller", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _controller, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let PlayController = _exports.default = (_class = class PlayController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "websocket", _descriptor, this);
      _initializerDefineProperty(this, "lobby", _descriptor2, this);
      _defineProperty(this, "message", '');
    }
    init() {
      super.init(...arguments);
      //super(...arguments);
      //this.websocket.on('lobby_update', (message) => {
      // Update the UI to notify the player about the lobby update
      console.log('init playcontroller');
      this.websocket.socket.on('lobby_update', this.handleLobbyUpdate.bind(this));
      this.websocket.socket.on('leave_lobby', this.handleLeaveLobby.bind(this));
      this.websocket.socket.on('message', this.handleMessage.bind(this));
    }
    handleLobbyUpdate(data) {
      // HACKY TODO:
      if (!this.lobby.includes(data.username)) {
        this.lobby = [...this.lobby, data.username];
      }
    }
    handleLeaveLobby(data) {
      console.log('leaving lobby', data);
      this.lobby = this.lobby.filter(username => username != data.username);
    }
    async getData() {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/getData');
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
        } else {
          // Request failed, handle errors here
          console.error('Erfdsfsdfds');
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error getting data:', error);
      }
    }
    sendMessage() {
      this.websocket.socket.emit('message', this.message);
      this.message = '';
    }
    handleMessage(message) {
      console.log(message);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lobby", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.model.players;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype)), _class);
});
;define("client/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("client/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("client/helpers/app-version", ["exports", "@ember/component/helper", "client/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"client/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("client/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-contains"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-default"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-eq"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-form-horiz-input-class", ["exports", "ember-bootstrap/helpers/bs-form-horiz-input-class"], function (_exports, _bsFormHorizInputClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsFormHorizInputClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-form-horiz-input-class"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-form-horiz-offset-class", ["exports", "ember-bootstrap/helpers/bs-form-horiz-offset-class"], function (_exports, _bsFormHorizOffsetClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsFormHorizOffsetClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-form-horiz-offset-class"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-noop"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-size-class"eaimeta@70e063a35619d71f
});
;define("client/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-type-class"eaimeta@70e063a35619d71f
});
;define("client/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("client/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/did-insert"eaimeta@70e063a35619d71f
});
;define("client/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/did-update"eaimeta@70e063a35619d71f
});
;define("client/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("client/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("client/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("client/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("client/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("client/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("client/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("client/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("client/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("client/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("client/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("client/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("client/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on-document"eaimeta@70e063a35619d71f
});
;define("client/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on-window"eaimeta@70e063a35619d71f
});
;define("client/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on"eaimeta@70e063a35619d71f
});
;define("client/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("client/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pageTitle.default;
});
;define("client/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("client/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("client/helpers/popper-modifier", ["exports", "ember-popper-modifier/helpers/popper-modifier"], function (_exports, _popperModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "buildPopperModifier", {
    enumerable: true,
    get: function () {
      return _popperModifier.buildPopperModifier;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popperModifier.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/helpers/popper-modifier"eaimeta@70e063a35619d71f
});
;define("client/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-ref-bucket/helpers/ref-to"eaimeta@70e063a35619d71f
});
;define("client/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("client/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("client/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/will-destroy"eaimeta@70e063a35619d71f
});
;define("client/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("client/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "client/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"client/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("client/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
});
;define("client/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("client/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define("client/initializers/ember-simple-auth", ["exports", "client/config/environment", "ember-simple-auth/configuration", "ember-simple-auth/initializers/setup-session", "ember-simple-auth/session-stores/adaptive", "ember-simple-auth/session-stores/local-storage", "ember-simple-auth/session-stores/cookie"], function (_exports, _environment, _configuration, _setupSession, _adaptive, _localStorage, _cookie) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"client/config/environment",0,"ember-simple-auth/configuration",0,"ember-simple-auth/initializers/setup-session",0,"ember-simple-auth/session-stores/adaptive",0,"ember-simple-auth/session-stores/local-storage",0,"ember-simple-auth/session-stores/cookie"eaimeta@70e063a35619d71f
  var _default = _exports.default = {
    name: 'ember-simple-auth',
    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);
      registry.register('session-store:adaptive', _adaptive.default);
      registry.register('session-store:cookie', _cookie.default);
      registry.register('session-store:local-storage', _localStorage.default);
      (0, _setupSession.default)(registry);
    }
  };
});
;define("client/initializers/load-bootstrap-config", ["exports", "client/config/environment", "ember-bootstrap/config", "ember-bootstrap/version"], function (_exports, _environment, _config, _version) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"client/config/environment",0,"ember-bootstrap/config",0,"ember-bootstrap/version"eaimeta@70e063a35619d71f
  function initialize( /* container, application */
  ) {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
    (0, _version.registerLibrary)();
  }
  var _default = _exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
;define("client/initializers/simple-auth-token", ["exports", "ember-simple-auth-token/authenticators/token", "ember-simple-auth-token/authenticators/jwt"], function (_exports, _token, _jwt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth-token/authenticators/token",0,"ember-simple-auth-token/authenticators/jwt"eaimeta@70e063a35619d71f
  /**
    Ember Simple Auth Token's Initializer.
    By default load both the Token and JWT (with refresh) Authenticators.
  */
  var _default = _exports.default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',
    initialize(container) {
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }
  };
});
;define("client/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize() {}
  };
});
;define("client/instance-initializers/ember-simple-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  var _default = _exports.default = {
    name: 'ember-simple-auth',
    initialize() {}
  };
});
;define("client/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-ref-bucket/modifiers/create-ref"eaimeta@70e063a35619d71f
});
;define("client/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("client/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("client/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap.js"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-focus-trap/modifiers/focus-trap.js"eaimeta@70e063a35619d71f
});
;define("client/modifiers/popper-tooltip", ["exports", "ember-popper-modifier/modifiers/popper-tooltip"], function (_exports, _popperTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popperTooltip.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/modifiers/popper-tooltip"eaimeta@70e063a35619d71f
});
;define("client/modifiers/popper", ["exports", "ember-popper-modifier/modifiers/popper"], function (_exports, _popper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popper.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/modifiers/popper"eaimeta@70e063a35619d71f
});
;define("client/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("client/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("client/router", ["exports", "@ember/routing/router", "client/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('/');
    this.route('play');
    this.route('games');
    this.route('game', {
      path: '/game/:game_id'
    });
    this.route('create-game', {
      path: '/create'
    });
  });
});
;define("client/routes/create-game", ["exports", "client/routes/protected-route", "@ember/service", "client/config/environment"], function (_exports, _protectedRoute, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"client/routes/protected-route",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  class CreateGameRoute extends _protectedRoute.default {}
  _exports.default = CreateGameRoute;
});
;define("client/routes/game", ["exports", "client/routes/protected-route", "@ember/service", "client/config/environment"], function (_exports, _protectedRoute, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"client/routes/protected-route",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let GameRoute = _exports.default = (_class = class GameRoute extends _protectedRoute.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "websocket", _descriptor2, this);
    }
    async model(params) {
      const id = params.game_id;
      const token = this.session.data.authenticated.token;
      const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      };
      const response = await fetch(`${_environment.default.API_HOST}/api/joinGame`, {
        method: 'POST',
        body: JSON.stringify({
          id
        }),
        headers: headers
      });
      const jsonData = await response.json();
      const data = {
        token: token,
        id: id
      };
      this.websocket.socket.emit('join_game', data);
      return {
        gameState: jsonData.gameState,
        playerId: jsonData.playerId,
        cards: jsonData.cards,
        gameId: id,
        exchangeCards: jsonData.exchangeCards
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/routes/games", ["exports", "client/routes/protected-route", "fetch", "@ember/service", "client/config/environment"], function (_exports, _protectedRoute, _fetch, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"client/routes/protected-route",0,"fetch",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let GamesRoute = _exports.default = (_class = class GamesRoute extends _protectedRoute.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
    }
    async model() {
      const token = this.session.data.authenticated.token;
      const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      };
      const lobbyData = await (0, _fetch.default)(`${_environment.default.API_HOST}/api/enterLobby`, {
        headers: headers,
        method: 'GET',
        credentials: 'include'
      });
      const data = await lobbyData.json();
      return {
        games: data.games,
        lobby: data.lobby
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/routes/index", ["exports", "@ember/routing/route", "@ember/service", "client/config/environment"], function (_exports, _route, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let IndexRoute = _exports.default = (_class = class IndexRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
    beforeModel() {
      console.log('ENV.API_HOST value:', _environment.default.API_HOST);
      if (this.session.isAuthenticated) {
        this.router.transitionTo('games');
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/routes/play", ["exports", "@ember/routing/route", "client/config/environment"], function (_exports, _route, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"client/config/environment"eaimeta@70e063a35619d71f
  class PlayRoute extends _route.default {
    async model() {
      const response = await fetch(`${_environment.default.API_HOST}/api/get_lobby`);
      const players = await response.json();
      const currentPlayer = await fetch(`${_environment.default.API_HOST}/api/get_player`);
      const cup = await currentPlayer.json();
      return {
        players,
        cup
      };
    }
  }
  _exports.default = PlayRoute;
});
;define("client/routes/protected-route", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ProtectedRoute = _exports.default = (_class = class ProtectedRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
    beforeModel() {
      if (!this.session.isAuthenticated) {
        this.router.transitionTo('index');
      }
      //this.session.requireAuthentication(transition, 'home');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("client/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("client/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("client/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("client/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cookies/services/cookies"eaimeta@70e063a35619d71f
  var _default = _exports.default = _cookies.default;
});
;define("client/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("client/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("client/services/session", ["exports", "ember-simple-auth/services/session", "@ember/service", "client/config/environment"], function (_exports, _session, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/services/session",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let Session = _exports.default = (_class = class Session extends _session.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "websocket", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
    handleAuthentication() {
      this.router.transitionTo('games');
    }

    // Make this async for websocket.
    async invalidate() {
      const token = this.data.authenticated.token;
      const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      };
      const response = await fetch(`${_environment.default.API_HOST}/api/invalidateSession`, {
        method: 'POST',
        headers: headers
      });
      super.invalidate();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "websocket", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/services/socket-io", ["exports", "ember-websockets/services/socket-io"], function (_exports, _socketIo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _socketIo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-websockets/services/socket-io"eaimeta@70e063a35619d71f
});
;define("client/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("client/services/websocket", ["exports", "@ember/service", "@glimmer/tracking", "client/config/environment"], function (_exports, _service, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/service",0,"client/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let WebsocketService = _exports.default = (_class = class WebsocketService extends _service.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "socket", null);
      _initializerDefineProperty(this, "session", _descriptor, this);
    }
    init() {
      super.init(...arguments);
      const token = this.session.data.authenticated.token;
      const socket = window.io.connect(`${_environment.default.API_HOST}`, {
        query: {
          token: token
        }
      });
      this.socket = socket;
      // socket.on('open', this.handleOpen.bind(this));
      // socket.on('close', this.handleClose.bind(this));
    }

    // handleOpen() {
    //     console.log('WebSocket connection opened');
    // }

    // handleClose() {
    //     console.log('WebSocket connection closed');
    // }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("client/services/websockets", ["exports", "ember-websockets/services/websockets"], function (_exports, _websockets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _websockets.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-websockets/services/websockets"eaimeta@70e063a35619d71f
});
;define("client/session-stores/application", ["exports", "ember-simple-auth/session-stores/cookie"], function (_exports, _cookie) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/session-stores/cookie"eaimeta@70e063a35619d71f
  class ApplicationSessionStore extends _cookie.default {}
  _exports.default = ApplicationSessionStore;
});
;define("client/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="application">
      <NavBar />
      {{outlet}}
  </div>
  */
  {
    "id": "xuv3ITBw",
    "block": "[[[10,0],[14,0,\"application\"],[12],[1,\"\\n    \"],[8,[39,0],null,null,null],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[13]],[],false,[\"nav-bar\",\"component\",\"-outlet\"]]",
    "moduleName": "client/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("client/templates/create-game", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
      <CreateGame/>
  </div>
  */
  {
    "id": "9dJOWdy7",
    "block": "[[[10,0],[12],[1,\"\\n    \"],[8,[39,0],null,null,null],[1,\"\\n\"],[13]],[],false,[\"create-game\"]]",
    "moduleName": "client/templates/create-game.hbs",
    "isStrictMode": false
  });
});
;define("client/templates/game", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Game"}}
  <Game 
      @model={{this.model}}
  />
  */
  {
    "id": "2ce7IpxD",
    "block": "[[[1,[28,[35,0],[\"Game\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@model\"],[[30,0,[\"model\"]]]],null]],[],false,[\"page-title\",\"game\"]]",
    "moduleName": "client/templates/game.hbs",
    "isStrictMode": false
  });
});
;define("client/templates/games", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Games"}}
  <div>
      <h4>Lobby:</h4>
          {{#each this.lobby as |player|}}
              <p>{{player.name}}</p>
          {{/each}}
      <div class="button-group2">
          <BsButtonGroup
              @value={{this.selectedValue}}
              @size="lg"
              @type="radio"
              @onChange={{fn (mut this.selectedValue)}}
              as |bg|
              >
              <bg.button @type="primary" @value={{0}}>Join Game</bg.button>
              <bg.button @type="primary" @value={{1}}>Create Game</bg.button>
          </BsButtonGroup>
      </div>
      {{#if this.showGames}}
          <div class="">
          <h2>Games</h2>
          <div>
              {{#each this.games as |game|}}
                  {{#unless game.isStarted}}
                      <EnterGame @game={{game}} />
                  {{/unless}}
              {{/each}}
          </div>
          </div>
      {{else}}
          <div class="">
              <CreateGame/>
          </div>
      {{/if}}
  </div>
  */
  {
    "id": "16ix1H2w",
    "block": "[[[1,[28,[35,0],[\"Games\"],null]],[1,\"\\n\"],[10,0],[12],[1,\"\\n    \"],[10,\"h4\"],[12],[1,\"Lobby:\"],[13],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"lobby\"]]],null]],null],null,[[[1,\"            \"],[10,2],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[10,0],[14,0,\"button-group2\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@value\",\"@size\",\"@type\",\"@onChange\"],[[30,0,[\"selectedValue\"]],\"lg\",\"radio\",[28,[37,4],[[28,[37,5],[[30,0,[\"selectedValue\"]]],null]],null]]],[[\"default\"],[[[[1,\"\\n            \"],[8,[30,2,[\"button\"]],null,[[\"@type\",\"@value\"],[\"primary\",0]],[[\"default\"],[[[[1,\"Join Game\"]],[]]]]],[1,\"\\n            \"],[8,[30,2,[\"button\"]],null,[[\"@type\",\"@value\"],[\"primary\",1]],[[\"default\"],[[[[1,\"Create Game\"]],[]]]]],[1,\"\\n        \"]],[2]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"],[41,[30,0,[\"showGames\"]],[[[1,\"        \"],[10,0],[14,0,\"\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"Games\"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"games\"]]],null]],null],null,[[[41,[51,[30,3,[\"isStarted\"]]],[[[1,\"                    \"],[8,[39,8],null,[[\"@game\"],[[30,3]]],null],[1,\"\\n\"]],[]],null]],[3]],null],[1,\"        \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,0],[14,0,\"\"],[12],[1,\"\\n            \"],[8,[39,9],null,null,null],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]],[13]],[\"player\",\"bg\",\"game\"],false,[\"page-title\",\"each\",\"-track-array\",\"bs-button-group\",\"fn\",\"mut\",\"if\",\"unless\",\"enter-game\",\"create-game\"]]",
    "moduleName": "client/templates/games.hbs",
    "isStrictMode": false
  });
});
;define("client/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Home"}}
  <div class="content animate__animated animate__fadeIn">
      <div>
          <div>
              <BsForm
                  @formLayout="vertical"
                  @model={{this.user}}
                  @onSubmit={{this.enterLobby}}
                  as |form|
                  >
                  <form.element @property="username" as |el|>
                      <el.control placeholder="Enter your username"/>
                  </form.element>
                  <form.submitButton>Submit</form.submitButton>
              </BsForm>
          </div>
      </div>
  </div>
  {{outlet}}
  */
  {
    "id": "F6JXJV0Y",
    "block": "[[[1,[28,[35,0],[\"Home\"],null]],[1,\"\\n\"],[10,0],[14,0,\"content animate__animated animate__fadeIn\"],[12],[1,\"\\n    \"],[10,0],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n            \"],[8,[39,1],null,[[\"@formLayout\",\"@model\",\"@onSubmit\"],[\"vertical\",[30,0,[\"user\"]],[30,0,[\"enterLobby\"]]]],[[\"default\"],[[[[1,\"\\n                \"],[8,[30,1,[\"element\"]],null,[[\"@property\"],[\"username\"]],[[\"default\"],[[[[1,\"\\n                    \"],[8,[30,2,[\"control\"]],[[24,\"placeholder\",\"Enter your username\"]],null,null],[1,\"\\n                \"]],[2]]]]],[1,\"\\n                \"],[8,[30,1,[\"submitButton\"]],null,null,[[\"default\"],[[[[1,\"Submit\"]],[]]]]],[1,\"\\n            \"]],[1]]]]],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[\"form\",\"el\"],false,[\"page-title\",\"bs-form\",\"component\",\"-outlet\"]]",
    "moduleName": "client/templates/index.hbs",
    "isStrictMode": false
  });
});
;define("client/templates/play", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h2>Your name: {{@model.cup.name}}</h2>
  <h2>Num coins: {{@model.cup.coins}}</h2>
  
  <h2>Players in the lobby:</h2>
  <div>
      {{#each this.lobby as |player|}}
          <p>{{player}}</p>
      {{/each}}
  </div>
  
  <div>
      <Input
              id="here"
              @type="text"
              @value={{this.message}}
          />
          <button type="button" {{on "click" this.sendMessage}}>Send message</button>
  </div>
  
  <div>
      <p>Get server session data:</p>
      <button type="button" {{on "click" this.getData}}>Get data</button>
  </div>
  */
  {
    "id": "Y/hkZkdZ",
    "block": "[[[10,\"h2\"],[12],[1,\"Your name: \"],[1,[30,1,[\"cup\",\"name\"]]],[13],[1,\"\\n\"],[10,\"h2\"],[12],[1,\"Num coins: \"],[1,[30,1,[\"cup\",\"coins\"]]],[13],[1,\"\\n\\n\"],[10,\"h2\"],[12],[1,\"Players in the lobby:\"],[13],[1,\"\\n\"],[10,0],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"lobby\"]]],null]],null],null,[[[1,\"        \"],[10,2],[12],[1,[30,2]],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[10,0],[12],[1,\"\\n    \"],[8,[39,2],[[24,1,\"here\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"message\"]]]],null],[1,\"\\n        \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"sendMessage\"]]],null],[12],[1,\"Send message\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[12],[1,\"\\n    \"],[10,2],[12],[1,\"Get server session data:\"],[13],[1,\"\\n    \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"getData\"]]],null],[12],[1,\"Get data\"],[13],[1,\"\\n\"],[13]],[\"@model\",\"player\"],false,[\"each\",\"-track-array\",\"input\",\"on\"]]",
    "moduleName": "client/templates/play.hbs",
    "isStrictMode": false
  });
});
;define("client/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("client/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("client/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("client/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("client/utils/inject", ["exports", "ember-simple-auth/utils/inject"], function (_exports, _inject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inject.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/utils/inject"eaimeta@70e063a35619d71f
});
;define("client/utils/is-fastboot", ["exports", "ember-simple-auth/utils/is-fastboot"], function (_exports, _isFastboot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isFastboot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/utils/is-fastboot"eaimeta@70e063a35619d71f
});
;define("client/utils/location", ["exports", "ember-simple-auth/utils/location"], function (_exports, _location) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _location.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/utils/location"eaimeta@70e063a35619d71f
});
;define("client/utils/objects-are-equal", ["exports", "ember-simple-auth/utils/objects-are-equal"], function (_exports, _objectsAreEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectsAreEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-simple-auth/utils/objects-are-equal"eaimeta@70e063a35619d71f
});
;

;define('client/config/environment', [], function() {
  var prefix = 'client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("client/app")["default"].create({"name":"client","version":"0.0.0+988e570b"});
          }
        
//# sourceMappingURL=client.map