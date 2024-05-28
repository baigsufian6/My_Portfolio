import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contact1 from '../images/contact1.png';

function App(props) {
  const schema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    age: z.number().min(1),
    message: z.string().min(2),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitData = (data) => {
    let newarr = [];
    newarr.push(data);
    console.log("it worked", data);
  };

  return (
    <>
     <div className="contactHeader" id="contactHeader">
        <h5>CONTACT</h5>
        <h1 style={{color: props.mode ? "black" : "#6c757d"}}>Contact With Me</h1>
      </div>
    <div className="fullBody">
    <div className="formRight" >
      <div className="valid" >
        <form className="form" onSubmit={handleSubmit(submitData)} style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
          <div className="shortBox">
            <div className="fixTrial">
              <label> First Name </label>
              <input type="text" {...register("firstName")} />
              {errors.firstName && (
                <span className="errors">Please Enter First Name</span>
              )}
            </div>
            <div className="fixTrial2">
              <label> Last Name </label>
              <input type="text" {...register("lastName")} />
              {errors.lastName && (
                <span className="errors">Please Enter Last Name</span>
              )}
            </div>
          </div>
          <label> Email </label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <span className="errors">Please Enter Valid Email</span>
          )}
          <label> Age </label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <span className="errors">Please Enter Age</span>}
          <label> Message </label>
          <textarea className="messages" type="text" {...register("message")} />
          {errors.message && (
            <span className="errors">Please Enter Message</span>
          )}

          <input type="submit" />
        </form>
      </div>
      </div>


      <div className="formLeft" style={{boxShadow:props.mode ? "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff" : "none"}}>
            <div className="imgClass">
              <img className="formImg" src={contact1} alt="np img"></img>
            </div>
            <div className="formLeftContent">
              <h2 >Sufian Baig</h2>
              <h3 className="second">Chief Operating Officer</h3>
              <h3>I am available for freelance work. Connect</h3>
              <h3 className="third"> with me via and call in to my account.</h3>
              <h3>Phone: +91 9741039826</h3>
              <h3 className="fourth">Email: baigsufian6@gmail.com</h3>
              <div className="social-icons">
            <h4 id="line1">FIND ME</h4>
            <a href="/" className="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="/" className="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/" className="">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
            </div>

      </div>
      </div>
    </>
  );
}

export default App;
