import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import FooterComponent from '../components/global/FooterComponent'
import NavbarComponent from '../components/global/navbar'
import RefHeaderComponent from '../components/global/RefHeaderComponent'
import URL from '../constants/urls'
import Main from '../pages/main'



function RoutesComponent() {
	// return (
	// 	<BrowserRouter forceRefresh className="mt-3">
	// 		<RefHeaderComponent />
	// 		<NavbarComponent />
	// 		<Routes>
	// 			<Route path={URL.HOME} element={<Main />} />
	// 		</Routes>
	// 		<FooterComponent />
	// 	</BrowserRouter>
	// )

	return (
		<IonPage>
			<BrowserRouter>
				<RefHeaderComponent />
				<NavbarComponent />
				<Routes>
					<Route path={URL.HOME} element={<Main />} />
				</Routes>
				<FooterComponent />
			</BrowserRouter>
		</IonPage>
	)
}
export default RoutesComponent
