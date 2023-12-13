import { Box } from "@mui/joy";
import Image from "next/image";
export type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
};
const CircleDesign: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  top,
  bottom,
  left,
  right,
  zIndex,
}) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: { top },
          left: { left },
          bottom: { bottom },
          right: { right },
          zIndex: { zIndex },
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={true}
          style={{ width: width, height: height }}
        />
      </Box>
    </>
  );
};

export default CircleDesign;
