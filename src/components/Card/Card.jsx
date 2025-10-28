import { icons } from "../../constants/image";

const Card = (props) => {
  return (
    <div className="flex flex-col flex-grow gap-6 py-4 px-12 relative self-stretch justify-center items-center rounded-2xl bg-[#363C43] shadow-[5px_5px_4px_0_rgba(0,0,0,0.4)] h-2/5">
      {props.children}
      <img
        className="absolute top-4 left-3 transition-all hover:scale-110 cursor-pointer"
        src={icons.question}
        alt="help"
      />
      <img className="absolute left-3" src={icons.box} />
    </div>
  );
};

export default Card;
