import HeaderBackgroud from "@/components/store/HeaderBackgroud";
import LoginForm from "@/components/layout/LoginForm";
import Dashboard from "@/components/Membership/MembershipDashboard";

import Banner from "@/components/ui/Banner";
export default function Home() {
  return (
    <div className="mt-[84px]">
      {/* Header */}
      {/* <HeaderBackgroud
        backgroundImage="/images/BackgroudHeader.png"
        title="Join ITS Singapore"
        tagline="Committed to the growth of Intelligent Transport Systems in Singapore"
      /> */}
      <Banner
        backgroundImage="/images/BackgroudHeader.png"
        title="Join ITS Singapore"
        subtitle="Committed to the growth of Intelligent Transport Systems in Singapore"
      />
      {/* Form đăng nhập */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <LoginForm />
        <Dashboard />
      </main>
    </div>
  );
}
