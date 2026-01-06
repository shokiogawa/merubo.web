import type { NextPage } from "next";
import Image from "next/image";
import Store from "../components/Store";
import MeruboIcon from "../components/MeruboIcon";
import CircleDesign from "../feature/cooporate/components/CircleDesign";
import HeadSeo from "../components/HeadSeo";
import {
  Box,
  Button,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CreateIcon from "@mui/icons-material/Create";
import GroupsIcon from "@mui/icons-material/Groups";
import SendIcon from "@mui/icons-material/Send";
import LinkIcon from "@mui/icons-material/Link";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

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
            height: { md: "80vh" }, // 必要に応じて高さを調整
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
              margin: "20px",
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
        {/* サービスの流れ */}
        <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 6,
                color: "#333",
              }}
            >
              サービスの流れ
            </Typography>

            {/* 寄せ書き作成者 */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  color: "orange",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                <CreateIcon sx={{ fontSize: { xs: 26, md: 30 } }} />{" "}
                寄せ書き作成者
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
                  gap: 3,
                }}
              >
                {[
                  {
                    step: "1",
                    icon: PhonelinkIcon,
                    text: "アプリをインストール",
                  },
                  { step: "2", icon: CreateIcon, text: "寄せ書きを作成" },
                  { step: "3", icon: GroupsIcon, text: "メッセージを集める" },
                  { step: "4", icon: SendIcon, text: "寄せ書きを送る(URL)" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      textAlign: "center",
                      py: 3,
                      borderRadius: "16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 6px 16px rgba(255,165,0,0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "orange",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.step}
                      </Box>
                      <item.icon
                        sx={{ fontSize: 40, color: "orange", mb: 2 }}
                      />
                      <Typography sx={{ fontWeight: "500", fontSize: "15px" }}>
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* 寄せ書き受け取る側 */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  color: "orange",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                <GroupsIcon sx={{ fontSize: { xs: 26, md: 30 } }} />{" "}
                寄せ書き受け取る側
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 3,
                }}
              >
                {[
                  { step: "1", icon: LinkIcon, text: "寄せ書きURLを受け取る" },
                  {
                    step: "2",
                    icon: VerifiedUserIcon,
                    text: "コードを入力し寄せ書きを確認(WEB)",
                  },
                  {
                    step: "3",
                    icon: PhonelinkIcon,
                    text: "アプリをインストールし寄せ書きを管理 (任意)",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      textAlign: "center",
                      py: 3,
                      borderRadius: "16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 6px 16px rgba(255,165,0,0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "orange",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.step}
                      </Box>
                      <item.icon
                        sx={{ fontSize: 40, color: "orange", mb: 2 }}
                      />
                      <Typography sx={{ fontWeight: "500", fontSize: "15px" }}>
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* できること */}
        <Box sx={{ backgroundColor: "#fff8f0", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 6,
                color: "#333",
              }}
            >
              できること
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: 4,
              }}
            >
              {[
                {
                  title: "オンラインで寄せ書きを作成",
                  description:
                    "寄せ書きをアプリで作成し、オンラインでメッセージを集めることができる",
                },
                {
                  title: "画像の添付が可能",
                  description: "メッセージに画像を添付できる",
                },
                {
                  title: "おしゃれなテンプレート",
                  description:
                    "複数のテンプレートからおしゃれな寄せ書きを作成できる",
                },
                {
                  title: "寄せ書きの管理",
                  description:
                    "受け取ったユーザーはアプリで寄せ書きを管理できる",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 16px rgba(255,165,0,0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "orange",
                          fontSize: 40,
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#666",
                            lineHeight: 1.8,
                            fontSize: "16px",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* FAQ */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 6,
              color: "#333",
            }}
          >
            よくある質問
          </Typography>
          <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
            {[
              {
                question: "メッセージに画像は添付できますか？",
                answer: "はい、できます。1人につき1枚まで画像を添付可能です。",
              },
              {
                question: "寄せ書きはどのように渡せますか？",
                answer:
                  "アプリからURLを発行し、LINE、メールなどで送りたい相手に共有することで寄せ書きを渡すことができます。受け取った方は、受け取りコードを入力することでWeb上で寄せ書きを確認できます。",
              },
              {
                question: "動画は添付できますか？",
                answer:
                  "現在、動画の添付には対応しておりませんが、今後対応する可能性があります。",
              },
              {
                question: "メッセージはいくつまで登録できますか？",
                answer:
                  "現在、メッセージ数に制限は設けていませんが、快適にご利用いただくため100メッセージ程度までを推奨しています。",
              },
            ].map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 3,
                  borderRadius: "12px !important",
                  "&:before": { display: "none" },
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "orange", fontSize: 32 }} />
                  }
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      my: 2.5,
                    },
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", color: "#333", fontSize: "18px" }}
                  >
                    Q. {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 4, px: 3 }}>
                  <Typography
                    sx={{ color: "#666", lineHeight: 2, fontSize: "16px" }}
                  >
                    A. {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>

        {/* アプリダウンロードCTA */}
        {/* <Box
          sx={{
            backgroundColor: "orange",
            py: 6,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              さっそく寄せ書きを作成しよう
            </Typography>
            <Store />
          </Container>
        </Box> */}
      </main>
    </>
  );
};

export default Home;
