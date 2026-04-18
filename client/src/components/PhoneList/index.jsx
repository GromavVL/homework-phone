import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './PhoneList.module.scss';
import defaultImage from './samsung.webp';
import { GoCpu } from 'react-icons/go';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsMemory, BsPhone, BsWifi } from 'react-icons/bs';
import { MdCalendarMonth } from 'react-icons/md';
import { deletePhoneThunk, getPhoneThunk } from '../../store/slices/phoneSlice';

function PhoneList ({ getPhones, phones, isFetching, error, deletePhone }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className={styles.cardWrapper}>
      {phones.map(p => (
        <article className={styles.cardPhone} key={p.id}>
          <div className={styles.imageBox}>
            <img
              src={defaultImage}
              alt={`${p.brand} ${p.model}`}
              className={styles.defaultImage}
            />
          </div>

          <div className={styles.cardBody}>
            <h3 className={styles.title}>
              {p.brand} {p.model}
            </h3>

            <ul className={styles.specs}>
              <li>
                <GoCpu className={styles.icon} />
                <span>{p.cpu}</span>
              </li>
              <li>
                <BsMemory className={styles.icon} />
                <span>{p.sizeRam} RAM</span>
              </li>
              <li>
                <BsPhone className={styles.icon} />
                <span>{p.screenDiagonal}"</span>
              </li>
              <li>
                <MdCalendarMonth className={styles.icon} />
                <span>{new Date(p.yearProduction).getFullYear()}</span>
              </li>
            </ul>

            <div className={styles.footer}>
              <span
                className={`${styles.badge} ${
                  p.isNfc ? styles.badgeGreen : styles.badgeGray
                }`}
              >
                <BsWifi size={12} /> NFC {p.isNfc ? 'є' : 'немає'}
              </span>
            </div>
          </div>
          <button onClick={() => deletePhone(p.id)}>
            <FaRegTrashAlt />
          </button>
        </article>
      ))}
    </div>
  );
}

const mapStateToProps = ({ phoneData }) => phoneData;
const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhoneThunk()),
  deletePhone: id => dispatch(deletePhoneThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
