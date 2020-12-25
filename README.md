<h1 align="center">
  react-addbackground
</h1>

<p align="center">
<img alt="workflow" src="https://img.shields.io/github/workflow/status/mat-sz/react-addbackground/CI">
<a href="https://npmjs.com/package/react-addbackground">
<img alt="npm" src="https://img.shields.io/npm/v/react-addbackground">
<img alt="npm" src="https://img.shields.io/npm/dw/react-addbackground">
<img alt="NPM" src="https://img.shields.io/npm/l/react-addbackground">
</a>
</p>

**react-addbackground** is a React.js library for [addbackground](https://github.com/mat-sz/addbackground).

## Installation

**react-addbackground** is [available on NPM](https://npmjs.com/package/react-addbackground), and can be installed with either npm or yarn:

```
yarn add react-addbackground
```

## Usage

See: [Example](https://github.com/mat-sz/react-addbackground/tree/master/example).

```tsx
import React from 'react';
import { Background } from 'react-addbackground';

const App = () => {
  return (
    <div style={{ minHeight: '400px', position: 'relative' }}>
      <Background type="triangles" backgroundColor="black" />
    </div>
  );
};
```
