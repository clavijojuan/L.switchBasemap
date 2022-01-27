# L.switchBasemap
An easy leaflet plugin to switch basemap

![image]()

### [DEMO](https://vibrant-perlman-43d7a4.netlify.app/)

-----------------------------------------------------------------------------------
## Requirements

<ul>
  <li>Leaflet</li>
  <li>Some Font Icons</li>
</ul>

## Install

### NPM

```
npm i leaflet-cascade-buttons
```  

## Usage Example

Easy way to implements buttons with cascade subgroup buttons where each one can have it functionality.

```javascript
new L.cascadeButtons([
    {icon: 'fas fa-home', direction:'horizontal', ignoreActiveState:true , command: () =>{console.log('test') }},
    {icon: 'fas fa-home', direction:'horizontal', items:[
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
    ]},
    {icon: 'fas fa-home', direction:'horizontal', items: [
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
        {icon: 'fas fa-home', command: () =>{console.log('test')}},
    ]},
], {position:'topleft', direction:'vertical'}).addTo(map);

```
L.cascadeButtons receives two arguments:
<ul>
  <li>The first is an array that contains every parent button and it children's.</li>
  <li>The second is an object with control options</li>
</ul>

### Parent properties

| Property | Type   | Default  | Description                         |
| ------------|--- | -------- | ----------------------------------------- |
| icon     | String | null     | Icon class of Font Icon             |
| direction| String |'Vertical'| Direction of stacked childs Buttons. Options: 'Vertical' and 'Horizontal' |
| ignoreActiveState | Boolean  | false | Flag boolean to ignore clicked button style |
| command  | Function | null or (expand or collapse if button has childs)   | Function to execute when button is clicked |
| items    | Child properties[] | null | Array of child properties |

### Child properties

| Property | Type   | Default  | Description                         |
| ------------|--- | -------- | ----------------------------------------- |
| icon     | String | null     | Icon class of Font Icon             |
| command  | Function | null or (expand or collapse if button has childs)   | Function to execute when button is clicked |

### Options
| Option	  | Type | Default  | Description                       |
| ------------|--- | -------- | ----------------------------------------- |
| position	  |String | 'bottomright'    | Position of the control. Options: [leaflet control positions](https://docs.eegeo.com/eegeo.js/v0.1.665/docs/leaflet/L.Control/#control-positions) |
| direction   |String     | 'horizontal'    | Stacked direction. Options: 'Vertical' and 'Horizontal' |
| className	  |String | ''       | className to customize control |


## Font Icons
Can be used with any font icon / custom library like:

<ul>
  <li>font awesome</li>
  <li>boostrap icons</li>
  <li>primeIcons</li>
  <li>custom</li>
</ul>
