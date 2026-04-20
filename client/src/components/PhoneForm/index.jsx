import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import styles from './PhoneForm.module.scss';
import { createPhoneThunk } from '../../store/slices/phoneSlice';

function PhoneForm ({ createPhone }) {
  const initialValues = {
    model: '',
    brand: '',
    yearProduction: '',
    sizeRam: '',
    cpu: '',
    screenDiagonal: '',
    isNfc: false,
  };

  const handleSubmit = (values, formikBag) => {
    createPhone(values);
    formikBag.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='brand'>Бренд</label>
          <Field className={styles.input} id='brand' name='brand' type='text' />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='model'>Модель</label>
          <Field className={styles.input} id='model' name='model' type='text' />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='sizeRam'>RAM</label>
          <Field className={styles.input} id='sizeRam' name='sizeRam' type='text' placeholder='напр. 8GB' />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='cpu'>Процесор</label>
          <Field className={styles.input} id='cpu' name='cpu' type='text' />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='screenDiagonal'>Діагональ екрану</label>
          <Field className={styles.input} id='screenDiagonal' name='screenDiagonal' type='text' placeholder='напр. 6.1' />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor='yearProduction'>Рік випуску</label>
          <Field className={styles.input} id='yearProduction' name='yearProduction' type='date' />
        </div>
        <label className={styles.checkboxRow}>
          <Field type='checkbox' name='isNfc' />
          <span className={styles.checkboxLabel}>Є NFC</span>
        </label>
        <button className={styles.submit} type='submit'>Додати телефон</button>
      </Form>
    </Formik>
  );
}

const mapStateToProps = ({ phoneData }) => phoneData;
const mapDispatchToProps = dispatch => ({
  createPhone: values => dispatch(createPhoneThunk(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);
