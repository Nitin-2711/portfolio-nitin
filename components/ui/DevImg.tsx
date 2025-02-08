import Image from "next/image"

interface obj {
  containerStyles: string;
  imgSrc: string;
  rounded?: string;
}
const DevImg = ({ containerStyles, imgSrc, rounded }: obj) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} className={`${rounded} shadow-[0px_0px_65px] brightness-90 shadow-indigo-500`} fill priority alt="" />
    </div>
  )
}

export default DevImg
