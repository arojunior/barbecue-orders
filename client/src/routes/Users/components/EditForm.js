import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required, email} from 'redux-form-field-wrapper'
import {Col, Button, FormGroup} from 'react-bootstrap'

import fieldConfig from '../../../components/FormConfig'

const Form = props => {
  const {handleSubmit, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field type="hidden" name="id" component="input" />
      <Field
        type="text"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        validate={(required, email)}
        {...fieldConfig}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        {...fieldConfig}
      />
      <Field
        type="password"
        name="confirm_password"
        placeholder="Confirm password"
        label="Confirm"
        {...fieldConfig}
      />
      <Col md={1} mdOffset={6}>
        <FormGroup>
          <Button type="submit" bsStyle="primary" disabled={submitting}>
            Save
          </Button>
        </FormGroup>
      </Col>
    </form>
  )
}

export default reduxForm({
  form: 'formEditUser'
})(Form)
