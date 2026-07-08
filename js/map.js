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

  function getOfficeLocation() {
    const data = window.SITE_DATA;
    if (!data) return null;

    const agent = data.agent || {};
    const office = agent.address || data.address;
    if (!office?.lat || !office?.lng) return null;

    return { agent, office };
  }

  function initOfficeMap() {
    const container = document.getElementById('officeMap');
    const location = getOfficeLocation();

    if (!container || container.dataset.mapReady === 'true' || !location || typeof L === 'undefined') {
      return;
    }

    container.dataset.mapReady = 'true';

    const { agent, office } = location;
    const fullAddress = `${office.street}, ${office.city}, ${office.state} ${office.zip}`;
    const coords = [office.lat, office.lng];
    const map = createMap(container);

    L.marker(coords)
      .addTo(map)
      .bindPopup(
        `
        <div class="map-info">
          <strong class="map-info__title">${agent.name || 'Office'}</strong>
          <p class="map-info__address">${fullAddress}</p>
        </div>
      `
      );

    map.setView(coords, 16);

    // Recalculate tile layout once the container has its final size.
    requestAnimationFrame(() => {
      map.invalidateSize();
      map.setView(coords, 16);
    });
  }

  function bootMap() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOfficeMap);
    } else {
      initOfficeMap();
    }
  }

  window.addEventListener('contentLoaded', initOfficeMap);
  bootMap();
})();
