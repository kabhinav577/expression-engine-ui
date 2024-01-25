import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpressionForm from './components/ExpressionForm';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <div className="my-3 text-center text-primary">
        <h2>Expression Engine UI</h2>
      </div>
      <ExpressionForm />
      <Footer />
    </>
  );
}

export default App;
