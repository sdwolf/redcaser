var TestSuiteTreeWidget = (function () {
  'use strict';

  // self :: DOM
  var self = function (root) {
    this.root   = root;
    this.header = null;
    this.body   = null;

    this.initialize();
  };

  var def = self.prototype;

  def.initialize = function () {
    this.createTestSuiteHeader();
    this.getTestSuiteData();
    this.addEventHandlers();
  };

  def.createTestSuiteHeader = function () {
    this.initializeHeader();

    var title   = this.buildHeaderTitle();
    var actions = this.buildHeaderActions();

    this.header.appendChild(title);
    this.header.appendChild(actions);
    this.root.appendChild(this.header);
  };

  // buildHeaderTitle :: -> DOM
  def.buildHeaderTitle = function () {
    var node = document.createElement('div');
    node.classList.add('tree-title');

    var text = document.createTextNode('Test Cases');
    node.appendChild(text);

    return node;
  };

  // buildHeaderActions :: -> DOM
  def.buildHeaderActions = function () {
    var node = document.createElement('div');
    node.classList.add('tree-actions');

    var text = document.createTextNode('Actions');
    node.appendChild(text);

    return node;
  };

  def.initializeHeader = function () {
    if (this.header) {
      this.root.removeChild(this.header);
    }

    this.header = document.createElement('div');
    this.header.classList.add('tree-header');
  };

  def.getTestSuiteData = function () {
    var params = {
      done: this.createTestSuiteTree.bind(this),
      fail: this.handleTestSuiteError.bind(this)
    }

    Redcaser.api.testSuites.index(params);
  };

  // createTestSuiteTree :: Object
  def.createTestSuiteTree = function (response) {
    this.initializeBody();

    var tree = TestSuiteTree.build(response);

    this.body.appendChild(tree);
    this.root.appendChild(this.body);

    this.makeSuiteCasesSortable();
  };

  def.initializeBody = function () {
    if (this.body) {
      $('.suite-cases').sortable('destroy');
      this.root.removeChild(this.body);
    }

    this.body = document.createElement('div');
    this.body.classList.add('tree-body');
  };

  def.makeSuiteCasesSortable = function () {
    var cases = $('.suite-cases');

    cases.sortable({
      connectWith: '.suite-cases',
      handle:      '.case-drag',
      placeholder: 'suite-case-placeholder'
    });
  };

  // buildTestSuiteTree :: Object
  def.handleTestSuiteError = function (response) {
    console.log('Error!');
  };

  def.addEventHandlers = function () {
    var handlers = this.eventHandlers();

    handlers.forEach(this.addEventHandler.bind(this));
  };

  // eventHandlers :: -> [[String, String, (Event -> *)]]
  def.eventHandlers = function () {
    return [
      ['click', 'suite-title',         this.handleClick   ],
      ['click', 'suite-checkbox',      this.handleClick   ],
      ['click', 'case-checkbox',       this.handleClick   ],
      ['click', 'case-link-edit',      this.handleCaseEdit],
      ['click', 'case-actions-edit',   this.handleClick   ],
      ['click', 'case-actions-delete', this.handleClick   ],
      ['click', 'case-actions-view',   this.handleClick   ]
    ];
  }

  // addEventHandler :: [String, String, (Event -> *)]
  def.addEventHandler = function (config) {
    this.root.addEventListener(config[0], function (event) {
      if (event.target.classList.contains(config[1])) {
        config[2].bind(this)(event);
      }
    }.bind(this))
  }

  def.handleClick = function (event) {
    var content = event.target.textContent;
    console.log('Clicked ' + content);
  };


  // handleCaseEdit :: Event
  def.handleCaseEdit = function (event) {
    CaseDialog.create(this.root);
  };

  return self;
})();