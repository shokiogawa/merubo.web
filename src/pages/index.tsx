import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="merubo">
      <main>
        <section>
          <h2>Merubo</h2>
          <div>
            <Link href={"/manage"}>
              <p>コンソール画面へ</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
