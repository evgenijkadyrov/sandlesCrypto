import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';

import { ROUTES } from './constants/routers.ts';

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
