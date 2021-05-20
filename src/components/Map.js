import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import socket from "./Socket";


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize:     [12, 18], // size of the icon
    iconAnchor:   [6, 18],
    shadowSize:   [0, 0],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({flights}) => {

    // const [flights, setFlights] = useState([]);
    const [flightsInfo, setFlightsInfo] = useState(flights);

    useEffect(() => {
        socket.on("POSITION", data => {
            setFlightsInfo(flights => {
                let update_flight = null;
                for (let index = 0; index < flights.length; index++) {
                    let element = flights[index];
                    if (element.code === data.code) {
                        update_flight = element;
                        update_flight.positions = [...new Set(element.positions)];
                        update_flight.positions.push(data.position);
                    };
                };
                let new_flights = flights.filter((i) => i.code !== data.code);
                return [...new_flights, update_flight];
                
            })
        });
        return ()=>{socket.off()};
    }, []);


    return (
        <MapContainer center={[-35.0, -60]} zoom={4.5} scrollWheelZoom={false} style={{height: '60vh', width: '60wh'}} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {flightsInfo ? (        
            flightsInfo.map(f => {
            return(
                <React.Fragment>
                <Marker position={f.positions[f.positions.length-1]} key={f.code}>
                    <Popup>
                        {f.code}
                    </Popup>
                </Marker>
                <Polyline positions={f.positions} pathOptions={{color: "black"}}/>
                </React.Fragment>
                
        )})):null}
        {flightsInfo ? (
            flightsInfo.map(f=>{
                const new_color = f.color;
                return (
                <React.Fragment>
                    <Polyline positions={[f.origin,f.destination]} pathOptions={{color: new_color}}/>
                </React.Fragment>
                )

            })
        ):null}
      </MapContainer>
    );
  }
  
  export default Map;
