import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField, {required, email} from 'redux-form-field-wrapper'
import {Col, Button, FormGroup} from 'react-bootstrap'

const fieldConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-9',
  labelClass: 'col-md-3 control-label',
  className: 'form-control',
  component: renderField
}

const Form = props => {
  const {handleSubmit, pristine, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
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
        validate={required}
        {...fieldConfig}
      />
      <Col md={5} mdOffset={5}>
        <FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={pristine || submitting}>
            Sign in
          </Button>{' '}
          <a href="#" className="btn btn-warning">
            Sign up
          </a>
        </FormGroup>
      </Col>
    </form>
  )
}

export default reduxForm({
  form: 'formLogin'
})(Form)
