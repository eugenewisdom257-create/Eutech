export default function LoginPage() {
  return (
    <div style={{
      maxWidth: 400,
      margin: "80px auto",
      padding: 30,
      border: "1px solid #ddd",
      borderRadius: 12
    }}>
      <h1>EuTech Login</h1>

      <input
        type="email"
        placeholder="Email"
        style={{
          width:"100%",
          padding:12,
          marginTop:15
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width:"100%",
          padding:12,
          marginTop:15
        }}
      />

      <button style={{
        marginTop:20,
        padding:12,
        width:"100%"
      }}>
        Login
      </button>
    </div>
  );
}