import { useState } from 'react';

const GallerySection = (props) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Gallery data
  const galleryItems = [
    { id: 1, category: 'performance', title: 'Performance Tuning', imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, category: 'maintenance', title: 'Regular Maintenance', imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, category: 'custom', title: 'Custom Builds', imageUrl: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/103795/r15-right-side-view-7.png?isig=0&q=80&wm=3' },
    { id: 4, category: 'performance', title: 'Engine Upgrade', imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 5, category: 'parts', title: 'Genuine Parts', imageUrl: 'https://imgd.aeplcdn.com/272x153/n/cw/ec/145655/x440-right-front-three-quarter-6.jpeg?isig=0&q=80' },
    { id: 6, category: 'custom', title: 'Paint Jobs', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-goan-classic-350-single-tone1735911616652.jpg?q=80' },
  ];

  // Filter gallery items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Our Work Gallery</h2>
        <p className="subtitle">Explore our motorcycle services and custom builds</p>
        
        {/* Filter buttons */}
        <div className="filter-buttons">
          <button 
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All Works
          </button>
          <button 
            className={activeFilter === 'performance' ? 'active' : ''}
            onClick={() => setActiveFilter('performance')}
          >
            Performance
          </button>
          <button 
            className={activeFilter === 'maintenance' ? 'active' : ''}
            onClick={() => setActiveFilter('maintenance')}
          >
            Maintenance
          </button>
          <button 
            className={activeFilter === 'custom' ? 'active' : ''}
            onClick={() => setActiveFilter('custom')}
          >
            Custom Builds
          </button>
          <button 
            className={activeFilter === 'parts' ? 'active' : ''}
            onClick={() => setActiveFilter('parts')}
          >
            Parts
          </button>
        </div>
        
        {/* Gallery grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1>{props.name}</h1>
    </section>

  );
};

export default GallerySection;