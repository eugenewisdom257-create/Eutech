import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding:40 }}>
      <h1>EuTech School System</h1>
      <p>The operating system for modern schools.</p>

      <Link href="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>

    </div>
  );
}