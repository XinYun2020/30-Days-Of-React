import logo from "./logo.svg";
import "./App.css";
import ReactNavigationBar from "./ReactNavigationBar";
import ReactTabSearchForm from "./ReactTabSearchForm";
import ReactFinanceInvestigationToolView from "./ReactFinanceInvestigationToolView";
import ReactFinanceInvoiceDetailView from "./ReactFinanceInvoiceDetailView";

function App() {
  return (
    <div className="App ">
      <ReactNavigationBar />
      <br />
      <ReactFinanceInvestigationToolView />
      <br />
      <ReactTabSearchForm />
      <br />
      <ReactFinanceInvoiceDetailView />
    </div>
  );
}

export default App;
