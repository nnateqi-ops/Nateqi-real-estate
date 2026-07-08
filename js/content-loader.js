/**
 * Content loader — loads all site content from JSON files.
 * This file fetches listings, homepage content, and contact info.
 */

(async function () {
  'use strict';

  /**
   * Load JSON file with error handling
   */
  async function loadJSON(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        console.error(`Failed to load ${path}: ${response.status}`);
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error(`Error loading ${path}:`, error);
      return null;
    }
  }

  /**
   * Load all content files
   */
  async function loadAllContent() {
    const [listings, homepage, contact] = await Promise.all([
      loadJSON('/content/listings/listings.json'),
      loadJSON('/content/site/homepage.json'),
      loadJSON('/content/site/contact.json')
    ]);

    // Build SITE_DATA structure for backward compatibility
    window.SITE_DATA = {
      // Agent info from contact.json
      agent: contact?.agent || {},
      
      // Contact details
      contact: contact?.contact || {},
      
      // Address with coordinates
      address: contact?.address || {},
      
      // Social media links
      social: contact?.social || {},
      
      // Footer content
      footer: contact?.footer || {},
      
      // Listings from listings.json
      listings: listings || [],
      
      // Homepage content
      homepage: homepage || {},
      
      // Individual sections for easy access
      services: homepage?.services || [],
      benefits: homepage?.benefits || [],
      testimonials: homepage?.testimonials || []
    };

    // Trigger custom event to notify other scripts that content is loaded
    window.dispatchEvent(new CustomEvent('contentLoaded'));
    
    return window.SITE_DATA;
  }

  // Load content when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllContent);
  } else {
    await loadAllContent();
  }
})();
