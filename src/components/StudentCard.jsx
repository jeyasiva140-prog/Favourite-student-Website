export default function StudentCard({ student, favourite, onAdd, onRemove }) {
  return (
    <article className="student-card">
      <div className={`student-avatar ${student.color}`}>{student.initials}</div>
      <div className="student-info">
        <div className="student-name-row">
          <h3>{student.name}</h3>
          <span className="year-pill">{student.year}</span>
        </div>
        <p className="student-course">{student.course}</p>
        <p className="roll-number"><span className="tiny-dot" /> Roll no. {student.rollNumber}</p>
      </div>
      {favourite ? (
        <button className="action-button remove-button" onClick={() => onRemove(student.id)} aria-label={`Remove ${student.name} from favourites`}><span>−</span> Remove</button>
      ) : (
        <button className="action-button add-button" onClick={() => onAdd(student)} aria-label={`Add ${student.name} to favourites`}><span>＋</span> Add to favourite</button>
      )}
    </article>
  );
}