import * as dotenv from 'dotenv';
import { getDefaultDatabaseOption } from 'src/configs/database.config';
import { dotEnvOptions } from 'src/configs/dotenv-options';

dotenv.config(dotEnvOptions);
module.exports = getDefaultDatabaseOption();