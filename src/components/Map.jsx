import React, { useMemo, useState } from 'react';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import '../styles/Map.css';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBIy94Y4rd-uMzwE72Joe36DjuqHRt2G6c',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapInstance />;

  function MapInstance() {
    const [infoWindowOpen, setInfoWindowOpen] = useState(true);
    const location = useMemo(
      () => ({
        address: '75 Yerba Buena Ave San Francisco, CA 94127',
        lat: 37.73779582025288,
        lng: -122.46378630813348,
      }),
      []
    );
    const handleInfoWindowToggle = () => {
      setInfoWindowOpen(!infoWindowOpen);
    };
    return (
      <GoogleMap zoom={17} center={location} mapContainerClassName="Map">
        <MarkerF position={location} onClick={handleInfoWindowToggle}>
          {infoWindowOpen && (
            <InfoWindowF
              position={location}
              onCloseClick={handleInfoWindowToggle}
            >
              <div className="Map__infoWindow">{location.address}</div>
            </InfoWindowF>
          )}
        </MarkerF>
      </GoogleMap>
    );
  }
};

export default Map;
