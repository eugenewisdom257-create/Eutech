"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  // STATE
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");

  // FETCH STUDENTS
  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const { data, error } = await supabase.from("students").select("*");

    if (error) {
      console.log(error);
    } else {
      setStudents(data);
    }
  }

  // ADD STUDENT
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

  // LOGOUT
  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  // UI
  return (
    <div style={{ padding: 40 }}>
      <h1>Students</h1>

      {/* FORM */}
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

      {/* LIST */}
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((s) => (
          <div key={s.id}>
            {s.full_name} - {s.class}
          </div>
        ))
      )}

      <button onClick={logout} style={{ marginTop: 20 }}>
        Logout
      </button>
    </div>
  );
}