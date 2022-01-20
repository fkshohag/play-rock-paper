/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */

import AwesomePaginationOpton from './AwesomePagination.interface';


interface AwesomeIQInterface<T, DTO> {
    get(id: number): Promise<T>;
    update(entity: DTO): Promise<T>;
    create(entity: DTO): Promise<number>;
    delete(id: number);
    getAll(options: AwesomePaginationOpton): any
}

export default AwesomeIQInterface;