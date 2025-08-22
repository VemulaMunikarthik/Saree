import sarees from './sarees';
import { useParams, Link } from 'react-router-dom';

function SareeDetail() {
  const { id } = useParams();
  const saree = sarees.find(s => s.id === Number(id));
  if (!saree) {
    return (
      <div>
        <h2>Saree Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
  return (
    <div className="saree-detail">
      <img src={saree.image} alt={saree.name} className="saree-img" />
      <h2>{saree.name}</h2>
      <p>Model: {saree.model}</p>
      <p>Price: ₹{saree.price}</p>
      <p>
        {saree.available ? (
          <span style={{ color: "green" }}>Available</span>
        ) : (
          <span style={{ color: "red" }}>Not Available</span>
        )}
      </p>
      <p>{saree.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default SareeDetail;
