import { RiArrowRightLine } from '@remixicon/react';
const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0  p-6 flex flex-col justify-between">
      <h2 className="text-5xl font-bold text-white">{props.id+1}</h2>

      <div>
        <p className="text-white text-lg leading-relaxed">{props.intro}</p>

        <div className="flex items-center justify-between mt-6">
          <button className="px-5 py-2 rounded-full bg-white text-black font-medium">
            {props.tag}
          </button>

          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <RiArrowRightLine size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
