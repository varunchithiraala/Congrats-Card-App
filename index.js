const element = (
    // Write your code here.
    <div className="congrats-card-container">
        <h1 className="congrats-card-heading">Congratulations</h1>
        <div className="congrats-card">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="profile-img" />
            <h1 classname="card-title">Kiran V</h1>
            <p className="card-description">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="watch-img" />
        </div>
    </div>
  );
  
ReactDOM.render(element, document.getElementById('root'));