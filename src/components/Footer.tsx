import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="l-footer">
      {/* <div className="menu">
        <ul>
          <li>
            <Link href={"/merubo/terms"}>利用規約</Link>
          </li>
          <li>
            <Link href={"/merubo/privacy-policy"}>プライバシーポリシー</Link>
          </li>
        </ul>
      </div> */}
      <div className="title">
        <p className="text">Merubo ~オンライン寄せ書きアプリ~</p>
      </div>
    </footer>
  );
};
