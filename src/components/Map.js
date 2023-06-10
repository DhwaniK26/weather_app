// Libraries
import React from 'react'
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

// Modules
import MapHandler from '../modules/MapHandler';

export default function Map({locationData}) {

    Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
    
    return (
        <MapContainer className='w-100 h-100' center={[locationData.lat, locationData.lon]} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[locationData.lat, locationData.lon]}>
                <Popup>{locationData.name}</Popup>
            </Marker>
            <MapHandler center={[locationData.lat, locationData.lon]} zoom={11} />
        </MapContainer>
    )
}
