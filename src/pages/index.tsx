import { Box, Button, Typography } from "@mui/joy";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import useWindowsSize from "../hooks/UseWindowsSize";
import CircleDesign from "../components/CircleDesign";
import Store from "../components/Store";
import MeruboIcon from "../components/MeruboIcon";

const Home: NextPage = () => {
  const { height, width } = useWindowsSize();
  return (
    <main>
      <Box
        component="section"
        className="top"
        sx={{ position: "relative", height: {} }}
      >
        {/* 背景デザインエリア */}
        <CircleDesign
          src={"/../public/image/firstcircle.png"}
          alt="小円"
          width={200}
          height={200}
          left="20px"
          bottom="5px"
          zIndex={-99}
        />
        <CircleDesign
          src={"/../public/image/firstcircle.png"}
          alt="小円"
          width={200}
          height={200}
          right="20px"
          top="5px"
          zIndex={-99}
        />
        <CircleDesign
          src={"/../public/image/grad_circle_org2.png"}
          alt="グラデーション円"
          width={500}
          height={500}
          bottom="0px"
          right="0px"
          zIndex={-99}
        />
        <CircleDesign
          src={"/../public/image/grad_circle_org.png"}
          alt="グラデーション円"
          width={500}
          height={500}
          left="0px"
          top="0px"
          zIndex={-99}
        />
        {/* コンソール */}
        <Box component="div" sx={{ height: "50px", textAlign: "right" }}>
          <Button sx={{ color: "white", padding: "10px", marginTop: "10px" }}>
            <Link href={"/manage"}>
              <p>コンソール画面へ</p>
            </Link>
          </Button>
        </Box>
        {/* メイン画面 */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Box
            component="div"
            sx={{
              textAlign: "center",
              backgroundColor: "",
              margin: "50px 0 100px",
            }}
          >
            <Box
              component="div"
              sx={{
                display: { xs: "block", md: "flex" },
                marginBottom: "30px",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "30px", md: "37px" },
                  fontWeight: "bold",
                }}
              >
                寄せ書き作成
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "30px", md: "37px" },
                  fontWeight: "bold",
                }}
              >
                &nbsp;&&nbsp;
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "30px", md: "37px" },
                  fontWeight: "bold",
                }}
              >
                管理アプリ
              </Typography>
            </Box>
            {/* 画像 */}
            <MeruboIcon />
            <Typography
              component="p"
              sx={{ fontSize: "20px", margin: "20px 0px 60px" }}
            >
              全ての出会いを忘れないように
            </Typography>
            <Store />
          </Box>
        </Box>
      </Box>
      {/* 中央デザイン */}
      <Box component="section" className="middle" sx={{ padding: "10px" }}>
        <Box
          component="div"
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            letterSpacing: "2px",
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: "25px", margin: "15px 0px" }}
          >
            アプリで寄せ書きを作成しませんか？
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", marginBottom: "30px 0px" }}
          >
            Meruboは、離れた知人、友人からメッセージを集め、寄せ書きを作成、送ることができるアプリです。
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", margin: "30px 0px" }}
          >
            寄せ書きを受け取った方は、アプリ上で寄せ書きを保管し、いつでも見返すことができます。
          </Typography>
        </Box>
      </Box>
      {/* 画面説明 */}
      <Box
        component="section"
        sx={{
          display: { sm: "block", md: "flex" },
          marginTop: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <Box
          component="div"
          sx={{
            flex: 1,
            textAlign: "center",
            paddingBottom: { xs: "20px", md: "0px" },
          }}
        >
          <Typography
            component="h3"
            sx={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}
          >
            寄せ書きを管理する
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "20px", margin: "10px 0px" }}
          >
            これまでに受け取った寄せ書きを、
            <br />
            時系列で管理できます。
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/../public/image/manage_message_bord.png"
              alt="寄せ書き管理"
              width="250"
              height="500"
              priority={true}
              style={{ width: 250, height: 500 }}
            />
          </Box>
        </Box>
        <Box component="div" sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            component="h3"
            sx={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}
          >
            寄せ書きを作成する
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "20px", margin: "10px 0px" }}
          >
            おしゃれなアニメーションをつけ
            <br />
            寄せ書きを作成できます。
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/../public/image/create_message_bord.png"
              alt="寄せ書き作成"
              width="250"
              height="500"
              priority={true}
              style={{ width: 250, height: 500 }}
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
