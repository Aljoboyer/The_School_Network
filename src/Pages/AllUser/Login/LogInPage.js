import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../Shared/Authentication/Authentication";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const LogInPage = () => {
  const [logindata, setLogindata] = useState({});
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { LoginUser, setUser } = useFirebase();

  const OnBlurHandler = (e) => {
    const fieldname = e.target.name;
    const fieldvalue = e.target.value;

    const newdata = { ...logindata };
    newdata[fieldname] = fieldvalue;
    setLogindata(newdata);
  };

  const onSubmitHandler = (e) => {
    fetch(`http://localhost:5000/checkUser?email=${logindata.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.userrole === "Principal" && role === "Principal") {
          LoginUser(logindata.email, logindata.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
              setUser(user);
              navigate("/PrincipalDashboard");
            })
            .catch((error) => {
              console.log("from login user", error.message);
            });
        } else if (data.userrole === "Teacher" && role === "Teacher") {
          LoginUser(logindata.email, logindata.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
              setUser(user);
              navigate("/TeachersDashboard");
            })
            .catch((error) => {
              console.log("from login user", error.message);
            });
        } else if (data.userrole === "Student" && role === "Student") {
          LoginUser(logindata.email, logindata.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
              setUser(user);
              navigate("/StudentDashboard");
            })
            .catch((error) => {
              console.log("from login user", error.message);
            });
        } else {
          alert("Sorry Unauthorised User");
        }
        e.target.reset();
      });
    e.preventDefault();
  };
  return (
    <div>
      <AllUserNavbar />

      <div className="bg-[url('https://i.ibb.co/8dRgbRP/LoginBg.jpg')] bg-cover ">
        <div className="pb-80  p-50 mx-auto pt-36 container">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col w-1/2 pt-5 mx-auto">
            <div className="mx-auto pt-5 pb-5">
              <select name="role" onBlur={(e) => setRole(e.target.value)}>
              <option value="">Choose Your Role</option>
                <option value="Principal">Principal</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                name="email"
                onBlur={OnBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                name="password"
                onBlur={OnBlurHandler}
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={onSubmitHandler}
                className="bg-cyan-500 hover:bg-cyan-900 text-blue-50  font-bold py-2 px-4 rounded-full"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <Foooter />
    </div>
  );
};

export default LogInPage;
