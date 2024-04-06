const ExperienceBackbone = (props) => {
  return (
    <div className="job-section">
      <h2 className="job-title">{props.JobTitle}</h2>
      <h3 className="duration">{props.Duration}</h3>
      <hr />
      <h2 className="company_name">{props.Company}</h2>
      {props.desc.map((desc, index) => {
        return <li key={index}>{desc}</li>;
      })}
    </div>
  );
};

export default ExperienceBackbone;
