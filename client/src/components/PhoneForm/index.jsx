import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import styles from './PhoneForm.module.scss';
import { createPhoneThunk } from '../../store/slices/phoneSlice';
import { useEffect } from 'react';

function PhoneForm ({ phones, isFetching, error, createPhone }) {
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
    console.log('values :>> ', values);
    formikBag.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {formikProps => {
        return (
          <Form>
            <label>
              Brand:
              <Field name='brand' type='text' />
            </label>
            <br />
            <label>
              Model:
              <Field type='text' name='model' />
            </label>
            <br />
            <label>
              Size Ram:
              <Field type='text' name='sizeRam' />
            </label>
            <br />
            <label>
              CPU:
              <Field type='text' name='cpu' />
            </label>
            <br />
            <label>
              Screen Diagonal
              <Field type='text' name='screenDiagonal' />
            </label>
            <br />
            <label>
              Year Production
              <Field type='date' name='yearProduction' />
            </label>
            <br />
            <label>
              Nfc:
              <Field type='checkbox' name='isNfc' />
            </label>
            <button type='submit'>Додати</button>
          </Form>
        );
      }}
    </Formik>
  );
}
const mapStateToProps = ({ phoneData }) => phoneData;

const mapDispatchToProps = dispatch => ({
  createPhone: values => dispatch(createPhoneThunk(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);
