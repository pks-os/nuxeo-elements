/**
@license
(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { fixture, html } from '@nuxeo/testing-helpers';
import moment from '@nuxeo/moment';
import '../widgets/nuxeo-date-picker.js';

function getInput(element) {
  return element.root.querySelector('#date');
}

function testValue(element, value, isUTC) {
  element.value = value;
  expect(element.value).to.be.equal(value);
  const inputValue = getInput(element).value;
  const val = (isUTC ? moment.utc(value) : moment(value).local()).format('YYYY-MM-DD');
  expect(inputValue).to.be.equal(val);
  // ELEMENTS-599: assertion temporarily disabled owing to third party picker issues
  // expect(element._pickerValue).to.be.equal(local);
}

function testInput(element, input, isUTC) {
  const i = getInput(element);
  i.value = input;
  expect(i.value).to.be.equal(input);
  expect(element.value).to.be.equal((isUTC ? moment.utc(input) : moment(input)).toJSON());
  // ELEMENTS-599: assertion temporarily disabled owing to third party picker issues
  // expect(element._pickerValue).to.be.equal(input);
}

suite('nuxeo-date-picker', () => {
  let element;

  [{ timezone: undefined }, { timezone: 'Etc/UTC' }].forEach((conf) => {
    suite(!conf.timezone ? 'with no timezone' : `with ${conf.timezone} timezone`, () => {
      setup(async () => {
        element = !conf.timezone
          ? await fixture(
              html`
                <nuxeo-date-picker></nuxeo-date-picker>
              `,
            )
          : await fixture(
              html`
                <nuxeo-date-picker timezone=${conf.timezone}></nuxeo-date-picker>
              `,
            );
      });

      test('the value can be changed', () => {
        expect(element.value).to.be.null;
        testValue(element, '2022-03-12T00:00:00.000Z', conf.timezone);
        testValue(element, '1800-12-28T00:00:00.000Z', conf.timezone);
        testValue(element, '0021-11-07T00:00:00.000Z', conf.timezone);
        testValue(element, '0002-01-01T00:00:00.000Z', conf.timezone);
      });

      test('the value set in UCT is correctly converted to local time', () => {
        testValue(element, '2003-06-12T22:00:00.000Z', conf.timezone);
        testValue(element, '2003-06-12T23:00:00.000Z', conf.timezone);
        testValue(element, '2003-06-13T00:00:00.000Z', conf.timezone);
      });

      test('the input changes reflect on the value', () => {
        testInput(element, '2003-02-20', conf.timezone);
        testInput(element, '2004-06-12', conf.timezone);
      });

      test('the value can be cleared', () => {
        expect(element.value).to.be.null;
        testInput(element, '2003-02-20', conf.timezone);
        // now clear the value
        element.value = null;
        expect(element.value).to.be.equal(null);
        expect(getInput(element).value).to.be.equal('');
      });

      test('the input changes takes default time into account', () => {
        element.defaultTime = '14:35:19';
        getInput(element).value = '2003-02-20';
        const localEltValue = moment(element.value).local();
        expect(localEltValue.hour()).to.be.equal(14);
        expect(localEltValue.minute()).to.be.equal(35);
        expect(localEltValue.second()).to.be.equal(19);
      });
    });
  });
});
