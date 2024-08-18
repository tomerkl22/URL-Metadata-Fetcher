import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Form from './Form';
import Footer from './Footer'
import Header from './Header';
import ErrorComponent from './ErrorComponent';


export default function FormApp() {
    return (
        <div className='FormApp'>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={ <Form /> }></Route>
                    <Route path='*' element={ <ErrorComponent /> }></Route>
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
}