import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
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
        <h1>Contact With Me</h1>
      </div>
      <div className="valid">
        <form className="form" onSubmit={handleSubmit(submitData)}>
          <div className="shortBox">
            <div className="fixTrial">
              <label> First Name </label>
              <input type="text" {...register("firstName")} />
              {errors.firstName && (
                <span className="errors">{errors.firstName.message}</span>
              )}
            </div>
            <div className="fixTrial2">
              <label> Last Name </label>
              <input type="text" {...register("lastName")} />
              {errors.lastName && (
                <span className="errors">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <label> Email </label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <span className="errors">{errors.email.message}</span>
          )}
          <label> Age </label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <span className="errors">{errors.age.message}</span>}
          <label> Message </label>
          <textarea className="messages" type="text" {...register("message")} />
          {errors.message && (
            <span className="errors">{errors.message.message}</span>
          )}

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
