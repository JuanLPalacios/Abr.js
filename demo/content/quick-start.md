# Quick Start

## Installation

You can install `Abr.js` via npm:

```bash
npm install abr-js
```

The npm package includes types.

## How to Use

1. Import the async functions `loadAbrBrushes` for `File` objects or `loadAbrFromArrayBuffer` for `ArrayBuffer`.
2. User either use a callback function `loadAbrBrushes(file).then(callback)` or await syntax `let brushes = await loadAbrBrushes(file)`, to get the brushes data in an array of `AbrBrush`.

## Load local files

```javascript [g1:JavaScript]
const { loadAbrBrushes } from 'abr-js';

const filePicker = document.createElement('input');
filePicker.type = 'file';
filePicker.onchange = async ()=>{
    const file = filePicker.files[0]
    if(file){
        let brushes = await loadAbrBrushes(file);
        console.log(brushes);
    }
}
document.body.appendChild(filePicker)
```

```typescript [g1:TypeScript]
const { loadAbrBrushes } from 'abr-js';

const filePicker:HTMLInputElement = document.createElement('input');
filePicker.type = 'file';
filePicker.onchange = async ()=>{
    const file = filePicker.files[0]
    if(file){
        let brushes = await loadAbrBrushes(file);
        console.log(brushes);
    }
}
document.body.appendChild(filePicker)

```