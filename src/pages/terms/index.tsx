import { NextPage } from "next";
import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>利用規約 | merubo</title>
      </Head>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
        >
          merubo 利用規約
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography sx={{ mb: 2, lineHeight: 1.8, fontSize: "16px" }}>
            この利用規約（以下、「本規約」といいます。）は、小川翔生（以下、「提供者」といいます。）がこのウェブサイト上で提供するサービス「merubo」（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第1条（適用）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            1.
            本規約は、ユーザーと提供者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            2.
            提供者は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            3.
            本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第2条（禁止事項）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 3, lineHeight: 1.8, listStyle: "none" }}
          >
            <li>・法令または公序良俗に違反する行為</li>
            <li>・犯罪行為に関連する行為</li>
            <li>
              ・本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
            </li>
            <li>
              ・提供者、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>・本サービスによって得られた情報を商業的に利用する行為</li>
            <li>・提供者のサービスの運営を妨害するおそれのある行為</li>
            <li>・不正アクセスをし、またはこれを試みる行為</li>
            <li>・他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>・不正な目的を持って本サービスを利用する行為</li>
            <li>
              ・本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
            </li>
            <li>・他のユーザーに成りすます行為</li>
            <li>
              ・提供者が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
            </li>
            <li>・面識のない異性との出会いを目的とした行為</li>
            <li>
              ・提供者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
            </li>
            <li>・その他、提供者が不適切と判断する行為</li>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第3条（本サービスの提供の停止等）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            1.
            提供者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 3, mb: 2, lineHeight: 1.8, listStyle: "none" }}
          >
            <li>
              ・本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              ・地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
            </li>
            <li>・コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>・その他、提供者が本サービスの提供が困難と判断した場合</li>
          </Box>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            2.
            提供者は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第4条（利用制限および登録抹消）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            1.
            提供者は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 3, mb: 2, lineHeight: 1.8, listStyle: "none" }}
          >
            <li>・本規約のいずれかの条項に違反した場合</li>
            <li>・登録事項に虚偽の事実があることが判明した場合</li>
            <li>・料金等の支払債務の不履行があった場合</li>
            <li>・提供者からの連絡に対し、一定期間返答がない場合</li>
            <li>・本サービスについて、最終の利用から一定期間利用がない場合</li>
            <li>
              ・その他、提供者が本サービスの利用を適当でないと判断した場合
            </li>
          </Box>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            2.
            提供者は、本条に基づき提供者が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第5条（退会）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            ユーザーは、提供者の定める退会手続により、本サービスから退会できるものとします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第6条（保証の否認および免責事項）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            1.
            提供者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            2.
            提供者は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する提供者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            3.
            前項ただし書に定める場合であっても、提供者は、提供者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（提供者またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、提供者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            4.
            提供者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第7条（サービス内容の変更等）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            提供者は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第8条（利用規約の変更）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            提供者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第9条（個人情報の取扱い）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            提供者は、本サービスの利用によって取得する個人情報については、提供者「プライバシーポリシー」に従い適切に取り扱うものとします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第10条（通知または連絡）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            ユーザーと提供者との間の通知または連絡は、提供者の定める方法によって行うものとします。提供者は、ユーザーから、提供者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第11条（権利義務の譲渡の禁止）
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            ユーザーは、提供者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              pb: 1,
              borderBottom: "2px solid #ddd",
            }}
          >
            第12条（準拠法・裁判管轄）
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8, fontSize: "16px" }}>
            1. 本規約の解釈にあたっては、日本法を準拠法とします。
          </Typography>
          <Typography sx={{ lineHeight: 1.8, fontSize: "16px" }}>
            2.
            本サービスに関して紛争が生じた場合には、提供者の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right", mt: 6 }}>
          <Typography sx={{ color: "#666" }}>以上</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Terms;
