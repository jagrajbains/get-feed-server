import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "../../utils/formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={SurveyField}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          style={{ marginTop: "10px" }}
          onReset={() => this.props.reset()}
          onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn white-text">
            Cancel
          </Link>
          <button
            className="btn yellow darken-3 waves-effect waves-light white-text"
            type="reset"
            style={{ marginLeft: "10px" }}
          >
            Clear
          </button>
          <button
            className="btn green white-text right waves-effect waves-light"
            type="submit"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
