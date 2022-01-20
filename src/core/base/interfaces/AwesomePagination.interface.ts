/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */
import {
    IPaginationOptions,
  } from 'nestjs-typeorm-paginate';

interface AwesomePaginationOpton extends IPaginationOptions {
    filters: string,
    selectFields: string,
    includeFields: string,
    excludeFields: string,
    limit: number
}
export default AwesomePaginationOpton;