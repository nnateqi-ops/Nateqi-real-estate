/**
 * Office location map via Leaflet + OpenStreetMap (no API key required).
 */

(function () {
  'use strict';

  const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const TILE_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  function createMap(container) {
    const map = L.map(container, {
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.control.attribution({ prefix: false }).addTo(map);

    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 19,
    }).addTo(map);

    map.on('focus', () => {
      map.scrollWheelZoom.enable();
    });
    map.on('blur', () => {
      map.scrollWheelZoom.disable();
    });

    return map;
  }

  function initOfficeMap() {
    const container = document.getElementById('officeMap');
    const agent = window.SITE_DATA?.agent;
    const office = agent?.address;

    if (!container || !office?.lat || !office?.lng || typeof L === 'undefined') return;

    const fullAddress = `${office.street}, ${office.city}, ${office.state} ${office.zip}`;
    const map = createMap(container);

    L.marker([office.lat, office.lng])
      .addTo(map)
      .bindPopup(
        `
        <div class="map-info">
          <strong class="map-info__title">${agent.name}</strong>
          <p class="map-info__address">${fullAddress}</p>
        </div>
      `
      );

    map.setView([office.lat, office.lng], 15);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOfficeMap);
  } else {
    initOfficeMap();
  }
})();
