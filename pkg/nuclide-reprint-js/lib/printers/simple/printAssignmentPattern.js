'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {AssignmentPattern} from 'ast-types-flow';
import type {Lines, Print} from '../../types/common';

import flatten from '../../utils/flatten';
import markers from '../../constants/markers';

function printAssignmentPattern(print: Print, node: AssignmentPattern): Lines {
  return flatten([
    print(node.left),
    markers.noBreak,
    markers.space,
    '=',
    markers.noBreak,
    markers.space,
    print(node.right),
  ]);
}

module.exports = printAssignmentPattern;
