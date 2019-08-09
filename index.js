import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { Fill, Stroke, Style, Text } from 'ol/style.js';


var style = new Style({
    fill: new Fill({
        color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new Stroke({
        color: '#319FD3',
        width: 1
    }),
    text: new Text()
});

var map = new Map({
    layers: [
        new VectorLayer({
            renderMode: 'image',
            source: new VectorSource({                
                url: 'https://localhost:3000/geojson/provincias-espanolas.geojson',
                format: new GeoJSON()
            }),
            style: function (feature) {
                style.getText().setText(feature.get('name'));
                return style;
            }
        })
    ],
    target: 'map',
    view: new View({
        center: [-826733.5036376151, 4187524.4502495513],
        zoom: 5
    })
});

var featureOverlay = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: new Style({
        stroke: new Stroke({
            color: '#f00',
            width: 1
        }),
        fill: new Fill({
            color: 'rgba(255,0,0,0.1)'
        })
    })
});

var highlight;
var displayFeatureInfo = function (pixel) {

    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
    });

    var info = document.getElementById('info');
    if (feature) {
        info.innerHTML = feature.get('ccaa') + ': ' + feature.get('provincia');
    } else {
        info.innerHTML = '&nbsp;';
    }

    if (feature !== highlight) {
        if (highlight) {
            featureOverlay.getSource().removeFeature(highlight);
        }
        if (feature) {
            featureOverlay.getSource().addFeature(feature);
        }
        highlight = feature;
    }

};

map.on('pointermove', function (evt) {
    if (evt.dragging) {
        return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
});

map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel);
    console.log(evt.pixel);
    if (evt.pixel[1] > 360 && evt.pixel[0] > 160) startGame();
});


// Get all CCAAs position
const startGame = () => {    
    baseColors['CAT'].getSource().addFeature(map.getFeaturesAtPixel([472, 118])[0]); // Girona
    baseColors['CAT'].getSource().addFeature(map.getFeaturesAtPixel([461, 133])[0]); // Barcelona
    baseColors['CAT'].getSource().addFeature(map.getFeaturesAtPixel([448, 117])[0]); // Lleida    
    baseColors['CAT'].getSource().addFeature(map.getFeaturesAtPixel([435, 160])[0]); // Tarragona
    baseColors['ARA'].getSource().addFeature(map.getFeaturesAtPixel([421, 115])[0]); // Huesca
    baseColors['ARA'].getSource().addFeature(map.getFeaturesAtPixel([390, 129])[0]); // Zaragoza
    baseColors['ARA'].getSource().addFeature(map.getFeaturesAtPixel([406, 165])[0]); // Teruel
    baseColors['NAV'].getSource().addFeature(map.getFeaturesAtPixel([378, 114])[0]); // Navarra
    baseColors['EUS'].getSource().addFeature(map.getFeaturesAtPixel([370, 91])[0]); // Navarra
    baseColors['EUS'].getSource().addFeature(map.getFeaturesAtPixel([355, 86])[0]); // Navarra
    baseColors['EUS'].getSource().addFeature(map.getFeaturesAtPixel([355, 97])[0]); // Navarra
    baseColors['CAN'].getSource().addFeature(map.getFeaturesAtPixel([320, 83])[0]); //
    baseColors['AUS'].getSource().addFeature(map.getFeaturesAtPixel([287, 89])[0]); //
    baseColors['GAL'].getSource().addFeature(map.getFeaturesAtPixel([247, 93])[0]);
    baseColors['GAL'].getSource().addFeature(map.getFeaturesAtPixel([247, 117])[0]);
    baseColors['GAL'].getSource().addFeature(map.getFeaturesAtPixel([227, 112])[0]);
    baseColors['GAL'].getSource().addFeature(map.getFeaturesAtPixel([227, 84])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([300, 99])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([290, 130])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([284, 158])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([306, 162])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([306, 141])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([311, 114])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([333, 114])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([328, 147])[0]);    
    baseColors['CYL'].getSource().addFeature(map.getFeaturesAtPixel([356, 135])[0]);    
    baseColors['LRJ'].getSource().addFeature(map.getFeaturesAtPixel([364, 119])[0]);    
    baseColors['VLC'].getSource().addFeature(map.getFeaturesAtPixel([420, 175])[0]);    
    baseColors['VLC'].getSource().addFeature(map.getFeaturesAtPixel([407, 200])[0]);    
    baseColors['VLC'].getSource().addFeature(map.getFeaturesAtPixel([404, 230])[0]);         
    baseColors['CLM'].getSource().addFeature(map.getFeaturesAtPixel([355, 167])[0]);
    baseColors['CLM'].getSource().addFeature(map.getFeaturesAtPixel([366, 184])[0]);
    baseColors['CLM'].getSource().addFeature(map.getFeaturesAtPixel([373, 212])[0]);
    baseColors['CLM'].getSource().addFeature(map.getFeaturesAtPixel([349, 214])[0]);
    baseColors['CLM'].getSource().addFeature(map.getFeaturesAtPixel([345, 198])[0]);
    baseColors['MAD'].getSource().addFeature(map.getFeaturesAtPixel([331, 176])[0]);
    baseColors['EXT'].getSource().addFeature(map.getFeaturesAtPixel([277, 194])[0]);
    baseColors['EXT'].getSource().addFeature(map.getFeaturesAtPixel([276, 223])[0]);
    baseColors['MUR'].getSource().addFeature(map.getFeaturesAtPixel([384, 249])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([254, 257])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([287, 258])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([336, 245])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([355, 256])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([368, 265])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([318, 274])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([286, 284])[0]);
    baseColors['AND'].getSource().addFeature(map.getFeaturesAtPixel([316, 259])[0]);
}








const createColorLayer = (colorString) => {
    return new VectorLayer({
        source: new VectorSource(),
        map: map,
        style: new Style({
            stroke: new Stroke({
                color: colorString,
                width: 1
            }),
            fill: new Fill({
                color: colorString
            })
        })});
}
// Setup base color for each CCAA
var baseColors = [];
baseColors['CAT'] = createColorLayer('rgba(255,0,0,0.1)');
baseColors['ARA'] = createColorLayer('rgba(0,255,0,0.1)');
baseColors['NAV'] = createColorLayer('rgba(0,0,255,0.1)');
baseColors['EUS'] = createColorLayer('rgba(255,255,0,0.1)');
baseColors['CAN'] = createColorLayer('rgba(0,255,255,0.1)');   
baseColors['AUS'] = createColorLayer('rgba(255,0,0,0.4)');
baseColors['GAL'] = createColorLayer('rgba(0,255,0,0.4)');
baseColors['CYL'] = createColorLayer('rgba(0,0,255,0.4)');
baseColors['LRJ'] = createColorLayer('rgba(255,127,0,0.4)');
baseColors['VLC'] = createColorLayer('rgba(127,255,0,0.4)');
baseColors['CLM'] = createColorLayer('rgba(0,127,255,0.4)');
baseColors['MAD'] = createColorLayer('rgba(0,255,127,0.4)');
baseColors['EXT'] = createColorLayer('rgba(255,0,127,0.4)');
baseColors['MUR'] = createColorLayer('rgba(127,0,255,0.4)');
baseColors['AND'] = createColorLayer('rgba(127,127,255,0.4)');
baseColors['BAL'] = createColorLayer('rgba(255,127,127,0.4)');
baseColors['CAN'] = createColorLayer('rgba(127,255,127,0.4)');


// baseColors.push({
//     name: 'CAT',
//     layer: new VectorLayer({
//         source: new VectorSource(),
//         map: map,
//         style: new Style({
//             stroke: new Stroke({
//                 color: '#f00',
//                 width: 1
//             }),
//             fill: new Fill({
//                 color: 'rgba(255,0,0,0.1)'
//             })
//         })
// })});

window.test = map;
