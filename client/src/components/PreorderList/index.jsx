import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPhonePreordersThunk } from '../../store/slices/phoneSlice';
import { useEffect } from 'react';

function PreorderList ({ getOpdersByPhoneId, preorders }) {
  const { id } = useParams();
  useEffect(() => {
    getOpdersByPhoneId(id);
  }, []);

  return (
    <div>
      {preorders.map(p => (
        <article key={p.id}>
          <p>Date processing: {p.dateProcessing}</p>
          <p>Status: {p.status}</p>
          <p>Count phone: {p.countPhone}</p>
          <p>Client Phone: {p.clientPhoneNumber}</p>
          <p>Client id: {p.phoneId}</p>
        </article>
      ))}
    </div>
  );
}

const mapStateToProps = ({ phoneData }) => phoneData;

const mapDispatchToProps = dispatch => ({
  getOpdersByPhoneId: id => dispatch(getPhonePreordersThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreorderList);
