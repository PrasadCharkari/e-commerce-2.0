import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToastContainer = () => {
    return <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />;
};

export default CustomToastContainer;
