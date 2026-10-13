import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

export default function FavouritesPage() {
  const { favourites, removeFavourite } = useStudents();
  return (
    <section className="favourites-page">
      <div className="page-intro">
        <div className="eyebrow"><span className="eyebrow-line" /> YOUR PERSONAL COLLECTION</div>
        <h1>Your <span>favourite people.</span></h1>
        <p>All the students you’ve saved, together in one place.</p>
      </div>
      <div className="section-heading favourite-heading">
        <div><p className="section-kicker">SAVED STUDENTS</p><h2>My favourites <span className="muted-count">({favourites.length})</span></h2></div>
        <Link className="back-link" to="/">＋ Explore students</Link>
      </div>
      {favourites.length ? (
        <div className="student-grid">{favourites.map((student) => <StudentCard key={student.id} student={student} favourite onRemove={removeFavourite} />)}</div>
      ) : (
        <div className="empty-state favourites-empty"><div className="empty-heart">♡</div><h3>No favourite students added yet</h3><p>Your favourite students will appear here once you add them from the student list.</p><Link className="primary-link" to="/">Explore students <span>→</span></Link></div>
      )}
      <div className="bottom-tip"><span className="tip-icon">♡</span><p><strong>Your list, your way</strong><br />You can remove anyone from your favourites at any time. Changes update instantly across pages.</p></div>
    </section>
  );
}