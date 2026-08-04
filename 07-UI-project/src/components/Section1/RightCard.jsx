import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className="relative w-80 shrink-0 h-full overflow-hidden rounded-4xl">
      <img
        src={props.img}
        alt="Working professional"
        className="w-full h-full object-cover"
      />

      <RightCardContent id={props.id } intro={props.intro} tag = {props.tag}/>
    </div>
  );
};

export default RightCard;
