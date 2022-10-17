// import axios from "axios";

const Admin = () => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    // const dataForm = new FormData(e.target);
    // axios.post("http://localhost:5000/test").then()
    // const data = Object.fromEntries(dataForm);
    // const reader = new FileReader();
    // reader.readAsDataURL(data.songFile);
    // reader.onloadend = () => {
    //   console.log(reader.result);
    // };
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
