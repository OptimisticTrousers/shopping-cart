import Shimmer from "./Shimmer"

const SkeletonProductCard = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__image"></div>
      <div className="skeleton__details">
        <div className="skeleton__review"></div>
        <div className="skeleton__title"></div>
        <div className="skeleton__description"></div>
        <div className="skeleton__price"></div>
      </div>
      <Shimmer />
    </div>
  )
} 

export default SkeletonProductCard;