import Container from 'react-bootstrap/Container';
import Navbar from "./components/MainPage/Home/Navbar";
import './Dashboard.css'; 

const Dashboard = () => {
  return (
     <Container fluid className='dashboard-container'>
       <Navbar/>
     </Container>
   
  );
};

export default Dashboard;
