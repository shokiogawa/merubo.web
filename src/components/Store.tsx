import { Box } from "@mui/joy";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStore from "../../public/image/apple_iphone.svg";
const Store = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { md: "flex", sm: "block" },
          justifyContent: "center",
        }}
      >
        {/* Android画像 */}
        <Box
          component="div"
          className="android-imag-boxe"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href={process.env.NEXT_PUBLIC_ANDROID_URL as string}
            target="_blank"
          >
            <Image
              className="image"
              src="/../public/image/google.png"
              alt="Google Store画像"
              width="220"
              height="60"
              priority={true}
              style={{ width: 220, height: 60 }}
            />
          </Link>
        </Box>
        <Box
          component="div"
          sx={{ display: "inline-block", width: "20px" }}
        ></Box>
        {/* iOS画像 */}
        <Box className="ios-image-box">
          <Link
            href={process.env.NEXT_PUBLIC_IOS_URL as string}
            target="_blank"
          >
            <AppStore className="apple" />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Store;
