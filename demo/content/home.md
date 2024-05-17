# SequentialDataView.js

JavaScript abr format parser based on the Krita Abr Storage.

## Quick Start

1. Import the async functions `loadAbrBrushes` for `File` objects or `loadAbrFromArrayBuffer` for `ArrayBuffer`.
2. User either use a callback function `loadAbrBrushes(file).then(callback)` or await syntax `let brushes = await loadAbrBrushes(file)`, to get the brushes data in an array of `AbrBrush`.