# demonstrates issue

```
yarn tsc
yarn run v1.22.10
$ /home/cdiesh/msttest2/node_modules/.bin/tsc
src/index.ts:6:14 - error TS4023: Exported variable 'HelloWithSnapshotProcessor' has or is using name '$nonEmptyObject' from external module "/home/cdiesh/msttest2/node_modules/mobx-state-tree/dist/types/complex-types/model" but cannot be named.

6 export const HelloWithSnapshotProcessor = types.snapshotProcessor(Hello, {
               ~~~~~~~~~~~~~~~~~~~~~~~~~~
```
