import RightCard from './RightCard';

const RightContent = (props) => {

  return (
    <div id="right" className=" h-full w-2/3 p-6  overflow-x-auto flex flex-nowrap gap-4  ">
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
