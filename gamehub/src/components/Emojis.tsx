import Meh from "../assets/meh.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import BullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emojis({ rating }: Props) {
  if (rating < 3) return null;

  const EmojiMap: { [key: number]: ImageProps } = {     //used index signature
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "excellent", boxSize: "35px" },
  };

  return <Image {...EmojiMap[rating]} marginTop={1}/>;
}

export default Emojis;
