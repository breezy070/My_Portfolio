import "./portofolioList.scss";

export default function PortofolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
