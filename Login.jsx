import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Login.css"

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/login`,{
        method :"POST",
        headers : {
          "Content-Type" : "application/json"
        }, 
        body : JSON.stringify()
        
      });
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                     Log-in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
