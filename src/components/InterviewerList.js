import React from "react";
import PropTypes from 'prop-types';
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

function InterviewerList(props) {

  const parsedInterviewers = props.interviewers.map((interviewer) => {
    return <InterviewerListItem
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={props.setInterviewer}
    />;
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>

  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;