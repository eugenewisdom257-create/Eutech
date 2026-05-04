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
    async function fetchStudents() {async function addStudent() {
  await supabase.from("students").insert([
    {
      full_name: name,
      class: studentClass,
    },
  ]);

  setName("");
  setStudentClass("");

  // refresh list
  const { data } = await supabase.from("students").select("*");
  setStudents(data);
}
      const { data, error } = await supabase
        .from("students")
        .select("*");

      if (error) {
        console.log("Error:", error);
      } else {
        setStudents(data);
      }
    }

    fetchStudents();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
  <div style={{ padding: 40 }}>
    <h1>Students</h1>

    {/* ADD STUDENT FORM */}
    <div style={{ marginBottom: 20 }}>
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={addStudent}>Add Student</button>
    </div>

    {/* STUDENT LIST */}
    {students.map((s) => (
      <div key={s.id}>
        {s.full_name} - {s.class}
      </div>
    ))}

    <button onClick={logout} style={{ marginTop: 20 }}>
      Logout
    </button>
  </div>
);
    <div style={{ padding: 40 }}>
      <h1>Students</h1>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((s) => (
          <div key={s.id}>
            <p>{s.full_name} - {s.class}</p>
          </div>
        ))
      )}

      <button onClick={logout} style={{ marginTop: 20 }}>
        Logout
      </button>
    </div>
  );
}