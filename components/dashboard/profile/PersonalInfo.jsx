import userData from "../../../data/userData";

const PersonalInformation = () => {
  return (
    <div className="account-content">
      <div className="account-content-single">
        {/* <div className="intro">
          <h5>Notifications </h5>
        </div> */}
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Name</h6>
            <p>{userData.name}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Phone Number</h6>
            <p>{userData.phone}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Address</h6>
            <p>{userData.address}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Email</h6>
            <p>{userData.email}</p>
          </div>          
        </div>
        <div className="account-content-single__inner">
          <div className="content">
            <h6>Linkedin</h6>
            <p>{userData.linkedin}</p>
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

export default PersonalInformation;
