import sarees from './sarees';
import { Link } from 'react-router-dom';

function SareeList() {
  return (
    <div className="saree-list">
      {sarees.map(saree => (
        <div key={saree.id} className="saree-card">
          <Link to={`/saree/${saree.id}`}>
            <img src={saree.image} alt={saree.name} className="saree-img" />
            <h3>{saree.name}</h3>
          </Link>
          <p>Model: {saree.model}</p>
          <p>Price: ₹{saree.price}</p>
          <p>
            {saree.available ? (
              <span className="available">Available</span>
            ) : (
              <span className="not-available">Not Available</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SareeList;
