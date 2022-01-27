import './styles.css'

import './lib/L.switchBasemap/L.switchBasemap.css'
import './lib/L.switchBasemap/L.switchBasemap.js'

const map = L.map('map', {attributionControl:false}).setView([51.505, -0.09], 13);

const basemapsSwitcher = new L.basemapsSwitcher([
    {
      layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map),
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