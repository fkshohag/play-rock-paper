/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */
import * as crypto from 'crypto';

export function passwordHash(password: string) {
    return crypto.createHmac('sha256', 'pos')
        .update(password, 'utf8')
        .digest('hex');
}