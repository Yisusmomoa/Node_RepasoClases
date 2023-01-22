import {Router} from 'express'
import userRoutes from './useroutes.js'

const routes=Router()

routes.use('/users', userRoutes)


export default routes