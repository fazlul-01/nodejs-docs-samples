// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');
const {execSync} = require('child_process');

it('should auto complete job titles within given companyName', () => {
  const output = execSync('node auto-complete-sample.js');
  const pattern =
    '.*completionResults.*"suggestion":"Google","type":"COMPANY_NAME"}.*\n' +
    '.*completionResults.*"suggestion":"Software Engineer","type":"JOB_TITLE".*\n' +
    '.*completionResults.*"suggestion":"Software Engineer","type":"JOB_TITLE".*\n';

  assert.strictEqual(new RegExp(pattern).test(output), true);
});
