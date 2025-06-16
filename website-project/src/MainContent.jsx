
import profilePic from "./assets/logo.jpg";

function MainContent() {
  return (
 <>
 <section className="container mt-4">
  <div className="row">
    <div className="col-md-6">
     <h2>About Page</h2>
<p>
  Explore my featured projects below to see how I approach front-end and full-stack development with creativity and precision.
</p>
    </div>
    <div className="col-md-6 text-center">
      <h2>My Picture</h2>
      <img src={profilePic} className="img-fluid rounded-circle" alt="Profile" width="200" />
    </div>
  </div>
  <div className="row mt-4">
  <div className="col-md-12 text-start">
    <h2>Quick Bio</h2>
    <ul className="list-group">
      <li className="list-group-item"><strong>Full Name:</strong> Farheen Azad</li>
      <li className="list-group-item"><strong>Occupation:</strong> Web Developer</li>
      <li className="list-group-item"><strong>Hobbies:</strong> Coding, Reading, Traveling</li>
    </ul>
  </div>
</div>

</section>
 </>
  )
}
export default MainContent;
