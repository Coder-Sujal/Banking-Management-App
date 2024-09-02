import HeaderBox from "@/components/HeaderBox";
import RightSiderbar from "@/components/RightSiderbar";
import TotalBalanceBox from "@/components/TotaBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedin = await getLoggedInUser(); 
  console.log(loggedin);
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin.name}
            subtext="Access and manage your account and transaction efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1235.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSiderbar
        user={loggedin}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
