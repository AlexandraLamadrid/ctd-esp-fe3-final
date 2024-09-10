import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/DentistDetail.css';
import { useParams } from 'react-router-dom';

function DentistDetail() {
  const { id } = useParams(); // Obtén el ID de la URL usando useParams
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        console.log(response.data); // Verifica los datos en la consola
        setDentist(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error); // Verifica el error en la consola
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading dentist details.</div>;

  if (!dentist) return <div>No dentist found</div>;

  return (
    <div className="dentist-detail-container">
      <img src="/public/images/doctor.jpg" alt="" />
      <h1>{dentist.name}</h1>
      <p><strong>Username:</strong> {dentist.username}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
    </div>
  );
}

export default DentistDetail;
