import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom gold/yellow icon
// You can replace #D4AF37 with the specific hex code for your site's goldTan color
const goldIcon = new L.DivIcon({
  html: `<svg viewBox="0 0 32 32" width="32px" height="32px" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C10.48 0 6 4.48 6 10c0 8 10 22 10 22s10-14 10-22C26 4.48 21.52 0 16 0zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>`,
  className: '', // Prevents default Leaflet DivIcon styles
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location (bottom center of the pin)
  popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
});

const LeafletMap = () => {
  const position = [44.097420, -70.213043]; // Latitude and longitude for Lewiston, ME (The Cage)

  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={position} icon={goldIcon}> {/* Use the custom gold icon */}
        <Popup>
          The Cage <br /> 97 Ash St, Lewiston, ME 04240
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
