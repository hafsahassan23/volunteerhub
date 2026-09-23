import { useForm } from "react-hook-form"; //form submiison handled
import axios from "axios";
//Validations : z from zod and zodResolver from @hookform/resolvers/zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//schema = waxu qexaya waxa uu form ka yahay 
//errors walagu qoraa haduu user wax qaldan so galiyo  
//VALIDATIONS..
const forSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 chracters")
    .max(100, "Name must be under 100"),
  email: z
        .string()
        .email("Invalid Email"),

  phone: z
        .string()
        .min(10, "Phone must be at least 10 digits"),
});

function RegisterForm() {

  //SETUP THE REACT HOOK FORM
  const {
    register,
    handleSubmit, //use inside the form
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", phone: "" },
    resolver: zodResolver(forSchema), //zodresolver and validation for schema , input errors
  });

  //  Send data to the server 
  const onSend = async (data) => {
    //use axios to send data to server to add new volunteer
    //GET, POST, DELETE, Update

    try {
      
       await axios.post("http://localhost:3002/api/volunteers", data, {
         headers: {
           Contenttype: "application/json",
         },
       });
      reset();
//javscript time oo laba daqiqo sugayo waye
      // setTimeout (() => {
      //   navigate("/volunteers")
      // }, 2000);

    }catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Volunteer Registration
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSend)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            //input walbo lagu qoraa wana la ragister garenaa
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name here"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            //input walbo lagu qoraa wana la ragister garenaa
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email here"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            //input walbo lagu qoraa wana la ragister garenaa
            {...register("phone")}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Phone here"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary bg-green-300 p-2 rounded-md hover:bg-green-400 cursor-pointer">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
