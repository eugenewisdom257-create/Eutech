export default function SignupPage() {
  return (
    <div style={{
      maxWidth:400,
      margin:"80px auto",
      padding:30
    }}>
      <h1>Create Account</h1>

      <input
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
        width:"100%",
        marginTop:20,
        padding:12
      }}>
        Sign Up
      </button>

    </div>
  );
}