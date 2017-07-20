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
        placeholder="Employer Identification Number"
        label="ENI"
        validate={required}
        {...fieldConfig}
      />
      <Col md={6} mdOffset={4}>
        * It is validating just brazilian id, a.k.a CNPJ
      </Col>
      <br />
      <br />
      <Col md={6} mdOffset={6}>
        <FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={pristine || submitting}>
            Save company
          </Button>
        </FormGroup>
      </Col>
    </form>
  )
}

export default reduxForm({
  form: 'formNewCompany'
})(Form)
