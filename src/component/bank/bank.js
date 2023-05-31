import "./bank.css";

export default function Bank() {
  return (
    <div className="bank">
      <h3>User Id</h3>
      <input placeholder="User Id" />
      <h3>Password</h3>
      <input type="password" placeholder="password" />
    </div>
  );
}
