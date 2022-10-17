import { useMutation } from "@tanstack/react-query";
import { postSong } from "api/songs";

import { AuthContext } from "context/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Admin = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const postSongMutation = useMutation(
    (data) => {
      postSong(data, user);
    },
    {
      onSuccess: (res) => {
        console.log(res);
        toast.success(res);
      },
      onError: (error) => {
        toast.error(error.response.data);
      },
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    postSongMutation.mutate(data);
  };

  return (
    <div className="w-full h-screen bg-purple flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-grey flex flex-col p-10">
          Artist :
          <input type="text" name="artist" />
          Album :
          <input type="text" name="album" />
          Song :
          <input type="file" name="songFile" />
          Song Image:
          <input type="file" name="songImage" />
          Genre:
          <input type="text" name="genre" />
          <button className="mt-10 bg-black text-white">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};
export default Admin;
