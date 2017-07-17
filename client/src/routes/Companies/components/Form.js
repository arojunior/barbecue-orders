import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from 'redux-form-field-wrapper'
import {Col, Button, FormGroup} from 'react-bootstrap'

import fieldConfig from '../../../components/FormConfig'

const Form = props => {
  const {handleSubmit, pristine, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field
        type="text"
        name="name"
        placeholder="Company name"
        label="Name"
        validate={required}
        {...fieldConfig}
      />
      <Field
        type="text"
        name="eni"
        placeholder="a.k.a CNPJ in Brazil"
        label="ENI"
        validate={required}
        {...fieldConfig}
      />
      <Col md={5} mdOffset={5}>
        <FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={pristine || submitting}>
            Save
          </Button>
        </FormGroup>
      </Col>
    </form>
  )
}

export default reduxForm({
  form: 'formNewCompany'
})(Form)
