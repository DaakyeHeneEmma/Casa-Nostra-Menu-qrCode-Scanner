import Imagery from "../../components/ImageProp";
import Items from "../../components/ImageJson";

const MainPage = () => {
  return (
    <>
      {Items && Items.map((item, index) => (
        <Imagery
          alt={item.alt}
          source={item.source}
          key={index}
        />
      ))}
      <div>v</div>
    </>
  );
};

export default MainPage;
