import AdminLayout from "../layouts/AdminLayout";

function AdminSection({ title, description }) {
  return (
    <AdminLayout>
      <div className="page-heading">
        <div>
          <p className="eyebrow">ADMINISTRATION</p>
          <h1>{title}</h1>
          <p className="page-subtitle">{description}</p>
        </div>
      </div>
      <section className="content-panel">
        <h2>{title} management</h2>
        <p className="page-subtitle">
          This page is ready for your CRUD functionality. Connect it to your backend API when that module is developed.
        </p>
      </section>
    </AdminLayout>
  );
}

export default AdminSection;
