import _ from "lodash"

var names = [
    'alonzo church', undefined,  'Haskell curry', 'stephen_kleene', 
    'John Von Neumann', null, 'stephen_kleene', undefined ];

const isNotValid = x => _.isNull(x) || _.isUndefined(x);
const isValid = x => ! isNotValid(x);
const repairNames = x => x.replace(/_/, ' ');
console.log(
    _(names).filter(isValid)
            .map(repairNames)
            .map(_.startCase)
            .uniq()
            .sort()
            .value()
)
