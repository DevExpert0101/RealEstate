import userData from "../../../data/userData";

const PorfolioSummary = () => {
  return (
    <div className="account-content">
      <div className="account-content-single">
        {/* <div className="intro">
          <h5>Notifications </h5>
        </div> */}
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Work Experience</h6>
            <p>{userData.workExperience}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Qualifications</h6>
            <p>{userData.qualifications}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Projects</h6>
            <p>{userData.projects}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Skills</h6>
            <p>{userData.skills}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Certifications</h6>
            <p>{userData.certifications}</p>
          </div>          
        </div>
      </div>
      {/* <div className="delete-account">
        <div className="delete-content">
          <h6>Email</h6>
          <p className="secondary">
            {userData.email}
          </p>
        </div>
        <Link href="#" className="button button--effect">
          Delete
        </Link>
      </div> */}
    </div>
  );
};

export default PorfolioSummary;
