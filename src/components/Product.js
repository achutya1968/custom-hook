export default function Product(props) {
    const { id, image, description, price } = props;
    return (
      <div key={id}>
        <img src={image} alt="" height="250" />
        <h2>{description}</h2>
        <h2>${price}</h2>
      </div>
    );
  }