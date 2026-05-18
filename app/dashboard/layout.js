export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: "220px",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>EduTech</h2>

        <div style={{ marginTop: 30 }}>
          <p>
            <a href="/dashboard" style={{ color: "white" }}>
              Dashboard
            </a>
          </p>

          <p>
            <a href="/students" style={{ color: "white" }}>
              Students
            </a>
          </p>

          <p>
            <a href="/teachers" style={{ color: "white" }}>
              Teachers
            </a>
          </p>

          <p>
            <a href="/finance" style={{ color: "white" }}>
              Finance
            </a>
          </p>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ flex: 1, padding: 30 }}>
        {children}
      </div>
    </div>
  );
}