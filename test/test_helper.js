// Rebuild of test_helper file
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

// Set up testing environment
// Create fake dom for testing
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
// Point to jquery to fake instance of dom
const $ = jquery(global.window);

// Set up chaiJquery
chaiJquery(chai, chai.util, $);

// Build 'renderComponent' helper
function renderComponent(ComponentClass, props = {}, state = {}) {
  // Get instance of component
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  // Get reference to produced HTML
  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build event simulator helper
// Add simulate method to every instance of jquery
$.fn.simulate = function(eventName, value) {
  if (value) {
    // Set value of this to value parameter
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
