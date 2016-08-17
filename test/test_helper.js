// Rebuild of test_helper file
import jsdom from 'jsdom';
import jquery from 'jquery';

// Set up testing environment
// Create fake dom for testing
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// Point to jquery to fake instance of dom
const $ = jquery(global.window);

// Build 'renderComponent' helper


// Build event simulator helper


// Set up chaiJquery
