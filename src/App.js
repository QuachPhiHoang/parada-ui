import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component;
                        return <Route key={index} path={route.path} element={<Component />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
