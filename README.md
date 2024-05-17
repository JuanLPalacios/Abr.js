# Abr.js

[![npm](https://img.shields.io/npm/v/abr-js)](https://www.npmjs.com/package/abr-js)
[![license](https://img.shields.io/github/license/JuanLPalacios/abr.js)](https://github.com/JuanLPalacios/abr.js/blob/master/LICENSE)

JavaScript abr format parser based on the Krita Abr Storage.

## Quick Start

1. Import the async functions `loadAbrBrushes` for `File` objects or `loadAbrFromArrayBuffer` for `ArrayBuffer`.
2. User either use a callback function `loadAbrBrushes(file).then(callback)` or await syntax `let brushes = await loadAbrBrushes(file)`, to get the brushes data in an array of `AbrBrush`.

```javascript
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

## Built With

- TypeScript
- RollUp

## Author

👤 **Juan Luis Palacios**

- GitHub: [@JuanLPalacios](https://github.com/JuanLPalacios)
- Twitter: [@JuanLuisPalac20](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/juan-luis-palacios-p%C3%A9rez-95b39a228/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

### The Krita contributors
- [Boudewijn Rempt](boud@valdyas.org)
- [Lukáš Tvrdý](lukast.dev@gmail.com)
- [Eric Lamarque](eric.lamarque@free.fr)


## 📝 License

This project is [GPL-2.0](./LICENSE) licensed.
