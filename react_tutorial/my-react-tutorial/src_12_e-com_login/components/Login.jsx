import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";

const userSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(5).max(15),
//   email: z.email(),
});

export default function Login({setIsLoggedIn}){
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema)});
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(function(data){
                console.log(data);
                if(data.username == "admin" && data.password=="admin123"){
                    console.log("Valid");
                    setIsLoggedIn(true);
                    navigate("/item-list")
                } else {
                    console.log("invalid")
                }
            })}>
                <label>Username</label>
                <input value="admin" type="text" {...register('username')}/>
                {errors.username && <p>Username minimum 3 char required.</p>}
                <br />
                <label>Password</label>
                <input value="admin123" type="text" {...register('password')}/>
                {errors.password && <p>Password 5&lt;=length=&gt;15</p>}

                <br />
                <button type="submit">Login</button>
            </form>

            {/* <button onClick={function(){
                setIsLoggedIn(true);
            }}>Login</button> */}
        </div>
    );
}