// import React from "react";
// // import SwipeableViews from "react-swipeable-views";
// import Button from "components/button/Button";

// const Slider = ({ threeSongs }) => {
//   return (
//     <section className="flex pt-5 min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
//       <SwipeableViews enableMouseEvents>
//         {threeSongs.map((song) => {
//           return (
//             <SwipeableViews>
//               <div>
//                 <h1 className="p-5 text-white text-4xl font-bold">
//                   {song.artist}
//                 </h1>
//                 <p className="pl-5 text-grey">
//                   We recommend you listen <span>{song.title}</span>
//                 </p>
//                 <Button
//                   type={"button"}
//                   text={"Play"}
//                   radius={"12px"}
//                   // onClick={onLogout}
//                   bg={"mainButtonBg"}
//                 />
//                 <img
//                   src={song.songImage}
//                   alt={song.artist}
//                   className="bg-cover"
//                 />
//               </div>
//             </SwipeableViews>
//           );
//         })}
//       </SwipeableViews>
//     </section>
//   );
// };

// export default Slider;
