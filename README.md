# Testing Parcel

Seeing if [Parcel](https://parceljs.org/)  is suitable for use for packaging the trade-in leads component.

## Prerequisites

- Yarn
- Node 8
- NVM

## Setup

Run `make dev` to install dependencies.

Then use `yarn dev` to start a dev server with an example host page for the component.

The `dealer-site.html` shows an example of the component embedded on a page that does not use Vue normally. See it live
by running a local http server (e.g. `yarn http-server`) then browse to `http://localhost:8080/dealer-site.html`.

## Build

Run `yarn build` to build the production bundle.

## Deployment

TBD
