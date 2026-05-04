"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
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