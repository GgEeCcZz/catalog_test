import '../styles/App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CategoryPage } from '@/pages/CategoryPage.tsx';
import { Provider } from 'react-redux';
import { Header } from '@/widgets/Header.tsx';
import { store } from '@/store';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/catalog?category=food" replace />} />
                    <Route path="/catalog" element={<CategoryPage />}/>
                    <Route path='*' element={<div>404</div>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
