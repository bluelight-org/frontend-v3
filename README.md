<div align="center">
    <h1>Bluelight frontend</h1>
<strong>
    Bluelight is an open-source tool for fire departments.
</strong>
<br>
<img alt="GitHub tag checks state" src="https://img.shields.io/github/checks-status/bluelight-org/frontend-v3/main?style=for-the-badge">
<img alt="GitHub" src="https://img.shields.io/github/license/bluelight-org/frontend-v3?style=for-the-badge">
<img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/m/bluelight-org/frontend-v3?style=for-the-badge">

</div>

<hr>

<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2000px-Vue.js_Logo_2.svg.png" height="100">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height="100">
</div>

## Getting started

There is an hosted version of Bluelight available on URL, which is easier to use,
because we are maintaining it for you. Nevertheless you can host it yourself. But this
process requires a good knowledge of server administration. Therefore we recommend to
use our hosted version.

## What is Bluelight?

Bluelight is built to provide an fast and open source alerting system for
fire departments. It is free to use for everyone and can be easily hosted through docker or native setup.

## Technical background

The frontend uses VueJS as its main framework. Futhermore, Typescript is used many reasons. We use Jest and 
cypress for our frontend only tests. We try to outsource our components to other repos if they grow bigger and can be reused. This makes it possible to
version different components of the frontend system. We also try to build the software as exchangeable as possible. Abstractions are used to make it easy to migrate 
from one library to another. 

## System requirements

**General:**
- A modern browser like Chrome or Firefox

**The following applies only the the selfhosted instances:**
- Node 18
- Yarn 
- NPM 8
- (Docker)

## Further development

We try to improve our system from time to time. 
Our current goal is to build be base system of the application.
After that we might confront outselves with following issues:
- Plugin capability
- Community themes
- Extendability

## Developer documentation

- [Dashboard modules](docs/modules.md)

## Contributing

If you want to contribute you should definetly check out CONTRIBUTING file.
For further information please contact us on out discord server.

## Core team
Mathis Burger <kontakt@mathis-burger.de>

