var Redcaser = Redcaser || {};

Redcaser.API = (function () {
  'use strict';

  var self = {};

  self.testSuites = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/testsuites'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // new :: Object
    this.new = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/testsuites/new'
      });

      request.done(done);
      request.fail(fail);
    };

    // edit :: Object
    this.edit = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/testsuites/' + params.id + '/edit'
      });

      request.done(done);
      request.fail(fail);
    };

    // create :: Object
    this.create = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'POST',
        url:      'redcaser/testsuites'
      });

      request.done(done);
      request.fail(fail);
    };

    // update :: Object
    this.update = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'PATCH',
        url:      'redcaser/testsuites/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };

    // destroy :: Object
    this.destroy = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'DELETE',
        url:      'redcaser/testsuites/' + params.id
      });

      request.done(done);
      request.fail(fail);
    }
  };

  self.testSuiteStatuses = new function () {
    // create :: Object
    this.create = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'POST',
        url:      'redcaser/testcasestatuses'
      });

      request.done(done);
      request.fail(fail);
    };

    // update :: Object
    this.update = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'PATCH',
        url:      'redcaser/testcasestatuses/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };
  };


  self.executionSuites = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/executionsuites'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/executionsuites/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };

    // new :: Object
    this.new = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/executionsuites/new'
      });

      request.done(done);
      request.fail(fail);
    };

    // edit :: Object
    this.edit = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/executionsuites/' + params.id + '/edit'
      });

      request.done(done);
      request.fail(fail);
    };

    // create :: Object
    this.create = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'POST',
        url:      'redcaser/executionsuites'
      });

      request.done(done);
      request.fail(fail);
    };

    // update :: Object
    this.update = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'PATCH',
        url:      'redcaser/executionsuites/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };

    // destroy :: Object
    this.destroy = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'DELETE',
        url:      'redcaser/executionsuites/' + params.id
      });

      request.done(done);
      request.fail(fail);
    }
  };

  self.executionJournals = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/executionjournals'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // create :: Object
    this.create = function (params) {
      var request = null;
    };

    // update :: Object
    this.update = function (params) {
      var request = null;
    };

    // destroy :: Object
    this.destroy = function (params) {
      var request = null;
    }
  };

  self.environments = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/environments'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // new :: Object
    this.new = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/environments/new'
      });

      request.done(done);
      request.fail(fail);
    };

    // edit :: Object
    this.edit = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/environments/' + params.id + '/edit'
      });

      request.done(done);
      request.fail(fail);
    };

    // create :: Object
    this.create = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'POST',
        url:      'redcaser/environments'
      });

      request.done(done);
      request.fail(fail);
    };

    // update :: Object
    this.update = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'PATCH',
        url:      'redcaser/environments/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };

    // destroy :: Object
    this.destroy = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'DELETE',
        url:      'redcaser/environments/' + params.id
      });

      request.done(done);
      request.fail(fail);
    }
  };

  self.testCases = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/testcases'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // create :: Object
    this.create = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'POST',
        url:      'redcaser/testcases'
      });

      request.done(done);
      request.fail(fail);
    };

    // update :: Object
    this.update = function (params) {
      var data = params.data;
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        data:     data,
        dataType: 'json',
        method:   'PATCH',
        url:      'redcaser/testcases/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };

    // destroy :: Object
    this.destroy = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'DELETE',
        url:      'redcaser/testcases/' + params.id
      });

      request.done(done);
      request.fail(fail);
    }
  };

  self.combos = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/combos'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // create :: Object
    this.create = function (params) {
      var request = null;
    };

    // update :: Object
    this.update = function (params) {
      var request = null;
    };

    // destroy :: Object
    this.destroy = function (params) {
      var request = null;
    }
  };

  self.graph = new function () {
    // index :: Object
    this.index = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/graph'
      });

      request.done(done);
      request.fail(fail);
    };

    // show :: Object
    this.show = function (params) {
      var request = null;
    };

    // create :: Object
    this.create = function (params) {
      var request = null;
    };

    // update :: Object
    this.update = function (params) {
      var request = null;
    };

    // destroy :: Object
    this.destroy = function (params) {
      var request = null;
    }
  };

  self.queryTestCases = new function () {
    // show :: Object
    this.show = function (params) {
      var done = params.done;
      var fail = params.fail;

      var request = $.ajax({
        dataType: 'json',
        method:   'GET',
        url:      'redcaser/querytestcases/' + params.id
      });

      request.done(done);
      request.fail(fail);
    };
  };


  return self;
})();
