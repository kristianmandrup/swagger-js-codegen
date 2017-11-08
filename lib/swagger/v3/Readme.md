# Open API v3 generator

We will build a more generic generator that is useful to generate a full setup on both client and server.

## Strategy

To achieve this, we need to escape the contstraints of iterating the full nested structure and instead iterate a nested tree structure with nodes that are meaningful for each usecase

For routes (on client or server), we should have a `Routes` node with a list of `Route` objects.

Our end-product generator should only know how to take a `Route` object and create route code as the output.

## Specification

[Open API v3 specs](https://swagger.io/specification/)
