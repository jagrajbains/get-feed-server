import React from "react";
import { connect } from "react-redux";
import formFields from "../../utils/formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const renderFormFields = formFields.map(({ label, name }) => {
    return (
      <div key={name} style={{ marginBottom: "10px" }}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h3>Please review your entries.</h3>
      {renderFormFields}
      <button
        className="btn yellow darken-3 waves-effect waves-light"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="btn green waves-effect waves-light right"
      >
        Send Survey!<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
