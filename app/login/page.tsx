import HeaderBackgroud from "@/components/store/HeaderBackgroud";
import LoginForm from "@/components/layout/LoginForm";
export default function Home() {
  return (
    <div>
      {/* Header */}
      <HeaderBackgroud
        backgroundImage="/images/BackgroudHeader.png"
        title="Join ITS Singapore"
        tagline="Committed to the growth of Intelligent Transport Systems in Singapore"
      />
      {/* Form đăng nhập */}
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
}