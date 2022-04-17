import { PrivateRoute } from '@/routes/proxies'
import { AppContext } from '@/store/app-context'
import Splash from '@/pages/splash'

const SignIn = lazy(async () => import('@/pages/sign-in'))
const SignUp = lazy(async () => import('@/pages/sign-up'))
const Dashboard = lazy(async () => import('@/pages/dashboard'))
const Home = lazy(async () => import('@/pages/home'))
const Erro = lazy(async () => import('@/pages/error'))

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

const Router: React.FC = () => {
  return (
    <AppContext.Provider value={{}}>
			<Suspense fallback={<Splash />}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/signin" exact component={SignIn} />
						<Route path="/signup" exact component={SignUp} />
						<PrivateRoute path="/dashboard" exact component={Dashboard} />
						<Route path="*" exact component={Erro} />
					</Switch>
				</BrowserRouter>
			</Suspense>
    </AppContext.Provider>
  )
}

export default Router
