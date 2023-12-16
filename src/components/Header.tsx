import Link from "next/link";
export const Header = () => {
  return (
    <header className="l-header">
      <div className="header-area">
        <h1 className="header-area__title">
          <Link href={"/"}>Merubo</Link>
        </h1>
      </div>
    </header>
  );
};
