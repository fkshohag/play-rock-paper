import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
class QueryMixin {
    public static filterQuery(query: SelectQueryBuilder<ObjectLiteral>, filters: string): any {
        const queryFieldList: any = filters.split(',')
        let finderQuery = {}
        queryFieldList.forEach((fieldVSValue: string) => {
            const fieldValue: any = fieldVSValue.split(':')
            finderQuery[fieldValue[0]] = fieldValue[1];
        })
        query = query.where(finderQuery)
        return query
    }

    public static selectFields(query: SelectQueryBuilder<ObjectLiteral>, selectFields: string): any {
        return query.select(selectFields)
    }
}
export default QueryMixin;