function importAll(r) {
    let images = {};
    r.keys().map((item) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const reqSvgs = importAll(require.context ( './assets/SVG/', true, /\.(png|jpe?g|svg)$/));
export default  reqSvgs;