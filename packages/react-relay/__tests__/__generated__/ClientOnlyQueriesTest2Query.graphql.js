/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<00a66fc2dc29a9620e857f980fe3ff29>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import queryHelloResolver from "../../../relay-runtime/store/__tests__/resolvers/HelloWorldResolver.js";
// Type assertion validating that `queryHelloResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryHelloResolver: (
  args: {|
    world: string,
  |}, 
) => mixed);
export type ClientOnlyQueriesTest2Query$variables = {||};
export type ClientOnlyQueriesTest2Query$data = {|
  +hello: ?$Call<<R>((...empty[]) => R) => R, typeof queryHelloResolver>,
|};
export type ClientOnlyQueriesTest2Query = {|
  response: ClientOnlyQueriesTest2Query$data,
  variables: ClientOnlyQueriesTest2Query$variables,
|};
*/

var node/*: ClientRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientOnlyQueriesTest2Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "world",
                "value": "World"
              }
            ],
            "fragment": null,
            "kind": "RelayResolver",
            "name": "hello",
            "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/HelloWorldResolver'),
            "path": "hello"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientOnlyQueriesTest2Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "9db9f9cb546151c1f888e0e64e9d23b4",
    "id": null,
    "metadata": {},
    "name": "ClientOnlyQueriesTest2Query",
    "operationKind": "query",
    "text": null
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "42a67a5a5af91776ffbd2e05505b5001";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  ClientOnlyQueriesTest2Query$variables,
  ClientOnlyQueriesTest2Query$data,
>*/);