///////////////////////////////////////////////////////////////////////////////
// @file         : generic.spec.js                                           //
// @summary      : Generic test spec                                         //
// @version      : 1.0.0                                                     //
// @project      : N/A                                                       //
// @description  : N/A                                                       //
// @author       : Benjamin Maggi                                            //
// @email        : benjaminmaggi@gmail.com                                   //
// @date         : 16 Oct 2017                                               //
// @license:     : MIT                                                       //
// ------------------------------------------------------------------------- //
//                                                                           //
// Copyright 2017 Benjamin Maggi <benjaminmaggi@gmail.com>                   //
//                                                                           //
//                                                                           //
// License:                                                                  //
// Permission is hereby granted, free of charge, to any person obtaining a   //
// copy of this software and associated documentation files                  //
// (the "Software"), to deal in the Software without restriction, including  //
// without limitation the rights to use, copy, modify, merge, publish,       //
// distribute, sublicense, and/or sell copies of the Software, and to permit //
// persons to whom the Software is furnished to do so, subject to the        //
// following conditions:                                                     //
//                                                                           //
// The above copyright notice and this permission notice shall be included   //
// in all copies or substantial portions of the Software.                    //
//                                                                           //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS   //
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                //
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.    //
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY      //
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,      //
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE         //
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

import { expect } from 'chai';
import EventEmitterEx from '../src';

describe('EventEmitterEx test', function() {

  const dummyEvent = 'dummy:event';
  const noop = () => undefined;
  // const onDummyEvent = function(done, compareFunction) {
  //   return function(...args) {
  //     if (typeof compareFunction === 'function') {
  //       return done(compareFunction(...args));
  //     } else {
  //       return done();
  //     }
  //   };
  // };

  it('should create new EventEmitterEx instance', function() {
    const eventEmitterEx = new EventEmitterEx();
    // assertions
    expect(eventEmitterEx)
      .to.be.an.instanceof(EventEmitterEx);
  });

  it('should have methods', function() {
    const eventEmitterEx = new EventEmitterEx();
    // assertions
    expect(eventEmitterEx.on).to.be.a('function');
    expect(eventEmitterEx.off).to.be.a('function');
  });

  it('should add listener function', function() {

    const eventEmitterEx = new EventEmitterEx();
    const listenerCount = (eventName = dummyEvent) => eventEmitterEx.listenerCount(eventName);
    // assertions
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(0);
    // Adds the specified listener function
    eventEmitterEx.on(dummyEvent, noop);
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(1);
  });

  it('should remove listener function', function() {
    const eventEmitterEx = new EventEmitterEx();
    const listenerCount = (eventName = dummyEvent) => eventEmitterEx.listenerCount(eventName);
    // assertions
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(0);
    // Adds the specified listener function
    eventEmitterEx.on(dummyEvent, noop);
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(1);
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(1);
    // Remove the specified listener
    eventEmitterEx.off(dummyEvent, noop);
    expect(listenerCount(dummyEvent))
      .to.be.a('number')
      .and.to.equal(0);
  });
});
