import React from 'react'
import { MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

import L, { map } from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
const customMarker = new L.icon({
    iconUrl: icon,
    iconSize: [30, 45], 
    iconAnchor: [15,45]
})
L.Marker.prototype.options.icon = customMarker;

const OSMap = ({longitude, latitude}) => {
  
const mapStyles = {
    width: '400px',
    height: '400px',
    border: '3px solid lightgrey',
    borderRadius: '3px'    
} 


return (    
    <MapContainer style={mapStyles} center={[latitude, longitude]} zoom={1} scrollWheelZoom={true}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[latitude, longitude]}>
            <Popup>
                Add info about location here...
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default OSMap