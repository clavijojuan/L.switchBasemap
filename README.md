# L.switchBasemap
An easy leaflet plugin to switch basemap

![image](https://user-images.githubusercontent.com/57905996/151394503-ee33793b-1d6e-4160-847e-ae854269728f.png)

Based and inspired on [Leaflet-IconLayers](https://github.com/ScanEx/Leaflet-IconLayers)

### [DEMO](https://elegant-meninsky-515912.netlify.app)

-----------------------------------------------------------------------------------
## Requirements

<ul>
  <li>Leaflet</li>
</ul>

## Install

### NPM

```
npm i leaflet-switch-basemap
```  

## Usage Example

An easy way to implement control to switch between basemaps

```javascript
new L.basemapsSwitcher([
  {
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map), //DEFAULT MAP
    icon: './assets/images/streets.PNG',
    name: 'Streets'
  },
  {
    layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
    icon: './assets/images/satelital.PNG',
    name: 'Satelital'
  },
  {
    layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'),
    icon: './assets/images/dark.PNG',
    name: 'Dark'
  },
], { position: 'topright' }).addTo(map);

```
L.switchBasemap receives two arguments:
<ul>
  <li>The first is an array of objects that contains basemap configs</li>
  <li>The second is an object with control options</li>
</ul>

### Basemap config

| Property | Type   | Required  | Description                         |
| ------------|--- | -------- | ----------------------------------------- |
| layer     | Leaflet layer | true     | A leaflet layer that can be used as basemap (example: L.tileLayer)            |
| icon | String |true| Path of the Image that will be display on the control |
| name | String  | true | Name of the layer |

### Options
| Option	  | Type | Default  | Description                       |
| ------------|--- | -------- | ----------------------------------------- |
| position	  |String | 'topright'    | Position of the control. Options: [leaflet control positions](https://docs.eegeo.com/eegeo.js/v0.1.665/docs/leaflet/L.Control/#control-positions) |
