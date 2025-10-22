import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "./Wraper";

const Create = () => {
  const [todos, setTodos] = useContext(todoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    (data.isCompleted = false), (data.id = nanoid());
    setTodos([...todos, data]);
    reset();
    toast.success("Created", { autoClose: 1000 });
  };
  return (
    <div className="w-[60rem] p-16">
      <h1 className="text-7xl font-thin">
        Set <span className="text-red-400">Reminders</span> for <br />
        tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-b w-full outline-none mt-16 text-2xl font-thin"
          type="text"
          {...register("title", { required: "Title can not be empty" })}
          placeholder="title"
        />
        <small className="text-red-500 text-sm">{errors?.title?.message}</small>
        <br />
        <br />
        <button className="bg-transparent border px-8 py-2 text-xl rounded-xl mt-8 active:scale-90">
          Create ToDo
        </button>
      </form>
    </div>
  );
};

export default Create;
