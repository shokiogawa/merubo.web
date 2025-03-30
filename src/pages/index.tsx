import type { NextPage } from "next";
import Image from "next/image";
import Store from "../components/Store";
import MeruboIcon from "../components/MeruboIcon";
import CircleDesign from "../feature/cooporate/components/CircleDesign";
import HeadSeo from "../components/HeadSeo";
import { Box, Button, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <HeadSeo />
      <main>
        {/* 上部 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { md: "90vh" }, // 必要に応じて高さを調整
          }}
        >
          <Box
            sx={{
              flex: 3,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // borderStartEndRadius: "50px",
              margin: "20px",
              // borderEndEndRadius: "50px",
              borderRadius: { xs: "20px", md: "50px" },
              padding: "20px",
            }}
          >
            {/* 説明 */}
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <Typography
                sx={{
                  marginBottom: "10px",
                  fontSize: { xs: "25px", md: "35px" },
                  fontWeight: "bold",
                }}
              >
                寄せ書きを
                <br />
                1つのアプリに
              </Typography>
              <Box sx={{ padding: "15px" }}>
                <MeruboIcon />
              </Box>
              <Typography
                sx={{
                  letterSpacing: "2px",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "25px",
                }}
              >
                寄せ書き作成 & 管理アプリ merubo <br />
                おしゃれなデザインで寄せ書きを作成しましょう。
                <br />
                web上 or アプリで寄せ書きを確認できます。
              </Typography>
              <Box sx={{ margin: "40px 15px 15px 15px" }}>
                <Store />
              </Box>
              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkorange",
                  },
                  padding: "10px 20px",
                  marginTop: "20px",
                  fontSize: "16px",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  // androidだとprocess.env.NEXT_PUBLIC_ANDROID_URL
                  // iOSだとprocess.env.NEXT_PUBLIC_IOS_URL
                  // に遷移させる。
                }}
              >
                寄せ書きを作成する
              </Button> */}
            </Box>
          </Box>
          <Box
            sx={{
              flex: 5,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Image
                src={"/image/manage_message_bord.png"}
                width={200}
                height={400}
                alt={""}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingTop: "10px",
                }}
              >
                寄せ書きを管理する
              </Typography>
            </Box>
            <Box>
              <Image
                src={"/image/create_message_bord.png"}
                width={200}
                height={400}
                alt={""}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingTop: "10px",
                }}
              >
                寄せ書きを作成する
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* スライドショー */}
        <Box>
          <Typography></Typography>
        </Box>
      </main>
    </>
  );
};

export default Home;
