import { createConnection, ConnectionOptions } from "typeorm"
import { getDefaultDatabaseOption } from 'src/configs/database.config'

export async function connectToDatabase() {
    // Make env development
    process.env.NODE_ENV = 'development'

    await createConnection(
        {
            ...getDefaultDatabaseOption(),
            type: "postgres",
        } as ConnectionOptions
    )
}

