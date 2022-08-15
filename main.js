import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';

const layers = [
    new TileLayer({
        // extent: [-13884991, 2870341, -7455066, 6338219],
        source: new TileWMS({
            url: 'https://geoserver-vhnguyen-geoserver-static.dev.aodn.org.au/geoserver/wms',
            // url: 'https://dj1grxrnja4ay.cloudfront.net/geoserver/wms',
            params: {'LAYERS': 'baselayers:default_basemap_simple', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            // transition: 0,
        }),
    })
];
const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        center: [15980800, -2457335],
        zoom: 4.5,
    }),
});
