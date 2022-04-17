import { UserContext } from '@/store/user-context'

import { RouteProps, Route, Redirect } from 'react-router-dom'
import React, { useContext } from 'react'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
	const { user } = useContext(UserContext)
	return !!user?.accessToken
		? <Route {...props} />
		: <Route {...props} component={() => <Redirect to="/signin" />} />
}

export default PrivateRoute
