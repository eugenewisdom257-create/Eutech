"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const { data, error } = await supabase
      .from("students")
      .select("*");

    if (!error) {
      setStudents(data);
    }
  }

  async function addStudent() {
    if (!name || !studentClass) return;

    await supabase.from("students").insert([
      {
        full_name: name,
        class: studentClass,
      },
    ]);

    setName("");
    setStudentClass("");

    fetchStudents();
  }

  async function deleteStudent(id) {
    await supabase.from("students").delete().eq("id", id);

    fetchStudents();
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

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

        <p style={{ marginTop: 30 }}>Dashboard</p>
        <p>Students</p>
        <p>Teachers</p>
        <p>Finance</p>

        <button
          onClick={logout}
          style={{
            marginTop: 40,
            padding: 10,
            width: "100%",
          }}
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: 30 }}>
        <h1>Students Management</h1>

        {/* ADD STUDENT */}
        <div style={{ marginTop: 20, marginBottom: 30 }}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: 10,
              marginRight: 10,
            }}
          />

          <input
            placeholder="Class"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            style={{
              padding: 10,
              marginRight: 10,
            }}
          />

          <button
            onClick={addStudent}
            style={{
              padding: 10,
            }}
          >
            Add Student
          </button>
        </div>

        {/* STUDENTS LIST */}
        <div>
          {students.length === 0 ? (
            <p>No students found</p>
          ) : (
            students.map((s) => (
              <div
                key={s.id}
                style={{
                  background: "#f3f4f6",
                  padding: 15,
                  marginBottom: 10,
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{s.full_name}</strong>
                  <p>{s.class}</p>
                </div>

                <button
                  onClick={() => deleteStudent(s.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}