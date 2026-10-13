import { useMemo, useState } from "react";
import students from "../data/students";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

export default function StudentListPage() {
  const { favourites, addFavourite, removeFavourite, isFavourite } = useStudents();
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All courses");
  const courses = ["All courses", ...new Set(students.map((student) => student.course))];

  const filteredStudents = useMemo(() => students.filter((student) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = `${student.name} ${student.rollNumber} ${student.course}`.toLowerCase().includes(query);
    return matchesSearch && (course === "All courses" || student.course === course);
  }), [search, course]);

  return (
    <section>
      <div className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR CAMPUS, CONNECTED</div>
          <h1>Find your people.<br /><span>Keep your favourites.</span></h1>
          <p className="hero-description">Explore your student community and build a list of the people you want to keep close.</p>
          <div className="hero-stats">
            <div><strong>{students.length.toString().padStart(2, "0")}</strong><span>Students</span></div>
            <div className="stat-divider" />
            <div><strong>{favourites.length.toString().padStart(2, "0")}</strong><span>Favourites</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-card art-card-back"><span className="art-spark">✦</span></div>
          <div className="art-card art-card-front"><div className="art-avatars"><span>AK</span><span>PS</span><span>MN</span></div><strong>Good people.</strong><strong>Great connections.</strong><small>Your campus circle</small></div>
          <div className="floating-star star-one">✦</div><div className="floating-star star-two">✧</div>
        </div>
      </div>

      <div className="section-heading">
        <div><p className="section-kicker">GET TO KNOW YOUR CAMPUS</p><h2>Student directory <span className="muted-count">({filteredStudents.length})</span></h2></div>
        <div className="directory-note"><span className="live-dot" /> All students</div>
      </div>
      <div className="filters">
        <label className="search-box"><span className="search-icon">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, roll number..." aria-label="Search students" /><kbd>/</kbd></label>
        <select value={course} onChange={(event) => setCourse(event.target.value)} aria-label="Filter by course">{courses.map((item) => <option key={item}>{item}</option>)}</select>
      </div>
      {filteredStudents.length ? (
        <div className="student-grid">{filteredStudents.map((student) => <StudentCard key={student.id} student={student} favourite={isFavourite(student.id)} onAdd={addFavourite} onRemove={removeFavourite} />)}</div>
      ) : (
        <div className="empty-state"><span className="empty-icon">⌕</span><h3>No students found</h3><p>Try another name or select a different course.</p><button className="text-button" onClick={() => { setSearch(""); setCourse("All courses"); }}>Clear filters</button></div>
      )}
      <div className="bottom-tip"><span className="tip-icon">✦</span><p><strong>A little tip</strong><br />Tap “Add to favourite” to save students to your personal list. Your favourites stay saved on this device.</p></div>
    </section>
  );
}