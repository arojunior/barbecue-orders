import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from 'redux-form-field-wrapper'
import {Col, Button, FormGroup} from 'react-bootstrap'

import fieldConfig from '../../../components/FormConfig'

const Form = props => {
  const {
    handleSubmit,
    changeCompany,
    companies,
    products,
    pristine,
    invalid,
    submitting
  } = props

  const companiesOptions = companies.map(companie => ({
    name: companie.name,
    value: companie.id
  }))
  companiesOptions.unshift({name: ''})

  const productsOptions = products.map(product => ({
    name: product.description,
    value: product.id
  }))
  productsOptions.unshift({name: ''})

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field
        {...fieldConfig}
        name="company"
        label="Company"
        type="select"
        onChange={changeCompany}
        selectOptions={companiesOptions}
        validate={required}
      />
      <Field
        {...fieldConfig}
        name="product"
        label="Product"
        type="select"
        selectOptions={productsOptions}
      />
      <Field {...fieldConfig} type="text" name="quantity" label="Quantity" />
      <Col mdOffset={7}>
        <FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={pristine || invalid || submitting}>
            Add Product
          </Button>
        </FormGroup>
      </Col>
    </form>
  )
}

const validate = values => {
  const errors = {}

  if (required(values.product)) {
    errors.product = ' '
  }
  if (required(values.quantity)) {
    errors.quantity = ' '
  }
  return errors
}

export default reduxForm({
  form: 'formNewOrder',
  validate
})(Form)
