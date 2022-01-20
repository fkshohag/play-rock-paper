import { config } from 'dotenv'

export function loadConfig() {
    const envPath = `env/${process.env.NODE_ENV}.env`
    switch (process.env.NODE_ENV) {
        case 'production':
            config({ path: envPath })
            break
        case 'development':
            config({ path: envPath })
            break
        default:

            throw ('Unknown enviroment ' + process.env.NODE_ENV + ' encountered')
    }
    console.log(`Loading enviroment ${process.env.NODE_ENV} from path ${envPath}`)
}